
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export interface CustomerData {
  name: string;
  new: number;
  returning: number;
}

interface CustomerChartProps {
  data: CustomerData[];
}

const CustomerChart: React.FC<CustomerChartProps> = ({ data }) => {
  return (
    <Card className="bg-imperial-dark-purple border-imperial-silver/10">
      <CardHeader className="pb-2">
        <CardTitle className="text-imperial-silver">Customer Acquisition</CardTitle>
        <CardDescription className="text-imperial-silver/70">New vs Returning Customers</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
  );
};

export default CustomerChart;
