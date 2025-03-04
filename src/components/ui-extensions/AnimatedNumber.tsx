
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number;
  threshold?: number;
}

const AnimatedNumber = ({
  value,
  duration = 2000,
  delay = 0,
  prefix = '',
  suffix = '',
  className,
  decimals = 0,
  threshold = 0,
}: AnimatedNumberProps) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp: number | null = null;
    const startValue = 0;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentNumber = progress * (value - startValue) + startValue;
      
      setCurrentValue(currentNumber);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [value, duration, isVisible]);
  
  return (
    <div className={cn('transition-opacity duration-500', isVisible ? 'opacity-100' : 'opacity-0', className)}>
      {prefix}
      {currentValue > threshold 
        ? currentValue.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
        : '0'}
      {suffix}
    </div>
  );
};

export default AnimatedNumber;
