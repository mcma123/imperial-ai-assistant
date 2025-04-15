
import React from 'react';
import { 
  Drawer, 
  DrawerContent, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerDescription,
  DrawerFooter
} from '@/components/ui/drawer';
import { Customer } from '@/types/crm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableRow, TableCell } from '@/components/ui/table';
import { Mail, Phone, MapPin, Calendar, Edit, Trash2, Plus } from 'lucide-react';

interface CustomerDetailsProps {
  customer: Customer;
  onClose: () => void;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer, onClose }) => {
  return (
    <Drawer open={true} onOpenChange={() => onClose()}>
      <DrawerContent className="max-h-[90vh]">
        <DrawerHeader>
          <DrawerTitle className="flex items-center justify-between">
            <span>{customer.name}</span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(customer.status)}`}>
              {customer.status}
            </span>
          </DrawerTitle>
          <DrawerDescription>{customer.company}</DrawerDescription>
        </DrawerHeader>
        
        <div className="px-4 overflow-y-auto">
          <Tabs defaultValue="overview">
            <TabsList className="mb-4 w-full">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
              <TabsTrigger value="deals">Deals</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm text-muted-foreground">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 pt-0">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-imperial-silver/70" />
                    <span>{customer.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-imperial-silver/70" />
                    <span>{customer.phone}</span>
                  </div>
                  {customer.address && (
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-imperial-silver/70" />
                      <span>{customer.address}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm text-muted-foreground">Customer Details</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className="text-muted-foreground">Customer since</TableCell>
                        <TableCell>{customer.createdAt}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-muted-foreground">Last contact</TableCell>
                        <TableCell>{customer.lastContact}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-muted-foreground">Lifecycle stage</TableCell>
                        <TableCell>{customer.lifecycleStage || 'Customer'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-muted-foreground">Total revenue</TableCell>
                        <TableCell>${customer.totalRevenue?.toFixed(2) || '0.00'}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notes">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Notes</CardTitle>
                  <Button size="sm" variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Note
                  </Button>
                </CardHeader>
                <CardContent>
                  {customer.notes && customer.notes.length > 0 ? (
                    <div className="space-y-4">
                      {customer.notes.map((note, index) => (
                        <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                          <p className="text-sm">{note.content}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-muted-foreground">{note.date}</span>
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center py-8 text-muted-foreground">No notes available.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="deals">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Deals</CardTitle>
                  <Button size="sm" variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Deal
                  </Button>
                </CardHeader>
                <CardContent>
                  {customer.deals && customer.deals.length > 0 ? (
                    <div className="space-y-4">
                      {customer.deals.map((deal, index) => (
                        <div key={index} className="flex justify-between items-center border-b border-border pb-4 last:border-0 last:pb-0">
                          <div>
                            <p className="font-medium">{deal.name}</p>
                            <p className="text-sm text-muted-foreground">${deal.value.toFixed(2)}</p>
                          </div>
                          <div className="text-right">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDealStageColor(deal.stage)}`}>
                              {deal.stage}
                            </span>
                            <p className="text-xs text-muted-foreground mt-1">{deal.updatedAt}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center py-8 text-muted-foreground">No deals available.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="timeline">
              <Card>
                <CardHeader>
                  <CardTitle>Activity Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  {customer.activities && customer.activities.length > 0 ? (
                    <div className="space-y-4 relative before:absolute before:left-3.5 before:top-0 before:h-full before:border-l-2 before:border-dashed before:border-muted">
                      {customer.activities.map((activity, index) => (
                        <div key={index} className="relative pl-10 pb-6">
                          <div className="absolute left-0 top-1 h-7 w-7 rounded-full bg-imperial-purple flex items-center justify-center">
                            <Calendar className="h-4 w-4" />
                          </div>
                          <p className="font-medium">{activity.type}</p>
                          <p className="text-sm">{activity.description}</p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.date}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center py-8 text-muted-foreground">No activities recorded.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <DrawerFooter className="flex-row justify-between gap-2">
          <Button variant="outline" className="flex-1" onClick={onClose}>Close</Button>
          <Button className="flex-1 bg-imperial-purple hover:bg-imperial-purple/90">
            <Edit className="h-4 w-4 mr-2" />
            Edit Customer
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

// Helper function to get status color
function getStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case 'active':
      return 'bg-green-500/20 text-green-500';
    case 'inactive':
      return 'bg-gray-500/20 text-gray-400';
    case 'new':
      return 'bg-blue-500/20 text-blue-500';
    case 'pending':
      return 'bg-yellow-500/20 text-yellow-500';
    default:
      return 'bg-gray-500/20 text-gray-400';
  }
}

// Helper function to get deal stage color
function getDealStageColor(stage: string): string {
  switch (stage.toLowerCase()) {
    case 'won':
      return 'bg-green-500/20 text-green-500';
    case 'lost':
      return 'bg-red-500/20 text-red-500';
    case 'negotiation':
      return 'bg-orange-500/20 text-orange-500';
    case 'proposal':
      return 'bg-blue-500/20 text-blue-500';
    case 'discovery':
      return 'bg-purple-500/20 text-purple-500';
    default:
      return 'bg-gray-500/20 text-gray-400';
  }
}

export default CustomerDetails;
