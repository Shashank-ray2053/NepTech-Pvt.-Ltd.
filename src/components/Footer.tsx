
import { Linkedin, Twitter, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 3D Hover effect for social media icons
    const socialIcons = document.querySelectorAll('.social-icon-3d');
    
    socialIcons.forEach(icon => {
      icon.addEventListener('mousemove', (e) => {
        const rect = (icon as HTMLElement).getBoundingClientRect();
        const x = (e as MouseEvent).clientX - rect.left;
        const y = (e as MouseEvent).clientY - rect.top;
        
        (icon as HTMLElement).style.setProperty('--icon-mouse-x', `${x}px`);
        (icon as HTMLElement).style.setProperty('--icon-mouse-y', `${y}px`);
      });
    });

    return () => {
      socialIcons.forEach(icon => {
        icon.removeEventListener('mousemove', () => {});
      });
    };
  }, []);

  return (
    <footer 
      ref={footerRef} 
      className="relative bg-gradient-to-br from-neptech-dark via-purple-900 to-blue-900 text-white pt-20 pb-8 overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-neptech-blue opacity-20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-purple-500 opacity-20 blur-[80px] rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="card-3d p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="card-3d-content">
              <div className="mb-6 flex items-center">
                <img 
                  src="/lovable-uploads/c4dad46c-99f2-4756-9567-b7f9ca14063d.png" 
                  alt="NepTech Logo" 
                  className="h-12 w-auto brightness-0 invert mr-3"
                />
                <h2 className="text-2xl font-bold text-white tracking-wide">NepTech</h2>
              </div>
              <div className="card-shine"></div>
              <p className="text-white/70 mb-6">
                Empowering businesses with next-generation IT solutions and services. Your trusted partner for all your technology needs.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="social-icon-3d w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-neptech-blue transition-colors duration-300 relative overflow-hidden">
                  <div className="relative z-10"><Linkedin size={18} /></div>
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 bg-gradient-to-br from-blue-400 to-blue-600 hover:opacity-100"></div>
                </a>
                <a href="#" className="social-icon-3d w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-neptech-blue transition-colors duration-300 relative overflow-hidden">
                  <div className="relative z-10"><Twitter size={18} /></div>
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 bg-gradient-to-br from-sky-400 to-sky-600 hover:opacity-100"></div>
                </a>
                <a href="#" className="social-icon-3d w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-neptech-blue transition-colors duration-300 relative overflow-hidden">
                  <div className="relative z-10"><Facebook size={18} /></div>
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 bg-gradient-to-br from-indigo-400 to-indigo-600 hover:opacity-100"></div>
                </a>
                <a href="#" className="social-icon-3d w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-neptech-blue transition-colors duration-300 relative overflow-hidden">
                  <div className="relative z-10"><Instagram size={18} /></div>
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 bg-gradient-to-br from-pink-400 to-purple-600 hover:opacity-100"></div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="card-3d p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="card-3d-content">
              <h3 className="text-lg font-semibold mb-6 text-neptech-blue">Quick Links</h3>
              <div className="card-shine"></div>
              <ul className="space-y-4">
                <li>
                  <a href="#home" className="text-white/70 hover:text-neptech-green transition-colors duration-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-neptech-blue rounded-full mr-2"></span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white/70 hover:text-neptech-green transition-colors duration-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-neptech-blue rounded-full mr-2"></span>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/70 hover:text-neptech-green transition-colors duration-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-neptech-blue rounded-full mr-2"></span>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#team" className="text-white/70 hover:text-neptech-green transition-colors duration-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-neptech-blue rounded-full mr-2"></span>
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/70 hover:text-neptech-green transition-colors duration-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-neptech-blue rounded-full mr-2"></span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="card-3d p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="card-3d-content">
              <h3 className="text-lg font-semibold mb-6 text-neptech-green">Services</h3>
              <div className="card-shine"></div>
              <ul className="space-y-4">
                <li>
                  <a href="#services" className="text-white/70 hover:text-neptech-blue transition-colors duration-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-neptech-green rounded-full mr-2"></span>
                    Remote IT Support
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/70 hover:text-neptech-blue transition-colors duration-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-neptech-green rounded-full mr-2"></span>
                    Cloud Services
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/70 hover:text-neptech-blue transition-colors duration-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-neptech-green rounded-full mr-2"></span>
                    IT Infrastructure
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/70 hover:text-neptech-blue transition-colors duration-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-neptech-green rounded-full mr-2"></span>
                    Data Backup & Recovery
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/70 hover:text-neptech-blue transition-colors duration-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-neptech-green rounded-full mr-2"></span>
                    IT Consultancy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="card-3d p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="card-3d-content">
              <h3 className="text-lg font-semibold mb-6 text-purple-400">Contact Info</h3>
              <div className="card-shine"></div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="mr-3 text-neptech-green flex-shrink-0" size={18} />
                  <span className="text-white/70">
                    123 Tech Street, Silicon Valley<br />
                    California, 94025
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-3 text-neptech-green flex-shrink-0" size={18} />
                  <span className="text-white/70">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-3 text-neptech-green flex-shrink-0" size={18} />
                  <span className="text-white/70">info@neptech.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center relative">
          <div className="absolute left-0 right-0 -top-4 flex justify-center">
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-neptech-blue to-transparent"></div>
          </div>
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} <span className="text-neptech-blue font-medium">NepTech</span>. All rights reserved. Designed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
