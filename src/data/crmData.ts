
import { Customer } from '@/types/crm';

export const customerData: Customer[] = [
  {
    id: '1',
    name: 'John Smith',
    company: 'Acme Corporation',
    email: 'john.smith@acme.com',
    phone: '+1 (555) 123-4567',
    status: 'Active',
    address: '123 Business St, Suite 100, San Francisco, CA 94107',
    createdAt: '2023-03-15',
    lastContact: '2023-09-22',
    lifecycleStage: 'Customer',
    totalRevenue: 15000,
    notes: [
      {
        id: 'n1',
        content: 'Met during annual conference. Interested in our enterprise solution.',
        date: '2023-08-10'
      },
      {
        id: 'n2',
        content: 'Follow-up call scheduled for next week to discuss implementation timeline.',
        date: '2023-09-22'
      }
    ],
    deals: [
      {
        id: 'd1',
        name: 'Enterprise License 2023',
        stage: 'Won',
        value: 12000,
        expectedCloseDate: '2023-06-30',
        createdAt: '2023-04-15',
        updatedAt: '2023-06-25'
      },
      {
        id: 'd2',
        name: 'Support Package Upgrade',
        stage: 'Negotiation',
        value: 3000,
        expectedCloseDate: '2023-10-15',
        createdAt: '2023-09-01',
        updatedAt: '2023-09-20'
      }
    ],
    activities: [
      {
        id: 'a1',
        type: 'Email',
        description: 'Sent proposal for support package upgrade',
        date: '2023-09-01'
      },
      {
        id: 'a2',
        type: 'Call',
        description: 'Discussed implementation timeline for new features',
        date: '2023-09-15'
      },
      {
        id: 'a3',
        type: 'Meeting',
        description: 'Product demo with technical team',
        date: '2023-09-22'
      }
    ]
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    company: 'Globex Industries',
    email: 'sarah.johnson@globex.com',
    phone: '+1 (555) 987-6543',
    status: 'New',
    createdAt: '2023-08-01',
    lastContact: '2023-09-18',
    totalRevenue: 0,
    notes: [
      {
        id: 'n3',
        content: 'Initial discovery call. Looking for inventory management solution.',
        date: '2023-08-05'
      }
    ],
    deals: [
      {
        id: 'd3',
        name: 'Starter Package',
        stage: 'Proposal',
        value: 5000,
        expectedCloseDate: '2023-10-30',
        createdAt: '2023-08-15',
        updatedAt: '2023-09-10'
      }
    ],
    activities: [
      {
        id: 'a4',
        type: 'Email',
        description: 'Sent initial product information',
        date: '2023-08-02'
      },
      {
        id: 'a5',
        type: 'Call',
        description: 'Discovery call to understand requirements',
        date: '2023-08-05'
      }
    ]
  },
  {
    id: '3',
    name: 'Michael Rodriguez',
    company: 'Oceanic Airlines',
    email: 'mrodriguez@oceanic.com',
    phone: '+1 (555) 456-7890',
    status: 'Inactive',
    createdAt: '2022-11-10',
    lastContact: '2023-07-15',
    lifecycleStage: 'Former Customer',
    totalRevenue: 22500,
    notes: [
      {
        id: 'n4',
        content: 'Contract expired. May renew after internal review in Q4.',
        date: '2023-07-15'
      }
    ]
  },
  {
    id: '4',
    name: 'Emma Wilson',
    company: 'Stark Industries',
    email: 'emma.wilson@stark.com',
    phone: '+1 (555) 789-0123',
    status: 'Active',
    createdAt: '2023-01-05',
    lastContact: '2023-09-10',
    lifecycleStage: 'Customer',
    totalRevenue: 35000,
    deals: [
      {
        id: 'd4',
        name: 'Premium Plan Renewal',
        stage: 'Discovery',
        value: 15000,
        expectedCloseDate: '2023-12-15',
        createdAt: '2023-09-01',
        updatedAt: '2023-09-10'
      }
    ]
  },
  {
    id: '5',
    name: 'David Chen',
    company: 'Initech',
    email: 'david.chen@initech.com',
    phone: '+1 (555) 234-5678',
    status: 'Pending',
    createdAt: '2023-08-20',
    lastContact: '2023-09-05',
    lifecycleStage: 'Lead',
    totalRevenue: 0
  },
  {
    id: '6',
    name: 'Lisa Thompson',
    company: 'Wayne Enterprises',
    email: 'lthompson@wayne.com',
    phone: '+1 (555) 345-6789',
    status: 'Active',
    createdAt: '2022-06-15',
    lastContact: '2023-08-30',
    lifecycleStage: 'Customer',
    totalRevenue: 42000
  },
  {
    id: '7',
    name: 'Robert Garcia',
    company: 'Umbrella Corporation',
    email: 'rgarcia@umbrella.com',
    phone: '+1 (555) 567-8901',
    status: 'Active',
    createdAt: '2023-04-10',
    lastContact: '2023-09-01',
    lifecycleStage: 'Customer',
    totalRevenue: 18500
  },
  {
    id: '8',
    name: 'Jennifer Lee',
    company: 'Nakatomi Trading',
    email: 'jennifer.lee@nakatomi.com',
    phone: '+1 (555) 678-9012',
    status: 'New',
    createdAt: '2023-09-01',
    lastContact: '2023-09-15',
    lifecycleStage: 'Lead',
    totalRevenue: 0
  }
];
