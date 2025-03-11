
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === textRef.current) {
              entry.target.classList.add('animate-fade-in-right');
            }
            if (entry.target === imageRef.current) {
              entry.target.classList.add('animate-fade-in-left');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={aboutRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="absolute w-[500px] h-[500px] rounded-full bg-neptech-blue/5 -top-64 -right-64"></div>
      <div className="absolute w-[300px] h-[300px] rounded-full bg-neptech-blue/3 bottom-20 -left-20"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            ref={textRef} 
            className="opacity-0 order-2 lg:order-1"
          >
            <span className="bg-neptech-blue/10 text-neptech-blue px-4 py-1 rounded-full text-sm font-medium tracking-wide">
              ABOUT NEPTECH
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-neptech-dark">
              Pioneering IT Solutions for <span className="highlight-text">Forward-Thinking</span> Businesses
            </h2>
            
            <p className="text-neptech-dark/70 mb-6">
              Founded by Shashank Ray, NepTech was born from a vision to bridge the gap between complex technology and business needs. We provide enterprise-grade IT solutions with a personal touch, ensuring that technology becomes an enabler rather than a barrier for your business growth.
            </p>
            
            <p className="text-neptech-dark/70 mb-8">
              Our team of certified IT professionals brings together decades of combined experience across various industry sectors, allowing us to deliver customized solutions that precisely match your operational requirements and strategic objectives.
            </p>
            
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-neptech-blue">
                  100%
                </span>
                <span className="text-sm text-neptech-dark/70">
                  Client Satisfaction
                </span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-neptech-blue">
                  24/7
                </span>
                <span className="text-sm text-neptech-dark/70">
                  Technical Support
                </span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-neptech-blue">
                  500+
                </span>
                <span className="text-sm text-neptech-dark/70">
                  Projects Completed
                </span>
              </div>
            </div>
            
            <a href="#contact" className="button-primary">
              Learn Our Story
            </a>
          </div>
          
          <div 
            ref={imageRef}
            className={cn(
              "relative order-1 lg:order-2 opacity-0",
              "before:content-[''] before:absolute before:w-full before:h-full",
              "before:border-2 before:border-neptech-blue/20 before:rounded-2xl",
              "before:-right-5 before:-bottom-5 before:z-0",
            )}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/e6109757-b182-4531-a4bb-4cd83be625a8.png" 
                alt="Shashank Ray - Founder of NepTech" 
                className="w-full h-auto object-cover rounded-2xl" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neptech-dark/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-1">Shashank Ray</h3>
                <p className="text-white/80">Founder & CEO</p>
              </div>
            </div>
            
            <div className="blur-bg absolute -left-5 -top-5 p-4 rounded-lg shadow-lg">
              <p className="text-neptech-blue font-medium">Our Mission</p>
              <p className="text-sm text-neptech-dark/70">
                To empower businesses through innovative IT solutions
              </p>
            </div>
            
            <div className="blur-bg absolute -right-5 top-1/3 p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-neptech-green"></div>
                <p className="text-sm font-medium text-neptech-dark">Always Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
