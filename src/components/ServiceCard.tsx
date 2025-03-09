
import React, { useRef, useEffect } from 'react';
import { Star, Clock, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  title: string;
  price: number;
  description: string;
  rating: number;
  deliveryTime: string;
  image?: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  price,
  description,
  rating,
  deliveryTime,
  image,
  delay = 0
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            cardRef.current?.classList.add('animate-fade-in-up');
          }, delay);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
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
  
  return (
    <div 
      ref={cardRef}
      className="bg-card rounded-xl overflow-hidden border border-border/50 shadow-subtle card-hover opacity-0 h-full flex flex-col"
    >
      {image && (
        <div className="relative h-48 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10 z-10 transition-opacity group-hover:opacity-70"></div>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 z-20 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
            ${price}
          </div>
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold leading-tight mb-3 font-display">{title}</h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">{description}</p>
        
        <div className="flex justify-between items-center text-sm mb-4">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
            <span className="font-medium">{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            <span>{deliveryTime}</span>
          </div>
        </div>
        
        <Link 
          to={`/service/${id}`}
          className="group flex items-center justify-center w-full py-2.5 px-4 rounded-md border border-primary/20 text-sm font-medium transition-all hover:bg-primary hover:text-white hover:border-primary"
        >
          View Details
          <ExternalLink className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
