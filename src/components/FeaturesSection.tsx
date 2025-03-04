
import React from 'react';
import { 
  MapPin, 
  Factory, 
  RefreshCw, 
  Shield,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedIcon from './ui-extensions/AnimatedIcon';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
  className?: string;
}

const FeatureCard = ({ icon, title, description, color, delay, className }: FeatureCardProps) => {
  return (
    <div className={cn(
      "relative p-6 rounded-xl bg-white border border-guardian-silver/30 shadow-subtle transition-all duration-300 hover:shadow-elevated",
      "before:absolute before:top-0 before:left-8 before:right-8 before:h-px before:bg-gradient-to-r before:from-transparent before:via-guardian-blue/20 before:to-transparent",
      className
    )}>
      <div className="opacity-0 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
        <div className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
          color === "blue" && "bg-guardian-blue/10 text-guardian-blue",
          color === "teal" && "bg-guardian-teal/10 text-guardian-teal",
        )}>
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-guardian-gray mb-2">{title}</h3>
        <p className="text-sm text-guardian-gray/70 mb-4">{description}</p>
        <a href="#" className="inline-flex items-center text-sm font-medium text-guardian-blue link-hover">
          Learn more
          <ChevronRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-guardian-light relative">
      <div className="absolute inset-0 bg-dot-pattern bg-[length:30px_30px] pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-guardian-teal/10 border border-guardian-teal/20 text-guardian-teal">
            <span className="text-xs font-medium">Core Features</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-guardian-gray">
            Why Guardian-IO for <br className="hidden sm:block" />
            <span className="text-guardian-blue">Ethical Mobility?</span>
          </h2>
          
          <p className="text-lg text-guardian-gray/80 mx-auto">
            Our comprehensive platform provides unparalleled transparency and ethical assurance across the entire automotive supply chain.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<MapPin size={24} />}
            title="Real-Time Supply Chain Tracking"
            description="Monitor every material, from mine to assembly with blockchain-verified origins."
            color="blue"
            delay={100}
          />
          
          <FeatureCard
            icon={<Factory size={24} />}
            title="Ethical Manufacturing Verification"
            description="No forced labor, fair wages, and verified suppliers across your production line."
            color="teal"
            delay={200}
          />
          
          <FeatureCard
            icon={<RefreshCw size={24} />}
            title="Smart Vehicle Recycling"
            description="End waste & black-market resale with blockchain-secured vehicle history from cradle to grave."
            color="blue"
            delay={300}
          />
          
          <FeatureCard
            icon={<Shield size={24} />}
            title="Anti-Wildlife Trafficking Tech"
            description="Ensure vehicles are never used in illegal wildlife trade with advanced tracking and verification."
            color="teal"
            delay={400}
          />
        </div>
        
        <div className="mt-20 relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-guardian-blue to-guardian-teal text-white shadow-elevated overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Transparency Across Your Entire Supply Network</h3>
              <p className="text-white/80 mb-6">
                Gain complete visibility into your automotive components' journey from raw materials to finished product, with ethical assurance at every step.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs text-white/70">Supply Chain Visibility</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">3.5x</div>
                  <div className="text-xs text-white/70">Risk Reduction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-xs text-white/70">Material Traceability</div>
                </div>
              </div>
            </div>
            
            <div className="relative h-64 rounded-lg overflow-hidden glass-panel bg-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="220" height="220" viewBox="0 0 220 220" className="animate-slow-spin">
                  <circle cx="110" cy="110" r="100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <circle cx="110" cy="110" r="80" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                  <circle cx="110" cy="110" r="60" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  
                  {/* Data points and connections */}
                  <circle cx="110" cy="10" r="4" fill="white" />
                  <circle cx="210" cy="110" r="4" fill="white" />
                  <circle cx="110" cy="210" r="4" fill="white" />
                  <circle cx="10" cy="110" r="4" fill="white" />
                  
                  <path d="M110,10 L210,110 L110,210 L10,110 Z" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="5,5" />
                  
                  {/* Dynamic connections */}
                  <path 
                    d="M110,10 C150,50 150,170 110,210" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.6)" 
                    strokeWidth="2" 
                    strokeDasharray="1000" 
                    strokeDashoffset="1000" 
                    className="animate-data-flow"
                  />
                  <path 
                    d="M210,110 C170,150 50,150 10,110" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.6)" 
                    strokeWidth="2" 
                    strokeDasharray="1000" 
                    strokeDashoffset="1000" 
                    className="animate-data-flow"
                    style={{ animationDelay: "2s" }}
                  />
                </svg>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
