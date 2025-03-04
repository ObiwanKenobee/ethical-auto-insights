
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';

const CtaSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dot-pattern bg-[length:30px_30px] opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-guardian-gray">
              Join the Ethical <br className="hidden sm:block" />
              <span className="text-guardian-blue">Automotive Revolution</span>
            </h2>
            
            <p className="text-lg text-guardian-gray/80 mb-8">
              Be part of the movement transforming the automotive industry with unprecedented transparency and ethical assurance.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-guardian-teal mt-0.5" />
                <div>
                  <h3 className="text-base font-semibold text-guardian-gray">Complete Supply Chain Visibility</h3>
                  <p className="text-sm text-guardian-gray/70">Track every component from source to vehicle.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-guardian-teal mt-0.5" />
                <div>
                  <h3 className="text-base font-semibold text-guardian-gray">Blockchain-Secured Data</h3>
                  <p className="text-sm text-guardian-gray/70">Immutable records ensure trustworthy verification.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-guardian-teal mt-0.5" />
                <div>
                  <h3 className="text-base font-semibold text-guardian-gray">Regulatory Compliance</h3>
                  <p className="text-sm text-guardian-gray/70">Stay ahead of evolving ethical sourcing requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-guardian-teal mt-0.5" />
                <div>
                  <h3 className="text-base font-semibold text-guardian-gray">Consumer Trust</h3>
                  <p className="text-sm text-guardian-gray/70">Build brand loyalty through proven ethical practices.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl p-8 shadow-elevated border border-guardian-silver/30">
              <h3 className="text-xl font-bold text-guardian-gray mb-6 text-center">Get Started Today</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="company" className="text-sm text-guardian-gray/70 mb-1 block">Company Name</label>
                  <Input 
                    id="company"
                    placeholder="Your company name" 
                    className="w-full border-guardian-blue/20 focus:border-guardian-blue" 
                  />
                </div>
                
                <div>
                  <label htmlFor="name" className="text-sm text-guardian-gray/70 mb-1 block">Full Name</label>
                  <Input 
                    id="name"
                    placeholder="Your full name" 
                    className="w-full border-guardian-blue/20 focus:border-guardian-blue" 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="text-sm text-guardian-gray/70 mb-1 block">Work Email</label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="your.email@company.com" 
                    className="w-full border-guardian-blue/20 focus:border-guardian-blue" 
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="text-sm text-guardian-gray/70 mb-1 block">Job Title</label>
                  <Input 
                    id="role"
                    placeholder="Your position" 
                    className="w-full border-guardian-blue/20 focus:border-guardian-blue" 
                  />
                </div>
                
                <Button type="submit" className="w-full py-6 bg-guardian-blue hover:bg-guardian-blue/90">
                  Request Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              
              <p className="text-xs text-center text-guardian-gray/60 mt-6">
                By signing up, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
