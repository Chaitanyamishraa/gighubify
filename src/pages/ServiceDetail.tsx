
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Star, User, Calendar, CheckCircle } from 'lucide-react';

// Mock data for services - this would ideally come from an API
const servicesData = [
  {
    id: '1',
    title: 'Professional Video Editing',
    price: 100,
    description: 'High-quality video editing with quick turnaround time. Perfect for YouTube videos, social media content, and more.',
    rating: 4.9,
    deliveryTime: '2 days',
    category: 'video-editing',
    image: 'https://images.unsplash.com/photo-1574717024453-354056aafa98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2700&q=80',
    seller: {
      name: 'Alex Rodriguez',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      memberSince: 'January 2021',
      responseTime: '1 hour',
      completedProjects: 187
    },
    longDescription: 'I provide professional video editing services tailored to your specific needs. Whether you need content for YouTube, social media, or professional presentations, I can help create engaging and polished videos that capture your audience\'s attention. My services include cutting, color correction, transitions, effects, and audio synchronization to ensure your videos look and sound their best.',
    features: [
      'Professional color grading and correction',
      'Smooth transitions and effects',
      'Audio enhancement and syncing',
      'Custom intro and outro',
      'Text and graphic overlays',
      'Unlimited revisions'
    ]
  },
  {
    id: '2',
    title: 'Motion Graphics & Animation',
    price: 150,
    description: 'Creative motion graphics and animations to make your videos stand out. Includes 2D animations, transitions, and effects.',
    rating: 4.8,
    deliveryTime: '3 days',
    category: 'motion',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2700&q=80',
    seller: {
      name: 'Jessica Kim',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      memberSince: 'March 2020',
      responseTime: '2 hours',
      completedProjects: 215
    },
    longDescription: 'Elevate your visual content with my custom motion graphics and animation services. I specialize in creating eye-catching 2D animations, kinetic typography, and animated logos that help your brand message stand out. Perfect for social media ads, explainer videos, product demos, and YouTube content that requires a professional and creative touch.',
    features: [
      '2D character animations',
      'Kinetic typography',
      'Logo animations',
      'Explainer video graphics',
      'Social media animations',
      'Custom illustrations'
    ]
  },
  {
    id: '3',
    title: 'Color Grading & Correction',
    price: 80,
    description: 'Professional color grading and correction to enhance the visual appeal of your videos. Cinematic looks and custom LUTs.',
    rating: 4.7,
    deliveryTime: '1 day',
    category: 'color-grading',
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2700&q=80',
    seller: {
      name: 'Marcus Chen',
      avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
      memberSince: 'August 2019',
      responseTime: '30 minutes',
      completedProjects: 342
    },
    longDescription: 'Transform the look and feel of your footage with my professional color grading services. I\'ll enhance the mood, atmosphere, and visual consistency of your videos, giving them a cinematic and professional quality. My color correction will fix any exposure, white balance, or color issues in your footage, ensuring your content looks its absolute best.',
    features: [
      'Cinematic color grading',
      'Color correction for inconsistent footage',
      'Custom LUT creation',
      'Skin tone correction',
      'HDR optimization',
      'Look matching across multiple clips'
    ]
  }
];

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
    
    // Simulate fetching service from API
    setTimeout(() => {
      const foundService = servicesData.find(s => s.id === id);
      setService(foundService || null);
      setLoading(false);
    }, 500);
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen pt-28 pb-16 flex items-center justify-center">
        <div className="h-12 w-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin"></div>
      </div>
    );
  }
  
  if (!service) {
    return (
      <div className="min-h-screen pt-28 pb-16 container mx-auto px-4">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
          <p className="text-muted-foreground mb-6">The service you're looking for doesn't exist or has been removed.</p>
          <Link to="/explore" className="btn-primary">Browse Services</Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <Link 
          to="/explore" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to services
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Service image */}
            <div className="rounded-xl overflow-hidden mb-8 border border-border/50 shadow-subtle">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-auto object-cover aspect-video"
              />
            </div>
            
            {/* Service title and ratings */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
              <div className="flex items-center text-sm mb-4">
                <div className="flex items-center mr-4">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
                  <span className="font-medium">{service.rating.toFixed(1)}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Delivery: {service.deliveryTime}</span>
                </div>
              </div>
            </div>
            
            {/* Service description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">About This Service</h2>
              <div className="text-muted-foreground space-y-4">
                <p>{service.longDescription}</p>
              </div>
            </div>
            
            {/* Service features */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">What's Included</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            {/* Service pricing card */}
            <div className="sticky top-28 bg-card rounded-xl border border-border/50 shadow-subtle overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">${service.price}</h3>
                  <div className="text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 inline mr-1" />
                    {service.deliveryTime}
                  </div>
                </div>
                
                <button className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors mb-4">
                  Order Now
                </button>
                
                <button className="w-full py-3 px-4 bg-accent text-accent-foreground rounded-md font-medium hover:bg-accent/80 transition-colors">
                  Contact Seller
                </button>
              </div>
              
              {/* Seller info */}
              <div className="border-t border-border/50 p-6">
                <h3 className="font-semibold mb-4">About the Seller</h3>
                <div className="flex items-center mb-4">
                  <img 
                    src={service.seller.avatar} 
                    alt={service.seller.name} 
                    className="h-14 w-14 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h4 className="font-medium">{service.seller.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {service.seller.completedProjects} projects completed
                    </p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <User className="h-4 w-4 text-muted-foreground mr-2 mt-0.5" />
                    <span>Member since {service.seller.memberSince}</span>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-4 w-4 text-muted-foreground mr-2 mt-0.5" />
                    <span>Response time: {service.seller.responseTime}</span>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-4 w-4 text-muted-foreground mr-2 mt-0.5" />
                    <span>{service.seller.completedProjects} projects completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
