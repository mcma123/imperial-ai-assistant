
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export interface RevenueData {
  name: string;
  value: number;
}

interface RevenueChartProps {
  data: RevenueData[];
}

const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => {
  return (
    <Card className="bg-imperial-dark-purple border-imperial-silver/10">
      <CardHeader className="pb-2">
        <CardTitle className="text-imperial-silver">Revenue Trend</CardTitle>
        <CardDescription className="text-imperial-silver/70">Monthly revenue performance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
  );
};

export default RevenueChart;
