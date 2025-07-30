// lib/api/yahooFinance.js
import axios from 'axios';

// Yahoo Finance API endpoints (using public APIs)
const YAHOO_BASE_URL = 'https://query1.finance.yahoo.com/v8/finance/chart';
const YAHOO_QUOTE_URL = 'https://query1.finance.yahoo.com/v1/finance/search';

// Get real stock price data
export const getStockData = async (symbol, period = '1y') => {
  try {
    const response = await axios.get(`${YAHOO_BASE_URL}/${symbol}`, {
      params: {
        period1: Math.floor(Date.now() / 1000) - (365 * 24 * 60 * 60), // 1 year ago
        period2: Math.floor(Date.now() / 1000), // now
        interval: '1d',
        includePrePost: true,
        events: 'div,splits'
      }
    });

    const result = response.data.chart.result[0];
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

    return {
      success: true,
      data: chartData,
      symbol: result.meta.symbol,
      currentPrice: result.meta.regularMarketPrice,
      previousClose: result.meta.previousClose
    };
  } catch (error) {
    console.error('Yahoo Finance API error:', error);
    return {
      success: false,
      error: 'Failed to fetch stock data',
      data: []
    };
  }
};

// Search for stock symbols
export const searchStock = async (query) => {
  try {
    const response = await axios.get(YAHOO_QUOTE_URL, {
      params: {
        q: query,
        quotesCount: 5,
        newsCount: 0
      }
    });

    const quotes = response.data.quotes || [];
    return {
      success: true,
      data: quotes.map(quote => ({
        symbol: quote.symbol,
        name: quote.shortname || quote.longname,
        type: quote.quoteType,
        exchange: quote.exchange
      }))
    };
  } catch (error) {
    console.error('Yahoo search error:', error);
    return {
      success: false,
      error: 'Failed to search stocks',
      data: []
    };
  }
};

// Extract ticker from text
export const extractTicker = (text) => {
  const tickerMatch = text.match(/\b[A-Z]{1,5}\b/);
  return tickerMatch ? tickerMatch[0] : 'AAPL'; // fallback to AAPL
};
