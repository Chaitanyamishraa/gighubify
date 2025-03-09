
import React from 'react';
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
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  price,
  description,
  rating,
  deliveryTime,
  image,
}) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden border border-border/50 shadow-subtle card-hover">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold leading-tight">{title}</h3>
          <div className="text-lg font-bold">
            ${price}
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center text-sm mb-4">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
            <span>{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            <span>{deliveryTime}</span>
          </div>
        </div>
        
        <Link 
          to={`/service/${id}`}
          className="flex items-center justify-center w-full py-2 px-4 rounded-md border border-border/80 text-sm font-medium transition-colors hover:bg-accent"
        >
          View Details
          <ExternalLink className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
