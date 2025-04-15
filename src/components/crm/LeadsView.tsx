
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Customer } from '@/types/crm';
import { Input } from '@/components/ui/input'; 
import { Button } from '@/components/ui/button';
import { Search, Plus, Filter } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";

interface LeadsViewProps {
  customers: Customer[];
}

const LeadsView: React.FC<LeadsViewProps> = ({ customers }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const leads = customers.filter(customer => 
    customer.lifecycleStage === 'Lead' || 
    customer.status === 'New'
  );
  
  const filteredLeads = leads.filter(lead => 
    lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Data for Lead Sources Chart
  const leadSources = [
    { name: 'Website', value: 45 },
    { name: 'Referral', value: 25 },
    { name: 'Social Media', value: 18 },
    { name: 'Event', value: 12 }
  ];
  
  // Data for Lead Status Chart
  const leadStatusData = [
    { name: 'New', count: leads.filter(lead => lead.status === 'New').length || 5 },
    { name: 'Contacted', count: 3 },
    { name: 'Qualified', count: 2 },
    { name: 'Proposal', count: 1 }
  ];

  // Colors for pie chart
  const COLORS = ['#8B5CF6', '#D946EF', '#0EA5E9', '#F97316'];
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search leads..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button className="w-full sm:w-auto bg-imperial-purple hover:bg-imperial-purple/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Lead
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="bg-imperial-dark-purple border-imperial-silver/10">
          <CardHeader>
            <CardTitle className="text-imperial-silver">Lead Sources</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={leadSources}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {leadSources.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-imperial-dark-purple p-2 border border-imperial-silver/20 rounded">
                          <p className="text-sm text-imperial-silver">{`${payload[0].name}: ${payload[0].value}`}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="bg-imperial-dark-purple border-imperial-silver/10">
          <CardHeader>
            <CardTitle className="text-imperial-silver">Lead Status</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ChartContainer
              className="h-[300px]"
              config={{
                lead: {
                  theme: {
                    light: "#8B5CF6",
                    dark: "#8B5CF6",
                  },
                },
              }}
            >
              <BarChart data={leadStatusData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" stroke="#9F9EA1" />
                <YAxis stroke="#9F9EA1" />
                <Tooltip />
                <Bar dataKey="count" name="Leads" fill="var(--color-lead)" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      
      <Card className="bg-imperial-dark-purple border-imperial-silver/10">
        <CardHeader>
          <CardTitle className="text-imperial-silver">Lead Activity Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredLeads.length > 0 ? (
              filteredLeads.map(lead => (
                <div key={lead.id} className="flex items-start gap-4 border-b border-imperial-silver/10 pb-4">
                  <div className="h-10 w-10 rounded-full bg-imperial-purple flex items-center justify-center text-white">
                    {lead.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-imperial-silver font-medium">{lead.name}</h4>
                    <p className="text-imperial-silver/70 text-sm">{lead.company}</p>
                    <p className="text-imperial-silver/50 text-xs mt-1">Added on {lead.createdAt}</p>
                  </div>
                  <div className="ml-auto">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-500`}>
                      {lead.status}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-imperial-silver/70 text-center py-4">No leads match your search criteria.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeadsView;
