
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { toast } from "@/hooks/use-toast";

type AdminContextType = {
  isAdmin: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

const ADMIN_EMAIL = "admin@bhuvanainterior.com";
const ADMIN_PASSWORD = "admin123"; // In a real app, this should never be hardcoded

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check localStorage on initial load
    const storedAdminStatus = localStorage.getItem("bhuvanaAdmin");
    if (storedAdminStatus === "true") {
      setIsAdmin(true);
    }
  }, []);

  const login = (email: string, password: string) => {
    // Simple authentication - in a real app, use proper auth
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      localStorage.setItem("bhuvanaAdmin", "true");
      toast({
        title: "Login successful",
        description: "Welcome to the admin dashboard",
      });
      return true;
    } else {
      toast({
        title: "Login failed",
        description: "Invalid email or password",
        variant: "destructive",
      });
      return false;
    }
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem("bhuvanaAdmin");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  return (
    <AdminContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
};
