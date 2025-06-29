import React, { useState } from 'react';
import { Calendar, Star, Rocket, Users, Trophy, Globe } from 'lucide-react';

const History: React.FC = () => {
  const [selectedEra, setSelectedEra] = useState('early');

  const historicalEras = {
    early: {
      title: 'Early Space Age (1958-1969)',
      description: 'The birth of NASA and the race to the Moon during the Cold War era.',
      milestones: [
        {
          year: '1958',
          event: 'NASA Founded',
          description: 'National Aeronautics and Space Administration established by President Eisenhower',
          significance: 'United States\' response to Soviet space achievements',
          image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg'
        },
        {
          year: '1961',
          event: 'First American in Space',
          description: 'Alan Shepard becomes first American to travel to space aboard Freedom 7',
          significance: 'Demonstrated American capability in human spaceflight',
          image: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg'
        },
        {
          year: '1969',
          event: 'Apollo 11 Moon Landing',
          description: 'Neil Armstrong and Buzz Aldrin become first humans to walk on the Moon',
          significance: 'Fulfilled Kennedy\'s goal and won the Space Race',
          image: 'https://images.pexels.com/photos/39644/moon-landing-apollo-11-nasa-buzz-aldrin-39644.jpeg'
        }
      ]
    },
    shuttle: {
      title: 'Space Shuttle Era (1970-2011)',
      description: 'Reusable spacecraft revolutionized space access and enabled construction of the International Space Station.',
      milestones: [
        {
          year: '1981',
          event: 'First Shuttle Launch',
          description: 'Space Shuttle Columbia launches on STS-1, beginning the shuttle program',
          significance: 'Introduced reusable spacecraft technology',
          image: 'https://images.pexels.com/photos/73873/mars-mars-rover-space-travel-73873.jpeg'
        },
        {
          year: '1990',
          event: 'Hubble Space Telescope',
          description: 'Revolutionary space telescope deployed, transforming our view of the universe',
          significance: 'Enabled unprecedented astronomical discoveries',
          image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg'
        },
        {
          year: '1998',
          event: 'ISS Construction Begins',
          description: 'First ISS module launched, beginning international cooperation in space',
          significance: 'Established permanent human presence in space',
          image: 'https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg'
        }
      ]
    },
    modern: {
      title: 'Modern Era (2011-Present)',
      description: 'Commercial partnerships, Mars exploration, and preparation for return to the Moon.',
      milestones: [
        {
          year: '2012',
          event: 'Commercial Cargo Success',
          description: 'SpaceX Dragon becomes first commercial spacecraft to dock with ISS',
          significance: 'Began new era of commercial space partnerships',
          image: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg'
        },
        {
          year: '2020',
          event: 'Commercial Crew Launch',
          description: 'SpaceX Crew Dragon carries astronauts to ISS, ending reliance on Russian Soyuz',
          significance: 'Restored American human spaceflight capability',
          image: 'https://images.pexels.com/photos/73873/mars-mars-rover-space-travel-73873.jpeg'
        },
        {
          year: '2021',
          event: 'James Webb Launch',
          description: 'Most powerful space telescope ever built launches to study early universe',
          significance: 'Next generation of space-based astronomy',
          image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg'
        }
      ]
    }
  };

  const majorAchievements = [
    {
      category: 'Human Spaceflight',
      icon: Users,
      achievements: [
        'First American in space (1961)',
        'First Moon landing (1969)',
        '135 Space Shuttle missions',
        'Continuous ISS operations (2000-present)'
      ]
    },
    {
      category: 'Scientific Discovery',
      icon: Star,
      achievements: [
        'Hubble Space Telescope discoveries',
        'Mars rover explorations',
        'Exoplanet discoveries',
        'Climate change monitoring'
      ]
    },
    {
      category: 'Technology Innovation',
      icon: Rocket,
      achievements: [
        'Reusable spacecraft technology',
        'Advanced life support systems',
        'Precision landing systems',
        'Deep space communications'
      ]
    },
    {
      category: 'International Cooperation',
      icon: Globe,
      achievements: [
        'International Space Station',
        'Artemis Accords',
        'Joint science missions',
        'Global climate monitoring'
      ]
    }
  ];

  const legendaryFigures = [
    {
      name: 'Neil Armstrong',
      role: 'First person to walk on the Moon',
      contribution: 'Commander of Apollo 11, uttered famous words "That\'s one small step for man, one giant leap for mankind"',
      era: '1960s'
    },
    {
      name: 'Katherine Johnson',
      role: 'Mathematician and "Human Computer"',
      contribution: 'Calculated trajectories for Mercury and Apollo missions, ensuring astronaut safety',
      era: '1950s-1980s'
    },
    {
      name: 'Sally Ride',
      role: 'First American woman in space',
      contribution: 'Broke gender barriers and inspired generations of women in STEM fields',
      era: '1980s'
    },
    {
      name: 'John Glenn',
      role: 'First American to orbit Earth',
      contribution: 'Pioneered orbital spaceflight and later became oldest person in space at age 77',
      era: '1960s-1990s'
    }
  ];

  const programLegacy = [
    {
      program: 'Mercury Program',
      years: '1958-1963',
      goal: 'Put first American in space',
      legacy: 'Proved humans could survive in space',
      missions: 6
    },
    {
      program: 'Gemini Program',
      years: '1961-1966',
      goal: 'Develop spacewalk and docking techniques',
      legacy: 'Essential skills for Moon missions',
      missions: 10
    },
    {
      program: 'Apollo Program',
      years: '1961-1975',
      goal: 'Land humans on the Moon',
      legacy: 'Greatest achievement in human exploration',
      missions: 17
    },
    {
      program: 'Space Shuttle Program',
      years: '1972-2011',
      goal: 'Reusable space transportation',
      legacy: 'Built ISS and deployed major telescopes',
      missions: 135
    }
  ];

  const eras = [
    { id: 'early', name: 'Early Space Age', icon: Rocket },
    { id: 'shuttle', name: 'Shuttle Era', icon: Star },
    { id: 'modern', name: 'Modern Era', icon: Trophy }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          NASA <span className="bg-gradient-to-r from-gold-400 to-yellow-400 bg-clip-text text-transparent">History</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Journey through NASA's remarkable history, from the Space Race to modern exploration, celebrating achievements that changed humanity forever.
        </p>
      </div>

      {/* Era Navigation */}
      <div className="flex justify-center gap-4 mb-8">
        {eras.map((era) => {
          const IconComponent = era.icon;
          return (
            <button
              key={era.id}
              onClick={() => setSelectedEra(era.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                selectedEra === era.id
                  ? 'bg-yellow-500 text-black'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <IconComponent size={20} />
              {era.name}
            </button>
          );
        })}
      </div>

      {/* Selected Era Timeline */}
      <div className="bg-gray-800/50 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-4">
          {historicalEras[selectedEra as keyof typeof historicalEras].title}
        </h3>
        <p className="text-gray-300 mb-6">
          {historicalEras[selectedEra as keyof typeof historicalEras].description}
        </p>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-orange-400"></div>
          <div className="space-y-8">
            {historicalEras[selectedEra as keyof typeof historicalEras].milestones.map((milestone, index) => (
              <div key={index} className="relative flex gap-6">
                <div className="relative z-10 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                  {milestone.year.slice(-2)}
                </div>
                <div className="flex-1 bg-gray-700/50 rounded-xl p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Calendar size={20} className="text-yellow-400" />
                        <span className="text-yellow-400 font-bold">{milestone.year}</span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">{milestone.event}</h4>
                      <p className="text-gray-300 mb-4">{milestone.description}</p>
                      <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3">
                        <p className="text-yellow-400 text-sm font-semibold mb-1">Historical Significance:</p>
                        <p className="text-gray-300 text-sm">{milestone.significance}</p>
                      </div>
                    </div>
                    <div>
                      <img 
                        src={milestone.image} 
                        alt={milestone.event}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Major Achievements */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white text-center">Major Achievements</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {majorAchievements.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-yellow-400 transition-colors duration-300">
                <IconComponent size={32} className="text-yellow-400 mb-4" />
                <h4 className="font-bold text-white mb-3">{category.category}</h4>
                <ul className="space-y-2">
                  {category.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-yellow-400 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legendary Figures */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white text-center">Legendary Figures</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {legendaryFigures.map((figure, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-400 transition-colors duration-300">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl font-bold text-white">{figure.name}</h4>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  {figure.era}
                </span>
              </div>
              <p className="text-blue-400 font-semibold mb-3">{figure.role}</p>
              <p className="text-gray-300">{figure.contribution}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Program Legacy */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white text-center">Historic Programs</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {programLegacy.map((program, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl font-bold text-white">{program.program}</h4>
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                  {program.years}
                </span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <span className="text-purple-400 font-semibold text-sm">Goal: </span>
                  <span className="text-gray-300 text-sm">{program.goal}</span>
                </div>
                <div>
                  <span className="text-purple-400 font-semibold text-sm">Legacy: </span>
                  <span className="text-gray-300 text-sm">{program.legacy}</span>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-2 text-center">
                  <span className="text-purple-400 font-bold text-lg">{program.missions}</span>
                  <span className="text-gray-300 text-sm ml-2">Missions</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Historical Statistics */}
      <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-4 text-center">NASA by the Numbers</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">65+</div>
            <div className="text-sm text-gray-300">Years of Exploration</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">350+</div>
            <div className="text-sm text-gray-300">Astronauts Trained</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">12</div>
            <div className="text-sm text-gray-300">Humans on Moon</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">1000+</div>
            <div className="text-sm text-gray-300">Missions Launched</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;