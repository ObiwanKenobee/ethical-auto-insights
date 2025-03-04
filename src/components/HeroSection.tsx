import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, BarChart2 } from 'lucide-react';
import AnimatedIcon from './ui-extensions/AnimatedIcon';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Make canvas responsive
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Set up nodes for visualization
    type Node = {
      x: number;
      y: number;
      radius: number;
      color: string;
      speed: number;
      direction: number;
      connections: number[];
    };
    
    const colors = ['#186F93', '#0EA5A5', '#2C3540'];
    const nodes: Node[] = [];
    const nodeCount = window.innerWidth < 768 ? 15 : 30;
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.5 + 0.1,
        direction: Math.random() * (Math.PI * 2),
        connections: []
      });
    }
    
    // Connect nodes that are close to each other
    const updateConnections = () => {
      const connectionDistance = canvas.width * 0.15;
      
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].connections = [];
        
        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;
          
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            nodes[i].connections.push(j);
          }
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Move nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        // Update position
        node.x += Math.cos(node.direction) * node.speed;
        node.y += Math.sin(node.direction) * node.speed;
        
        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) {
          node.direction = Math.PI - node.direction;
        }
        
        if (node.y < 0 || node.y > canvas.height) {
          node.direction = -node.direction;
        }
        
        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      }
      
      updateConnections();
      
      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        for (const connectionIndex of node.connections) {
          const connectedNode = nodes[connectionIndex];
          const dx = node.x - connectedNode.x;
          const dy = node.y - connectedNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Fade lines based on distance
          const maxDistance = canvas.width * 0.15;
          const opacity = 1 - (distance / maxDistance);
          
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connectedNode.x, connectedNode.y);
          ctx.strokeStyle = `rgba(44, 53, 64, ${opacity * 0.15})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
      
      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color + '40'; // Add transparency
        ctx.fill();
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden pt-20">
      {/* Background canvas for network animation */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 flex flex-col">
            <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-guardian-blue/10 border border-guardian-blue/20 text-guardian-blue">
              <span className="text-xs font-medium">Revolutionary Supply Chain Technology</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight animate-fade-in">
              The First Ethical <br className="hidden sm:block" />
              <span className="text-guardian-blue">Automotive Supply Chain</span> Dashboard
            </h1>
            
            <p className="text-lg md:text-xl text-guardian-gray/80 mb-8 max-w-xl animate-fade-in-delayed">
              End-to-end transparency for sourcing, production, and ethical compliance in the automotive industry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delayed">
              <Button className="px-8 py-6 bg-guardian-blue hover:bg-guardian-blue/90 rounded-md text-white transition-all duration-300 font-medium text-base">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button variant="outline" className="px-8 py-6 rounded-md border-guardian-blue/20 text-guardian-blue hover:bg-guardian-blue/5">
                Request a Demo
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-6 sm:gap-12 max-w-xl">
              <div className="flex items-start gap-3">
                <AnimatedIcon 
                  icon={<Shield className="h-6 w-6 text-guardian-blue" />} 
                  delay={300} 
                  animation="fade"
                />
                <div>
                  <h3 className="text-sm font-semibold text-guardian-gray">100% Verifiable</h3>
                  <p className="text-xs text-guardian-gray/70">Blockchain secured supply chain</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <AnimatedIcon 
                  icon={<BarChart2 className="h-6 w-6 text-guardian-teal" />} 
                  delay={500}
                  animation="fade"
                />
                <div>
                  <h3 className="text-sm font-semibold text-guardian-gray">Real-time Monitoring</h3>
                  <p className="text-xs text-guardian-gray/70">Track every component instantly</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5 relative">
            <div className="relative h-72 md:h-auto aspect-square rounded-2xl overflow-hidden glass-panel animate-fade-in-delayed">
              <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-guardian-blue/20 flex items-center justify-center animate-slow-spin">
                  <div className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-guardian-teal/20 flex items-center justify-center animate-slow-spin" style={{ animationDirection: 'reverse' }}>
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-guardian-silver/50 flex items-center justify-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-guardian-blue to-guardian-teal rounded-full shadow-lg flex items-center justify-center">
                        <Shield className="h-6 w-6 md:h-8 md:w-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Data points */}
              <div className="absolute top-1/4 left-1/4 h-3 w-3 rounded-full bg-guardian-blue animate-pulse-subtle"></div>
              <div className="absolute top-3/4 right-1/4 h-3 w-3 rounded-full bg-guardian-teal animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/4 left-1/2 h-3 w-3 rounded-full bg-guardian-blue animate-pulse-subtle" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-1/2 right-1/6 h-3 w-3 rounded-full bg-guardian-teal animate-pulse-subtle" style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 px-3 py-1.5 bg-white shadow-elevated rounded-lg text-sm font-medium text-guardian-gray flex items-center animate-float">
              <Shield className="h-4 w-4 text-guardian-blue mr-2" />
              Verified ✓
            </div>
            
            <div className="absolute -bottom-4 -left-4 px-3 py-1.5 bg-white shadow-elevated rounded-lg text-sm font-medium text-guardian-gray flex items-center animate-float" style={{ animationDelay: '1s' }}>
              <BarChart2 className="h-4 w-4 text-guardian-teal mr-2" />
              42 Components
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
