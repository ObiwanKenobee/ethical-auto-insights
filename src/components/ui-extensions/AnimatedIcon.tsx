
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedIconProps {
  icon: React.ReactNode;
  delay?: number;
  className?: string;
  animation?: 'fade' | 'slide-right' | 'slide-left' | 'float' | 'pulse' | 'spin';
}

const AnimatedIcon = ({ 
  icon, 
  delay = 0, 
  className, 
  animation = 'fade' 
}: AnimatedIconProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (animation) {
      case 'fade':
        return 'animate-fade-in';
      case 'slide-right':
        return 'animate-slide-in-right';
      case 'slide-left':
        return 'animate-slide-in-left';
      case 'float':
        return 'animate-float';
      case 'pulse':
        return 'animate-pulse-subtle';
      case 'spin':
        return 'animate-slow-spin';
      default:
        return 'animate-fade-in';
    }
  };
  
  return (
    <div className={cn('transition-all duration-300', getAnimationClass(), className)}>
      {icon}
    </div>
  );
};

export default AnimatedIcon;
