"use client";

import React, { useState } from 'react';
import { ArrowRight, TrendingUp, Clock, Users, CheckCircle, Star, Play, Search, Calendar, DollarSign, Shield, Zap, Target, BookOpen, Award, ChevronDown, Menu, X, BarChart3 } from 'lucide-react';

// Custom Logo Component with Enhanced Design
const Logo = ({ className = "h-8 w-auto" }) => (
  <div className={`flex items-center space-x-3 ${className}`}>
    <div className="relative">
      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
        <span className="text-white font-bold text-lg">MS</span>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
      </div>
    </div>
    <div>
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
        Markets Simplified
      </span>
      <div className="text-xs text-gray-500 font-medium -mt-1">Financial Intelligence</div>
    </div>
  </div>
);

// Search Component to Connect to Analyzer Platform
const EventSearchBox = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    
    // Create URL parameters to pass to your analyzer
    const params = new URLSearchParams({
      event: searchQuery.trim(),
      source: 'landing'
    });
    
    // Navigate to your analyzer (replace '/analyzer' with your actual analyzer route)
    window.location.href = `/analyzer?${params.toString()}`;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const quickSearches = ['AAPL earnings', 'Fed rate decision', 'TSLA guidance', 'NVDA results'];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 max-w-lg mx-auto mt-8">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          Try It Now
        </h3>
        <p className="text-sm text-gray-600">
          Enter any financial event to see our analysis
        </p>
      </div>
      
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="e.g., 'AAPL beats earnings', 'Fed cuts rates'"
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
        />
      </div>
      
      <button
        onClick={handleSearch}
        disabled={!searchQuery.trim() || isLoading}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span>Analyzing...</span>
          </>
        ) : (
          <>
            <span>Analyze This Event</span>
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>
      
      <div className="mt-4">
        <p className="text-xs text-gray-500 mb-2 text-center">Quick searches:</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {quickSearches.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setSearchQuery(suggestion)}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-gray-200 transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
const FinancialAnalyzerPreview = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Financial Analysis</h3>
        <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
          <TrendingUp className="w-3 h-3 mr-1" />
          94% Confidence
        </div>
      </div>
      
      {/* Stock Items */}
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <div className="font-medium text-gray-900">NVDA</div>
            <div className="text-sm text-gray-600">Q4 Chip Revenue Beat</div>
          </div>
          <div className="text-right">
            <div className="text-green-600 font-medium">+8.3%</div>
            <div className="text-xs text-gray-500">2 days ago</div>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <div className="font-medium text-gray-900">TSLA</div>
            <div className="text-sm text-gray-600">Production Guidance Cut</div>
          </div>
          <div className="text-right">
            <div className="text-red-600 font-medium">-5.2%</div>
            <div className="text-xs text-gray-500">1 day ago</div>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <div className="font-medium text-gray-900">AAPL</div>
            <div className="text-sm text-gray-600">Services Revenue Beat</div>
          </div>
          <div className="text-right">
            <div className="text-green-600 font-medium">+4.7%</div>
            <div className="text-xs text-gray-500">3 days ago</div>
          </div>
        </div>
      </div>
      
      {/* Insight Box */}
      <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
        <div className="flex items-start space-x-2">
          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <Zap className="w-3 h-3 text-white" />
          </div>
          <div>
            <div className="font-medium text-blue-900 text-sm">Market Insight</div>
            <div className="text-blue-800 text-xs mt-1">
              Earnings beats in tech sector showing strong demand through economic uncertainty. Similar patterns seen in Q3 2019.
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Floating Elements */}
    <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
      AI Powered
    </div>
  </div>
);

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/60 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Pricing</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium">
              Sign In
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Pricing</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all w-full font-medium">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section with Side-by-Side Layout
const HeroSection = () => (
  <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Transform Complex Markets Into Clear Insights
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Markets
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Simplified
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Stop guessing what earnings beats, Fed announcements, and corporate events mean. Get 
            professional-grade analysis in plain English. No Bloomberg Terminal required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
            Free 7-day trial • No credit card required • Cancel anytime
          </div>
        </div>
        
        {/* Right Content - Analyzer Preview + Search */}
        <div className="relative">
          <FinancialAnalyzerPreview />
          
          {/* Search Box Below Preview */}
          <EventSearchBox />
        </div>
      </div>
    </div>
  </section>
);

// Stats Section
const StatsSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Trusted by Financial Professionals Worldwide
        </h2>
        <p className="text-xl text-gray-600">
          Join thousands of analysts, advisors, and portfolio managers
        </p>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
          <div className="text-gray-600 font-medium">Events Analyzed</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-600 mb-2">2.1M+</div>
          <div className="text-gray-600 font-medium">Events Analyzed</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-green-600 mb-2">94%</div>
          <div className="text-gray-600 font-medium">Accuracy Rate</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
          <div className="text-gray-600 font-medium">Market Monitoring</div>
        </div>
      </div>
      
      {/* Testimonial */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-xl text-gray-900 font-medium mb-4">
            "Finally, a tool that explains what market events actually mean. The historical context is invaluable."
          </blockquote>
          <div className="font-semibold text-gray-900">Sarah Chen</div>
          <div className="text-gray-600">Portfolio Manager, Goldman Sachs</div>
        </div>
      </div>
    </div>
  </section>
);

// Features Section
const FeaturesSection = () => (
  <section id="features" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Everything You Need to Understand Markets
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From earnings calls to Fed announcements, get the historical context and professional analysis you need to make informed decisions.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
            <BarChart3 className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Historical Pattern Analysis</h3>
          <p className="text-gray-600 mb-4">
            See how similar events moved the market in the past, with context insights and price patterns to help guide your understanding.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Similar event tracking</li>
            <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Pattern recognition</li>
            <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Sector comparisons</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
            <BookOpen className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Plain English Explanations</h3>
          <p className="text-gray-600 mb-4">
            Learn how to think about different event types with context insights that explain what events mean for the market.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Junk-specific analysis</li>
            <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Key concept explanations</li>
            <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Professional insights</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
            <Clock className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Analysis</h3>
          <p className="text-gray-600 mb-4">
            Get instant analysis as events happen with AI-powered pattern recognition and automated email notifications.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Event notifications</li>
            <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />AI-powered monitoring</li>
            <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />Mobile alerts</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// Pricing Section
const PricingSection = () => (
  <section id="pricing" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-xl text-gray-600">
          Choose the plan that fits your analysis needs
        </p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Starter Plan */}
        <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 relative">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
          <div className="mb-4">
            <span className="text-4xl font-bold text-gray-900">$29</span>
            <span className="text-gray-600">/month</span>
          </div>
          <p className="text-gray-600 mb-6">Perfect for individual investors</p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span>10 analyses per month</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span>Basic historical context</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span>Email support</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span>Mobile app access</span>
            </li>
          </ul>
          <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            Start Free Trial
          </button>
        </div>
        
        {/* Professional Plan - Featured */}
        <div className="bg-white rounded-2xl border-2 border-blue-500 p-8 relative transform scale-105 shadow-xl">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Most Popular
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
          <div className="mb-4">
            <span className="text-4xl font-bold text-gray-900">$79</span>
            <span className="text-gray-600">/month</span>
          </div>
          <p className="text-gray-600 mb-6">For active traders and analysts</p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
              <span>Unlimited analyses</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
              <span>Real-time alerts</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
              <span>API access</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
              <span>Priority support</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
              <span>Advanced patterns</span>
            </li>
          </ul>
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
            Start Free Trial
          </button>
        </div>
        
        {/* Enterprise Plan */}
        <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 relative">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
          <div className="mb-4">
            <span className="text-4xl font-bold text-gray-900">$199</span>
            <span className="text-gray-600">/month</span>
          </div>
          <p className="text-gray-600 mb-6">For teams and institutions</p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
              <span>Everything in Professional</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
              <span>Team collaboration</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
              <span>Custom integrations</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
              <span>Dedicated support</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
              <span>Custom reporting</span>
            </li>
          </ul>
          <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  </section>
);

// CTA Section
const CTASection = () => (
  <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold text-white mb-6">
        Ready to Simplify Your Market Analysis?
      </h2>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        Join thousands of financial professionals who trust Markets Simplified for their daily analysis needs.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors">
          Start Free Trial
        </button>
        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all">
          Schedule Demo
        </button>
      </div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Logo className="mb-6" />
          <p className="text-gray-400 mb-6">
            Transform financial events into clear, actionable insights.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-6">Product</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-6">Company</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-6">Support</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; 2025 Markets Simplified. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Main Landing Page Component
const MarketsSimplifiedLanding = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default MarketsSimplifiedLanding;
