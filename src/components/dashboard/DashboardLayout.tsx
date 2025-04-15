
import React, { ReactNode } from 'react';

interface DashboardLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
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
      {children}
    </div>
  );
};

export default DashboardLayout;
