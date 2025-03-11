
import { useEffect, useRef } from 'react';
import { Headset, Cloud, Server, Database, BarChart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const services = [
  {
    title: 'Remote IT Support',
    description: 'Get immediate assistance for all your IT issues with our 24/7 remote support team.',
    icon: <Headset className="service-icon" />,
  },
  {
    title: 'Cloud Services',
    description: 'Securely store, access, and manage your data and applications in our optimized cloud environment.',
    icon: <Cloud className="service-icon" />,
  },
  {
    title: 'IT Infrastructure',
    description: 'Build a robust IT foundation with our custom infrastructure solutions designed for your business.',
    icon: <Server className="service-icon" />,
  },
  {
    title: 'Data Backup & Recovery',
    description: 'Protect your business with automated backup systems and rapid recovery solutions.',
    icon: <Database className="service-icon" />,
  },
  {
    title: 'IT Consultancy',
    description: 'Strategic guidance to align your IT investments with your business objectives for maximum ROI.',
    icon: <BarChart className="service-icon" />,
  },
];

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-scale-in');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  // 3D Card Effect
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      const content = card.querySelector('.card-3d-content') as HTMLElement;
      if (content) {
        content.style.transform = `translateZ(40px)`;
      }
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      const content = card.querySelector('.card-3d-content') as HTMLElement;
      if (content) {
        content.style.transform = 'translateZ(0)';
      }
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "service-card card-3d p-8 opacity-0",
        "hover:shadow-lg transition-all duration-500 ease-elastic"
      )}
    >
      <div className="card-3d-content">
        <div className="service-icon-container">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-4 text-neptech-dark">{title}</h3>
        <p className="text-neptech-dark/70">{description}</p>
        <a 
          href="#contact" 
          className="inline-block mt-6 text-neptech-blue font-medium hover:text-neptech-dark transition-colors duration-300"
        >
          Learn more →
        </a>
      </div>
      <div className="card-shine"></div>
    </div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              entry.target.classList.add('animate-fade-in');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="section-padding bg-neptech-gray relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 opacity-0">
          <span className="bg-neptech-blue/10 text-neptech-blue px-4 py-1 rounded-full text-sm font-medium tracking-wide">
            OUR SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-neptech-dark">
            Comprehensive IT Solutions for Modern Businesses
          </h2>
          <p className="text-neptech-dark/70">
            Our range of services is designed to address all your IT needs with cutting-edge technology and expert support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
