
import React from 'react';
import RevenueChart from '@/components/dashboard/RevenueChart';
import CustomerChart from '@/components/dashboard/CustomerChart';
import ExpenseChart from '@/components/dashboard/ExpenseChart';
import BusinessCalendar from '@/components/dashboard/BusinessCalendar';
import { RevenueData } from '@/components/dashboard/RevenueChart';
import { CustomerData } from '@/components/dashboard/CustomerChart';
import { ExpenseData } from '@/components/dashboard/ExpenseChart';
import { EventData } from '@/components/dashboard/BusinessCalendar';

interface ChartsGridProps {
  revenueData: RevenueData[];
  customerData: CustomerData[];
  expenseData: ExpenseData[];
  calendarEvents: EventData[];
}

const ChartsGrid: React.FC<ChartsGridProps> = ({ 
  revenueData, 
  customerData, 
  expenseData, 
  calendarEvents 
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Revenue Trend */}
      <RevenueChart data={revenueData} />

      {/* Customer Acquisition */}
      <CustomerChart data={customerData} />

      {/* Expense Breakdown */}
      <ExpenseChart data={expenseData} />

      {/* Upcoming Events */}
      <BusinessCalendar events={calendarEvents} />
    </div>
  );
};

export default ChartsGrid;
