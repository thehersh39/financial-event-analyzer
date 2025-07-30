// pages/api/stock-data.js
import axios from 'axios';

export default async function handler(req, res) {
  // Set CORS headers
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

  try {
    const period1 = Math.floor(Date.now() / 1000) - (365 * 24 * 60 * 60); // 1 year ago
    const period2 = Math.floor(Date.now() / 1000); // now

    const response = await axios.get(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`, {
      params: {
        period1,
        period2,
        interval: '1d',
        includePrePost: true,
        events: 'div,splits'
      },
      timeout: 10000
    });

    const result = response.data.chart.result[0];
    
    if (!result) {
      return res.status(404).json({ error: 'Stock not found' });
    }

    const timestamps = result.timestamp;
    const prices = result.indicators.quote[0];

    // Convert to our chart format
    const chartData = timestamps.map((timestamp, index) => ({
      date: new Date(timestamp * 1000).toISOString().split('T')[0],
      price: prices.close[index] || 0,
      open: prices.open[index] || 0,
      high: prices.high[index] || 0,
      low: prices.low[index] || 0,
      volume: prices.volume[index] || 0
    })).filter(item => item.price > 0);

    res.status(200).json({
      success: true,
      data: chartData,
      symbol: result.meta.symbol,
      currentPrice: result.meta.regularMarketPrice,
      previousClose: result.meta.previousClose,
      currency: result.meta.currency
    });

  } catch (error) {
    console.error('Yahoo Finance API error:', error.message);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch stock data',
      message: error.message 
    });
  }
}
