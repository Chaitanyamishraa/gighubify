
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);
  
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glassmorphism py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              GigHubify
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/explore" 
              className={`font-medium transition-colors hover:text-primary ${location.pathname === '/explore' ? 'text-primary' : 'text-foreground/80'}`}
            >
              Explore
            </Link>
            <Link 
              to="/become-seller" 
              className={`font-medium transition-colors hover:text-primary ${location.pathname === '/become-seller' ? 'text-primary' : 'text-foreground/80'}`}
            >
              Become a Seller
            </Link>
            <div className="flex items-center space-x-4">
              <Link 
                to="/signin" 
                className={`font-medium transition-colors hover:text-primary ${location.pathname === '/signin' ? 'text-primary' : 'text-foreground/80'}`}
              >
                Sign In
              </Link>
              <Link 
                to="/signup" 
                className="btn-primary"
              >
                Sign Up
              </Link>
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glassmorphism mt-1 animate-fade-in">
          <div className="flex flex-col space-y-4 p-6">
            <Link 
              to="/explore" 
              onClick={closeMenu}
              className={`font-medium transition-colors hover:text-primary ${location.pathname === '/explore' ? 'text-primary' : 'text-foreground/80'}`}
            >
              Explore
            </Link>
            <Link 
              to="/become-seller" 
              onClick={closeMenu}
              className={`font-medium transition-colors hover:text-primary ${location.pathname === '/become-seller' ? 'text-primary' : 'text-foreground/80'}`}
            >
              Become a Seller
            </Link>
            <div className="pt-2 border-t border-border">
              <Link 
                to="/signin" 
                onClick={closeMenu}
                className="block w-full mb-2 text-center py-2 font-medium transition-colors hover:text-primary"
              >
                Sign In
              </Link>
              <Link 
                to="/signup" 
                onClick={closeMenu}
                className="block w-full text-center py-2 btn-primary"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
