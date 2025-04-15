
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import KpiCard from '@/components/dashboard/KpiCard';
import RevenueChart from '@/components/dashboard/RevenueChart';
import CustomerChart from '@/components/dashboard/CustomerChart';
import ExpenseChart from '@/components/dashboard/ExpenseChart';
import BusinessCalendar from '@/components/dashboard/BusinessCalendar';
import AiInsights from '@/components/dashboard/AiInsights';
import { 
  kpiData, 
  revenueData, 
  customerData, 
  expenseData,
  calendarEvents,
  insightsData 
} from '@/data/dashboardData';

const Dashboard = () => {
  return (
    <AppLayout>
      <div className="p-4 sm:p-6 lg:p-8 bg-imperial-black min-h-screen circuit-bg">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-imperial-silver mb-2">Business Intelligence Dashboard</h1>
          <p className="text-imperial-silver/70">Analytics and insights for your business performance</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {kpiData.map((kpi, index) => (
            <KpiCard key={index} data={kpi} />
          ))}
        </div>

        {/* Charts Grid */}
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

        {/* AI Insights */}
        <AiInsights insights={insightsData} />
      </div>
    </AppLayout>
  );
};

export default Dashboard;
