
import React, { useState } from 'react';
import { 
  Bell, 
  X, 
  CreditCard, 
  ArrowDown, 
  ArrowUp,
  Check
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";

// Sample notifications data
const sampleNotifications = [
  {
    id: 1,
    title: "New Deposit",
    description: "Your deposit of $5,000 has been processed",
    time: "2 hours ago",
    read: false,
    icon: <ArrowDown className="h-4 w-4 text-green-500" />
  },
  {
    id: 2,
    title: "Market Alert",
    description: "Bitcoin is up 5% in the last 24 hours",
    time: "5 hours ago",
    read: false,
    icon: <ArrowUp className="h-4 w-4 text-green-500" />
  },
  {
    id: 3,
    title: "Transaction Complete",
    description: "Your purchase of 0.05 BTC is complete",
    time: "1 day ago",
    read: true,
    icon: <CreditCard className="h-4 w-4 text-blue-500" />
  },
  {
    id: 4,
    title: "Account Security",
    description: "Your account password was changed",
    time: "3 days ago",
    read: true,
    icon: <Check className="h-4 w-4 text-blue-500" />
  }
];

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState(sampleNotifications);
  const [open, setOpen] = useState(false);
  const { isSmallMobile } = useIsMobile();
  
  const unreadCount = notifications.filter(notification => !notification.read).length;
  
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      read: true
    })));
  };
  
  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id 
        ? { ...notification, read: true } 
        : notification
    ));
  };
  
  const clearNotification = (id: number) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 px-1.5 py-0.5 min-w-5 h-5 flex items-center justify-center bg-primary text-primary-foreground text-xs">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="flex items-center justify-between p-3 border-b border-border">
          <h3 className="font-medium">Notifications</h3>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" onClick={markAllAsRead} className="text-xs">
              Mark all as read
            </Button>
          )}
        </div>
        {notifications.length > 0 ? (
          <ScrollArea className="h-[300px]">
            <div className="divide-y divide-border">
              {notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`p-3 flex items-start gap-3 ${notification.read ? "opacity-70" : "bg-muted/30"}`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    {notification.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <p className="font-medium text-sm">{notification.title}</p>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-5 w-5" 
                        onClick={(e) => {
                          e.stopPropagation();
                          clearNotification(notification.id);
                        }}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {notification.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {notification.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        ) : (
          <div className="flex flex-col items-center justify-center py-8">
            <Bell className="h-12 w-12 text-muted-foreground/50 mb-3" />
            <p className="text-sm text-muted-foreground">No notifications</p>
          </div>
        )}
        {notifications.length > 0 && (
          <div className="p-3 border-t border-border">
            <Button variant="outline" size="sm" className="w-full text-xs">
              View all notifications
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default NotificationCenter;
