
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import CrmLayout from '@/components/crm/CrmLayout';
import { customerData } from '@/data/crmData';

const CRM: React.FC = () => {
  return (
    <AppLayout>
      <CrmLayout 
        title="Customer Relationship Management"
        subtitle="Manage your customer relationships and interactions"
        customers={customerData}
      >
        {/* Empty children element to satisfy the props requirement */}
      </CrmLayout>
    </AppLayout>
  );
};

export default CRM;
