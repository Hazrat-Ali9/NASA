import React, { useState } from 'react';
import { MapPin, Calendar, Zap, Users, Beaker, Mountain } from 'lucide-react';

const MarsExploration: React.FC = () => {
  const [activeRover, setActiveRover] = useState('perseverance');

  const rovers = {
    perseverance: {
      name: 'Perseverance',
      launched: '2020',
      landed: 'February 18, 2021',
      location: 'Jezero Crater',
      status: 'Active',
      mission: 'Search for signs of ancient microbial life and collect rock samples',
      achievements: [
        'Collected 24+ rock and soil samples',
        'Produced oxygen from Martian atmosphere (MOXIE)',
        'Deployed Ingenuity helicopter',
        'Discovered organic molecules in rocks'
      ],
      image: 'https://images.pexels.com/photos/73873/mars-mars-rover-space-travel-73873.jpeg'
    },
    curiosity: {
      name: 'Curiosity',
      launched: '2011',
      landed: 'August 5, 2012',
      location: 'Gale Crater',
      status: 'Active',
      mission: 'Assess Mars\' past habitability and climate conditions',
      achievements: [
        'Confirmed ancient water activity',
        'Detected methane in atmosphere',
        'Analyzed 1000+ rock and soil samples',
        'Traveled over 29 kilometers'
      ],
      image: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg'
    },
    opportunity: {
      name: 'Opportunity',
      launched: '2003',
      landed: 'January 25, 2004',
      location: 'Meridiani Planum',
      status: 'Mission Complete (2018)',
      mission: 'Search for evidence of past water activity',
      achievements: [
        'Operated for 15 years (planned 90 days)',
        'Traveled 45 kilometers',
        'Discovered evidence of ancient water',
        'Found meteorites on Mars surface'
      ],
      image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg'
    }
  };

  const futureHumanMissions = [
    {
      phase: 'Artemis Gateway',
      timeline: '2025-2028',
      description: 'Lunar Gateway station as stepping stone to Mars',
      icon: '🌙'
    },
    {
      phase: 'Mars Sample Return',
      timeline: '2028-2030',
      description: 'Retrieve samples collected by Perseverance rover',
      icon: '🔄'
    },
    {
      phase: 'Human Mars Mission',
      timeline: '2030s',
      description: 'First crewed mission to Mars surface',
      icon: '👨‍🚀'
    },
    {
      phase: 'Mars Base Alpha',
      timeline: '2040s',
      description: 'Permanent human settlement on Mars',
      icon: '🏗️'
    }
  ];

  const discoveries = [
    {
      title: 'Ancient River Delta',
      description: 'Perseverance found evidence of an ancient river delta in Jezero Crater',
      significance: 'Indicates Mars once had flowing water for extended periods',
      date: '2022'
    },
    {
      title: 'Organic Molecules',
      description: 'Complex organic compounds discovered in Martian rocks',
      significance: 'Building blocks of life found preserved in ancient sediments',
      date: '2023'
    },
    {
      title: 'Subsurface Water',
      description: 'Radar data reveals liquid water beneath polar ice caps',
      significance: 'Potential habitat for current microbial life',
      date: '2024'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Mars <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Exploration</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover ongoing missions, latest discoveries, and plans for future human settlement on the Red Planet.
        </p>
      </div>

      {/* Active Rovers */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
          <Mountain className="text-red-400" />
          Mars Rovers
        </h3>

        <div className="flex flex-wrap gap-2 mb-6">
          {Object.entries(rovers).map(([key, rover]) => (
            <button
              key={key}
              onClick={() => setActiveRover(key)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeRover === key
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {rover.name}
            </button>
          ))}
        </div>

        <div className="bg-gray-800/50 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img 
                src={rovers[activeRover as keyof typeof rovers].image} 
                alt={rovers[activeRover as keyof typeof rovers].name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar size={16} />
                  <span>Launched: {rovers[activeRover as keyof typeof rovers].launched}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin size={16} />
                  <span>Location: {rovers[activeRover as keyof typeof rovers].location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={16} />
                  <span className={`font-semibold ${
                    rovers[activeRover as keyof typeof rovers].status === 'Active' ? 'text-green-400' : 'text-yellow-400'
                  }`}>
                    {rovers[activeRover as keyof typeof rovers].status}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-3">
                {rovers[activeRover as keyof typeof rovers].name}
              </h4>
              <p className="text-gray-300 mb-4">
                {rovers[activeRover as keyof typeof rovers].mission}
              </p>
              
              <h5 className="font-semibold text-red-400 mb-2">Key Achievements:</h5>
              <ul className="space-y-2">
                {rovers[activeRover as keyof typeof rovers].achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <span className="text-red-400 mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Discoveries */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
          <Beaker className="text-red-400" />
          Latest Discoveries
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {discoveries.map((discovery, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-red-400 transition-colors duration-300">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-white">{discovery.title}</h4>
                <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">{discovery.date}</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">{discovery.description}</p>
              <div className="border-t border-gray-700 pt-3">
                <p className="text-red-400 text-sm font-semibold">Significance:</p>
                <p className="text-gray-300 text-sm">{discovery.significance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Future Human Missions */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
          <Users className="text-red-400" />
          Path to Human Mars Settlement
        </h3>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-400 to-orange-400"></div>
          <div className="space-y-6">
            {futureHumanMissions.map((mission, index) => (
              <div key={index} className="relative flex items-start gap-6">
                <div className="relative z-10 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1 bg-gray-800/50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{mission.icon}</span>
                    <h4 className="text-xl font-bold text-white">{mission.phase}</h4>
                    <span className="text-red-400 font-semibold">{mission.timeline}</span>
                  </div>
                  <p className="text-gray-300">{mission.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mars Facts */}
      <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-4">Mars by the Numbers</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-400">687</div>
            <div className="text-sm text-gray-300">Earth days per Mars year</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">-80°C</div>
            <div className="text-sm text-gray-300">Average temperature</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-400">225M</div>
            <div className="text-sm text-gray-300">km from Earth (avg)</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">38%</div>
            <div className="text-sm text-gray-300">of Earth's gravity</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarsExploration;