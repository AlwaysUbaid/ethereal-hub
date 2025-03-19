import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';
import { 
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowDown, ArrowUp, BarChart3, ChevronDown, CreditCard, DollarSign, 
  Globe, History, Menu, Settings, UserCircle, X, Search
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import NotificationCenter from "@/components/dashboard/NotificationCenter";
import ProfileDropdown from "@/components/dashboard/ProfileDropdown";

// Sample data for charts
const portfolioData = [
  { date: '2023-01', value: 5000 },
  { date: '2023-02', value: 7500 },
  { date: '2023-03', value: 6800 },
  { date: '2023-04', value: 9000 },
  { date: '2023-05', value: 10200 },
  { date: '2023-06', value: 9800 },
  { date: '2023-07', value: 11500 },
  { date: '2023-08', value: 13000 },
  { date: '2023-09', value: 14500 },
  { date: '2023-10', value: 16000 },
  { date: '2023-11', value: 18000 },
  { date: '2023-12', value: 21000 },
];

const assetsData = [
  { name: 'BTC', value: 45 },
  { name: 'ETH', value: 25 },
  { name: 'SOL', value: 15 },
  { name: 'AVAX', value: 10 },
  { name: 'Other', value: 5 },
];

const COLORS = ['#8B5CF6', '#D946EF', '#F97316', '#0EA5E9', '#6E59A5'];

const recentTransactions = [
  { id: 1, type: 'Buy', asset: 'Bitcoin', amount: '0.05 BTC', value: '$2,150.00', time: '2h ago', status: 'completed' },
  { id: 2, type: 'Sell', asset: 'Ethereum', amount: '1.5 ETH', value: '$3,050.25', time: '5h ago', status: 'completed' },
  { id: 3, type: 'Buy', asset: 'Solana', amount: '10 SOL', value: '$950.00', time: '1d ago', status: 'completed' },
  { id: 4, type: 'Deposit', asset: 'USD', amount: '$5,000.00', value: '$5,000.00', time: '2d ago', status: 'completed' },
];

const marketData = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', price: 42150.80, change: 2.5 },
  { id: 2, name: 'Ethereum', symbol: 'ETH', price: 2250.25, change: -1.3 },
  { id: 3, name: 'Solana', symbol: 'SOL', price: 95.42, change: 5.7 },
  { id: 4, name: 'Avalanche', symbol: 'AVAX', price: 31.20, change: 0.8 },
  { id: 5, name: 'Cardano', symbol: 'ADA', price: 0.58, change: -2.1 },
];

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { toast } = useToast();
  const { isMobile, isSmallMobile } = useIsMobile();
  const [sidebarDrawerOpen, setSidebarDrawerOpen] = useState(false);

  // Auto-close sidebar on mobile
  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    if (isMobile) {
      setSidebarDrawerOpen(!sidebarDrawerOpen);
    } else {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  const MobileSidebar = () => (
    <Drawer open={sidebarDrawerOpen} onOpenChange={setSidebarDrawerOpen}>
      <DrawerContent className="h-[85vh] bg-card border-t border-border pt-2">
        <div className="flex items-center justify-between px-4 py-2 border-b border-border">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">Elysium</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setSidebarDrawerOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-4">
          <nav className="space-y-2">
            <Link to="/dashboard" className="flex items-center p-2 rounded-md bg-primary/10 text-primary font-medium">
              <BarChart3 className="h-5 w-5 mr-3" />
              <span>Dashboard</span>
            </Link>
            <Link to="#" className="flex items-center p-2 rounded-md hover:bg-muted text-foreground/80 font-medium">
              <Globe className="h-5 w-5 mr-3" />
              <span>Markets</span>
            </Link>
            <Link to="#" className="flex items-center p-2 rounded-md hover:bg-muted text-foreground/80 font-medium">
              <CreditCard className="h-5 w-5 mr-3" />
              <span>Portfolio</span>
            </Link>
            <Link to="#" className="flex items-center p-2 rounded-md hover:bg-muted text-foreground/80 font-medium">
              <History className="h-5 w-5 mr-3" />
              <span>Transactions</span>
            </Link>
            <Link to="#" className="flex items-center p-2 rounded-md hover:bg-muted text-foreground/80 font-medium">
              <UserCircle className="h-5 w-5 mr-3" />
              <span>Account</span>
            </Link>
            <Link to="#" className="flex items-center p-2 rounded-md hover:bg-muted text-foreground/80 font-medium">
              <Settings className="h-5 w-5 mr-3" />
              <span>Settings</span>
            </Link>
          </nav>
        </div>
      </DrawerContent>
    </Drawer>
  );

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <div className={`bg-card border-r border-border transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
          <div className="flex items-center justify-between h-16 px-4 border-b border-border">
            <Link to="/" className={`flex items-center ${!isSidebarOpen && 'justify-center'}`}>
              <span className={`text-xl font-bold text-primary ${!isSidebarOpen ? 'hidden' : 'block'}`}>Elysium</span>
              <span className={`text-xl font-bold text-primary ${isSidebarOpen ? 'hidden' : 'block'}`}>E</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              {isSidebarOpen ? <ChevronDown className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
          <div className="p-4">
            <nav className="space-y-2">
              <Link to="/dashboard" className="flex items-center p-2 rounded-md bg-primary/10 text-primary font-medium">
                <BarChart3 className={`h-5 w-5 ${!isSidebarOpen && 'mx-auto'}`} />
                <span className={`ml-3 ${!isSidebarOpen && 'hidden'}`}>Dashboard</span>
              </Link>
              <Link to="#" className="flex items-center p-2 rounded-md hover:bg-muted text-foreground/80 font-medium">
                <Globe className={`h-5 w-5 ${!isSidebarOpen && 'mx-auto'}`} />
                <span className={`ml-3 ${!isSidebarOpen && 'hidden'}`}>Markets</span>
              </Link>
              <Link to="#" className="flex items-center p-2 rounded-md hover:bg-muted text-foreground/80 font-medium">
                <CreditCard className={`h-5 w-5 ${!isSidebarOpen && 'mx-auto'}`} />
                <span className={`ml-3 ${!isSidebarOpen && 'hidden'}`}>Portfolio</span>
              </Link>
              <Link to="#" className="flex items-center p-2 rounded-md hover:bg-muted text-foreground/80 font-medium">
                <History className={`h-5 w-5 ${!isSidebarOpen && 'mx-auto'}`} />
                <span className={`ml-3 ${!isSidebarOpen && 'hidden'}`}>Transactions</span>
              </Link>
              <Link to="#" className="flex items-center p-2 rounded-md hover:bg-muted text-foreground/80 font-medium">
                <UserCircle className={`h-5 w-5 ${!isSidebarOpen && 'mx-auto'}`} />
                <span className={`ml-3 ${!isSidebarOpen && 'hidden'}`}>Account</span>
              </Link>
              <Link to="#" className="flex items-center p-2 rounded-md hover:bg-muted text-foreground/80 font-medium">
                <Settings className={`h-5 w-5 ${!isSidebarOpen && 'mx-auto'}`} />
                <span className={`ml-3 ${!isSidebarOpen && 'hidden'}`}>Settings</span>
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Mobile Drawer Sidebar */}
      {isMobile && <MobileSidebar />}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-card border-b border-border h-16 flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center">
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={toggleSidebar} className="mr-2">
                <Menu className="h-5 w-5" />
              </Button>
            )}
            <h1 className="text-lg md:text-xl font-bold">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            {!isSmallMobile && (
              <div className="relative hidden sm:block">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-40 md:w-64 pl-8 bg-background"
                />
              </div>
            )}
            <NotificationCenter />
            <ProfileDropdown />
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {/* Portfolio Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline">
                  <div className="text-xl md:text-2xl font-bold">$21,150.75</div>
                  <div className="ml-2 flex items-center text-sm text-green-500">
                    <ArrowUp className="h-4 w-4 mr-1" />
                    12.5%
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">vs previous month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Profit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline">
                  <div className="text-xl md:text-2xl font-bold">$3,246.15</div>
                  <div className="ml-2 flex items-center text-sm text-green-500">
                    <ArrowUp className="h-4 w-4 mr-1" />
                    8.3%
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">vs previous month</p>
              </CardContent>
            </Card>
            <Card className="sm:col-span-2 lg:col-span-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Current Assets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl md:text-2xl font-bold">5 Assets</div>
                <p className="text-xs text-muted-foreground mt-1">Bitcoin, Ethereum, Solana, Avalanche, USD</p>
              </CardContent>
            </Card>
          </div>

          {/* Portfolio Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
            <Card className="lg:col-span-2">
              <CardHeader className="pb-3">
                <CardTitle>Portfolio Performance</CardTitle>
                <CardDescription>Your portfolio value over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 md:h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={portfolioData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                      <YAxis tick={{ fontSize: 12 }} />
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <Tooltip contentStyle={{ backgroundColor: 'hsl(155 30% 8%)', border: '1px solid hsl(155 15% 15%)', borderRadius: '8px' }} />
                      <Area type="monotone" dataKey="value" stroke="#8B5CF6" fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Asset Allocation</CardTitle>
                <CardDescription>Current distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 md:h-80 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={assetsData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => (isSmallMobile || isMobile) ? 
                          `${name}` : 
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                        outerRadius={isMobile ? 60 : 80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {assetsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: 'hsl(155 30% 8%)', border: '1px solid hsl(155 15% 15%)', borderRadius: '8px' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Market data and Recent Transactions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Market Overview</CardTitle>
                <CardDescription>Current market prices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {marketData.map(coin => (
                    <div key={coin.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                          <span className="text-xs font-bold">{coin.symbol.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-medium">{coin.name}</p>
                          <p className="text-xs text-muted-foreground">{coin.symbol}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${coin.price.toLocaleString()}</p>
                        <p className={`text-xs ${coin.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {coin.change >= 0 ? '+' : ''}{coin.change}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Markets</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Your latest activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map(tx => (
                    <div key={tx.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                          tx.type === 'Buy' ? 'bg-green-500/20' : 
                          tx.type === 'Sell' ? 'bg-red-500/20' : 'bg-blue-500/20'
                        }`}>
                          {tx.type === 'Buy' ? <ArrowDown className="h-4 w-4" /> : 
                           tx.type === 'Sell' ? <ArrowUp className="h-4 w-4" /> : 
                           <DollarSign className="h-4 w-4" />}
                        </div>
                        <div>
                          <p className="font-medium">{tx.type} {tx.asset}</p>
                          <p className="text-xs text-muted-foreground">{tx.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{tx.value}</p>
                        <p className="text-xs">{tx.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Transactions</Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
