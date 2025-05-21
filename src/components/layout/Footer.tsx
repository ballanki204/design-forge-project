
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-design-charcoal text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-2xl mb-4">Inside Studio</h3>
            <p className="text-white/80 mb-6">
              Creating exceptional interior spaces that balance form and function
              to enhance the quality of life.
            </p>
            <div className="flex space-x-4">
              {/* Social icons */}
              <a href="https://instagram.com" className="hover:text-design-sage transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://pinterest.com" className="hover:text-design-sage transition-colors" aria-label="Pinterest">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="https://facebook.com" className="hover:text-design-sage transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-white/80 hover:text-design-sage transition-colors">Home</Link>
              <Link to="/about" className="text-white/80 hover:text-design-sage transition-colors">About</Link>
              <Link to="/services" className="text-white/80 hover:text-design-sage transition-colors">Services</Link>
              <Link to="/portfolio" className="text-white/80 hover:text-design-sage transition-colors">Portfolio</Link>
              <Link to="/contact" className="text-white/80 hover:text-design-sage transition-colors">Contact</Link>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <div className="space-y-4 text-white/80">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1" />
                <span>123 Design Avenue, New York, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} />
                <span>hello@insidestudio.com</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-sm text-white/60 flex flex-col md:flex-row justify-between">
          <p>© 2025 Inside Studio. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
