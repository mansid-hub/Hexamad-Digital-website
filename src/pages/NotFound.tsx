import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto animate-fade-in">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-display font-bold text-gradient mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Page Not Found</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary flex items-center justify-center">
            <Home size={20} className="mr-2" />
            Go Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn-secondary flex items-center justify-center"
          >
            <ArrowLeft size={20} className="mr-2" />
            Go Back
          </button>
        </div>

        <div className="mt-12 p-8 bg-gradient-card rounded-2xl border border-border">
          <h3 className="text-xl font-display font-semibold mb-4">Need Help?</h3>
          <p className="text-muted-foreground mb-6">
            If you believe this is an error, please contact our support team.
          </p>
          <Link to="/contact" className="text-primary hover:text-primary-glow transition-colors font-medium">
            Contact Support →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
