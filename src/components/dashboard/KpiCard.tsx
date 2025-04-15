
import React from 'react';
import { ArrowDownRight, ArrowUpRight, LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export interface KpiData {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
}

interface KpiCardProps {
  data: KpiData;
}

const KpiCard: React.FC<KpiCardProps> = ({ data }) => {
  const { title, value, change, isPositive, icon: Icon } = data;
  
  return (
    <Card className="bg-imperial-dark-purple border-imperial-silver/10">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-imperial-silver/70 text-sm">{title}</p>
            <p className="text-2xl font-bold text-imperial-silver mt-1">{value}</p>
            <div className={`flex items-center mt-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {isPositive ? (
                <ArrowUpRight className="h-4 w-4 mr-1" />
              ) : (
                <ArrowDownRight className="h-4 w-4 mr-1" />
              )}
              <span className="text-sm">{change}</span>
            </div>
          </div>
          <div className="h-10 w-10 rounded-full bg-imperial-purple/20 flex items-center justify-center">
            <Icon className="h-5 w-5 text-imperial-light-purple" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default KpiCard;
