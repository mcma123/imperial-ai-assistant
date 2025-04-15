
import React from 'react';
import KpiCard from '@/components/dashboard/KpiCard';
import { KpiData } from '@/components/dashboard/KpiCard';

interface KpiSectionProps {
  kpiData: KpiData[];
}

const KpiSection: React.FC<KpiSectionProps> = ({ kpiData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {kpiData.map((kpi, index) => (
        <KpiCard key={index} data={kpi} />
      ))}
    </div>
  );
};

export default KpiSection;
