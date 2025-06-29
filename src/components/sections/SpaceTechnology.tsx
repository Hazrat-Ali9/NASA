import React, { useState } from 'react';
import { Smartphone, Wifi, Heart, Car, Home, Zap, Cpu, Satellite } from 'lucide-react';

const SpaceTechnology: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('everyday');

  const everydayTech = [
    {
      name: 'Memory Foam',
      icon: '🛏️',
      origin: 'Apollo Program',
      description: 'Originally developed to improve crash protection for airline pilots and passengers',
      modernUse: 'Mattresses, pillows, medical equipment, sports equipment'
    },
    {
      name: 'Water Purification',
      icon: '💧',
      origin: 'Space Station Life Support',
      description: 'Silver ion purification system developed for astronaut drinking water',
      modernUse: 'Home water filters, swimming pools, hospitals'
    },
    {
      name: 'Cordless Tools',
      icon: '🔧',
      origin: 'Apollo Lunar Surface Experiments',
      description: 'Lightweight, battery-powered tools for Moon surface operations',
      modernUse: 'Power drills, vacuum cleaners, medical devices'
    },
    {
      name: 'Scratch-Resistant Lenses',
      icon: '👓',
      origin: 'Space Helmet Visors',
      description: 'Diamond-hard coating to protect astronaut helmet visors',
      modernUse: 'Eyeglasses, sunglasses, camera lenses'
    },
    {
      name: 'Freeze-Dried Food',
      icon: '🍎',
      origin: 'Apollo Missions',
      description: 'Lightweight, long-lasting food preservation for space travel',
      modernUse: 'Camping food, emergency supplies, coffee'
    },
    {
      name: 'Insulation Materials',
      icon: '🏠',
      origin: 'Space Shuttle Thermal Protection',
      description: 'Reflective insulation to protect spacecraft from extreme temperatures',
      modernUse: 'Building insulation, emergency blankets, automotive'
    }
  ];

  const currentInnovations = [
    {
      name: 'Artemis Technologies',
      description: 'Advanced life support systems, lunar habitat technologies, and sustainable propulsion',
      applications: ['Closed-loop life support', 'In-situ resource utilization', 'Advanced spacesuits'],
      timeline: '2024-2030'
    },
    {
      name: 'Mars Technologies',
      description: 'MOXIE oxygen generation, autonomous navigation, and sample collection systems',
      applications: ['Atmospheric processors', 'AI-driven exploration', 'Sample preservation'],
      timeline: '2020-2035'
    },
    {
      name: 'Deep Space Communications',
      description: 'Laser communications, deep space internet protocols, and autonomous systems',
      applications: ['Interplanetary internet', 'Quantum communications', 'AI mission control'],
      timeline: '2025-2040'
    }
  ];

  const futureInnovations = [
    {
      name: 'Nuclear Propulsion',
      description: 'Nuclear thermal and electric propulsion for faster interplanetary travel',
      impact: 'Reduce Mars travel time from 9 months to 3-4 months',
      timeline: '2030s'
    },
    {
      name: 'Space Manufacturing',
      description: 'Zero-gravity manufacturing of fiber optics, semiconductors, and pharmaceuticals',
      impact: 'Perfect crystals and materials impossible to create on Earth',
      timeline: '2030s'
    },
    {
      name: 'Asteroid Mining',
      description: 'Robotic systems to extract rare metals and water from asteroids',
      impact: 'Unlimited resources for space exploration and Earth applications',
      timeline: '2040s'
    }
  ];

  const categories = [
    { id: 'everyday', name: 'Everyday Tech', icon: Smartphone },
    { id: 'current', name: 'Current Innovations', icon: Satellite },
    { id: 'future', name: 'Future Tech', icon: Zap }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Space <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Technology</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover how NASA's innovations have transformed everyday life and continue to shape our future.
        </p>
      </div>

      {/* Category Navigation */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <IconComponent size={20} />
              {category.name}
            </button>
          );
        })}
      </div>

      {/* Everyday Technology */}
      {selectedCategory === 'everyday' && (
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white text-center mb-6">
            NASA Technologies in Your Daily Life
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {everydayTech.map((tech, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4 text-center">{tech.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2 text-center">{tech.name}</h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-cyan-400 font-semibold text-sm">Origin: </span>
                    <span className="text-gray-300 text-sm">{tech.origin}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{tech.description}</p>
                  <div>
                    <span className="text-cyan-400 font-semibold text-sm">Modern Use: </span>
                    <span className="text-gray-300 text-sm">{tech.modernUse}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-white mb-4">Technology Transfer Impact</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">2000+</div>
                <div className="text-sm text-gray-300">Spinoff Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">$7B</div>
                <div className="text-sm text-gray-300">Annual Economic Impact</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">50+</div>
                <div className="text-sm text-gray-300">New Patents Yearly</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">14:1</div>
                <div className="text-sm text-gray-300">Return on Investment</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Current Innovations */}
      {selectedCategory === 'current' && (
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white text-center mb-6">
            Current NASA Innovations
          </h3>

          <div className="space-y-6">
            {currentInnovations.map((innovation, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">{innovation.name}</h4>
                  <span className="text-cyan-400 font-semibold">{innovation.timeline}</span>
                </div>
                <p className="text-gray-300 mb-4">{innovation.description}</p>
                <div>
                  <h5 className="font-semibold text-cyan-400 mb-2">Key Applications:</h5>
                  <div className="flex flex-wrap gap-2">
                    {innovation.applications.map((app, appIndex) => (
                      <span key={appIndex} className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Future Technology */}
      {selectedCategory === 'future' && (
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white text-center mb-6">
            Future NASA Technologies
          </h3>

          <div className="space-y-6">
            {futureInnovations.map((innovation, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-700 rounded-xl p-6 hover:border-purple-400 transition-colors duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">{innovation.name}</h4>
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">{innovation.timeline}</span>
                </div>
                <p className="text-gray-300 mb-4">{innovation.description}</p>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                  <h5 className="font-semibold text-purple-400 mb-2">Potential Impact:</h5>
                  <p className="text-gray-300 text-sm">{innovation.impact}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-white mb-4">Technology Roadmap</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-gray-300">2020s: Advanced propulsion and life support systems</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-300">2030s: Nuclear propulsion and space manufacturing</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <span className="text-gray-300">2040s: Asteroid mining and interplanetary infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpaceTechnology;