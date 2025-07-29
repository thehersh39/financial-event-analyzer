'use client'

import { useState } from 'react'
import { TrendingUp, TrendingDown, AlertCircle, DollarSign, Calendar, Globe } from 'lucide-react'

export default function FinancialEventAnalyzer() {
  const [eventText, setEventText] = useState('')
  const [analysis, setAnalysis] = useState(null)
  const [loading, setLoading] = useState(false)

  const analyzeEvent = () => {
    if (!eventText.trim()) return
    
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const mockAnalysis = {
        sentiment: Math.random() > 0.5 ? 'positive' : 'negative',
        confidence: (Math.random() * 40 + 60).toFixed(1),
        marketImpact: Math.random() > 0.3 ? 'moderate' : 'high',
        affectedSectors: ['Technology', 'Healthcare', 'Financial Services'].slice(0, Math.floor(Math.random() * 3) + 1),
        timeframe: ['Short-term', 'Medium-term', 'Long-term'][Math.floor(Math.random() * 3)],
        volatilityPrediction: (Math.random() * 20 + 5).toFixed(1)
      }
      setAnalysis(mockAnalysis)
      setLoading(false)
    }, 1500)
  }

  const getSentimentIcon = (sentiment) => {
    return sentiment === 'positive' ? 
      <TrendingUp className="w-6 h-6 text-green-500" /> : 
      <TrendingDown className="w-6 h-6 text-red-500" />
  }

  const getSentimentColor = (sentiment) => {
    return sentiment === 'positive' ? 'text-green-600' : 'text-red-600'
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Financial Event Analyzer</h1>
          <p className="text-gray-600">Analyze the potential market impact of news events and announcements</p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter news event or announcement:
          </label>
          <textarea
            value={eventText}
            onChange={(e) => setEventText(e.target.value)}
            placeholder="e.g., 'Federal Reserve announces 0.25% interest rate increase' or 'Apple reports record quarterly earnings'"
            className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        <button
          onClick={analyzeEvent}
          disabled={!eventText.trim() || loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
        >
          {loading ? 'Analyzing...' : 'Analyze Market Impact'}
        </button>

        {analysis && (
          <div className="mt-8 space-y-6">
            <div className="border-t pt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Analysis Results</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    {getSentimentIcon(analysis.sentiment)}
                    <span className="ml-2 font-semibold text-gray-700">Market Sentiment</span>
                  </div>
                  <p className={`text-lg font-bold ${getSentimentColor(analysis.sentiment)} capitalize`}>
                    {analysis.sentiment}
                  </p>
                  <p className="text-sm text-gray-600">Confidence: {analysis.confidence}%</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <AlertCircle className="w-6 h-6 text-orange-500" />
                    <span className="ml-2 font-semibold text-gray-700">Market Impact</span>
                  </div>
                  <p className="text-lg font-bold text-orange-600 capitalize">{analysis.marketImpact}</p>
                  <p className="text-sm text-gray-600">Volatility: +{analysis.volatilityPrediction}%</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <DollarSign className="w-6 h-6 text-purple-500" />
                    <span className="ml-2 font-semibold text-gray-700">Affected Sectors</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {analysis.affectedSectors.map((sector, index) => (
                      <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-6 h-6 text-blue-500" />
                    <span className="ml-2 font-semibold text-gray-700">Impact Timeframe</span>
                  </div>
                  <p className="text-lg font-bold text-blue-600">{analysis.timeframe}</p>
                  <p className="text-sm text-gray-600">Expected duration of impact</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
