
import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAdmin } from "@/contexts/AdminContext";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, FolderPlus, Users, LogOut } from "lucide-react";

const AdminLayout = () => {
  const { isAdmin, logout } = useAdmin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      navigate("/admin/login");
    }
  }, [isAdmin, navigate]);

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col fixed inset-y-0 z-50 bg-white border-r shadow-sm">
        <div className="p-4 border-b">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-design-taupe rounded-full flex items-center justify-center text-white font-serif">
              BI
            </div>
            <span className="font-serif text-xl font-medium">
              Admin Panel
            </span>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/admin/dashboard" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>
          <Link to="/admin/projects" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
            <FolderPlus size={20} />
            <span>Projects</span>
          </Link>
          <Link to="/admin/contacts" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
            <Users size={20} />
            <span>Contacts</span>
          </Link>
        </nav>
        <div className="p-4 border-t">
          <Button variant="outline" className="w-full flex items-center gap-2" onClick={logout}>
            <LogOut size={18} />
            <span>Logout</span>
          </Button>
        </div>
      </div>

      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b p-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-design-taupe rounded-full flex items-center justify-center text-white font-serif">
            BI
          </div>
          <span className="font-serif text-xl font-medium">
            Admin
          </span>
        </Link>
        <Button variant="outline" size="sm" onClick={logout}>
          <LogOut size={18} />
        </Button>
      </div>

      {/* Main content */}
      <div className="flex-1 md:ml-64 p-6 pt-20 md:pt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
