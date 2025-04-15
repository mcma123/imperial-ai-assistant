
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Customer, Deal } from '@/types/crm';
import { Input } from '@/components/ui/input'; 
import { Button } from '@/components/ui/button';
import { Search, Plus, Filter, DollarSign } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LineChart,
  Line 
} from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";

interface DealsViewProps {
  customers: Customer[];
}

const DealsView: React.FC<DealsViewProps> = ({ customers }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Extract all deals from customers
  const allDeals = customers.reduce((acc: Deal[], customer) => {
    if (customer.deals) {
      return [...acc, ...customer.deals.map(deal => ({
        ...deal,
        customerName: customer.name,
        customerCompany: customer.company
      }))];
    }
    return acc;
  }, []);

  const filteredDeals = allDeals.filter(deal => 
    deal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (deal as any).customerName?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Data for Deal Stages Chart
  const dealStagesData = [
    { name: 'Discovery', value: 5, amount: 25000 },
    { name: 'Proposal', value: 3, amount: 18000 },
    { name: 'Negotiation', value: 2, amount: 12000 },
    { name: 'Won', value: 4, amount: 50000 },
    { name: 'Lost', value: 1, amount: 5000 }
  ];

  // Data for Monthly Deals Forecast
  const monthlyForecast = [
    { name: 'Jan', amount: 15000 },
    { name: 'Feb', amount: 20000 },
    { name: 'Mar', amount: 18000 },
    { name: 'Apr', amount: 22000 },
    { name: 'May', amount: 28000 },
    { name: 'Jun', amount: 30000 },
    { name: 'Jul', amount: 25000 },
    { name: 'Aug', amount: 32000 },
    { name: 'Sep', amount: 38000 },
    { name: 'Oct', amount: 42000 },
    { name: 'Nov', amount: 45000 },
    { name: 'Dec', amount: 50000 }
  ];
  
  // Formatter for currency display
  const currencyFormatter = (value: number) => {
    return `$${value.toLocaleString()}`;
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search deals..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button className="w-full sm:w-auto bg-imperial-purple hover:bg-imperial-purple/90">
            <Plus className="h-4 w-4 mr-2" />
            Create Deal
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
            <CardTitle className="text-imperial-silver">Deal Stages</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ChartContainer
              className="h-[300px]"
              config={{
                deals: {
                  theme: {
                    light: "#0EA5E9",
                    dark: "#0EA5E9",
                  },
                },
                amount: {
                  theme: {
                    light: "#8B5CF6",
                    dark: "#8B5CF6",
                  },
                },
              }}
            >
              <BarChart data={dealStagesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#9F9EA1" />
                <YAxis yAxisId="left" orientation="left" stroke="#9F9EA1" />
                <YAxis yAxisId="right" orientation="right" stroke="#9F9EA1" tickFormatter={currencyFormatter} />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="value" name="Deals" fill="var(--color-deals)" />
                <Bar yAxisId="right" dataKey="amount" name="Amount" fill="var(--color-amount)" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        
        <Card className="bg-imperial-dark-purple border-imperial-silver/10">
          <CardHeader>
            <CardTitle className="text-imperial-silver">Monthly Deals Forecast</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ChartContainer
              className="h-[300px]"
              config={{
                forecast: {
                  theme: {
                    light: "#F97316",
                    dark: "#F97316",
                  },
                },
              }}
            >
              <LineChart data={monthlyForecast} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#9F9EA1" />
                <YAxis tickFormatter={currencyFormatter} stroke="#9F9EA1" />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="amount" 
                  name="Forecast" 
                  stroke="var(--color-forecast)" 
                  activeDot={{ r: 8 }} 
                  strokeWidth={2} 
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      
      <Card className="bg-imperial-dark-purple border-imperial-silver/10">
        <CardHeader>
          <CardTitle className="text-imperial-silver">Active Deals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredDeals.length > 0 ? (
              filteredDeals.map(deal => (
                <div key={deal.id} className="flex items-start gap-4 border-b border-imperial-silver/10 pb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-imperial-silver font-medium">{deal.name}</h4>
                    <p className="text-imperial-silver/70 text-sm">
                      {(deal as any).customerName} - {(deal as any).customerCompany}
                    </p>
                    <p className="text-imperial-silver/50 text-xs mt-1">
                      Expected close: {deal.expectedCloseDate || 'Not specified'}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-imperial-silver font-mono text-lg">${deal.value.toLocaleString()}</span>
                    <div className="mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium 
                        ${deal.stage === 'Won' ? 'bg-green-500/20 text-green-500' : 
                          deal.stage === 'Lost' ? 'bg-red-500/20 text-red-500' : 
                          'bg-blue-500/20 text-blue-500'}`}>
                        {deal.stage}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-imperial-silver/70 text-center py-4">No deals match your search criteria.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DealsView;
