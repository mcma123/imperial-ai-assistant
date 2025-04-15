
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import KpiSection from '@/components/dashboard/KpiSection';
import ChartsGrid from '@/components/dashboard/ChartsGrid';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
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
      <DashboardLayout 
        title="Business Intelligence Dashboard"
        subtitle="Analytics and insights for your business performance"
      >
        {/* KPI Cards */}
        <KpiSection kpiData={kpiData} />

        {/* Charts Grid */}
        <ChartsGrid 
          revenueData={revenueData}
          customerData={customerData}
          expenseData={expenseData}
          calendarEvents={calendarEvents}
        />

        {/* AI Insights */}
        <AiInsights insights={insightsData} />
      </DashboardLayout>
    </AppLayout>
  );
};

export default Dashboard;
