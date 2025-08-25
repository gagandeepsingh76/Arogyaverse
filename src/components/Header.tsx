
import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Wellness', href: '#wellness' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-kairali-cream/95 backdrop-blur-sm shadow-lg">
      {/* Top Bar */}
      <div className="bg-kairali-brown text-kairali-cream py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>+91 95555 04621</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>mail@arogyaverse.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>The Ayurvedic VR Experience</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            
            <img src="/LOGO.png" alt="AarogyaVerse Logo" className="h-16 w-auto" />
            <div className="text-sm text-kairali-gold font-medium">
               Immersive VR Ayurveda
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleScroll(item.href.replace('#', ''))}
                className="text-gray-800 hover:text-kairali-gold transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
            <Button 
              onClick={() => handleScroll('contact')}
              className="bg-kairali-gold hover:bg-kairali-gold-dark text-kairali-brown px-6 py-2 rounded-lg transition-all duration-300 font-semibold"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-kairali-brown" />
            ) : (
              <Menu className="w-6 h-6 text-kairali-brown" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-kairali-gold/30">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-aurogyaverse-brown hover:text-aurogyaverse-gold transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="border-kairali-brown text-kairali-brown hover:bg-kairali-brown hover:text-kairali-cream px-6 py-2 rounded-lg w-full font-semibold">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
