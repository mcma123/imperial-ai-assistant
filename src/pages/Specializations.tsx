
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Calculator, Scale, FileText, LineChart, BarChart, PieChart, FileQuestion, DollarSign, Building2, GraduationCap, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';

const Specializations = () => {
  const specializations = [
    {
      id: 'accounting',
      title: 'Accounting Assistance',
      description: 'Financial reporting, bookkeeping, and accounting principles',
      icon: Calculator,
      features: [
        'Financial statement preparation',
        'Bookkeeping processes',
        'Accounting principles and standards',
        'Audit preparation',
        'Financial controls'
      ],
      color: 'from-purple-600 to-purple-400'
    },
    {
      id: 'tax',
      title: 'Tax Law Consultation',
      description: 'Tax planning, compliance, and regulatory guidance',
      icon: Scale,
      features: [
        'Tax planning strategies',
        'Compliance requirements',
        'Deduction optimization',
        'International tax considerations',
        'Tax law updates'
      ],
      color: 'from-blue-600 to-blue-400'
    },
    {
      id: 'legal',
      title: 'Business Legal',
      description: 'Corporate structure, contracts, and compliance',
      icon: FileText,
      features: [
        'Entity formation',
        'Contract review concepts',
        'Regulatory compliance',
        'IP protection strategies',
        'Legal risk management'
      ],
      color: 'from-green-600 to-green-400'
    },
    {
      id: 'strategy',
      title: 'Business Strategy',
      description: 'Market analysis, growth planning, and optimization',
      icon: LineChart,
      features: [
        'Market analysis frameworks',
        'Growth strategy planning',
        'Competitive positioning',
        'Business model evaluation',
        'Performance optimization'
      ],
      color: 'from-orange-600 to-orange-400'
    }
  ];

  const modules = [
    {
      title: 'Financial Analysis',
      icon: BarChart,
      description: 'Ratio analysis, cash flow management, and financial forecasting'
    },
    {
      title: 'Expense Management',
      icon: DollarSign,
      description: 'Cost structure optimization and budget allocation strategies'
    },
    {
      title: 'Corporate Compliance',
      icon: FileQuestion,
      description: 'Regulatory requirements and compliance management frameworks'
    },
    {
      title: 'Industry Analysis',
      icon: Building2,
      description: 'Sector-specific insights and competitive landscape evaluation'
    },
    {
      title: 'Learning Resources',
      icon: GraduationCap,
      description: 'Business education materials and professional development guides'
    },
    {
      title: 'Business Modeling',
      icon: PieChart,
      description: 'Financial modeling techniques and scenario analysis tools'
    }
  ];

  return (
    <AppLayout>
      <div className="p-4 sm:p-6 lg:p-8 bg-imperial-black min-h-screen circuit-bg">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-imperial-silver mb-2">Specialized Expertise</h1>
          <p className="text-imperial-silver/70">Access dedicated AI assistance for specific business domains</p>
        </div>

        {/* Main specializations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {specializations.map((spec) => (
            <Card key={spec.id} className="bg-imperial-dark-purple border-imperial-silver/10 overflow-hidden holographic-effect">
              <div className={`h-2 bg-gradient-to-r ${spec.color}`} />
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-imperial-silver flex items-center">
                      {spec.title}
                    </CardTitle>
                    <CardDescription className="text-imperial-silver/70 mt-1">
                      {spec.description}
                    </CardDescription>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-imperial-purple/20 flex items-center justify-center">
                    <spec.icon className="h-5 w-5 text-imperial-light-purple" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-40 rounded-md">
                  <ul className="space-y-2">
                    {spec.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-imperial-purple/10 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                          <span className="text-imperial-light-purple text-xs">{index + 1}</span>
                        </div>
                        <span className="text-imperial-silver text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-imperial-purple hover:bg-imperial-light-purple">
                  <Link to={`/chat?mode=${spec.id}`}>
                    Access {spec.title}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional modules */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-imperial-silver mb-4">Additional Expertise Modules</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((module, index) => (
              <div key={index} className="flex glass-panel rounded-lg p-4 hover:bg-imperial-dark-purple/50 transition-colors cursor-pointer group">
                <div className="h-10 w-10 rounded-full bg-imperial-purple/20 flex items-center justify-center mr-4 group-hover:bg-imperial-purple/30 transition-colors">
                  <module.icon className="h-5 w-5 text-imperial-light-purple" />
                </div>
                <div>
                  <p className="text-imperial-silver font-medium">{module.title}</p>
                  <p className="text-imperial-silver/70 text-sm mt-1">{module.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Usage suggestions */}
        <Card className="bg-imperial-dark-purple border-imperial-silver/10">
          <CardHeader>
            <CardTitle className="text-imperial-silver">
              <Briefcase className="h-5 w-5 inline mr-2" />
              Business Intelligence Applications
            </CardTitle>
            <CardDescription className="text-imperial-silver/70">
              Leverage Agent Imperial's specialized knowledge for these common business scenarios
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Financial Decision Support',
                  description: 'Get AI-powered analysis for capital allocation, investment decisions, and financial planning.'
                },
                {
                  title: 'Regulatory Compliance',
                  description: 'Stay informed about changing regulations and compliance requirements for your industry.'
                },
                {
                  title: 'Tax Planning',
                  description: 'Optimize tax strategies and identify potential deductions and credits for your business.'
                },
                {
                  title: 'Strategic Growth',
                  description: 'Develop data-driven growth strategies and market expansion plans with AI guidance.'
                }
              ].map((item, index) => (
                <div key={index} className="border border-imperial-silver/10 rounded-lg p-4">
                  <h3 className="text-imperial-silver font-medium mb-2">{item.title}</h3>
                  <p className="text-imperial-silver/70 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Specializations;
