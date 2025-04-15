
import { DollarSign, Users, CreditCard, TrendingUp } from 'lucide-react';
import type { KpiData } from '@/components/dashboard/KpiCard';
import type { RevenueData } from '@/components/dashboard/RevenueChart';
import type { CustomerData } from '@/components/dashboard/CustomerChart';
import type { ExpenseData } from '@/components/dashboard/ExpenseChart';
import type { EventData } from '@/components/dashboard/BusinessCalendar';
import type { InsightData } from '@/components/dashboard/AiInsights';

// KPI data
export const kpiData: KpiData[] = [
  {
    title: 'Total Revenue',
    value: '$134,250',
    change: '+12.5%',
    isPositive: true,
    icon: DollarSign,
  },
  {
    title: 'New Customers',
    value: '670',
    change: '+5.2%',
    isPositive: true,
    icon: Users,
  },
  {
    title: 'Average Sale',
    value: '$523',
    change: '-2.1%',
    isPositive: false,
    icon: CreditCard,
  },
  {
    title: 'Conversion Rate',
    value: '3.8%',
    change: '+0.4%',
    isPositive: true,
    icon: TrendingUp,
  },
];

// Revenue chart data
export const revenueData: RevenueData[] = [
  { name: 'Jan', value: 12000 },
  { name: 'Feb', value: 15000 },
  { name: 'Mar', value: 18000 },
  { name: 'Apr', value: 16000 },
  { name: 'May', value: 21000 },
  { name: 'Jun', value: 25000 },
  { name: 'Jul', value: 27000 },
];

// Customer acquisition data
export const customerData: CustomerData[] = [
  { name: 'Q1', new: 120, returning: 80 },
  { name: 'Q2', new: 150, returning: 100 },
  { name: 'Q3', new: 180, returning: 120 },
  { name: 'Q4', new: 220, returning: 150 },
];

// Expense breakdown data
export const expenseData: ExpenseData[] = [
  { name: 'Operations', value: 35 },
  { name: 'Marketing', value: 20 },
  { name: 'R&D', value: 15 },
  { name: 'Admin', value: 10 },
  { name: 'Other', value: 20 },
];

// Calendar events data
export const calendarEvents: EventData[] = [
  { date: 'May 15', title: 'Quarterly Tax Filing Deadline', type: 'Tax' },
  { date: 'May 22', title: 'Board Meeting', type: 'Meeting' },
  { date: 'June 5', title: 'Marketing Campaign Launch', type: 'Marketing' },
  { date: 'June 12', title: 'Financial Review', type: 'Finance' },
  { date: 'June 30', title: 'Mid-Year Strategy Adjustment', type: 'Strategy' }
];

// AI insights data
export const insightsData: InsightData[] = [
  {
    title: 'Revenue Growth Analysis:',
    description: 'Your Q2 revenue shows a 12.5% increase compared to Q1. This outperforms your industry average of 8.3%.'
  },
  {
    title: 'Cost Optimization:',
    description: 'Your operational expenses have decreased by 3.2% while maintaining output. Consider applying similar efficiency measures to marketing spend.'
  },
  {
    title: 'Customer Retention:',
    description: 'Your returning customer rate of 32% is below target. Implementing a loyalty program could increase this metric based on competitive analysis.'
  }
];
