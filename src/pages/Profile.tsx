
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Bell, User, Settings, Clock, Star, MessageSquare, FileText, ShieldCheck } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';

const Profile = () => {
  return (
    <AppLayout>
      <div className="p-4 sm:p-6 lg:p-8 bg-imperial-black min-h-screen circuit-bg">
        <div className="max-w-5xl mx-auto">
          {/* Profile Header */}
          <Card className="bg-imperial-dark-purple border-imperial-silver/10 mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <Avatar className="h-24 w-24 border-4 border-imperial-purple">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-imperial-purple text-white text-xl">
                    JD
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 text-center sm:text-left">
                  <h1 className="text-2xl font-bold text-imperial-silver">John Doe</h1>
                  <p className="text-imperial-silver/70 mb-4">Business Account</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-4">
                    <Badge variant="outline" className="bg-imperial-purple/20 text-imperial-silver border-imperial-purple/20">
                      Premium Member
                    </Badge>
                    <Badge variant="outline" className="bg-imperial-dark-purple text-imperial-silver border-imperial-silver/20">
                      Since May 2023
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    <Button size="sm" variant="outline" className="border-imperial-silver/20 text-imperial-silver">
                      <Bell className="h-4 w-4 mr-2" />
                      Notifications
                    </Button>
                    <Button size="sm" variant="outline" className="border-imperial-silver/20 text-imperial-silver">
                      <User className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                    <Button size="sm" variant="outline" className="border-imperial-silver/20 text-imperial-silver">
                      <Settings className="h-4 w-4 mr-2" />
                      Preferences
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Tabs Section */}
          <Tabs defaultValue="activity" className="space-y-4">
            <TabsList className="bg-imperial-dark-purple text-imperial-silver border border-imperial-silver/10 w-full justify-start">
              <TabsTrigger value="activity" className="data-[state=active]:bg-imperial-purple data-[state=active]:text-white">
                Activity
              </TabsTrigger>
              <TabsTrigger value="preferences" className="data-[state=active]:bg-imperial-purple data-[state=active]:text-white">
                Preferences
              </TabsTrigger>
              <TabsTrigger value="saved" className="data-[state=active]:bg-imperial-purple data-[state=active]:text-white">
                Saved Content
              </TabsTrigger>
            </TabsList>
            
            {/* Activity Tab */}
            <TabsContent value="activity" className="space-y-4">
              <Card className="bg-imperial-dark-purple border-imperial-silver/10">
                <CardHeader>
                  <CardTitle className="text-imperial-silver flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Recent Activity
                  </CardTitle>
                  <CardDescription className="text-imperial-silver/70">
                    Your recent interactions with Agent Imperial
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        icon: MessageSquare,
                        title: 'Tax Strategy Consultation',
                        timestamp: '2 hours ago',
                        description: 'Discussed optimal tax strategies for Q3 planning'
                      },
                      {
                        icon: FileText,
                        title: 'Financial Report Analysis',
                        timestamp: 'Yesterday',
                        description: 'Analyzed Q2 financial performance metrics'
                      },
                      {
                        icon: Star,
                        title: 'Saved Custom Templates',
                        timestamp: '3 days ago',
                        description: 'Created cash flow analysis template'
                      },
                      {
                        icon: MessageSquare,
                        title: 'Legal Compliance Check',
                        timestamp: '1 week ago',
                        description: 'Reviewed regulatory requirements for new market entry'
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex border-b border-imperial-silver/10 pb-3 last:border-0 last:pb-0">
                        <div className="h-10 w-10 rounded-md bg-imperial-purple/20 flex items-center justify-center mr-4">
                          <item.icon className="h-5 w-5 text-imperial-light-purple" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <p className="text-imperial-silver font-medium">{item.title}</p>
                            <span className="text-xs text-imperial-silver/70">{item.timestamp}</span>
                          </div>
                          <p className="text-imperial-silver/70 text-sm mt-1">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-imperial-dark-purple border-imperial-silver/10">
                <CardHeader>
                  <CardTitle className="text-imperial-silver flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Usage Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { label: 'Conversations', value: '37' },
                      { label: 'Queries Answered', value: '182' },
                      { label: 'Hours Saved', value: '12.5' }
                    ].map((stat, index) => (
                      <div key={index} className="bg-imperial-black/50 rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-imperial-silver">{stat.value}</p>
                        <p className="text-imperial-silver/70 text-sm">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Preferences Tab */}
            <TabsContent value="preferences" className="space-y-4">
              <Card className="bg-imperial-dark-purple border-imperial-silver/10">
                <CardHeader>
                  <CardTitle className="text-imperial-silver flex items-center">
                    <Settings className="h-5 w-5 mr-2" />
                    AI Interaction Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: 'Response Format', current: 'Detailed explanations with examples', options: ['Concise', 'Detailed', 'Technical'] },
                      { title: 'Knowledge Focus', current: 'Tax Law & Accounting', options: ['General Business', 'Finance', 'Strategy', 'Legal', 'All'] },
                      { title: 'Data Visualization', current: 'Enabled for financial data', options: ['Always', 'When relevant', 'Never'] },
                      { title: 'Citation Style', current: 'Include sources at end of response', options: ['Inline', 'Footnotes', 'End notes', 'None'] }
                    ].map((pref, index) => (
                      <div key={index} className="border border-imperial-silver/10 rounded-lg p-4">
                        <div className="flex justify-between">
                          <h3 className="text-imperial-silver font-medium">{pref.title}</h3>
                          <Button variant="outline" size="sm" className="h-7 border-imperial-silver/20 text-imperial-silver text-xs">
                            Change
                          </Button>
                        </div>
                        <p className="text-imperial-light-purple text-sm mt-1">{pref.current}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {pref.options.map((option, i) => (
                            <Badge key={i} variant="outline" className="bg-imperial-purple/10 text-imperial-silver border-imperial-purple/20 text-xs">
                              {option}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-imperial-dark-purple border-imperial-silver/10">
                <CardHeader>
                  <CardTitle className="text-imperial-silver flex items-center">
                    <ShieldCheck className="h-5 w-5 mr-2" />
                    Data & Privacy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: 'Conversation History', status: 'Stored for 30 days', enabled: true },
                      { title: 'Data Usage for Training', status: 'Disabled', enabled: false },
                      { title: 'Personalized Recommendations', status: 'Enabled', enabled: true },
                      { title: 'Business Data Integration', status: 'Disabled', enabled: false }
                    ].map((setting, index) => (
                      <div key={index} className="flex justify-between items-center border border-imperial-silver/10 rounded-lg p-4">
                        <div>
                          <h3 className="text-imperial-silver font-medium">{setting.title}</h3>
                          <p className="text-imperial-silver/70 text-sm mt-1">{setting.status}</p>
                        </div>
                        <div className={`h-4 w-8 rounded-full flex items-center ${setting.enabled ? 'bg-imperial-purple justify-end' : 'bg-imperial-silver/20 justify-start'}`}>
                          <div className={`h-3 w-3 rounded-full mx-0.5 ${setting.enabled ? 'bg-white' : 'bg-imperial-silver'}`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Saved Content Tab */}
            <TabsContent value="saved" className="space-y-4">
              <Card className="bg-imperial-dark-purple border-imperial-silver/10">
                <CardHeader>
                  <CardTitle className="text-imperial-silver flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Saved Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: 'Tax Deduction Summary 2023', date: 'May 10, 2023', category: 'Tax' },
                      { title: 'Cash Flow Optimization Strategy', date: 'April 22, 2023', category: 'Finance' },
                      { title: 'Competitor Analysis Framework', date: 'April 15, 2023', category: 'Strategy' },
                      { title: 'Employment Contract Guidelines', date: 'March 30, 2023', category: 'Legal' }
                    ].map((item, index) => (
                      <div key={index} className="border border-imperial-silver/10 rounded-lg p-4 hover:bg-imperial-purple/10 transition-colors cursor-pointer">
                        <div className="flex justify-between items-start">
                          <h3 className="text-imperial-silver font-medium">{item.title}</h3>
                          <Badge className="bg-imperial-purple/20 text-imperial-silver border-0 text-xs">
                            {item.category}
                          </Badge>
                        </div>
                        <p className="text-imperial-silver/70 text-sm mt-1">Saved on {item.date}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-imperial-dark-purple border-imperial-silver/10">
                <CardHeader>
                  <CardTitle className="text-imperial-silver flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Custom Templates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: 'Financial Analysis Template', uses: 8 },
                      { title: 'SWOT Analysis Framework', uses: 5 },
                      { title: 'Tax Planning Checklist', uses: 3 },
                      { title: 'Market Entry Strategy', uses: 2 }
                    ].map((template, index) => (
                      <div key={index} className="border border-imperial-silver/10 rounded-lg p-4 hover:bg-imperial-purple/10 transition-colors cursor-pointer">
                        <h3 className="text-imperial-silver font-medium flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-imperial-light-purple" />
                          {template.title}
                        </h3>
                        <div className="flex justify-between items-center mt-2">
                          <p className="text-imperial-silver/70 text-xs">Used {template.uses} times</p>
                          <Button size="sm" variant="ghost" className="h-7 text-imperial-light-purple hover:bg-imperial-purple/20 hover:text-imperial-light-purple">
                            Use
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
