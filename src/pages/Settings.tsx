
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Shield, Bell, Languages, Users, Lock, Mail, Palette, MessageSquare, BarChart, FileText } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const { toast } = useToast();
  
  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <AppLayout>
      <div className="p-4 sm:p-6 lg:p-8 bg-imperial-black min-h-screen circuit-bg">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-imperial-silver mb-2">Settings</h1>
            <p className="text-imperial-silver/70">Manage your preferences and application settings</p>
          </div>
          
          <Tabs defaultValue="account" className="space-y-4">
            <TabsList className="bg-imperial-dark-purple text-imperial-silver border border-imperial-silver/10 w-full justify-start overflow-x-auto">
              <TabsTrigger value="account" className="data-[state=active]:bg-imperial-purple data-[state=active]:text-white">
                Account
              </TabsTrigger>
              <TabsTrigger value="appearance" className="data-[state=active]:bg-imperial-purple data-[state=active]:text-white">
                Appearance
              </TabsTrigger>
              <TabsTrigger value="notifications" className="data-[state=active]:bg-imperial-purple data-[state=active]:text-white">
                Notifications
              </TabsTrigger>
              <TabsTrigger value="privacy" className="data-[state=active]:bg-imperial-purple data-[state=active]:text-white">
                Privacy
              </TabsTrigger>
              <TabsTrigger value="ai" className="data-[state=active]:bg-imperial-purple data-[state=active]:text-white">
                AI Settings
              </TabsTrigger>
            </TabsList>
            
            {/* Account Settings */}
            <TabsContent value="account" className="space-y-4">
              <Card className="bg-imperial-dark-purple border-imperial-silver/10">
                <CardHeader>
                  <CardTitle className="text-imperial-silver flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Profile Information
                  </CardTitle>
                  <CardDescription className="text-imperial-silver/70">
                    Manage your account details and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-imperial-silver">Full Name</Label>
                      <Input id="name" defaultValue="John Doe" className="bg-imperial-black border-imperial-silver/20 text-imperial-silver focus:border-imperial-purple" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-imperial-silver">Email Address</Label>
                      <Input id="email" defaultValue="john.doe@example.com" className="bg-imperial-black border-imperial-silver/20 text-imperial-silver focus:border-imperial-purple" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-imperial-silver">Company Name</Label>
                      <Input id="company" defaultValue="Acme Inc." className="bg-imperial-black border-imperial-silver/20 text-imperial-silver focus:border-imperial-purple" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role" className="text-imperial-silver">Job Title</Label>
                      <Input id="role" defaultValue="CEO" className="bg-imperial-black border-imperial-silver/20 text-imperial-silver focus:border-imperial-purple" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-imperial-silver">Industry</Label>
                    <Select defaultValue="technology">
                      <SelectTrigger id="industry" className="bg-imperial-black border-imperial-silver/20 text-imperial-silver">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent className="bg-imperial-dark-purple border-imperial-silver/10 text-imperial-silver">
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="finance">Finance & Banking</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="retail">Retail & E-commerce</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="language" className="text-imperial-silver">Preferred Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger id="language" className="bg-imperial-black border-imperial-silver/20 text-imperial-silver">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent className="bg-imperial-dark-purple border-imperial-silver/10 text-imperial-silver">
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                        <SelectItem value="zh">Chinese (Simplified)</SelectItem>
                        <SelectItem value="ja">Japanese</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="pt-4 flex justify-end">
                    <Button onClick={handleSave} className="bg-imperial-purple hover:bg-imperial-light-purple text-white">
                      Save Changes
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-imperial-dark-purple border-imperial-silver/10">
                <CardHeader>
                  <CardTitle className="text-imperial-silver flex items-center">
                    <Lock className="h-5 w-5 mr-2" />
                    Security Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password" className="text-imperial-silver">Current Password</Label>
                    <Input id="current-password" type="password" placeholder="••••••••" className="bg-imperial-black border-imperial-silver/20 text-imperial-silver focus:border-imperial-purple" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="new-password" className="text-imperial-silver">New Password</Label>
                      <Input id="new-password" type="password" placeholder="••••••••" className="bg-imperial-black border-imperial-silver/20 text-imperial-silver focus:border-imperial-purple" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password" className="text-imperial-silver">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" placeholder="••••••••" className="bg-imperial-black border-imperial-silver/20 text-imperial-silver focus:border-imperial-purple" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-imperial-silver">Two-Factor Authentication</Label>
                        <p className="text-imperial-silver/70 text-sm">Add an extra layer of security to your account</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-end">
                    <Button onClick={handleSave} className="bg-imperial-purple hover:bg-imperial-light-purple text-white">
                      Update Security Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Appearance Settings */}
            <TabsContent value="appearance" className="space-y-4">
              <Card className="bg-imperial-dark-purple border-imperial-silver/10">
                <CardHeader>
                  <CardTitle className="text-imperial-silver flex items-center">
                    <Palette className="h-5 w-5 mr-2" />
                    Interface Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-imperial-silver">Theme Mode</Label>
                    <div className="grid grid-cols-3 gap-4 pt-2">
                      <div className="rounded-lg border-2 border-imperial-purple p-3 text-center bg-imperial-dark-purple">
                        <div className="h-12 rounded bg-black mb-2 flex items-center justify-center text-white">
                          Dark
                        </div>
                        <span className="text-imperial-silver text-sm">Dark Mode</span>
                      </div>
                      <div className="rounded-lg border-2 border-imperial-silver/20 p-3 text-center bg-imperial-black">
                        <div className="h-12 rounded bg-white mb-2 flex items-center justify-center text-black">
                          Light
                        </div>
                        <span className="text-imperial-silver text-sm">Light Mode</span>
                      </div>
                      <div className="rounded-lg border-2 border-imperial-silver/20 p-3 text-center bg-imperial-black">
                        <div className="h-12 rounded bg-gradient-to-r from-white to-black mb-2 flex items-center justify-center text-white">
                          Auto
                        </div>
                        <span className="text-imperial-silver text-sm">System Default</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <Label className="text-imperial-silver mb-2 block">Accent Color</Label>
                      <div className="flex space-x-2">
                        {['#7E69AB', '#4F46E5', '#0EA5E9', '#10B981', '#F59E0B', '#EF4444'].map((color) => (
                          <div
                            key={color}
                            className={`h-8 w-8 rounded-full cursor-pointer ${color === '#7E69AB' ? 'ring-2 ring-offset-2 ring-imperial-silver' : ''}`}
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label className="text-imperial-silver">Font Size</Label>
                        <span className="text-imperial-silver">Medium</span>
                      </div>
                      <Slider defaultValue={[2]} max={4} step={1} className="py-4" />
                      <div className="flex justify-between text-xs text-imperial-silver/70">
                        <span>Small</span>
                        <span>Medium</span>
                        <span>Large</span>
                        <span>XL</span>
                        <span>XXL</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-imperial-silver">Reduced Motion</Label>
                        <p className="text-imperial-silver/70 text-sm">Minimize animations in the user interface</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-imperial-silver">High Contrast</Label>
                        <p className="text-imperial-silver/70 text-sm">Enhance visibility with higher contrast UI</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-end">
                    <Button onClick={handleSave} className="bg-imperial-purple hover:bg-imperial-light-purple text-white">
                      Save Preferences
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Notifications Settings */}
            <TabsContent value="notifications" className="space-y-4">
              <Card className="bg-imperial-dark-purple border-imperial-silver/10">
                <CardHeader>
                  <CardTitle className="text-imperial-silver flex items-center">
                    <Bell className="h-5 w-5 mr-2" />
                    Notification Preferences
                  </CardTitle>
                  <CardDescription className="text-imperial-silver/70">
                    Control what notifications you receive from Agent Imperial
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {[
                      { 
                        title: 'Email Notifications', 
                        description: 'Receive important updates via email',
                        icon: Mail,
                        checked: true
                      },
                      { 
                        title: 'New Features & Updates', 
                        description: 'Get notified about new features and platform improvements',
                        icon: Bell,
                        checked: true
                      },
                      { 
                        title: 'Business Intelligence Alerts', 
                        description: 'Receive alerts about significant changes in your tracked metrics',
                        icon: BarChart,
                        checked: false
                      },
                      { 
                        title: 'Chat Session Reminders', 
                        description: 'Reminders about unfinished conversational threads',
                        icon: MessageSquare,
                        checked: true
                      },
                      { 
                        title: 'Industry Reports', 
                        description: 'Updates on relevant industry trends and reports',
                        icon: FileText,
                        checked: false
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between space-x-2">
                        <div className="flex items-start space-x-3">
                          <div className="mt-0.5 h-8 w-8 rounded-md bg-imperial-purple/20 flex items-center justify-center">
                            <item.icon className="h-4 w-4 text-imperial-light-purple" />
                          </div>
                          <div>
                            <Label className="text-imperial-silver">{item.title}</Label>
                            <p className="text-imperial-silver/70 text-sm">{item.description}</p>
                          </div>
                        </div>
                        <Switch checked={item.checked} />
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-imperial-silver">Notification Frequency</Label>
                    <Select defaultValue="daily">
                      <SelectTrigger className="bg-imperial-black border-imperial-silver/20 text-imperial-silver">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent className="bg-imperial-dark-purple border-imperial-silver/10 text-imperial-silver">
                        <SelectItem value="realtime">Real-time</SelectItem>
                        <SelectItem value="daily">Daily Digest</SelectItem>
                        <SelectItem value="weekly">Weekly Summary</SelectItem>
                        <SelectItem value="none">Don't send</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="pt-4 flex justify-end">
                    <Button onClick={handleSave} className="bg-imperial-purple hover:bg-imperial-light-purple text-white">
                      Update Notification Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Privacy Settings */}
            <TabsContent value="privacy" className="space-y-4">
              <Card className="bg-imperial-dark-purple border-imperial-silver/10">
                <CardHeader>
                  <CardTitle className="text-imperial-silver flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Privacy and Data
                  </CardTitle>
                  <CardDescription className="text-imperial-silver/70">
                    Manage how your data is used and stored
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {[
                      { 
                        title: 'Conversation History', 
                        description: 'Store conversation history to provide context for future interactions',
                        checked: true
                      },
                      { 
                        title: 'Data Analytics', 
                        description: 'Allow anonymous usage data to improve the service',
                        checked: true
                      },
                      { 
                        title: 'AI Training', 
                        description: 'Use your conversations to train and improve the AI model',
                        checked: false
                      },
                      { 
                        title: 'Personalized Experience', 
                        description: 'Allow personalization based on your usage patterns',
                        checked: true
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between space-x-2">
                        <div>
                          <Label className="text-imperial-silver">{item.title}</Label>
                          <p className="text-imperial-silver/70 text-sm">{item.description}</p>
                        </div>
                        <Switch checked={item.checked} />
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-imperial-silver">Data Retention Period</Label>
                    <Select defaultValue="30">
                      <SelectTrigger className="bg-imperial-black border-imperial-silver/20 text-imperial-silver">
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                      <SelectContent className="bg-imperial-dark-purple border-imperial-silver/10 text-imperial-silver">
                        <SelectItem value="7">7 days</SelectItem>
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                        <SelectItem value="365">1 year</SelectItem>
                        <SelectItem value="forever">Don't delete</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="pt-2">
                    <Button variant="outline" className="w-full border-imperial-silver/20 text-imperial-silver hover:bg-imperial-purple/20 hover:text-imperial-light-purple">
                      Export Your Data
                    </Button>
                  </div>
                  
                  <div>
                    <Button variant="outline" className="w-full border-destructive/30 text-destructive hover:bg-destructive/10">
                      Delete Account Data
                    </Button>
                  </div>
                  
                  <div className="pt-4 flex justify-end">
                    <Button onClick={handleSave} className="bg-imperial-purple hover:bg-imperial-light-purple text-white">
                      Save Privacy Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* AI Settings */}
            <TabsContent value="ai" className="space-y-4">
              <Card className="bg-imperial-dark-purple border-imperial-silver/10">
                <CardHeader>
                  <CardTitle className="text-imperial-silver flex items-center">
                    <Languages className="h-5 w-5 mr-2" />
                    AI Behavior & Output
                  </CardTitle>
                  <CardDescription className="text-imperial-silver/70">
                    Customize how the AI assistant interacts with you
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-imperial-silver">Preferred Communication Style</Label>
                    <Select defaultValue="balanced">
                      <SelectTrigger className="bg-imperial-black border-imperial-silver/20 text-imperial-silver">
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent className="bg-imperial-dark-purple border-imperial-silver/10 text-imperial-silver">
                        <SelectItem value="formal">Formal & Professional</SelectItem>
                        <SelectItem value="balanced">Balanced & Conversational</SelectItem>
                        <SelectItem value="direct">Direct & Concise</SelectItem>
                        <SelectItem value="technical">Technical & Detailed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-imperial-silver">Response Length</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger className="bg-imperial-black border-imperial-silver/20 text-imperial-silver">
                        <SelectValue placeholder="Select length" />
                      </SelectTrigger>
                      <SelectContent className="bg-imperial-dark-purple border-imperial-silver/10 text-imperial-silver">
                        <SelectItem value="brief">Brief</SelectItem>
                        <SelectItem value="medium">Moderate</SelectItem>
                        <SelectItem value="detailed">Detailed</SelectItem>
                        <SelectItem value="comprehensive">Comprehensive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label className="text-imperial-silver">Technical Complexity</Label>
                      <span className="text-imperial-silver">Medium</span>
                    </div>
                    <Slider defaultValue={[50]} className="py-4" />
                    <div className="flex justify-between text-xs text-imperial-silver/70">
                      <span>Simple</span>
                      <span>Balanced</span>
                      <span>Technical</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Label className="text-imperial-silver">Knowledge Focus Areas</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { title: 'Business Strategy', checked: true },
                        { title: 'Financial Analysis', checked: true },
                        { title: 'Accounting Principles', checked: true },
                        { title: 'Tax Law', checked: true },
                        { title: 'Legal Compliance', checked: false },
                        { title: 'Market Research', checked: false },
                        { title: 'Human Resources', checked: false },
                        { title: 'Technology Trends', checked: false }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className={`h-4 w-4 rounded-sm border ${item.checked ? 'bg-imperial-purple border-imperial-purple' : 'border-imperial-silver/30'} flex items-center justify-center`}>
                            {item.checked && <div className="h-2 w-2 bg-white rounded-sm" />}
                          </div>
                          <Label className="text-imperial-silver text-sm">{item.title}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { 
                        title: 'Include Citations', 
                        description: 'Reference sources in AI responses where applicable',
                        checked: true
                      },
                      { 
                        title: 'Auto-correct Ambiguous Queries', 
                        description: 'AI will attempt to clarify ambiguous or incomplete questions',
                        checked: true
                      },
                      { 
                        title: 'Proactive Insights', 
                        description: 'Provide additional insights beyond the specific question asked',
                        checked: false
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between space-x-2">
                        <div>
                          <Label className="text-imperial-silver">{item.title}</Label>
                          <p className="text-imperial-silver/70 text-sm">{item.description}</p>
                        </div>
                        <Switch checked={item.checked} />
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 flex justify-end">
                    <Button onClick={handleSave} className="bg-imperial-purple hover:bg-imperial-light-purple text-white">
                      Save AI Settings
                    </Button>
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

export default Settings;
