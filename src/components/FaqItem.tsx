
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FaqItemProps {
  question: string;
  answer: string;
  delay?: number;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, delay = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const faqRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            faqRef.current?.classList.add('animate-fade-in-up');
          }, delay);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    if (faqRef.current) {
      observer.observe(faqRef.current);
    }
    
    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={faqRef}
      className="border border-border/50 rounded-lg overflow-hidden transition-all duration-300 mb-4 shadow-subtle hover:shadow-md opacity-0 transform"
    >
      <button
        className="flex justify-between items-center w-full p-5 text-left font-medium focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-display transition-colors group-hover:text-primary">{question}</span>
        <span className="ml-6 flex-shrink-0 text-muted-foreground transition-transform duration-300 transform group-hover:text-primary">
          {isOpen ? 
            <ChevronUp className="h-5 w-5" /> : 
            <ChevronDown className="h-5 w-5" />
          }
        </span>
      </button>
      
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="p-5 pt-0 text-muted-foreground bg-gradient-to-br from-accent/50 to-transparent">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
