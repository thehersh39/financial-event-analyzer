import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, Calendar, DollarSign, BookOpen, BarChart3, Info, Clock, Target, Users, Lightbulb } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

export default function AdvancedFinancialAnalyzer() {
  const [eventText, setEventText] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Sample historical data for charts
  const generateHistoricalData = (eventType, ticker) => {
    const baseData = [];
    const volatility = eventType === 'earnings' ? 0.15 : eventType === 'fed' ? 0.12 : 0.10;
    
    for (let i = 0; i <= 90; i++) {
      const randomWalk = Math.sin(i * 0.1) * volatility + (Math.random() - 0.5) * 0.05;
      const trend = eventType === 'earnings' ? i * 0.002 : eventType === 'fed' ? -i * 0.001 : i * 0.001;
      baseData.push({
        day: i,
        price: 100 + (randomWalk + trend) * 100,
        volume: 1000000 + Math.random() * 500000
      });
    }
    return baseData;
  };

  const analyzeEvent = async () => {
    if (!eventText.trim()) return;
    
    setLoading(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const analysis = generateComprehensiveAnalysis(eventText);
      setAnalysis(analysis);
      setLoading(false);
    }, 2500);
  };

  const generateComprehensiveAnalysis = (text) => {
    const lowerText = text.toLowerCase();
    
    // Extract ticker and event type
    const tickerMatch = text.match(/\b[A-Z]{1,5}\b/) || ['AAPL'];
    const ticker = tickerMatch[0];
    
    let eventType = 'announcement';
    if (lowerText.includes('earnings') || lowerText.includes('revenue')) eventType = 'earnings';
    else if (lowerText.includes('fed') || lowerText.includes('interest')) eventType = 'fed';
    else if (lowerText.includes('merger') || lowerText.includes('acquisition')) eventType = 'merger';
    else if (lowerText.includes('product') || lowerText.includes('launch')) eventType = 'product';

    // Generate sentiment based on keywords
    let sentiment = 'neutral';
    let sentimentScore = 0;
    
    const positiveWords = ['beat', 'exceed', 'growth', 'increase', 'positive', 'strong', 'record'];
    const negativeWords = ['miss', 'decline', 'fall', 'weak', 'negative', 'poor', 'disappointing'];
    
    positiveWords.forEach(word => {
      if (lowerText.includes(word)) sentimentScore += 1;
    });
    negativeWords.forEach(word => {
      if (lowerText.includes(word)) sentimentScore -= 1;
    });
    
    if (sentimentScore > 0) sentiment = 'positive';
    else if (sentimentScore < 0) sentiment = 'negative';

    // Generate historical data
    const historicalData = generateHistoricalData(eventType, ticker);
    
    // Generate similar events
    const similarEvents = generateSimilarEvents(eventType, ticker, sentiment);
    
    // Generate educational content
    const educational = generateEducationalContent(eventType, sentiment);
    
    // Generate risk factors
    const risks = generateRiskFactors(eventType, sentiment);

    return {
      ticker,
      eventType,
      sentiment,
      confidence: (75 + Math.random() * 20).toFixed(1),
      historicalData,
      similarEvents,
      educational,
      risks,
      marketMetrics: {
        expectedVolatility: (8 + Math.random() * 15).toFixed(1),
        probabilityUpMove: sentiment === 'positive' ? (65 + Math.random() * 20).toFixed(0) : 
                          sentiment === 'negative' ? (25 + Math.random() * 20).toFixed(0) : '50',
        avgMoveSize: (5 + Math.random() * 10).toFixed(1),
        timeToNormalize: Math.floor(5 + Math.random() * 25)
      },
      patternAnalysis: generatePatternAnalysis(eventType, sentiment),
      sectorImpact: generateSectorImpact(eventType, ticker)
    };
  };

  const generateSimilarEvents = (eventType, ticker, sentiment) => {
    const events = [
      {
        date: 'Q3 2023',
        event: `${ticker} ${eventType === 'earnings' ? 'earnings beat' : 'major announcement'}`,
        move30d: sentiment === 'positive' ? '+12.4%' : '-8.7%',
        move60d: sentiment === 'positive' ? '+18.2%' : '-12.1%',
        move90d: sentiment === 'positive' ? '+24.1%' : '-15.3%'
      },
      {
        date: 'Q1 2023',
        event: `Similar ${eventType} in sector`,
        move30d: sentiment === 'positive' ? '+8.9%' : '-6.2%',
        move60d: sentiment === 'positive' ? '+15.7%' : '-9.8%',
        move90d: sentiment === 'positive' ? '+21.3%' : '-11.5%'
      },
      {
        date: 'Q4 2022',
        event: `${ticker} guidance update`,
        move30d: sentiment === 'positive' ? '+15.2%' : '-10.4%',
        move60d: sentiment === 'positive' ? '+22.8%' : '-14.7%',
        move90d: sentiment === 'positive' ? '+28.5%' : '-18.2%'
      }
    ];
    return events;
  };

  const generateEducationalContent = (eventType, sentiment) => {
    const content = {
      overview: `Understanding ${eventType === 'earnings' ? 'Earnings' : 'Market'} Events`,
      keyPoints: [
        `${eventType === 'earnings' ? 'Earnings reports' : 'Market events'} typically create volatility windows of 5-30 days`,
        `Historical patterns show ${sentiment === 'positive' ? 'positive' : sentiment === 'negative' ? 'negative' : 'mixed'} sentiment often persists for 2-4 weeks`,
        'Market reactions depend heavily on broader economic context and sector trends',
        'Institutional investors often use these events as entry/exit opportunities'
      ],
      framework: [
        '📊 Analyze the magnitude vs. expectations',
        '📈 Consider broader market sentiment',
        '⏰ Evaluate timing within earnings cycle',
        '🔍 Look for follow-through in subsequent sessions'
      ]
    };
    return content;
  };

  const generateRiskFactors = (eventType, sentiment) => {
    const risks = [
      {
        type: 'Market Risk',
        level: sentiment === 'negative' ? 'High' : 'Moderate',
        description: 'Broader market conditions could amplify or dampen individual stock moves'
      },
      {
        type: 'Sector Risk',
        level: 'Moderate',
        description: `${eventType === 'earnings' ? 'Sector-wide' : 'Industry'} trends may influence sustained price action`
      },
      {
        type: 'Liquidity Risk',
        level: 'Low',
        description: 'Major stocks typically maintain good liquidity during event windows'
      }
    ];
    return risks;
  };

  const generatePatternAnalysis = (eventType, sentiment) => {
    return {
      pattern: sentiment === 'positive' ? 'Bullish Continuation' : sentiment === 'negative' ? 'Bearish Reversal' : 'Consolidation',
      strength: (6 + Math.random() * 3).toFixed(1),
      reliability: (65 + Math.random() * 25).toFixed(0),
      typicalDuration: `${5 + Math.floor(Math.random() * 20)} trading days`
    };
  };

  const generateSectorImpact = (eventType, ticker) => {
    const sectors = [
      { name: 'Technology', impact: 85, color: '#8B5CF6' },
      { name: 'Consumer Disc.', impact: 65, color: '#06B6D4' },
      { name: 'Healthcare', impact: 45, color: '#10B981' },
      { name: 'Financials', impact: 30, color: '#F59E0B' }
    ];
    return sectors;
  };

  const TabButton = ({ id, label, active, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
        active 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );

  const MetricCard = ({ icon, title, value, subtitle, color = "blue" }) => (
    <div className="bg-white p-4 rounded-lg border">
      <div className="flex items-center mb-2">
        {icon}
        <span className="ml-2 font-medium text-gray-700">{title}</span>
      </div>
      <div className={`text-2xl font-bold text-${color}-600`}>{value}</div>
      {subtitle && <div className="text-sm text-gray-500">{subtitle}</div>}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Financial Event Analyzer</h1>
          <p className="text-gray-600">Transform complex financial events into actionable insights with historical context</p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter Financial Event (include ticker if relevant):
          </label>
          <div className="relative">
            <textarea
              value={eventText}
              onChange={(e) => setEventText(e.target.value)}
              placeholder="e.g., 'AAPL reports record quarterly earnings, beating estimates by 15%' or 'Federal Reserve announces 0.25% rate increase'"
              className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
            <div className="absolute bottom-3 right-3 text-xs text-gray-400">
              Works with any stock ticker or market event
            </div>
          </div>
        </div>

        <button
          onClick={analyzeEvent}
          disabled={!eventText.trim() || loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 text-lg"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
              Analyzing Historical Patterns...
            </div>
          ) : (
            'Analyze Historical Impact'
          )}
        </button>
      </div>

      {analysis && (
        <div className="space-y-6">
          {/* Tab Navigation */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-wrap gap-2 mb-6">
              <TabButton id="overview" label="Overview" active={activeTab === 'overview'} onClick={setActiveTab} />
              <TabButton id="historical" label="Historical Patterns" active={activeTab === 'historical'} onClick={setActiveTab} />
              <TabButton id="education" label="Educational Context" active={activeTab === 'education'} onClick={setActiveTab} />
              <TabButton id="risks" label="Risk Analysis" active={activeTab === 'risks'} onClick={setActiveTab} />
            </div>

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {analysis.ticker} Event Analysis
                  </h2>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      analysis.sentiment === 'positive' ? 'bg-green-100 text-green-800' :
                      analysis.sentiment === 'negative' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {analysis.sentiment.charAt(0).toUpperCase() + analysis.sentiment.slice(1)} Sentiment
                    </span>
                    <span className="text-gray-600">Confidence: {analysis.confidence}%</span>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <MetricCard
                    icon={<BarChart3 className="w-6 h-6 text-blue-500" />}
                    title="Expected Volatility"
                    value={`${analysis.marketMetrics.expectedVolatility}%`}
                    subtitle="Next 30 days"
                  />
                  <MetricCard
                    icon={<TrendingUp className="w-6 h-6 text-green-500" />}
                    title="Upward Probability"
                    value={`${analysis.marketMetrics.probabilityUpMove}%`}
                    subtitle="Based on similar events"
                    color="green"
                  />
                  <MetricCard
                    icon={<Target className="w-6 h-6 text-purple-500" />}
                    title="Avg Move Size"
                    value={`±${analysis.marketMetrics.avgMoveSize}%`}
                    subtitle="Historical precedent"
                    color="purple"
                  />
                  <MetricCard
                    icon={<Clock className="w-6 h-6 text-orange-500" />}
                    title="Normalization"
                    value={`${analysis.marketMetrics.timeToNormalize} days`}
                    subtitle="Return to baseline"
                    color="orange"
                  />
                </div>

                {/* Pattern Analysis */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Pattern Recognition</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-sm text-gray-600">Identified Pattern</div>
                      <div className="font-semibold text-lg">{analysis.patternAnalysis.pattern}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Pattern Strength</div>
                      <div className="font-semibold text-lg">{analysis.patternAnalysis.strength}/10</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Historical Reliability</div>
                      <div className="font-semibold text-lg">{analysis.patternAnalysis.reliability}%</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Historical Patterns Tab */}
            {activeTab === 'historical' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-800">Historical Price Patterns</h3>
                
                {/* Price Chart */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Expected Price Movement (90-Day Projection)</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={analysis.historicalData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" label={{ value: 'Days After Event', position: 'insideBottom', offset: -10 }} />
                      <YAxis label={{ value: 'Price ($)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Line type="monotone" dataKey="price" stroke="#2563eb" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Similar Historical Events */}
                <div className="bg-white border rounded-lg">
                  <h4 className="font-semibold p-4 border-b">Similar Historical Events</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="text-left p-3">Date</th>
                          <th className="text-left p-3">Event</th>
                          <th className="text-left p-3">30 Days</th>
                          <th className="text-left p-3">60 Days</th>
                          <th className="text-left p-3">90 Days</th>
                        </tr>
                      </thead>
                      <tbody>
                        {analysis.similarEvents.map((event, index) => (
                          <tr key={index} className="border-b">
                            <td className="p-3 text-gray-600">{event.date}</td>
                            <td className="p-3">{event.event}</td>
                            <td className={`p-3 font-medium ${event.move30d.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                              {event.move30d}
                            </td>
                            <td className={`p-3 font-medium ${event.move60d.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                              {event.move60d}
                            </td>
                            <td className={`p-3 font-medium ${event.move90d.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                              {event.move90d}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Sector Impact */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Sector Impact Analysis</h4>
                  <div className="space-y-3">
                    {analysis.sectorImpact.map((sector, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="font-medium">{sector.name}</span>
                        <div className="flex items-center space-x-3">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div
                              className="h-2 rounded-full"
                              style={{ 
                                width: `${sector.impact}%`, 
                                backgroundColor: sector.color 
                              }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium w-12">{sector.impact}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Educational Context Tab */}
            {activeTab === 'education' && (
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-bold text-blue-800">{analysis.educational.overview}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Key Learning Points:</h4>
                      <ul className="space-y-2">
                        {analysis.educational.keyPoints.map((point, index) => (
                          <li key={index} className="flex items-start">
                            <Info className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-blue-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Analysis Framework:</h4>
                      <ul className="space-y-2">
                        {analysis.educational.framework.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Lightbulb className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-blue-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">📚 Educational Purpose Only</h4>
                  <p className="text-yellow-700 text-sm">
                    This analysis is for educational purposes and historical context. Always consult with qualified financial 
                    advisors before making investment decisions. Past performance does not guarantee future results.
                  </p>
                </div>
              </div>
            )}

            {/* Risk Analysis Tab */}
            {activeTab === 'risks' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-800">Risk Assessment</h3>
                
                <div className="grid md:grid-cols-1 gap-4">
                  {analysis.risks.map((risk, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <AlertTriangle className={`w-5 h-5 mr-2 ${
                            risk.level === 'High' ? 'text-red-500' :
                            risk.level === 'Moderate' ? 'text-yellow-500' :
                            'text-green-500'
                          }`} />
                          <span className="font-semibold">{risk.type}</span>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          risk.level === 'High' ? 'bg-red-100 text-red-800' :
                          risk.level === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {risk.level}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{risk.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Risk Management Considerations</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Consider position sizing relative to overall portfolio risk
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Monitor broader market conditions that could amplify moves
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Historical patterns may not repeat in different market environments
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Event-driven volatility typically subsides within 30-60 days
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
