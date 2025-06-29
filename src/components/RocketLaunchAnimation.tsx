import React, { useState, useEffect } from 'react';
import { Rocket, Flame } from 'lucide-react';

const RocketLaunchAnimation: React.FC = () => {
  const [isLaunching, setIsLaunching] = useState(false);
  const [rocketPosition, setRocketPosition] = useState(0);

  const launchRocket = () => {
    setIsLaunching(true);
    setRocketPosition(0);
    
    const interval = setInterval(() => {
      setRocketPosition(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLaunching(false);
            setRocketPosition(0);
          }, 1000);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-b from-black via-blue-900 to-purple-900">
      {/* Stars Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Launch Pad */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-gray-600 rounded-t-lg">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
      </div>

      {/* Rocket */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-100 ${
          isLaunching ? 'animate-pulse' : ''
        }`}
        style={{
          bottom: `${20 + rocketPosition}%`,
          transform: `translateX(-50%) ${isLaunching ? 'rotate(-5deg)' : 'rotate(0deg)'}`,
        }}
      >
        <div className="relative">
          <Rocket size={60} className="text-white drop-shadow-lg" />
          
          {/* Rocket Flames */}
          {isLaunching && (
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="relative">
                <Flame size={40} className="text-orange-500 animate-bounce" />
                <Flame size={30} className="absolute top-2 left-1/2 transform -translate-x-1/2 text-yellow-400 animate-pulse" />
                <Flame size={20} className="absolute top-4 left-1/2 transform -translate-x-1/2 text-red-500 animate-ping" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Launch Button */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button
          onClick={launchRocket}
          disabled={isLaunching}
          className={`px-8 py-4 rounded-full font-bold text-white transition-all duration-300 ${
            isLaunching
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 transform hover:scale-110 shadow-lg hover:shadow-2xl'
          }`}
        >
          {isLaunching ? 'LAUNCHING...' : 'LAUNCH ROCKET 🚀'}
        </button>
      </div>

      {/* Launch Effects */}
      {isLaunching && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="w-2 h-40 bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent animate-pulse" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-400 rounded-full animate-ping" />
        </div>
      )}
    </div>
  );
};

export default RocketLaunchAnimation;