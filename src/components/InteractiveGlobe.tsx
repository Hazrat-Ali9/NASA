import React, { useState } from 'react';
import { Globe, Satellite, Rocket, Star } from 'lucide-react';

const InteractiveGlobe: React.FC = () => {
  const [isRotating, setIsRotating] = useState(true);
  const [selectedOrbit, setSelectedOrbit] = useState<number | null>(null);

  const orbits = [
    { id: 1, name: 'ISS Orbit', altitude: '408 km', icon: Satellite },
    { id: 2, name: 'Hubble Telescope', altitude: '547 km', icon: Star },
    { id: 3, name: 'GPS Satellites', altitude: '20,200 km', icon: Satellite },
  ];

  const toggleRotation = () => {
    setIsRotating(!isRotating);
  };

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Earth's <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Orbital Network</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore the satellites and space stations orbiting our planet, forming an invisible network that connects our world.
          </p>
        </div>

        <div className="relative">
          {/* Central Earth */}
          <div className="relative w-80 h-80 mx-auto mb-12">
            <div 
              className={`w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-green-400 to-blue-600 shadow-2xl shadow-blue-500/30 ${
                isRotating ? 'animate-spin-slow' : ''
              }`}
              style={{
                background: 'conic-gradient(from 0deg, #3b82f6, #10b981, #06b6d4, #3b82f6)',
                boxShadow: '0 0 100px rgba(59, 130, 246, 0.3), inset 0 0 50px rgba(255, 255, 255, 0.1)'
              }}
            >
              <Globe size={60} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-30" />
            </div>

            {/* Orbital Rings */}
            {[1, 2, 3].map((ring) => (
              <div
                key={ring}
                className={`absolute inset-0 border border-white/20 rounded-full animate-pulse`}
                style={{
                  width: `${100 + ring * 40}%`,
                  height: `${100 + ring * 40}%`,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            ))}

            {/* Orbiting Satellites */}
            {orbits.map((orbit, index) => {
              const IconComponent = orbit.icon;
              const radius = 140 + index * 60;
              const animationDelay = index * 2;
              
              return (
                <div
                  key={orbit.id}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{
                    width: `${radius * 2}px`,
                    height: `${radius * 2}px`,
                  }}
                >
                  <div
                    className={`absolute w-8 h-8 cursor-pointer pointer-events-auto transition-transform duration-300 hover:scale-150 ${
                      selectedOrbit === orbit.id ? 'scale-150' : ''
                    }`}
                    style={{
                      top: '0%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      animation: `orbit ${8 + index * 2}s linear infinite`,
                      animationDelay: `${animationDelay}s`,
                    }}
                    onClick={() => setSelectedOrbit(selectedOrbit === orbit.id ? null : orbit.id)}
                  >
                    <IconComponent 
                      size={32} 
                      className={`text-cyan-400 drop-shadow-lg ${
                        selectedOrbit === orbit.id ? 'text-yellow-400' : ''
                      }`} 
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Control Panel */}
          <div className="flex justify-center mb-8">
            <button
              onClick={toggleRotation}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {isRotating ? 'Pause Rotation' : 'Start Rotation'}
            </button>
          </div>

          {/* Orbit Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {orbits.map((orbit) => {
              const IconComponent = orbit.icon;
              return (
                <div
                  key={orbit.id}
                  className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                    selectedOrbit === orbit.id
                      ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-400 shadow-lg shadow-cyan-400/20'
                      : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                  }`}
                  onClick={() => setSelectedOrbit(selectedOrbit === orbit.id ? null : orbit.id)}
                >
                  <IconComponent size={32} className="text-cyan-400 mb-3 mx-auto" />
                  <h3 className="text-lg font-semibold text-white mb-2">{orbit.name}</h3>
                  <p className="text-gray-300">Altitude: {orbit.altitude}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveGlobe;