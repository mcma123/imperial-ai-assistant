
import React from 'react';
import { Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface InsightData {
  title: string;
  description: string;
}

interface AiInsightsProps {
  insights: InsightData[];
}

const AiInsights: React.FC<AiInsightsProps> = ({ insights }) => {
  return (
    <Card className="bg-imperial-dark-purple border-imperial-silver/10 mb-8">
      <CardHeader>
        <CardTitle className="text-imperial-silver flex items-center">
          <Sparkles className="h-5 w-5 mr-2 text-imperial-light-purple" />
          AI Business Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div key={index} className="glass-panel rounded-lg p-4">
              <p className="text-imperial-silver">
                <span className="font-semibold">{insight.title}</span> {insight.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AiInsights;
