
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, BarChart3, Lightbulb, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppLayout from '@/components/layout/AppLayout';

const Index = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Business Chat',
      description: 'Get instant answers to your business, accounting, and legal questions.',
      path: '/chat'
    },
    {
      icon: BarChart3,
      title: 'Intelligence Dashboard',
      description: 'Visualize business insights and track key metrics in real-time.',
      path: '/dashboard'
    },
    {
      icon: Lightbulb,
      title: 'Specialized Expertise',
      description: 'Access dedicated modes for accounting, tax law, and strategic consulting.',
      path: '/specializations'
    }
  ];

  return (
    <AppLayout>
      <div className="relative min-h-screen bg-imperial-black circuit-bg">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-b from-imperial-purple/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-imperial-silver via-white to-imperial-light-purple">
                Your Executive AI Assistant
              </span>
            </h1>
            
            <p className="text-xl text-imperial-silver mb-10 max-w-2xl mx-auto">
              Agent Imperial delivers sophisticated AI-powered business intelligence, accounting expertise, and strategic insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-imperial-purple hover:bg-imperial-light-purple text-white">
                <Link to="/chat">Start Conversation</Link>
              </Button>
              <Button asChild variant="outline" className="border-imperial-silver text-imperial-silver hover:bg-imperial-silver/10">
                <Link to="/specializations">Explore Capabilities</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-imperial-dark-purple/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-imperial-silver mb-12">
              Business Intelligence Suite
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="glass-panel rounded-xl p-6 holographic-effect transform transition-transform hover:scale-105"
                >
                  <div className="h-12 w-12 rounded-lg bg-imperial-purple/20 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-imperial-light-purple" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-imperial-silver mb-6">{feature.description}</p>
                  
                  <Button asChild variant="ghost" className="text-imperial-light-purple hover:bg-imperial-purple/20 p-0 flex items-center">
                    <Link to={feature.path}>
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Capabilities Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-imperial-silver mb-4">Executive-Grade Assistance</h2>
              <p className="text-imperial-silver/70 max-w-2xl mx-auto">
                Agent Imperial provides sophisticated AI guidance across multiple business domains.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Business Strategy Planning',
                'Financial Analysis & Reporting',
                'Tax Law Guidance',
                'Accounting Principles & Practices',
                'Legal Compliance Assistance',
                'Market Analysis & Forecasting',
                'Business Process Optimization',
                'Risk Management Solutions'
              ].map((capability, index) => (
                <div key={index} className="flex items-center p-4 border border-imperial-silver/10 rounded-lg bg-imperial-black/50">
                  <div className="h-8 w-8 rounded-full bg-imperial-purple/20 flex items-center justify-center mr-4">
                    <span className="text-imperial-light-purple text-sm">{index + 1}</span>
                  </div>
                  <span className="text-imperial-silver">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-imperial-black to-imperial-dark-purple">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Enhance Your Business Intelligence?
            </h2>
            <p className="text-imperial-silver mb-8 max-w-2xl mx-auto">
              Access comprehensive business analytics, accounting expertise, and strategic insights with Agent Imperial.
            </p>
            <Button asChild size="lg" className="bg-imperial-purple hover:bg-imperial-light-purple text-white">
              <Link to="/chat">Begin Consultation</Link>
            </Button>
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default Index;
