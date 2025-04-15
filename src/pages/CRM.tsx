
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import CrmLayout from '@/components/crm/CrmLayout';
import CustomerList from '@/components/crm/CustomerList';
import { customerData } from '@/data/crmData';

const CRM: React.FC = () => {
  return (
    <AppLayout>
      <CrmLayout 
        title="Customer Relationship Management"
        subtitle="Manage your customer relationships and interactions"
      >
        <CustomerList customers={customerData} />
      </CrmLayout>
    </AppLayout>
  );
};

export default CRM;
