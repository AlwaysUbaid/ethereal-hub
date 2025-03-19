
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import {
  LogOut,
  User,
  Moon,
  Sun,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Toggle } from "@/components/ui/toggle";

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [darkMode, setDarkMode] = useState(true);
  const [userInitials, setUserInitials] = useState('AD');
  const [userName, setUserName] = useState('Admin User');
  const [userEmail, setUserEmail] = useState('admin@elysium.com');
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    // Apply dark mode class to root element
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const handleLogout = () => {
    // Clear user session data, navigate to sign-in
    toast({
      title: "Logged out",
      description: "You have been logged out successfully"
    });
    navigate('/sign-in');
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    toast({
      title: `Theme changed to ${!darkMode ? 'dark' : 'light'} mode`,
      description: "Your preference has been saved"
    });
  };

  const handleProfileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
        toast({
          title: "Profile updated",
          description: "Your profile picture has been updated"
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="focus:outline-none">
          <Avatar className="h-10 w-10 border-2 border-primary/10 hover:border-primary/30 transition-colors">
            <AvatarImage src={profileImage || "/placeholder.svg"} />
            <AvatarFallback>{userInitials}</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{userName}</p>
            <p className="text-xs leading-none text-muted-foreground">{userEmail}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <label htmlFor="profile-upload" className="cursor-pointer flex items-center w-full">
              <User className="mr-2 h-4 w-4" />
              <span>Change Profile Picture</span>
              <input 
                id="profile-upload" 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleProfileUpload}
              />
            </label>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={toggleTheme}>
            {darkMode ? (
              <>
                <Sun className="mr-2 h-4 w-4" />
                <span>Light mode</span>
              </>
            ) : (
              <>
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark mode</span>
              </>
            )}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
