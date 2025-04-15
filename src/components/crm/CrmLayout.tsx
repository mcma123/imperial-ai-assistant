
import React, { ReactNode } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CrmLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const CrmLayout: React.FC<CrmLayoutProps> = ({ 
  title, 
  subtitle, 
  children 
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
          {children}
        </TabsContent>
        
        <TabsContent value="leads">
          <div className="bg-imperial-dark-purple p-6 rounded-lg border border-imperial-silver/10">
            <h3 className="text-xl font-medium text-imperial-silver mb-4">Lead Management</h3>
            <p className="text-imperial-silver/70">Track and manage your leads here.</p>
          </div>
        </TabsContent>
        
        <TabsContent value="deals">
          <div className="bg-imperial-dark-purple p-6 rounded-lg border border-imperial-silver/10">
            <h3 className="text-xl font-medium text-imperial-silver mb-4">Deal Pipeline</h3>
            <p className="text-imperial-silver/70">Track your sales pipeline and ongoing deals.</p>
          </div>
        </TabsContent>
        
        <TabsContent value="activities">
          <div className="bg-imperial-dark-purple p-6 rounded-lg border border-imperial-silver/10">
            <h3 className="text-xl font-medium text-imperial-silver mb-4">Recent Activities</h3>
            <p className="text-imperial-silver/70">View all customer interactions and scheduled activities.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CrmLayout;
