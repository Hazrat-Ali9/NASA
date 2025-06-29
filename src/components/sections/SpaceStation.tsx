import React, { useState } from 'react';
import { Users, Beaker, Globe, Wrench, Heart, Microscope, Dumbbell, Utensils } from 'lucide-react';

const SpaceStation: React.FC = () => {
  const [activeModule, setActiveModule] = useState('overview');

  const stationModules = {
    overview: {
      title: 'International Space Station Overview',
      description: 'The ISS is a multi-national collaborative project and the largest human-made object in low Earth orbit.',
      stats: [
        { label: 'Altitude', value: '408 km', icon: '🌍' },
        { label: 'Speed', value: '28,000 km/h', icon: '⚡' },
        { label: 'Orbit Period', value: '93 minutes', icon: '🔄' },
        { label: 'Mass', value: '450 tons', icon: '⚖️' }
      ]
    },
    research: {
      title: 'Scientific Research',
      description: 'The ISS serves as a unique microgravity laboratory for groundbreaking research.',
      experiments: [
        'Protein crystal growth for drug development',
        'Tissue engineering and organ-on-chip studies',
        'Materials science in microgravity',
        'Earth observation and climate research',
        'Fundamental physics experiments',
        'Agricultural research for space exploration'
      ]
    },
    crew: {
      title: 'Crew Operations',
      description: 'Astronauts live and work aboard the ISS for missions lasting 6-12 months.',
      dailySchedule: [
        { time: '06:00', activity: 'Wake up and personal hygiene', icon: '🌅' },
        { time: '07:30', activity: 'Breakfast and daily planning conference', icon: '🍳' },
        { time: '08:30', activity: 'Scientific experiments and maintenance', icon: '🔬' },
        { time: '12:30', activity: 'Lunch break', icon: '🍽️' },
        { time: '13:30', activity: 'Continued research and operations', icon: '⚗️' },
        { time: '19:30', activity: 'Dinner and personal time', icon: '🍽️' },
        { time: '21:30', activity: 'Sleep preparation', icon: '🌙' }
      ]
    }
  };

  const researchAreas = [
    {
      name: 'Medical Research',
      icon: Heart,
      description: 'Studying effects of microgravity on human body',
      discoveries: [
        'Bone density loss mechanisms',
        'Muscle atrophy prevention',
        'Cardiovascular changes in space',
        'Immune system adaptations'
      ]
    },
    {
      name: 'Materials Science',
      icon: Beaker,
      description: 'Creating materials impossible to make on Earth',
      discoveries: [
        'Perfect spherical particles',
        'Advanced metal alloys',
        'Semiconductor crystals',
        'Fiber optic improvements'
      ]
    },
    {
      name: 'Earth Sciences',
      icon: Globe,
      description: 'Monitoring Earth\'s climate and natural phenomena',
      discoveries: [
        'Hurricane formation patterns',
        'Deforestation tracking',
        'Ocean current changes',
        'Atmospheric composition'
      ]
    },
    {
      name: 'Biology',
      icon: Microscope,
      description: 'Understanding life processes in microgravity',
      discoveries: [
        'Plant growth in space',
        'Protein crystallization',
        'Cell behavior changes',
        'Tissue engineering advances'
      ]
    }
  ];

  const internationalPartners = [
    { country: 'United States', agency: 'NASA', contribution: 'Primary modules, crew transportation' },
    { country: 'Russia', agency: 'Roscosmos', contribution: 'Service modules, Soyuz spacecraft' },
    { country: 'Europe', agency: 'ESA', contribution: 'Columbus laboratory, cargo missions' },
    { country: 'Japan', agency: 'JAXA', contribution: 'Kibo laboratory, robotic arm' },
    { country: 'Canada', agency: 'CSA', contribution: 'Canadarm2 robotic system' }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          International <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Space Station</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore humanity's greatest collaborative achievement in space - a laboratory, home, and symbol of international cooperation.
        </p>
      </div>

      {/* Module Navigation */}
      <div className="flex justify-center gap-4 mb-8">
        {Object.entries(stationModules).map(([key, module]) => (
          <button
            key={key}
            onClick={() => setActiveModule(key)}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              activeModule === key
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {module.title.split(' ').slice(-1)[0]}
          </button>
        ))}
      </div>

      {/* Active Module Content */}
      <div className="bg-gray-800/50 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-4">
          {stationModules[activeModule as keyof typeof stationModules].title}
        </h3>
        <p className="text-gray-300 mb-6">
          {stationModules[activeModule as keyof typeof stationModules].description}
        </p>

        {activeModule === 'overview' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stationModules.overview.stats.map((stat, index) => (
              <div key={index} className="bg-gray-700/50 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {activeModule === 'research' && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Current Experiments:</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {stationModules.research.experiments.map((experiment, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-700/50 rounded-lg p-3">
                  <Beaker size={20} className="text-blue-400" />
                  <span className="text-gray-300">{experiment}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeModule === 'crew' && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Typical Daily Schedule:</h4>
            <div className="space-y-3">
              {stationModules.crew.dailySchedule.map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-gray-700/50 rounded-lg p-3">
                  <span className="text-blue-400 font-mono font-bold">{item.time}</span>
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-gray-300">{item.activity}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Research Areas */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white text-center">Research Areas</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {researchAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-400 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <IconComponent size={24} className="text-blue-400" />
                  <h4 className="text-xl font-bold text-white">{area.name}</h4>
                </div>
                <p className="text-gray-300 mb-4">{area.description}</p>
                <div>
                  <h5 className="font-semibold text-blue-400 mb-2">Key Discoveries:</h5>
                  <ul className="space-y-1">
                    {area.discoveries.map((discovery, discoveryIndex) => (
                      <li key={discoveryIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-blue-400 mt-1">•</span>
                        {discovery}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* International Cooperation */}
      <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">International Partnership</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {internationalPartners.map((partner, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-4">
              <h4 className="font-bold text-white mb-1">{partner.country}</h4>
              <p className="text-blue-400 text-sm mb-2">{partner.agency}</p>
              <p className="text-gray-300 text-sm">{partner.contribution}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Live Statistics */}
      <div className="bg-gray-800/50 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-4 text-center">ISS by the Numbers</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">23+</div>
            <div className="text-sm text-gray-300">Years in Operation</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">270+</div>
            <div className="text-sm text-gray-300">Astronauts Hosted</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">3000+</div>
            <div className="text-sm text-gray-300">Experiments Conducted</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">100B+</div>
            <div className="text-sm text-gray-300">Investment (USD)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceStation;