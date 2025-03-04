
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  BarChart2, 
  Map, 
  Activity, 
  CheckCircle, 
  AlertTriangle, 
  Package, 
  Truck, 
  ArrowRight,
  Plus
} from 'lucide-react';
import AnimatedIcon from './ui-extensions/AnimatedIcon';
import AnimatedNumber from './ui-extensions/AnimatedNumber';

const DashboardPreview = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <section 
      id="dashboard" 
      ref={sectionRef}
      className="section-padding relative bg-white overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-guardian-blue/10 border border-guardian-blue/20 text-guardian-blue">
            <span className="text-xs font-medium">Interactive Dashboard</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-guardian-gray">
            See the <span className="text-guardian-blue">Ethical Dashboard</span> in Action
          </h2>
          
          <p className="text-lg text-guardian-gray/80 mx-auto">
            Experience how our platform provides unprecedented visibility into your automotive supply chain, ensuring ethical compliance at every step.
          </p>
        </div>
        
        <div className="relative">
          {/* Dashboard interface preview */}
          <div className="rounded-xl shadow-elevated overflow-hidden border border-guardian-silver/30 bg-white">
            {/* Dashboard header */}
            <div className="bg-guardian-gray p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-guardian-blue to-guardian-teal flex items-center justify-center">
                  <span className="font-display text-white text-sm font-bold">G</span>
                </div>
                <span className="font-medium">Guardian-IO Dashboard</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <span>Model:</span>
                  <span className="font-medium text-white">EV-X4 Premium</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-xs font-medium">
                  All Systems Verified
                </div>
              </div>
            </div>
            
            {/* Dashboard content */}
            <div className="p-6 grid grid-cols-12 gap-6 max-h-[600px]">
              {/* Sidebar */}
              <div className="col-span-3 flex flex-col gap-4">
                {/* Navigation */}
                <div className="bg-guardian-light rounded-lg p-4">
                  <div className="text-sm font-medium text-guardian-gray/70 mb-3">Main Navigation</div>
                  
                  <div className="space-y-1">
                    <button className="w-full flex items-center gap-2 p-2 rounded-md bg-guardian-blue/10 text-guardian-blue text-sm font-medium">
                      <BarChart2 className="h-4 w-4" />
                      <span>Overview</span>
                    </button>
                    
                    <button className="w-full flex items-center gap-2 p-2 rounded-md text-guardian-gray hover:bg-guardian-light/70 text-sm font-medium transition-colors">
                      <Map className="h-4 w-4" />
                      <span>Supply Chain Map</span>
                    </button>
                    
                    <button className="w-full flex items-center gap-2 p-2 rounded-md text-guardian-gray hover:bg-guardian-light/70 text-sm font-medium transition-colors">
                      <Activity className="h-4 w-4" />
                      <span>Compliance Reports</span>
                    </button>
                    
                    <button className="w-full flex items-center gap-2 p-2 rounded-md text-guardian-gray hover:bg-guardian-light/70 text-sm font-medium transition-colors">
                      <CheckCircle className="h-4 w-4" />
                      <span>Verification Status</span>
                    </button>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="bg-guardian-light rounded-lg p-4 flex-1">
                  <div className="text-sm font-medium text-guardian-gray/70 mb-3">Key Metrics</div>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-md p-3 shadow-inner-subtle">
                      <div className="text-xs text-guardian-gray/70">Components Tracked</div>
                      <div className="text-xl font-semibold text-guardian-gray">
                        {inView && <AnimatedNumber value={328} delay={300} />}
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-md p-3 shadow-inner-subtle">
                      <div className="text-xs text-guardian-gray/70">Ethical Compliance</div>
                      <div className="text-xl font-semibold text-guardian-gray">
                        {inView && <AnimatedNumber value={98.7} suffix="%" delay={500} decimals={1} />}
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-md p-3 shadow-inner-subtle">
                      <div className="text-xs text-guardian-gray/70">Suppliers Verified</div>
                      <div className="text-xl font-semibold text-guardian-gray">
                        {inView && <AnimatedNumber value={42} delay={700} />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main content */}
              <div className="col-span-9 space-y-6">
                {/* Alerts */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-guardian-light rounded-lg p-4 border-l-4 border-green-500">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <div>
                        <div className="text-sm font-medium text-guardian-gray">All Materials Verified</div>
                        <div className="text-xs text-guardian-gray/70">Last verification: Today, 09:45 AM</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-guardian-light rounded-lg p-4 border-l-4 border-amber-500">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      <div>
                        <div className="text-sm font-medium text-guardian-gray">Supplier Documentation Review</div>
                        <div className="text-xs text-guardian-gray/70">One supplier needs updated certification</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Supply Chain Map */}
                <div className="bg-guardian-light rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm font-medium text-guardian-gray">Material Origin & Flow</div>
                    <Button variant="outline" size="sm" className="h-7 text-xs">
                      View Full Map
                    </Button>
                  </div>
                  
                  <div className="bg-white rounded-lg h-64 overflow-hidden relative">
                    {/* World map visualization */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwLDIwMCBDMTUwLDE1MCAyMDAsMTUwIDI1MCwyMDAgQzMwMCwyNTAgMzUwLDI1MCA0MDAsMjAwIEM0NTAsMTUwIDUwMCwxNTAgNTUwLDIwMCBDNjAwLDI1MCA2NTAsMjUwIDcwMCwyMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNCwxMTEsMTQ3LDAuMikiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNSwyIi8+PHBhdGggZD0iTTk1LDIyMCBDMTQ1LDE3MCAyMDUsMTcwIDI1NSwyMjAgQzMwNSwyNzAgMzU1LDI3MCA0MDUsMjIwIEM0NTUsMTcwIDUwNSwxNzAgNTU1LDIyMCBDNjA1LDI3MCA2NTUsMjcwIDcwNSwyMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNCwxNjUsIDE2NSwwLjIpIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjUsMiIvPjwvc3ZnPg==')] bg-center"></div>
                    
                    {/* Map points */}
                    <div className="absolute h-4 w-4 rounded-full bg-guardian-blue top-1/4 left-1/4 animate-pulse-subtle">
                      <div className="absolute inset-0 rounded-full bg-guardian-blue/50 animate-ping"></div>
                    </div>
                    <div className="absolute h-4 w-4 rounded-full bg-guardian-teal top-2/3 left-1/2 animate-pulse-subtle">
                      <div className="absolute inset-0 rounded-full bg-guardian-teal/50 animate-ping"></div>
                    </div>
                    <div className="absolute h-4 w-4 rounded-full bg-guardian-blue top-1/3 right-1/3 animate-pulse-subtle">
                      <div className="absolute inset-0 rounded-full bg-guardian-blue/50 animate-ping"></div>
                    </div>
                    
                    {/* Legend */}
                    <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-xs p-2 rounded shadow-subtle text-xs">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-guardian-blue"></div>
                        <span className="text-guardian-gray">Raw Materials</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-guardian-teal"></div>
                        <span className="text-guardian-gray">Manufacturing</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Components tracking */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-guardian-light rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm font-medium text-guardian-gray">Key Components Status</div>
                      <Button variant="ghost" size="sm" className="h-7 text-xs gap-1">
                        <Plus className="h-3 w-3" />
                        Add
                      </Button>
                    </div>
                    
                    <div className="space-y-2 max-h-36 overflow-y-auto pr-2">
                      <div className="bg-white p-2 rounded flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Package className="h-4 w-4 text-guardian-blue" />
                          <span className="text-xs font-medium">Battery Cells</span>
                        </div>
                        <div className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-xs">Verified</div>
                      </div>
                      
                      <div className="bg-white p-2 rounded flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Package className="h-4 w-4 text-guardian-blue" />
                          <span className="text-xs font-medium">Control System</span>
                        </div>
                        <div className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-xs">Verified</div>
                      </div>
                      
                      <div className="bg-white p-2 rounded flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Package className="h-4 w-4 text-guardian-blue" />
                          <span className="text-xs font-medium">Chassis Materials</span>
                        </div>
                        <div className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 text-xs">Pending</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-guardian-light rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm font-medium text-guardian-gray">Delivery Tracking</div>
                      <Button variant="ghost" size="sm" className="h-7 text-xs">Refresh</Button>
                    </div>
                    
                    <div className="space-y-2 max-h-36 overflow-y-auto pr-2">
                      <div className="bg-white p-2 rounded flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Truck className="h-4 w-4 text-guardian-teal" />
                          <span className="text-xs font-medium">EV Motors (Batch #2231)</span>
                        </div>
                        <div className="text-xs text-guardian-gray/70">Arriving in 2 days</div>
                      </div>
                      
                      <div className="bg-white p-2 rounded flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Truck className="h-4 w-4 text-guardian-teal" />
                          <span className="text-xs font-medium">Interior Components</span>
                        </div>
                        <div className="text-xs text-guardian-gray/70">In transit</div>
                      </div>
                      
                      <div className="bg-white p-2 rounded flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Truck className="h-4 w-4 text-guardian-teal" />
                          <span className="text-xs font-medium">Display Panels</span>
                        </div>
                        <div className="text-xs text-guardian-gray/70">Delivered</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white flex items-end justify-center pb-12">
            <div className="text-center max-w-md">
              <h3 className="text-xl font-bold text-guardian-gray mb-2">Ready to experience the full dashboard?</h3>
              <p className="text-guardian-gray/70 mb-6">
                Sign up for early access to explore all features of our ethical automotive supply chain platform.
              </p>
              <Button className="bg-guardian-blue hover:bg-guardian-blue/90">
                Sign Up for Early Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
