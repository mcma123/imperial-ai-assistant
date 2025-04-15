
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Settings, MessageSquare, BarChart3, User, Lightbulb, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/common/Logo';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  
  // Close sidebar on route change (mobile)
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  const navItems = [
    { icon: Home, name: 'Home', path: '/' },
    { icon: MessageSquare, name: 'Chat', path: '/chat' },
    { icon: BarChart3, name: 'Dashboard', path: '/dashboard' },
    { icon: Users, name: 'CRM', path: '/crm' },
    { icon: Lightbulb, name: 'Specializations', path: '/specializations' },
    { icon: User, name: 'Profile', path: '/profile' },
    { icon: Settings, name: 'Settings', path: '/settings' },
  ];

  return (
    <div className="flex min-h-screen bg-background dark">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-imperial-dark-purple transition-transform duration-200 ease-in-out border-r border-imperial-silver/10 md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 px-4 border-b border-imperial-silver/10">
            <Logo />
          </div>
          
          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center px-4 py-3 text-sm rounded-md transition-colors group ${
                    isActive 
                      ? 'bg-imperial-purple text-white' 
                      : 'text-imperial-silver hover:bg-imperial-black hover:text-white'
                  }`}
                >
                  <item.icon className={`h-5 w-5 mr-3 ${isActive ? 'text-white' : 'text-imperial-silver group-hover:text-white'}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
          
          <div className="px-4 py-4 border-t border-imperial-silver/10">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-imperial-purple flex items-center justify-center">
                  <span className="text-white font-medium text-sm">AI</span>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-imperial-silver">Agent Imperial</p>
                <p className="text-xs text-imperial-silver/70">v1.0</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className={`flex-1 ${sidebarOpen ? 'md:ml-64' : 'ml-0 md:ml-64'}`}>
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
