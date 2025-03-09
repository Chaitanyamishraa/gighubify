
import React, { useState, useEffect } from 'react';
import { Search, Sliders, X } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

// Mock data for services
const servicesData = [
  {
    id: '1',
    title: 'Professional Video Editing',
    price: 100,
    description: 'High-quality video editing with quick turnaround time. Perfect for YouTube videos, social media content, and more.',
    rating: 4.9,
    deliveryTime: '2 days',
    category: 'video-editing',
    image: 'https://images.unsplash.com/photo-1574717024453-354056aafa98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2700&q=80'
  },
  {
    id: '2',
    title: 'Motion Graphics & Animation',
    price: 150,
    description: 'Creative motion graphics and animations to make your videos stand out. Includes 2D animations, transitions, and effects.',
    rating: 4.8,
    deliveryTime: '3 days',
    category: 'motion',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2700&q=80'
  },
  {
    id: '3',
    title: 'Color Grading & Correction',
    price: 80,
    description: 'Professional color grading and correction to enhance the visual appeal of your videos. Cinematic looks and custom LUTs.',
    rating: 4.7,
    deliveryTime: '1 day',
    category: 'color-grading',
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2700&q=80'
  },
  {
    id: '4',
    title: 'Sound Design & Audio Editing',
    price: 120,
    description: 'Professional audio editing, sound design, and mixing for your videos. Clean up audio, add sound effects, and enhance overall quality.',
    rating: 4.6,
    deliveryTime: '2 days',
    category: 'sound-design',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2700&q=80'
  },
  {
    id: '5',
    title: 'Visual Effects & Compositing',
    price: 200,
    description: 'Add stunning visual effects and compositing to your videos. Green screen removal, particle effects, 3D integration, and more.',
    rating: 4.9,
    deliveryTime: '4 days',
    category: 'vfx',
    image: 'https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2700&q=80'
  },
  {
    id: '6',
    title: 'YouTube Video Optimization',
    price: 90,
    description: 'Complete YouTube video editing package including thumbnails, end screens, cards, and optimization for the YouTube algorithm.',
    rating: 4.8,
    deliveryTime: '2 days',
    category: 'video-editing',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2700&q=80'
  },
  {
    id: '7',
    title: 'Social Media Video Package',
    price: 110,
    description: 'Custom video edits optimized for social media platforms. Includes versions for Instagram, TikTok, YouTube Shorts, and more.',
    rating: 4.7,
    deliveryTime: '2 days',
    category: 'video-editing',
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2700&q=80'
  },
  {
    id: '8',
    title: 'Wedding Video Editing',
    price: 250,
    description: 'Beautiful wedding video editing services. Cinematic style, color grading, music synchronization, and emotional storytelling.',
    rating: 4.9,
    deliveryTime: '5 days',
    category: 'video-editing',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2700&q=80'
  },
  {
    id: '9',
    title: 'Corporate Video Production',
    price: 180,
    description: 'Professional corporate video editing for businesses. Includes intros, outros, lower thirds, text animations, and brand integration.',
    rating: 4.8,
    deliveryTime: '3 days',
    category: 'video-editing',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2700&q=80'
  }
];

// Categories for filtering
const categories = [
  { id: 'video-editing', label: 'Video Editing' },
  { id: 'motion', label: 'Motion Graphics' },
  { id: 'color-grading', label: 'Color Grading' },
  { id: 'sound-design', label: 'Sound Design' },
  { id: 'vfx', label: 'Visual Effects' },
  { id: 'graphics', label: 'Graphics' },
];

const Explore = () => {
  const [services, setServices] = useState(servicesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Filter services based on search term, selected categories, and price range
  useEffect(() => {
    let filteredServices = servicesData;
    
    // Filter by search term
    if (searchTerm) {
      filteredServices = filteredServices.filter(service => 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategories.length > 0) {
      filteredServices = filteredServices.filter(service => 
        selectedCategories.includes(service.category)
      );
    }
    
    // Filter by price range
    filteredServices = filteredServices.filter(service => 
      service.price >= priceRange[0] && service.price <= priceRange[1]
    );
    
    setServices(filteredServices);
  }, [searchTerm, selectedCategories, priceRange]);
  
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(categoryId)) {
        return prev.filter(id => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };
  
  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setPriceRange([0, 300]);
  };
  
  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Video Editing Services</h1>
          <p className="text-muted-foreground max-w-3xl">
            Browse our selection of professional video editors and services. Use the filters to narrow down your search.
          </p>
        </div>
        
        {/* Search and filter controls */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search for services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-3 flex items-center"
              >
                <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </button>
            )}
          </div>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden flex items-center justify-center py-2 px-4 rounded-lg border border-border bg-background"
          >
            <Sliders className="h-5 w-5 mr-2" />
            Filters
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters sidebar (desktop) */}
          <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0`}>
            <div className="bg-card p-6 rounded-lg border border-border/50 shadow-subtle">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold">Filters</h3>
                <button 
                  onClick={handleClearFilters}
                  className="text-sm text-primary hover:underline"
                >
                  Clear all
                </button>
              </div>
              
              {/* Categories */}
              <div className="mb-8">
                <h4 className="font-medium mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={category.id}
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => handleCategoryChange(category.id)}
                        className="rounded border-border text-primary focus:ring-primary/20"
                      />
                      <label htmlFor={category.id} className="ml-2 text-sm">
                        {category.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price range */}
              <div>
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">${priceRange[0]}</span>
                  <span className="text-sm text-muted-foreground">${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="300"
                  step="10"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          
          {/* Services grid */}
          <div className="flex-grow">
            {services.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <ServiceCard key={service.id} {...service} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No services found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters or search term to find what you're looking for.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="mt-4 btn-secondary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
