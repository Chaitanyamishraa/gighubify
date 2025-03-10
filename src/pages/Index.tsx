
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import { ArrowRight, Star, Clock, CheckCircle } from 'lucide-react';
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

// Service categories
const categories = [
  {
    id: 'youtube',
    title: 'YouTube Videos',
    icon: '🎬',
    count: 245
  },
  {
    id: 'social',
    title: 'Social Media',
    icon: '📱',
    count: 187
  },
  {
    id: 'wedding',
    title: 'Wedding Films',
    icon: '💍',
    count: 96
  },
  {
    id: 'corporate',
    title: 'Corporate Videos',
    icon: '🏢',
    count: 152
  },
  {
    id: 'color',
    title: 'Color Grading',
    icon: '🎨',
    count: 120
  },
  {
    id: 'animation',
    title: 'Animation',
    icon: '✨',
    count: 83
  }
];

// How it works steps
const howItWorks = [
  {
    id: '1',
    title: 'Find the Perfect Editor',
    description: 'Browse editor profiles and reviews to find the right match for your project.',
    icon: '🔍'
  },
  {
    id: '2',
    title: 'Communicate Your Needs',
    description: 'Discuss project details, requirements, and expectations directly with the editor.',
    icon: '💬'
  },
  {
    id: '3',
    title: 'Receive Quality Edits',
    description: 'Get your professionally edited videos delivered within the specified timeframe.',
    icon: '📽️'
  },
  {
    id: '4',
    title: 'Request Revisions If Needed',
    description: 'Work with your editor on adjustments until you're completely satisfied.',
    icon: '✏️'
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
      
      {/* Popular Categories */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find video editing services across various categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                to={`/explore?category=${category.id}`}
                className="bg-card hover:bg-accent/30 transition-colors border border-border/50 rounded-xl p-4 text-center card-hover"
              >
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="font-medium mb-1">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.count} services</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
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
      
      {/* How It Works */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How GigHubify Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A simple process to connect with video editors and get your project done
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border/50 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <div key={step.id} className="relative z-10">
                  <div className="bg-card border border-border/50 rounded-xl p-6 text-center h-full flex flex-col items-center shadow-subtle">
                    <div className="relative">
                      <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center text-3xl mb-4">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/explore" className="btn-primary">
              Find an Editor Now
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 md:py-24">
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
      
      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <p>Professional Editors</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <p>Completed Projects</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <p>Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p>Customer Support</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* From the Blog */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">From Our Blog</h2>
              <p className="mt-2 text-muted-foreground">Latest articles and resources</p>
            </div>
            <Link 
              to="/blog" 
              className="mt-4 md:mt-0 group flex items-center text-primary font-medium"
            >
              View all posts
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl overflow-hidden border border-border/50 shadow-subtle card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1574717024453-354056aafa98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2700&q=80" 
                  alt="Blog Post" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                  Editing Tips
                </span>
                <h3 className="text-xl font-bold mb-3">Top 10 Tips for Effective Video Editing</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  Learn the essential tips and tricks that professional video editors use to create stunning videos.
                </p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-sm text-muted-foreground">June 10, 2023</span>
                  <Link 
                    to="/blog/1" 
                    className="text-sm text-primary hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden border border-border/50 shadow-subtle card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2700&q=80" 
                  alt="Blog Post" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                  Techniques
                </span>
                <h3 className="text-xl font-bold mb-3">Creating Cinematic Transitions for Your Videos</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  Discover how to add cinematic transitions to take your videos to the next level.
                </p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-sm text-muted-foreground">May 22, 2023</span>
                  <Link 
                    to="/blog/2" 
                    className="text-sm text-primary hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden border border-border/50 shadow-subtle card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2700&q=80" 
                  alt="Blog Post" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                  Industry Trends
                </span>
                <h3 className="text-xl font-bold mb-3">The Future of Video Editing: AI and Automation</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  Exploring how artificial intelligence is changing the landscape of video editing.
                </p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-sm text-muted-foreground">April 15, 2023</span>
                  <Link 
                    to="/blog/3" 
                    className="text-sm text-primary hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-accent/30">
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
