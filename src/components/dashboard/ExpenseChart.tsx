
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

export interface ExpenseData {
  name: string;
  value: number;
}

interface ExpenseChartProps {
  data: ExpenseData[];
}

const ExpenseChart: React.FC<ExpenseChartProps> = ({ data }) => {
  const COLORS = ['#7E69AB', '#9b87f5', '#1A1F2C', '#9F9EA1', '#D6BCFA'];
  
  return (
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
                data={data}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
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
  );
};

export default ExpenseChart;
