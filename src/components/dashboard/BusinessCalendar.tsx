
import React from 'react';
import { Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export interface EventData {
  date: string;
  title: string;
  type: string;
}

interface BusinessCalendarProps {
  events: EventData[];
}

const BusinessCalendar: React.FC<BusinessCalendarProps> = ({ events }) => {
  return (
    <Card className="bg-imperial-dark-purple border-imperial-silver/10">
      <CardHeader className="pb-2">
        <CardTitle className="text-imperial-silver">Business Calendar</CardTitle>
        <CardDescription className="text-imperial-silver/70">Upcoming events and deadlines</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event, index) => (
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
  );
};

export default BusinessCalendar;
