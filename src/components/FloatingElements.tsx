import React from 'react';
import { Rocket, Satellite, Globe } from 'lucide-react';

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Floating Rocket */}
      <div className="absolute top-20 right-10 animate-float-slow">
        <Rocket 
          size={40} 
          className="text-blue-300 opacity-60 transform rotate-45" 
        />
      </div>
      
      {/* Orbiting Satellite */}
      <div className="absolute top-1/3 left-20 animate-orbit">
        <Satellite 
          size={32} 
          className="text-purple-300 opacity-50" 
        />
      </div>
      
      {/* Floating Globe */}
      <div className="absolute bottom-1/4 right-1/4 animate-float">
        <Globe 
          size={36} 
          className="text-cyan-300 opacity-40 animate-spin-slow" 
        />
      </div>
      
      {/* Additional floating elements */}
      <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-white opacity-60 rounded-full animate-ping" />
      <div className="absolute bottom-1/3 left-10 w-1 h-1 bg-blue-400 opacity-80 rounded-full animate-pulse" />
      <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-purple-400 opacity-50 rounded-full animate-bounce" />
    </div>
  );
};

export default FloatingElements;