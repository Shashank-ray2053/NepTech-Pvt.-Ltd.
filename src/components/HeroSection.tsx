
import { useEffect, useRef } from 'react';
import { Cloud, Server, Cpu, Database, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation on load
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.classList.add('opacity-100', 'translate-y-0');
    }

    // Parallax effect for floating elements
    const handleMouseMove = (e: MouseEvent) => {
      if (!floatingElementsRef.current) return;
      
      const elements = floatingElementsRef.current.querySelectorAll('.floating-icon');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      elements.forEach((element, index) => {
        const factor = (index + 1) * 0.01;
        const transformValue = `translate(${x * 40 * factor}px, ${y * 40 * factor}px)`;
        (element as HTMLElement).style.transform = transformValue;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="home"
      ref={heroRef}
      className="min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden opacity-0 -translate-y-6 transition-all duration-1000 ease-elastic pt-20"
    >
      <div
        ref={floatingElementsRef}
        className="absolute inset-0 pointer-events-none"
      >
        <Cloud className="floating-icon text-neptech-blue/10 w-20 h-20 top-1/4 left-1/4" style={{animationDelay: '0s'}} />
        <Server className="floating-icon text-neptech-blue/10 w-16 h-16 top-1/3 right-1/4" style={{animationDelay: '1.5s'}} />
        <Cpu className="floating-icon text-neptech-blue/10 w-24 h-24 bottom-1/4 left-1/3" style={{animationDelay: '0.5s'}} />
        <Database className="floating-icon text-neptech-blue/10 w-20 h-20 bottom-1/3 right-1/5" style={{animationDelay: '2s'}} />
        <Cloud className="floating-icon text-neptech-blue/10 w-28 h-28 top-1/5 right-1/3" style={{animationDelay: '1s'}} />
      </div>

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="inline-block animate-blur-in opacity-0" style={{animationDelay: '0.3s'}}>
          <span className="bg-neptech-blue/10 text-neptech-blue px-4 py-1 rounded-full text-sm font-medium tracking-wide mb-8 inline-block">
            NEXT-GEN IT SOLUTIONS
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 mt-4 leading-tight tracking-tight animate-fade-in opacity-0" style={{animationDelay: '0.5s'}}>
          Empowering Business with <br />
          <span className="text-neptech-blue">Next-Gen IT Solutions</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-neptech-dark/80 mb-10 animate-fade-in opacity-0" style={{animationDelay: '0.7s'}}>
          NepTech delivers cutting-edge IT infrastructure and cloud solutions
          that transform how businesses operate in the digital landscape.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0" style={{animationDelay: '0.9s'}}>
          <a href="#services" className="button-primary group">
            Explore Services
            <ArrowRight className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
          </a>
          <a href="#contact" className="button-secondary">
            Contact Us
          </a>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-8 text-neptech-dark/60 animate-fade-in opacity-0" style={{animationDelay: '1.1s'}}>
          <div className="flex flex-col items-center">
            <span className="font-bold text-3xl text-neptech-dark/90">5+</span>
            <span className="text-sm">Years Experience</span>
          </div>
          <div className="h-10 w-px bg-neptech-dark/10 hidden sm:block"></div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-3xl text-neptech-dark/90">100+</span>
            <span className="text-sm">Clients Served</span>
          </div>
          <div className="h-10 w-px bg-neptech-dark/10 hidden sm:block"></div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-3xl text-neptech-dark/90">99.9%</span>
            <span className="text-sm">Uptime Guarantee</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
