import React, { useState, useEffect } from 'react';
import { ChevronDown, Rocket } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [rocketLaunched, setRocketLaunched] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleRocketLaunch = () => {
    setRocketLaunched(true);
    setTimeout(() => setRocketLaunched(false), 3000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4">
      <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 animate-pulse-subtle">
            HAZRAT NASA
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 animate-glow" />
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Exploring the infinite cosmos, pushing the boundaries of human knowledge, 
          and inspiring generations to reach for the stars.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={handleRocketLaunch}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <span className="flex items-center gap-2">
              <Rocket className={`w-5 h-5 transition-transform duration-300 ${rocketLaunched ? 'transform -translate-y-20 opacity-0' : 'group-hover:transform group-hover:-translate-y-1'}`} />
              Launch Mission
            </span>
          </button>
          
          <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
            Explore Universe
          </button>
        </div>
        
        <div className="animate-bounce">
          <ChevronDown size={32} className="text-gray-400 mx-auto" />
        </div>
      </div>
      
      {/* Rocket Launch Effect */}
      {rocketLaunched && (
        <div className="fixed inset-0 pointer-events-none z-20">
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-rocket-launch">
            <Rocket size={60} className="text-orange-400 transform rotate-45" />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-20 bg-gradient-to-t from-orange-500 to-transparent animate-flame" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;