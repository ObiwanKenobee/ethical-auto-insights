
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Guardian-IO has transformed how we verify our supply chain ethics. With complete transparency, we've increased consumer trust and regulatory compliance.",
    author: "Sarah Johnson",
    role: "Chief Sustainability Officer",
    company: "EcoMotive Motors"
  },
  {
    id: 2,
    quote: "The real-time tracking capabilities let us instantly identify and resolve ethical concerns in our manufacturing process, saving us both time and reputation.",
    author: "Michael Chen",
    role: "VP of Operations",
    company: "Quantum Vehicle Systems"
  },
  {
    id: 3,
    quote: "As investors focused on ESG, Guardian-IO gives us the verification we need to confidently back automotive companies with truly ethical practices.",
    author: "Elena Rodriguez",
    role: "Managing Partner",
    company: "Sustainable Future Capital"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <section id="testimonials" className="section-padding bg-guardian-gray relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI0MDAiIGN5PSIxMDAiIHI9IjMwMCIgZmlsbD0icmdiYSgyNCwxMTEsMTQ3LDAuMDUpIi8+PC9zdmc+')] bg-no-repeat bg-right-top opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white">
            <span className="text-xs font-medium">Testimonials</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Trusted by Leaders in <br className="hidden sm:block" />
            <span className="text-guardian-blue">Ethical Sourcing</span>
          </h2>
          
          <p className="text-lg text-white/80 mx-auto">
            See what industry pioneers say about our revolutionary platform for automotive supply chain ethics.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial card */}
            <div 
              className="relative bg-white rounded-xl p-8 md:p-10 shadow-elevated"
              style={{ minHeight: '16rem' }}
            >
              <Quote className="absolute top-8 left-8 text-guardian-blue/10 h-16 w-16" />
              
              <div className="relative z-10">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id}
                    className={cn(
                      "transition-opacity duration-500",
                      index === activeIndex ? "opacity-100" : "opacity-0 absolute inset-0"
                    )}
                  >
                    <blockquote className="text-xl md:text-2xl text-guardian-gray/90 font-medium mb-8">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      {/* Avatar placeholder */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-guardian-blue to-guardian-teal flex items-center justify-center text-white font-bold text-lg mr-4">
                        {testimonial.author.charAt(0)}
                      </div>
                      
                      <div>
                        <div className="font-semibold text-guardian-gray">{testimonial.author}</div>
                        <div className="text-sm text-guardian-gray/70">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="absolute -bottom-6 right-8 flex gap-3">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-guardian-blue text-white flex items-center justify-center shadow-elevated hover:bg-guardian-blue/90 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-guardian-blue text-white flex items-center justify-center shadow-elevated hover:bg-guardian-blue/90 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-12 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-white w-6" : "bg-white/30"
                )}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          
          {/* Logos */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white/10 h-16 flex items-center justify-center px-6 py-4 rounded-lg">
              <div className="text-white font-display font-bold text-lg">EcoMotive</div>
            </div>
            
            <div className="bg-white/10 h-16 flex items-center justify-center px-6 py-4 rounded-lg">
              <div className="text-white font-display font-bold text-lg">Quantum VS</div>
            </div>
            
            <div className="bg-white/10 h-16 flex items-center justify-center px-6 py-4 rounded-lg">
              <div className="text-white font-display font-bold text-lg">SFC Partners</div>
            </div>
            
            <div className="bg-white/10 h-16 flex items-center justify-center px-6 py-4 rounded-lg">
              <div className="text-white font-display font-bold text-lg">VoltFleet</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
