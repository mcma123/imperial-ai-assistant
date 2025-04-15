
export interface Customer {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  status: string;
  address?: string;
  createdAt: string;
  lastContact: string;
  lifecycleStage?: string;
  totalRevenue?: number;
  notes?: Note[];
  deals?: Deal[];
  activities?: Activity[];
}

export interface Note {
  id: string;
  content: string;
  date: string;
  createdBy?: string;
}

export interface Deal {
  id: string;
  name: string;
  stage: string;
  value: number;
  expectedCloseDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Activity {
  id: string;
  type: string;
  description: string;
  date: string;
  relatedTo?: string;
}
