
import React, { ReactNode } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CustomerList from './CustomerList';
import LeadsView from './LeadsView';
import DealsView from './DealsView';
import ActivitiesView from './ActivitiesView';
import { Customer } from '@/types/crm';

interface CrmLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  customers: Customer[];
}

const CrmLayout: React.FC<CrmLayoutProps> = ({ 
  title, 
  subtitle, 
  children,
  customers 
}) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-imperial-black min-h-screen circuit-bg">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-imperial-silver mb-2">{title}</h1>
        <p className="text-imperial-silver/70">{subtitle}</p>
      </div>
      
      <Tabs defaultValue="customers">
        <TabsList className="mb-4">
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
          <TabsTrigger value="deals">Deals</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
        </TabsList>
        
        <TabsContent value="customers">
          <CustomerList customers={customers} />
        </TabsContent>
        
        <TabsContent value="leads">
          <LeadsView customers={customers} />
        </TabsContent>
        
        <TabsContent value="deals">
          <DealsView customers={customers} />
        </TabsContent>
        
        <TabsContent value="activities">
          <ActivitiesView customers={customers} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CrmLayout;
