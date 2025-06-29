import React, { useState } from 'react';
import { Telescope, Star, Salad as Galaxy, Orbit, Zap, Eye } from 'lucide-react';

const DeepSpace: React.FC = () => {
  const [selectedMission, setSelectedMission] = useState('jwst');

  const deepSpaceMissions = {
    jwst: {
      name: 'James Webb Space Telescope',
      launched: '2021',
      location: 'L2 Lagrange Point (1.5M km from Earth)',
      status: 'Active',
      mission: 'Observe the most distant objects in the universe and study early galaxy formation',
      discoveries: [
        'Oldest galaxies formed 400M years after Big Bang',
        'Atmospheric composition of exoplanets',
        'Star formation in unprecedented detail',
        'Evidence of water vapor on exoplanets'
      ],
      image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg',
      instruments: ['NIRCam', 'NIRSpec', 'MIRI', 'FGS/NIRISS']
    },
    hubble: {
      name: 'Hubble Space Telescope',
      launched: '1990',
      location: 'Low Earth Orbit (547 km)',
      status: 'Active',
      mission: 'Study the universe in visible, ultraviolet, and near-infrared light',
      discoveries: [
        'Confirmed accelerating universe expansion',
        'Determined age of universe (13.8 billion years)',
        'Discovered dark energy evidence',
        'Captured images of galaxy collisions'
      ],
      image: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg',
      instruments: ['WFC3', 'ACS', 'STIS', 'COS', 'FGS']
    },
    voyager: {
      name: 'Voyager Probes',
      launched: '1977',
      location: 'Interstellar Space (24+ billion km)',
      status: 'Active',
      mission: 'Study outer planets and enter interstellar space',
      discoveries: [
        'Detailed images of Jupiter and Saturn',
        'Discovery of active volcanoes on Io',
        'Complex ring systems around gas giants',
        'First human-made objects in interstellar space'
      ],
      image: 'https://images.pexels.com/photos/73873/mars-mars-rover-space-travel-73873.jpeg',
      instruments: ['Cameras', 'Spectrometers', 'Magnetometers', 'Plasma detectors']
    }
  };

  const recentDiscoveries = [
    {
      title: 'Most Distant Galaxy',
      description: 'JWST discovered JADES-GS-z13-0, a galaxy from when the universe was only 325 million years old',
      significance: 'Reveals how early galaxies formed after the Big Bang',
      date: '2023',
      telescope: 'James Webb'
    },
    {
      title: 'Exoplanet Atmospheres',
      description: 'Detailed atmospheric composition of WASP-96b showing water vapor and clouds',
      significance: 'Advances search for potentially habitable worlds',
      date: '2022',
      telescope: 'James Webb'
    },
    {
      title: 'Stellar Nurseries',
      description: 'Unprecedented views of star formation in the Carina Nebula',
      significance: 'Understanding how stars and planetary systems form',
      date: '2022',
      telescope: 'James Webb'
    },
    {
      title: 'Dark Matter Mapping',
      description: 'Hubble mapped dark matter distribution in galaxy clusters',
      significance: 'Insights into the universe\'s invisible scaffolding',
      date: '2023',
      telescope: 'Hubble'
    }
  ];

  const upcomingMissions = [
    {
      name: 'Roman Space Telescope',
      launch: '2027',
      objective: 'Study dark energy and search for exoplanets',
      capabilities: 'Wide-field infrared imaging, coronagraph for direct exoplanet imaging'
    },
    {
      name: 'Artemis Lunar Gateway',
      launch: '2025-2028',
      objective: 'Deep space habitat and staging point for lunar and Mars missions',
      capabilities: 'Long-duration human presence beyond Earth orbit'
    },
    {
      name: 'Europa Clipper',
      launch: '2024',
      objective: 'Study Jupiter\'s moon Europa and its subsurface ocean',
      capabilities: 'Ice-penetrating radar, magnetic field analysis'
    }
  ];

  const cosmicPhenomena = [
    {
      name: 'Black Holes',
      description: 'Regions of spacetime where gravity is so strong that nothing can escape',
      discoveries: 'First image of black hole (M87*), gravitational waves from mergers',
      icon: '🕳️'
    },
    {
      name: 'Neutron Stars',
      description: 'Ultra-dense stellar remnants with extreme magnetic fields',
      discoveries: 'Pulsar timing arrays, kilonova explosions creating heavy elements',
      icon: '⭐'
    },
    {
      name: 'Dark Matter',
      description: 'Invisible matter that makes up 85% of all matter in the universe',
      discoveries: 'Galaxy rotation curves, gravitational lensing effects',
      icon: '🌌'
    },
    {
      name: 'Exoplanets',
      description: 'Planets orbiting stars outside our solar system',
      discoveries: '5000+ confirmed exoplanets, potentially habitable worlds',
      icon: '🪐'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Deep <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Space</span> Missions
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Journey to the edge of the observable universe through NASA's most ambitious space telescopes and deep space missions.
        </p>
      </div>

      {/* Mission Selection */}
      <div className="flex justify-center gap-4 mb-8">
        {Object.entries(deepSpaceMissions).map(([key, mission]) => (
          <button
            key={key}
            onClick={() => setSelectedMission(key)}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              selectedMission === key
                ? 'bg-purple-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {mission.name.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Selected Mission Details */}
      <div className="bg-gray-800/50 rounded-xl p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img 
              src={deepSpaceMissions[selectedMission as keyof typeof deepSpaceMissions].image} 
              alt={deepSpaceMissions[selectedMission as keyof typeof deepSpaceMissions].name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300">
                <Star size={16} />
                <span>Launched: {deepSpaceMissions[selectedMission as keyof typeof deepSpaceMissions].launched}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Orbit size={16} />
                <span>Location: {deepSpaceMissions[selectedMission as keyof typeof deepSpaceMissions].location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} />
                <span className="font-semibold text-green-400">
                  {deepSpaceMissions[selectedMission as keyof typeof deepSpaceMissions].status}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-3">
              {deepSpaceMissions[selectedMission as keyof typeof deepSpaceMissions].name}
            </h4>
            <p className="text-gray-300 mb-4">
              {deepSpaceMissions[selectedMission as keyof typeof deepSpaceMissions].mission}
            </p>
            
            <h5 className="font-semibold text-purple-400 mb-2">Major Discoveries:</h5>
            <ul className="space-y-2 mb-4">
              {deepSpaceMissions[selectedMission as keyof typeof deepSpaceMissions].discoveries.map((discovery, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <span className="text-purple-400 mt-1">•</span>
                  {discovery}
                </li>
              ))}
            </ul>

            <h5 className="font-semibold text-purple-400 mb-2">Key Instruments:</h5>
            <div className="flex flex-wrap gap-2">
              {deepSpaceMissions[selectedMission as keyof typeof deepSpaceMissions].instruments.map((instrument, index) => (
                <span key={index} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  {instrument}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Discoveries */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
          <Eye className="text-purple-400" />
          Recent Astronomical Discoveries
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {recentDiscoveries.map((discovery, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-400 transition-colors duration-300">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-white">{discovery.title}</h4>
                <div className="text-right">
                  <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded">{discovery.date}</span>
                  <div className="text-xs text-purple-400 mt-1">{discovery.telescope}</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-3">{discovery.description}</p>
              <div className="border-t border-gray-700 pt-3">
                <p className="text-purple-400 text-sm font-semibold">Significance:</p>
                <p className="text-gray-300 text-sm">{discovery.significance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cosmic Phenomena */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
          <Galaxy className="text-purple-400" />
          Cosmic Phenomena
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {cosmicPhenomena.map((phenomenon, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{phenomenon.icon}</span>
                <h4 className="text-xl font-bold text-white">{phenomenon.name}</h4>
              </div>
              <p className="text-gray-300 mb-3">{phenomenon.description}</p>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
                <p className="text-purple-400 text-sm font-semibold mb-1">Recent Discoveries:</p>
                <p className="text-gray-300 text-sm">{phenomenon.discoveries}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Missions */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
          <Telescope className="text-purple-400" />
          Upcoming Deep Space Missions
        </h3>

        <div className="space-y-4">
          {upcomingMissions.map((mission, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl font-bold text-white">{mission.name}</h4>
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {mission.launch}
                </span>
              </div>
              <p className="text-gray-300 mb-3">{mission.objective}</p>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                <p className="text-yellow-400 text-sm font-semibold mb-1">Key Capabilities:</p>
                <p className="text-gray-300 text-sm">{mission.capabilities}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Universe Statistics */}
      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-4 text-center">Universe by the Numbers</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">13.8B</div>
            <div className="text-sm text-gray-300">Years old (universe)</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-400">2T+</div>
            <div className="text-sm text-gray-300">Galaxies observed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">5000+</div>
            <div className="text-sm text-gray-300">Confirmed exoplanets</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-400">95%</div>
            <div className="text-sm text-gray-300">Dark matter & energy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeepSpace;