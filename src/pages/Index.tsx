
import React, { useEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ServiceCard';
import FaqItem from '@/components/FaqItem';

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

// FAQ data
const faqItems = [
  {
    question: "How do I find the right video editor for my project?",
    answer: "You can browse our marketplace and filter editors based on specialization, price range, delivery time, and ratings. You can also post your project requirements and receive proposals from interested editors."
  },
  {
    question: "What if I'm not satisfied with the final result?",
    answer: "We offer a satisfaction guarantee. If you're not happy with the work delivered, you can request revisions from your editor. If issues persist, our support team will help resolve the situation."
  },
  {
    question: "How much does it cost to hire a video editor?",
    answer: "Prices vary depending on the complexity of your project, the editor's experience level, and delivery time. On average, professional video editing services range from $50 to $200 per project."
  },
  {
    question: "How quickly can I get my video edited?",
    answer: "Delivery times vary by editor and project complexity. Some editors offer express services with delivery in as little as 24 hours, while standard delivery times are typically 2-5 days."
  }
];

const Index = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    [servicesRef, testimonialsRef, faqRef, ctaRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
    
    return () => {
      [servicesRef, testimonialsRef, faqRef, ctaRef].forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);
  
  return (
    <main>
      <Hero />
      <Features />
      
      {/* Featured Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div ref={servicesRef} className="flex flex-col md:flex-row justify-between items-center mb-12 opacity-0">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display">Featured <span className="text-gradient">Services</span></h2>
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
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} {...service} delay={index * 200} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-accent/30 to-transparent">
        <div className="container mx-auto px-4">
          <div ref={testimonialsRef} className="text-center mb-16 opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold font-display">What Our <span className="text-gradient">Clients Say</span></h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              Hear from creators and businesses who've found the perfect video editors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`bg-card p-6 rounded-xl border border-border/50 shadow-subtle hover:shadow-md transition-all duration-300 hover:-translate-y-1 opacity-0 transform`}
                style={{ animationDelay: `${index * 150}ms` }}
                ref={el => {
                  if (el) {
                    setTimeout(() => {
                      el.classList.add('animate-fade-in-up');
                    }, index * 150);
                  }
                }}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full object-cover mr-4 border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold font-display">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"<span className="text-foreground">{testimonial.content}</span>"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div ref={faqRef} className="text-center mb-16 opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold font-display">Frequently Asked <span className="text-gradient">Questions</span></h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              Everything you need to know about hiring video editors on GigHubify
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <FaqItem 
                key={index}
                question={item.question}
                answer={item.answer}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-accent/30 to-transparent">
        <div className="container mx-auto px-4">
          <div ref={ctaRef} className="max-w-4xl mx-auto text-center opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Ready to Get <span className="text-gradient">Started?</span></h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of creators and businesses who trust GigHubify for their video editing needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/explore" className="btn-primary group">
                Find an Editor
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/become-seller" className="btn-secondary group">
                Become an Editor
                <ArrowRight className="ml-2 h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
