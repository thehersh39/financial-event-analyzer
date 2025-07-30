// lib/api/yahooFinance.js
import axios from 'axios';

// Use our Next.js API route instead of calling Yahoo directly
const API_BASE_URL = '/api/stock-data';

// Get real stock price data
export const getStockData = async (symbol, period = '1y') => {
  try {
    console.log('Fetching real data for:', symbol);
    
    const response = await axios.get(API_BASE_URL, {
      params: { symbol },
      timeout: 15000
    });

    console.log('API Response:', response.data);
    return response.data;
    
  } catch (error) {
    console.error('Stock data API error:', error.response?.data || error.message);
    return {
      success: false,
      error: 'Failed to fetch stock data',
      data: []
    };
  }
};

// Extract ticker from text
export const extractTicker = (text) => {
  const tickerMatch = text.match(/\b[A-Z]{1,5}\b/);
  return tickerMatch ? tickerMatch[0] : 'AAPL'; // fallback to AAPL
};

// Search functionality (simplified for now)
export const searchStock = async (query) => {
  // For now, just extract ticker from query
  const ticker = extractTicker(query);
  return {
    success: true,
    data: [{ symbol: ticker, name: `${ticker} Inc.`, type: 'EQUITY' }]
  };
};
