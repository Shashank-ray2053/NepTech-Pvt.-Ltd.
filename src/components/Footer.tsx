
import { Linkedin, Twitter, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neptech-dark text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/c4dad46c-99f2-4756-9567-b7f9ca14063d.png" 
                alt="NepTech Logo" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/70 mb-6">
              Empowering businesses with next-generation IT solutions and services. Your trusted partner for all your technology needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-neptech-blue transition-colors duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-neptech-blue transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-neptech-blue transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-neptech-blue transition-colors duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-white/70 hover:text-neptech-blue transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-neptech-blue transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-neptech-blue transition-colors duration-300">Services</a>
              </li>
              <li>
                <a href="#team" className="text-white/70 hover:text-neptech-blue transition-colors duration-300">Our Team</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-neptech-blue transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-white/70 hover:text-neptech-blue transition-colors duration-300">Remote IT Support</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-neptech-blue transition-colors duration-300">Cloud Services</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-neptech-blue transition-colors duration-300">IT Infrastructure</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-neptech-blue transition-colors duration-300">Data Backup & Recovery</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-neptech-blue transition-colors duration-300">IT Consultancy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-neptech-blue flex-shrink-0" size={18} />
                <span className="text-white/70">
                  123 Tech Street, Silicon Valley<br />
                  California, 94025
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-neptech-blue flex-shrink-0" size={18} />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-neptech-blue flex-shrink-0" size={18} />
                <span className="text-white/70">info@neptech.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} NepTech. All rights reserved. Designed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
