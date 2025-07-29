"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Clock, Users, CheckCircle, Star, Play, Search, Calendar, DollarSign, Shield, Zap, Target, BookOpen, Award, ChevronDown, Menu, X } from 'lucide-react';

// Custom Logo Component
const Logo = ({ className = "h-8 w-auto" }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <div className="relative">
      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">MS</span>
      </div>
    </div>
    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Markets Simplified
    </span>
  </div>
);

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-50 py-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
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
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all w-full">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => (
  <section className="hero-section bg-gradient-to-br from-blue-50 to-purple-50">
    <div className="container">
      <div className="hero-content">
        <h1 className="hero-title gradient-text">
          Transform Financial Events Into Clear Insights
        </h1>
        <p className="hero-subtitle text-gray-600">
          Get professional-grade analysis of earnings, Fed announcements, and market events 
          in plain English. No Bloomberg Terminal required.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
            <span>Start Free Trial</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="btn-secondary text-gray-700 hover:text-blue-600">
            <Play className="w-5 h-5" />
            <span>Watch Demo</span>
          </button>
        </div>
      </div>
    </div>
  </section>
);

// Stats Section
const StatsSection = () => (
  <section className="section-padding bg-white">
    <div className="container">
      <div className="stats-grid">
        <div className="stat-item">
          <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
          <div className="text-gray-600">Events Analyzed</div>
        </div>
        <div className="stat-item">
          <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
          <div className="text-gray-600">Accuracy Rate</div>
        </div>
        <div className="stat-item">
          <div className="text-4xl font-bold text-green-600 mb-2">2,500+</div>
          <div className="text-gray-600">Active Users</div>
        </div>
        <div className="stat-item">
          <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
          <div className="text-gray-600">Market Monitoring</div>
        </div>
      </div>
    </div>
  </section>
);

// Features Section
const FeaturesSection = () => (
  <section id="features" className="section-padding bg-gray-50">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Everything You Need to Understand Markets
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional-grade analysis tools designed for busy financial professionals
        </p>
      </div>
      
      <div className="features-grid">
        <div className="feature-card">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Smart Event Analysis
          </h3>
          <p className="text-gray-600">
            Automatically detect and analyze earnings calls, Fed announcements, and corporate events with AI-powered insights.
          </p>
        </div>
        
        <div className="feature-card">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Clock className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Historical Context
          </h3>
          <p className="text-gray-600">
            Compare current events with similar historical situations to understand potential market impact.
          </p>
        </div>
        
        <div className="feature-card">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Educational Insights
          </h3>
          <p className="text-gray-600">
            Learn the "why" behind market movements with context-specific educational content.
          </p>
        </div>
        
        <div className="feature-card">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Risk Assessment
          </h3>
          <p className="text-gray-600">
            Professional risk analysis with sector impact breakdowns and confidence scoring.
          </p>
        </div>
        
        <div className="feature-card">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-yellow-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Real-time Alerts
          </h3>
          <p className="text-gray-600">
            Get instant notifications when significant market events occur that match your interests.
          </p>
        </div>
        
        <div className="feature-card">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <Target className="w-6 h-6 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Pattern Recognition
          </h3>
          <p className="text-gray-600">
            Advanced algorithms identify similar historical events and their outcomes for better predictions.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Pricing Section
const PricingSection = () => (
  <section id="pricing" className="section-padding bg-white">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-xl text-gray-600">
          Choose the plan that fits your analysis needs
        </p>
      </div>
      
      <div className="pricing-grid">
        {/* Starter Plan */}
        <div className="pricing-card">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">$29</span>
              <span className="text-gray-600">/month</span>
            </div>
            <p className="text-gray-600 mb-6">Perfect for individual investors</p>
            <ul className="space-y-3 mb-8">
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
          </div>
          <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            Start Free Trial
          </button>
        </div>
        
        {/* Professional Plan - Featured */}
        <div className="pricing-card featured">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">$79</span>
              <span className="text-gray-600">/month</span>
            </div>
            <p className="text-gray-600 mb-6">For active traders and analysts</p>
            <ul className="space-y-3 mb-8">
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
          </div>
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
            Start Free Trial
          </button>
        </div>
        
        {/* Enterprise Plan */}
        <div className="pricing-card">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">$199</span>
              <span className="text-gray-600">/month</span>
            </div>
            <p className="text-gray-600 mb-6">For teams and institutions</p>
            <ul className="space-y-3 mb-8">
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
          </div>
          <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  </section>
);

// Testimonials Section
const TestimonialsSection = () => (
  <section className="section-padding bg-gray-50">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Trusted by Financial Professionals
        </h2>
        <p className="text-xl text-gray-600">
          See what our users are saying about Markets Simplified
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="testimonial-card">
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-600 mb-4">
            "Markets Simplified has transformed how I analyze earnings calls. What used to take hours now takes minutes."
          </p>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-600 font-semibold">SJ</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-gray-600 text-sm">Portfolio Manager</div>
            </div>
          </div>
        </div>
        
        <div className="testimonial-card">
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-600 mb-4">
            "The historical context feature is invaluable. It's like having a research team at my fingertips."
          </p>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-green-600 font-semibold">MC</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Michael Chen</div>
              <div className="text-gray-600 text-sm">Research Analyst</div>
            </div>
          </div>
        </div>
        
        <div className="testimonial-card">
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-600 mb-4">
            "Finally, a tool that explains complex financial events in plain English. Game changer!"
          </p>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-purple-600 font-semibold">ER</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Emily Rodriguez</div>
              <div className="text-gray-600 text-sm">Investment Advisor</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// CTA Section
const CTASection = () => (
  <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600">
    <div className="container">
      <div className="text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Simplify Your Market Analysis?
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
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
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <Logo className="mb-4" />
          <p className="text-gray-400 mb-4">
            Transform financial events into clear, actionable insights.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Product</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 Markets Simplified. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Main Landing Page Component
const MarketsSimplifiedLanding = () => {
  return (
    <div className="landing-page">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default MarketsSimplifiedLanding;
