import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
const navLinks = [{
  name: 'Home',
  href: '#home'
}, {
  name: 'Services',
  href: '#services'
}, {
  name: 'About',
  href: '#about'
}, {
  name: 'Contact',
  href: '#contact'
}];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-elastic", isScrolled ? "py-3 bg-white/80 backdrop-blur-md shadow-sm" : "py-6 bg-transparent")}>
      <div className="container mx-auto px-6 flex justify-between items-center rounded-none">
        <a href="#home" className="flex items-center space-x-3">
          <img src="/lovable-uploads/a9e768ee-ab1c-44bf-bb12-00801e6db89f.png" alt="CodeByte Logo" className="object-cover" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map(link => <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>)}
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="button-primary">
            Get Started
          </a>
        </div>

        {/* Mobile Navigation Trigger */}
        <button onClick={toggleMenu} className="block md:hidden text-neptech-dark" aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn("fixed inset-0 bg-white z-40 transition-all duration-500 ease-elastic pt-24", isMenuOpen ? "translate-x-0" : "translate-x-full")}>
        <nav className="container mx-auto px-6 flex flex-col space-y-8">
          {navLinks.map(link => <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium text-neptech-dark hover:text-neptech-blue transition-colors duration-300">
              {link.name}
            </a>)}
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="button-primary w-full text-center">
            Get Started
          </a>
        </nav>
      </div>
    </header>;
};
export default Navbar;