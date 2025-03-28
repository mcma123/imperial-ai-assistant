
import React from 'react';
import { BarChart, LineChart, PieChart, Pie, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CreditCard, DollarSign, TrendingUp, Users, Calendar, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/components/layout/AppLayout';

const Dashboard = () => {
  // Sample data for charts
  const revenueData = [
    { name: 'Jan', value: 12000 },
    { name: 'Feb', value: 15000 },
    { name: 'Mar', value: 18000 },
    { name: 'Apr', value: 16000 },
    { name: 'May', value: 21000 },
    { name: 'Jun', value: 25000 },
    { name: 'Jul', value: 27000 },
  ];

  const expenseCategories = [
    { name: 'Operations', value: 35 },
    { name: 'Marketing', value: 20 },
    { name: 'R&D', value: 15 },
    { name: 'Admin', value: 10 },
    { name: 'Other', value: 20 },
  ];

  const customerData = [
    { name: 'Q1', new: 120, returning: 80 },
    { name: 'Q2', new: 150, returning: 100 },
    { name: 'Q3', new: 180, returning: 120 },
    { name: 'Q4', new: 220, returning: 150 },
  ];

  // Sample KPI data
  const kpis = [
    {
      title: 'Total Revenue',
      value: '$134,250',
      change: '+12.5%',
      isPositive: true,
      icon: DollarSign,
    },
    {
      title: 'New Customers',
      value: '670',
      change: '+5.2%',
      isPositive: true,
      icon: Users,
    },
    {
      title: 'Average Sale',
      value: '$523',
      change: '-2.1%',
      isPositive: false,
      icon: CreditCard,
    },
    {
      title: 'Conversion Rate',
      value: '3.8%',
      change: '+0.4%',
      isPositive: true,
      icon: TrendingUp,
    },
  ];

  const COLORS = ['#7E69AB', '#9b87f5', '#1A1F2C', '#9F9EA1', '#D6BCFA'];

  return (
    <AppLayout>
      <div className="p-4 sm:p-6 lg:p-8 bg-imperial-black min-h-screen circuit-bg">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-imperial-silver mb-2">Business Intelligence Dashboard</h1>
          <p className="text-imperial-silver/70">Analytics and insights for your business performance</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {kpis.map((kpi, index) => (
            <Card key={index} className="bg-imperial-dark-purple border-imperial-silver/10">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-imperial-silver/70 text-sm">{kpi.title}</p>
                    <p className="text-2xl font-bold text-imperial-silver mt-1">{kpi.value}</p>
                    <div className={`flex items-center mt-1 ${kpi.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                      {kpi.isPositive ? (
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 mr-1" />
                      )}
                      <span className="text-sm">{kpi.change}</span>
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-imperial-purple/20 flex items-center justify-center">
                    <kpi.icon className="h-5 w-5 text-imperial-light-purple" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Trend */}
          <Card className="bg-imperial-dark-purple border-imperial-silver/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-imperial-silver">Revenue Trend</CardTitle>
              <CardDescription className="text-imperial-silver/70">Monthly revenue performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="name" stroke="#9F9EA1" />
                    <YAxis stroke="#9F9EA1" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1A1F2C', borderColor: '#334155', color: '#9F9EA1' }}
                      labelStyle={{ color: '#9F9EA1' }} 
                    />
                    <Legend />
                    <Line type="monotone" dataKey="value" name="Revenue" stroke="#7E69AB" strokeWidth={2} dot={{ r: 4, fill: '#7E69AB' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Customer Acquisition */}
          <Card className="bg-imperial-dark-purple border-imperial-silver/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-imperial-silver">Customer Acquisition</CardTitle>
              <CardDescription className="text-imperial-silver/70">New vs Returning Customers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={customerData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="name" stroke="#9F9EA1" />
                    <YAxis stroke="#9F9EA1" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1A1F2C', borderColor: '#334155', color: '#9F9EA1' }}
                      labelStyle={{ color: '#9F9EA1' }} 
                    />
                    <Legend />
                    <Bar dataKey="new" name="New Customers" stackId="a" fill="#9b87f5" />
                    <Bar dataKey="returning" name="Returning Customers" stackId="a" fill="#7E69AB" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Expense Breakdown */}
          <Card className="bg-imperial-dark-purple border-imperial-silver/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-imperial-silver">Expense Breakdown</CardTitle>
              <CardDescription className="text-imperial-silver/70">Distribution by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={expenseCategories}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {expenseCategories.map((entry, index) => (
                        <Pie
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1A1F2C', borderColor: '#334155', color: '#9F9EA1' }}
                      labelStyle={{ color: '#9F9EA1' }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="bg-imperial-dark-purple border-imperial-silver/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-imperial-silver">Business Calendar</CardTitle>
              <CardDescription className="text-imperial-silver/70">Upcoming events and deadlines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { date: 'May 15', title: 'Quarterly Tax Filing Deadline', type: 'Tax' },
                  { date: 'May 22', title: 'Board Meeting', type: 'Meeting' },
                  { date: 'June 5', title: 'Marketing Campaign Launch', type: 'Marketing' },
                  { date: 'June 12', title: 'Financial Review', type: 'Finance' },
                  { date: 'June 30', title: 'Mid-Year Strategy Adjustment', type: 'Strategy' }
                ].map((event, index) => (
                  <div key={index} className="flex border-b border-imperial-silver/10 pb-3 last:border-0 last:pb-0">
                    <div className="h-10 w-10 rounded-md bg-imperial-purple/20 flex items-center justify-center mr-4">
                      <Calendar className="h-5 w-5 text-imperial-light-purple" />
                    </div>
                    <div>
                      <p className="text-sm text-imperial-silver font-medium">{event.title}</p>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-imperial-silver/70 mr-2">{event.date}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-imperial-purple/20 text-imperial-light-purple">
                          {event.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Insights */}
        <Card className="bg-imperial-dark-purple border-imperial-silver/10 mb-8">
          <CardHeader>
            <CardTitle className="text-imperial-silver flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-imperial-light-purple" />
              AI Business Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="glass-panel rounded-lg p-4">
                <p className="text-imperial-silver">
                  <span className="font-semibold">Revenue Growth Analysis:</span> Your Q2 revenue shows a 12.5% increase compared to Q1. This outperforms your industry average of 8.3%.
                </p>
              </div>
              <div className="glass-panel rounded-lg p-4">
                <p className="text-imperial-silver">
                  <span className="font-semibold">Cost Optimization:</span> Your operational expenses have decreased by 3.2% while maintaining output. Consider applying similar efficiency measures to marketing spend.
                </p>
              </div>
              <div className="glass-panel rounded-lg p-4">
                <p className="text-imperial-silver">
                  <span className="font-semibold">Customer Retention:</span> Your returning customer rate of 32% is below target. Implementing a loyalty program could increase this metric based on competitive analysis.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
