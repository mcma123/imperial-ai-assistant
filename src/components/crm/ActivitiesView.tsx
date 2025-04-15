
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Customer, Activity } from '@/types/crm';
import { Input } from '@/components/ui/input'; 
import { Button } from '@/components/ui/button';
import { Search, Plus, Mail, Phone, Calendar as CalendarIcon, Users } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";

interface ActivitiesViewProps {
  customers: Customer[];
}

const ActivitiesView: React.FC<ActivitiesViewProps> = ({ customers }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Extract all activities from customers
  const allActivities = customers.reduce((acc: Activity[], customer) => {
    if (customer.activities) {
      return [...acc, ...customer.activities.map(activity => ({
        ...activity,
        customerName: customer.name
      }))];
    }
    return acc;
  }, []);

  const filteredActivities = allActivities.filter(activity => 
    activity.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    activity.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (activity as any).customerName?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Data for Activity Types Chart
  const activityTypesData = [
    { name: 'Email', value: allActivities.filter(a => a.type === 'Email').length || 12 },
    { name: 'Call', value: allActivities.filter(a => a.type === 'Call').length || 8 },
    { name: 'Meeting', value: allActivities.filter(a => a.type === 'Meeting').length || 5 },
    { name: 'Task', value: 3 }
  ];

  // Data for Activity Timeline Chart
  const currentMonth = new Date().getMonth();
  const activityTimelineData = [
    { name: getMonthName(currentMonth - 2), count: 7 },
    { name: getMonthName(currentMonth - 1), count: 12 },
    { name: getMonthName(currentMonth), count: 19 },
    { name: getMonthName(currentMonth + 1), count: 5 },
  ];

  // Colors for pie chart
  const COLORS = ['#D946EF', '#F97316', '#0EA5E9', '#8B5CF6'];

  // Helper function to get month name
  function getMonthName(monthIndex: number): string {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // Handle wrapping around to previous/next year
    while (monthIndex < 0) monthIndex += 12;
    while (monthIndex > 11) monthIndex -= 12;
    return months[monthIndex];
  }

  // Helper function to get icon for activity type
  function getActivityIcon(type: string) {
    switch(type.toLowerCase()) {
      case 'email':
        return <Mail className="h-4 w-4" />;
      case 'call':
        return <Phone className="h-4 w-4" />;
      case 'meeting':
        return <Users className="h-4 w-4" />;
      default:
        return <CalendarIcon className="h-4 w-4" />;
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search activities..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button className="w-full sm:w-auto bg-imperial-purple hover:bg-imperial-purple/90">
            <Plus className="h-4 w-4 mr-2" />
            New Activity
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="bg-imperial-dark-purple border-imperial-silver/10">
          <CardHeader>
            <CardTitle className="text-imperial-silver">Activity Types</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={activityTypesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {activityTypesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-imperial-dark-purple p-2 border border-imperial-silver/20 rounded">
                          <p className="text-sm text-imperial-silver">{`${payload[0].name}: ${payload[0].value} activities`}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="bg-imperial-dark-purple border-imperial-silver/10">
          <CardHeader>
            <CardTitle className="text-imperial-silver">Activity Timeline</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ChartContainer
              className="h-[300px]"
              config={{
                activities: {
                  theme: {
                    light: "#8B5CF6",
                    dark: "#8B5CF6",
                  },
                },
              }}
            >
              <BarChart data={activityTimelineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#9F9EA1" />
                <YAxis stroke="#9F9EA1" />
                <ChartTooltip content={(props) => <ChartTooltipContent {...props} />} />
                <Bar dataKey="count" name="Activities" fill="var(--color-activities)" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="bg-imperial-dark-purple border-imperial-silver/10 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-imperial-silver">Recent Activities</CardTitle>
          </CardHeader>
          <CardContent className="max-h-96 overflow-y-auto">
            <div className="space-y-4">
              {filteredActivities.length > 0 ? (
                filteredActivities.map(activity => (
                  <div key={activity.id} className="flex items-start gap-4 border-b border-imperial-silver/10 pb-4">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white
                      ${activity.type === 'Email' ? 'bg-purple-500' : 
                        activity.type === 'Call' ? 'bg-orange-500' : 
                        'bg-blue-500'}`}>
                      {getActivityIcon(activity.type)}
                    </div>
                    <div>
                      <div className="flex items-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium
                          ${activity.type === 'Email' ? 'bg-purple-500/20 text-purple-500' : 
                            activity.type === 'Call' ? 'bg-orange-500/20 text-orange-500' : 
                            'bg-blue-500/20 text-blue-500'}`}>
                          {activity.type}
                        </span>
                        <span className="text-imperial-silver/50 text-xs ml-2">
                          {activity.date}
                        </span>
                      </div>
                      <h4 className="text-imperial-silver font-medium mt-1">{activity.description}</h4>
                      <p className="text-imperial-silver/70 text-sm">
                        {(activity as any).customerName || 'Unknown customer'}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-imperial-silver/70 text-center py-4">No activities match your search criteria.</p>
              )}
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-imperial-dark-purple border-imperial-silver/10">
          <CardHeader>
            <CardTitle className="text-imperial-silver">Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="border-imperial-silver/10"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ActivitiesView;
