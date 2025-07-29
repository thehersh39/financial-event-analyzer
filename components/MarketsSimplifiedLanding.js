import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Clock, Users, CheckCircle, Star, Play, Search, Calendar, DollarSign, Shield, Zap, Target, BookOpen, Award, ChevronDown, Menu, X } from 'lucide-react';

// Custom Logo Component
const MarketsSimplifiedLogo = ({ size = "default" }) => {
  const dimensions = {
    small: { width: 32, height: 32, fontSize: "text-lg" },
    default: { width: 40, height: 40, fontSize: "text-xl" },
    large: { width: 48, height: 48, fontSize: "text-2xl" }
  };
  
  const { width, height, fontSize } = dimensions[size];
  
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        {/* Main logo container with gradient */}
        <div 
          className="relative rounded-xl flex items-center justify-center overflow-hidden"
          style={{ 
            width: width, 
            height: height,
            background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #7c3aed 100%)'
          }}
        >
          {/* Geometric pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <path d="M8 32 L16 16 L24 24 L32 8" stroke="white" strokeWidth="2" fill="none" opacity="0.6"/>
              <circle cx="8" cy="32" r="2" fill="white" opacity="0.8"/>
              <circle cx="16" cy="16" r="2" fill="white" opacity="0.8"/>
              <circle cx="24" cy="24" r="2" fill="white" opacity="0.8"/>
              <circle cx="32" cy="8" r="2" fill="white" opacity="0.8"/>
            </svg>
          </div>
          
          {/* Central "MS" monogram */}
          <div className="relative z-10 font-bold text-white text-lg tracking-tight">
            MS
          </div>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
        </div>
        
        {/* Floating accent dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg animate-pulse"></div>
      </div>
      
      {/* Brand text */}
      <div className="flex flex-col">
        <span className={`font-bold text-gray-900 ${fontSize} tracking-tight leading-none`}>
          Markets
        </span>
        <span className="text-sm font-medium text-blue-600 -mt-1 tracking-wide">
          SIMPLIFIED
        </span>
      </div>
    </div>
  );
};

export default function MarketsSimplifiedLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Finally, a tool that explains what market events actually mean. The historical context is invaluable.",
      author: "Sarah Chen",
      role: "Portfolio Manager, Goldman Sachs",
      rating: 5
    },
    {
      text: "Saves me hours of research. I can instantly understand how similar events played out historically.",
      author: "Michael Rodriguez",
      role: "Investment Advisor, Merrill Lynch",
      rating: 5
    },
    {
      text: "The educational framework transformed how I analyze earnings calls. Game-changer for our team.",
      author: "Jennifer Park",
      role: "Equity Analyst, JP Morgan",
      rating: 5
    }
  ];

  const recentAnalyses = [
    {
      ticker: "NVDA",
      event: "AI Chip Revenue Surge",
      sentiment: "Positive",
      move: "+18.2%",
      timeAgo: "2 hours ago",
      color: "green"
    },
    {
      ticker: "TSLA",
      event: "Production Guidance Cut",
      sentiment: "Negative", 
      move: "-12.4%",
      timeAgo: "4 hours ago",
      color: "red"
    },
    {
      ticker: "AAPL",
      event: "Services Revenue Beat",
      sentiment: "Positive",
      move: "+8.7%",
      timeAgo: "6 hours ago",
      color: "green"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <MarketsSimplifiedLogo />
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">About</a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg font-medium">
                Sign In
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#2563eb" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
                <Zap className="w-4 h-4 mr-2 text-blue-600" />
                Transform Complex Financial Events Into Clear Insights
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Markets
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  Simplified
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                Stop guessing what earnings beats, Fed announcements, and corporate events mean. Get instant analysis with historical patterns and plain-English explanations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-xl">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all flex items-center justify-center hover:border-blue-300 hover:text-blue-700">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
              
              <div className="flex items-center text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Free 7-day trial • No credit card required • Cancel anytime</span>
              </div>
            </div>
            
            <div className="relative">
              {/* Main Dashboard Preview */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden">
                {/* Gradient header */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 opacity-10 rounded-t-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-gray-900 text-lg">Live Market Analysis</h3>
                    <div className="flex items-center text-green-600 text-sm font-medium">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      Real-time
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {recentAnalyses.map((analysis, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-100 hover:shadow-md transition-all">
                        <div className="flex items-center space-x-4">
                          <div className="font-bold text-gray-900 bg-white px-3 py-1 rounded-lg shadow-sm">{analysis.ticker}</div>
                          <div className="text-sm text-gray-700 font-medium">{analysis.event}</div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className={`text-sm font-bold px-3 py-1 rounded-lg ${
                            analysis.color === 'green' 
                              ? 'text-green-700 bg-green-100' 
                              : 'text-red-700 bg-red-100'
                          }`}>
                            {analysis.move}
                          </span>
                          <span className="text-xs text-gray-400">{analysis.timeAgo}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
                    <div className="text-sm font-semibold mb-2">🎯 Pattern Detected</div>
                    <div className="text-sm opacity-90">Earnings beats in tech sector showing 85% positive follow-through over 30 days</div>
                  </div>
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl shadow-xl p-6 transform rotate-3 hover:rotate-0 transition-transform">
                <div className="text-3xl font-bold">94%</div>
                <div className="text-sm opacity-90">Accuracy Rate</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl shadow-xl p-6 transform -rotate-3 hover:rotate-0 transition-transform">
                <div className="text-3xl font-bold">2.1M+</div>
                <div className="text-sm opacity-90">Events Analyzed</div>
              </div>
              
              {/* Floating logo for branding */}
              <div className="absolute top-4 left-4 opacity-60">
                <MarketsSimplifiedLogo size="small" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to Understand
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Market Events
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From earnings calls to Fed announcements, get the historical context and professional analysis you need to make informed decisions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Historical Pattern Analysis</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                See how similar events played out in the past with interactive charts and real price movements.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />30/60/90 day price tracking</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Volume analysis</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Sector comparisons</li>
              </ul>
            </div>
            
            <div className="group bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-3xl hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Plain English Explanations</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Learn how to think about different types of events with context-specific insights and clear frameworks.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Event-specific analysis</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Risk assessment tools</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Professional insights</li>
              </ul>
            </div>
            
            <div className="group bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-3xl hover:shadow-xl transition-all hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-Time Analysis</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get instant analysis as events happen with AI-powered pattern recognition and sentiment analysis.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Live event monitoring</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Instant notifications</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Mobile alerts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Trusted by Financial Professionals Worldwide
            </h2>
            <p className="text-xl text-gray-600">Join thousands of analysts, advisors, and portfolio managers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">10,000+</div>
              <div className="text-gray-600 font-medium">Active Users</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">2.1M+</div>
              <div className="text-gray-600 font-medium">Events Analyzed</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">94%</div>
              <div className="text-gray-600 font-medium">Accuracy Rate</div>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl p-10 max-w-4xl mx-auto border border-gray-100">
            <div className="flex items-center justify-center mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-500 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl text-center text-gray-900 mb-8 leading-relaxed font-medium">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            <div className="text-center">
              <div className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].author}</div>
              <div className="text-gray-600 font-medium">{testimonials[currentTestimonial].role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Choose the plan that fits your needs. All plans include full access to our analysis platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="border-2 border-gray-200 rounded-3xl p-8 hover:border-blue-300 transition-all hover:shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Starter</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">$29</div>
                <div className="text-gray-600 font-medium">/month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><CheckCircle className="w-6 h-6 text-green-500 mr-4" />10 analyses per month</li>
                <li className="flex items-center"><CheckCircle className="w-6 h-6 text-green-500 mr-4" />Historical patterns</li>
                <li className="flex items-center"><CheckCircle className="w-6 h-6 text-green-500 mr-4" />Educational content</li>
                <li className="flex items-center"><CheckCircle className="w-6 h-6 text-green-500 mr-4" />Email support</li>
              </ul>
              <button className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all hover:border-blue-300">
                Start Free Trial
              </button>
            </div>
            
            <div className="border-2 border-blue-600 rounded-3xl p-8 relative bg-gradient-to-br from-blue-50 to-purple-50 transform scale-105 shadow-xl">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                  MOST POPULAR
                </span>
              </div>
              <div className="text-center mb-8 pt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Professional</h3>
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">$79</div>
                <div className="text-gray-600 font-medium">/month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><CheckCircle className="w-6 h-6 text-green-500 mr-4" />Unlimited analyses</li>
                <li className="flex items-center"><CheckCircle className="w-6 h-6 text-green-500 mr-4" />Real-time alerts</li>
                <li className="flex items-center"><CheckCircle className="w-6 h-6 text-green-500 mr-4" />Advanced charts</li>
                <li className="flex items-center"><CheckCircle className="w-6 h-6 text-green-500 mr-4" />Priority support</li>
                <li className="flex items-center"><CheckCircle className="w-6 h-6 text-green-500 mr-4" />API access</li>
              </ul>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
            </div>
            
            <div className="border-2 border-gray-200 rounded-3xl p-8 hover:border-purple-300 transition-all hover:shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Enterprise</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">$199</div>
                <div className="text-gray-600 font-medium">/month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><CheckCircle className="w-6 h-6 text-green-500 mr-4" />Everything in Pro</li>
                <li className="flex items-center"><CheckCircle className="w-6 h-6 text-green-500 mr-4" />Team collaboration</li>
                <li className="flex items-center"><CheckCircle className="w-6 h-6 text-green-500 mr-4" />Custom integrations</li>
                <li className="flex items-center"><CheckCircle className="w-6 h-6 text-green-500 mr-4" />Dedicated support</li>
                <li className="flex items-center"><CheckCircle className="w-6 h-6 text-green-500 mr-4" />On-premise option</li>
              </ul>
              <button className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all hover:border-purple-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="ctaGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="2" fill="white" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ctaGrid)" />
          </svg>
        </div>
        
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Simplify
            <span className="block">Your Market Analysis?</span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of professionals who rely on Markets Simplified for clear, actionable market insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
              Schedule Demo
            </button>
          </div>
          <p className="text-white/80 text-sm mt-8 font-medium">
            No credit card required • 7-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <MarketsSimplifiedLogo size="large" />
              <p className="text-gray-400 text-sm mt-4 max-w-md leading-relaxed">
                Transform complex financial events into actionable insights with historical context and professional analysis. Making markets simple for everyone.
              </p>
              <div className="flex space-x-4 mt-6">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">𝕏</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">IG</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Features</li>
                <li className="hover:text-white transition-colors cursor-pointer">Pricing</li>
                <li className="hover:text-white transition-colors cursor-pointer">API</li>
                <li className="hover:text-white transition-colors cursor-pointer">Security</li>
                <li className="hover:text-white transition-colors cursor-pointer">Mobile App</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">About</li>
                <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
                <li className="hover:text-white transition-colors cursor-pointer">Press</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Markets Simplified. All rights reserved.
            </div>
            <div className="flex space-x-6 text-gray-400 text-sm mt-4 md:mt-0">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
              <span className="hover:text-white transition-colors cursor-pointer">Cookie Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
