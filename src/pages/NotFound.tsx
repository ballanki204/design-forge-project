
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-design-beige p-4">
      <div className="max-w-md text-center">
        <h1 className="text-6xl md:text-8xl font-serif mb-4 text-design-charcoal">404</h1>
        <h2 className="text-2xl md:text-3xl mb-6 text-design-dark">Page Not Found</h2>
        <p className="text-design-dark/80 mb-8">
          We can't seem to find the page you're looking for. It might have been removed, renamed, or doesn't exist.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center">
          <ArrowLeft className="mr-2" size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
