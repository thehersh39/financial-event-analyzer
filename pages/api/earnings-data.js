// pages/api/earnings-data.js
import axios from 'axios';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { symbol } = req.query;

  if (!symbol) {
    return res.status(400).json({ error: 'Symbol is required' });
  }

  const API_KEY = process.env.ALPHA_VANTAGE_API_KEY || 'demo';

  try {
    // Get earnings data from Alpha Vantage
    const earningsResponse = await axios.get('https://www.alphavantage.co/query', {
      params: {
        function: 'EARNINGS',
        symbol: symbol,
        apikey: API_KEY
      },
      timeout: 10000
    });

    // Get company overview for additional context
    const overviewResponse = await axios.get('https://www.alphavantage.co/query', {
      params: {
        function: 'OVERVIEW',
        symbol: symbol,
        apikey: API_KEY
      },
      timeout: 10000
    });

    const earningsData = earningsResponse.data;
    const overviewData = overviewResponse.data;

    if (earningsData.Note || !earningsData.quarterlyEarnings) {
      return res.status(429).json({ 
        success: false, 
        error: 'API rate limit or invalid symbol',
        fallback: true
      });
    }

    // Get latest quarterly earnings
    const latestQuarter = earningsData.quarterlyEarnings[0];
    const previousQuarter = earningsData.quarterlyEarnings[1];

    // Calculate earnings surprise (if estimate data available)
    const actualEPS = parseFloat(latestQuarter.reportedEPS);
    const estimatedEPS = parseFloat(latestQuarter.estimatedEPS) || actualEPS;
    const surprisePercent = estimatedEPS ? ((actualEPS - estimatedEPS) / estimatedEPS * 100).toFixed(1) : 0;

    // Generate plain English explanation
    const plainEnglish = generatePlainEnglishExplanation(
      symbol,
      actualEPS,
      estimatedEPS,
      surprisePercent,
      overviewData,
      latestQuarter
    );

    res.status(200).json({
      success: true,
      data: {
        symbol: symbol,
        companyName: overviewData.Name || `${symbol} Inc.`,
        sector: overviewData.Sector || 'Unknown',
        latestQuarter: {
          fiscalDateEnding: latestQuarter.fiscalDateEnding,
          reportedDate: latestQuarter.reportedDate,
          reportedEPS: actualEPS,
          estimatedEPS: estimatedEPS,
          surprise: surprisePercent,
          surprisePercent: `${surprisePercent > 0 ? '+' : ''}${surprisePercent}%`
        },
        financialMetrics: {
          marketCap: overviewData.MarketCapitalization,
          peRatio: overviewData.PERatio,
          pegRatio: overviewData.PEGRatio,
          profitMargin: overviewData.ProfitMargin,
          operatingMargin: overviewData.OperatingMarginTTM
        },
        plainEnglish: plainEnglish,
        recentEarnings: earningsData.quarterlyEarnings.slice(0, 4).map(q => ({
          quarter: q.fiscalDateEnding,
          reportedEPS: parseFloat(q.reportedEPS),
          estimatedEPS: parseFloat(q.estimatedEPS) || parseFloat(q.reportedEPS),
          surprise: q.estimatedEPS ? 
            ((parseFloat(q.reportedEPS) - parseFloat(q.estimatedEPS)) / parseFloat(q.estimatedEPS) * 100).toFixed(1) : 0
        }))
      }
    });

  } catch (error) {
    console.error('Alpha Vantage API error:', error.message);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch earnings data',
      fallback: true,
      message: error.message 
    });
  }
}

function generatePlainEnglishExplanation(symbol, actualEPS, estimatedEPS, surprisePercent, overview, quarter) {
  const isPositiveSurprise = surprisePercent > 5;
  const isNegativeSurprise = surprisePercent < -5;
  const sector = overview.Sector || 'this company';
  const companyName = overview.Name || symbol;

  return {
    whatHappened: isPositiveSurprise 
      ? `${companyName} beat earnings expectations by ${Math.abs(surprisePercent)}%, reporting $${actualEPS} per share vs the expected $${estimatedEPS}.`
      : isNegativeSurprise 
      ? `${companyName} missed earnings expectations by ${Math.abs(surprisePercent)}%, reporting $${actualEPS} per share vs the expected $${estimatedEPS}.`
      : `${companyName} met earnings expectations, reporting $${actualEPS} per share, roughly in line with estimates of $${estimatedEPS}.`,
    
    whyItMatters: `Earnings per share (EPS) tells you how much profit the company made for each share of stock. ${
      isPositiveSurprise ? 'A beat usually means the business is performing better than expected.' :
      isNegativeSurprise ? 'A miss often signals operational challenges or market headwinds.' :
      'Meeting expectations suggests steady, predictable performance.'
    }`,
    
    sectorContext: overview.Sector ? `As a ${sector.toLowerCase()} company, ${symbol} is influenced by ${getSectorContext(overview.Sector)}` : null,
    
    keyTakeaway: isPositiveSurprise 
      ? `The earnings beat suggests strong business momentum and could lead to positive stock reaction.`
      : isNegativeSurprise 
      ? `The earnings miss may create near-term pressure on the stock price as investors reassess growth prospects.`
      : `In-line results typically generate modest market reaction, with focus shifting to forward guidance.`,
    
    investorImplication: `With a P/E ratio of ${overview.PERatio || 'N/A'} and profit margin of ${
      overview.ProfitMargin ? (parseFloat(overview.ProfitMargin) * 100).toFixed(1) + '%' : 'N/A'
    }, investors are ${getValuationContext(overview.PERatio, overview.ProfitMargin)}`
  };
}

function getSectorContext(sector) {
  const contexts = {
    'Technology': 'innovation cycles, competition, and growth expectations.',
    'Healthcare': 'regulatory approvals, demographic trends, and R&D spending.',
    'Financial Services': 'interest rates, credit quality, and economic conditions.',
    'Consumer Cyclical': 'consumer spending, economic cycles, and discretionary income.',
    'Consumer Defensive': 'stable demand but margin pressure from costs and competition.',
    'Energy': 'commodity prices, regulatory changes, and global demand patterns.',
    'Industrials': 'economic growth, infrastructure spending, and supply chain efficiency.',
    'Utilities': 'interest rates, regulatory policies, and infrastructure investments.',
    'Real Estate': 'interest rates, property values, and economic growth.',
    'Materials': 'commodity cycles, global demand, and input cost pressures.'
  };
  return contexts[sector] || 'sector-specific trends and market conditions.';
}

function getValuationContext(peRatio, profitMargin) {
  const pe = parseFloat(peRatio);
  const margin = parseFloat(profitMargin);
  
  if (!pe && !margin) return 'evaluating the company based on other financial metrics.';
  
  let context = '';
  if (pe) {
    if (pe < 15) context += 'potentially finding value in what appears to be a reasonably priced stock';
    else if (pe > 30) context += 'paying a premium for growth expectations';
    else context += 'seeing fairly valued shares based on earnings multiples';
  }
  
  if (margin) {
    const marginPercent = margin * 100;
    if (marginPercent > 15) context += margin && pe ? ' with strong profitability margins.' : 'impressed by strong profitability margins.';
    else if (marginPercent < 5) context += margin && pe ? ' despite thin profit margins.' : 'concerned about thin profit margins.';
    else context += margin && pe ? ' with decent profitability.' : 'seeing acceptable profit margins.';
  }
  
  return context || 'evaluating multiple financial factors for investment decisions.';
}
