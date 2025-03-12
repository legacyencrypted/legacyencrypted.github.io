import { useState } from "react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onFeatureClick: () => void;
  onHowItWorksClick: () => void;
  onFaqClick: () => void;
  onWaitlistClick: () => void;
}

const Navbar = ({
  onFeatureClick,
  onHowItWorksClick,
  onFaqClick,
  onWaitlistClick
}: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (clickHandler: () => void) => {
    clickHandler();
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-primary font-bold text-xl">Manila Smokez</span>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => handleNavClick(onFeatureClick)}
              className="px-3 py-2 rounded-md text-sm font-medium text-dark hover:text-primary"
            >
              Features
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => handleNavClick(onHowItWorksClick)}
              className="px-3 py-2 rounded-md text-sm font-medium text-dark hover:text-primary"
            >
              How It Works
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => handleNavClick(onFaqClick)}
              className="px-3 py-2 rounded-md text-sm font-medium text-dark hover:text-primary"
            >
              FAQ
            </Button>
          </div>
          <div className="flex items-center">
            <Button 
              onClick={() => handleNavClick(onWaitlistClick)} 
              className="bg-primary hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium text-white"
            >
              Join Waitlist
            </Button>
          </div>
          <div className="flex items-center md:hidden">
            <Button variant="ghost" onClick={toggleMobileMenu} className="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-dark hover:text-primary focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Button 
            variant="ghost" 
            onClick={() => handleNavClick(onFeatureClick)}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-dark hover:text-primary"
          >
            Features
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => handleNavClick(onHowItWorksClick)}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-dark hover:text-primary"
          >
            How It Works
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => handleNavClick(onFaqClick)}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-dark hover:text-primary"
          >
            FAQ
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
