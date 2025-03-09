
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ServiceCard';

// Mock data for featured services
const featuredServices = [
  {
    id: '1',
    title: 'Professional Video Editing',
    price: 100,
    description: 'High-quality video editing with quick turnaround time. Perfect for YouTube videos, social media content, and more.',
    rating: 4.9,
    deliveryTime: '2 days',
    image: 'https://images.unsplash.com/photo-1574717024453-354056aafa98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2700&q=80'
  },
  {
    id: '2',
    title: 'Motion Graphics & Animation',
    price: 150,
    description: 'Creative motion graphics and animations to make your videos stand out. Includes 2D animations, transitions, and effects.',
    rating: 4.8,
    deliveryTime: '3 days',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2700&q=80'
  },
  {
    id: '3',
    title: 'Color Grading & Correction',
    price: 80,
    description: 'Professional color grading and correction to enhance the visual appeal of your videos. Cinematic looks and custom LUTs.',
    rating: 4.7,
    deliveryTime: '1 day',
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2700&q=80'
  }
];

// Mock data for testimonials
const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'YouTube Creator',
    content: 'GigHubify has completely transformed my content creation process. I found an amazing editor who understands my style perfectly.',
    avatar: 'https://randomuser.me/api/portraits/women/11.jpg'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Marketing Director',
    content: 'The quality of editors on this platform is outstanding. Quick turnaround times and professional results every time.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: '3',
    name: 'Alex Rivera',
    role: 'Independent Filmmaker',
    content: 'As a filmmaker with tight deadlines, finding reliable editors is crucial. GigHubify has been a game-changer for my projects.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
];

const Index = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main>
      <Hero />
      <Features />
      
      {/* Featured Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Featured Services</h2>
              <p className="mt-2 text-muted-foreground">Discover our top-rated video editing services</p>
            </div>
            <Link 
              to="/explore" 
              className="mt-4 md:mt-0 group flex items-center text-primary font-medium"
            >
              View all services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              Hear from creators and businesses who've found the perfect video editors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-card p-6 rounded-xl border border-border/50 shadow-subtle">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of creators and businesses who trust GigHubify for their video editing needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/explore" className="btn-primary">
                Find an Editor
              </Link>
              <Link to="/become-seller" className="btn-secondary">
                Become an Editor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
