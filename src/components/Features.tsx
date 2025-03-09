
import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  const featureRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            featureRef.current?.classList.add('animate-scale-in');
          }, delay);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    if (featureRef.current) {
      observer.observe(featureRef.current);
    }
    
    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={featureRef} 
      className="bg-card shadow-subtle rounded-xl p-8 card-hover border border-border/50 opacity-0 transform"
    >
      <div className="flex flex-col items-center text-center">
        <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-6 shadow-inner">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-transparent">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-4 font-display">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          titleRef.current?.classList.add('animate-fade-in-up');
        }
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
    <div className="py-16 md:py-24 bg-gradient-to-b from-accent/30 to-transparent">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <h2 className="section-title font-display">Why Choose <span className="text-gradient">GigHubify</span></h2>
          <p className="section-subtitle max-w-xl mx-auto">
            We connect you with the best video editors for your project needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          <Feature 
            icon={<ShieldCheck className="h-8 w-8 text-primary" />}
            title="Vetted Professionals"
            description="Work with hand-picked video editors who deliver exceptional quality every time."
            delay={0}
          />
          <Feature 
            icon={<Clock className="h-8 w-8 text-primary" />}
            title="Quick Delivery"
            description="Get your edited videos back in as little as 24 hours with our express service."
            delay={200}
          />
          <Feature 
            icon={<CheckCircle2 className="h-8 w-8 text-primary" />}
            title="Satisfaction Guaranteed"
            description="Not happy with the results? Get unlimited revisions or your money back."
            delay={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
