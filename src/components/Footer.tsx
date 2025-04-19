
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth'
    });
  }
};

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-br from-accent/5 via-background to-background relative pt-16 pb-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-accent/10 to-purple-400/5 blur-[80px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-accent/5 to-indigo-400/10 blur-[100px]"></div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-4 right-24 md:right-28 z-40 p-3 rounded-full bg-accent text-white shadow-lg",
          "hover:bg-accent/90 transition-all duration-300 transform",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/a9e768ed-ab1c-44bf-bb12-00801e6db89f.png" 
                alt="CodeByte Logo" 
                className="h-10 w-auto" 
              />
              <span className="font-bold text-xl text-accent">CodeByte</span>
            </div>
            <p className="text-sm text-foreground/70 max-w-xs">
              We provide innovative IT solutions that empower businesses to thrive in the digital landscape.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-foreground/70 hover:text-accent transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/70 mr-2"></span>
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-foreground/70 hover:text-accent transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/70 mr-2"></span>
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-foreground/70 hover:text-accent transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/70 mr-2"></span>
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-foreground/70 hover:text-accent transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/70 mr-2"></span>
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-foreground/70 hover:text-accent transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/70 mr-2"></span>
                  Remote IT Support
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-foreground/70 hover:text-accent transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/70 mr-2"></span>
                  Cloud Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-foreground/70 hover:text-accent transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/70 mr-2"></span>
                  IT Infrastructure
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-foreground/70 hover:text-accent transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/70 mr-2"></span>
                  Data Backup & Recovery
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-foreground/70 hover:text-accent transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/70 mr-2"></span>
                  IT Consultancy
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-foreground/70">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>123 Tech Avenue, Innovation District, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground/70">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+11234567890" className="hover:text-accent transition-colors">+1 (123) 456-7890</a>
              </div>
              <div className="flex items-center space-x-3 text-foreground/70">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@codebyte.tech" className="hover:text-accent transition-colors">info@codebyte.tech</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} CodeByte. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
