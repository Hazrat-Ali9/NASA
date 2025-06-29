import React, { useState } from 'react';
import { Building, Rocket, Users, Globe, Handshake, TrendingUp } from 'lucide-react';

const Partnerships: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('commercial');

  const partnershipCategories = {
    commercial: {
      title: 'Commercial Space Partners',
      description: 'NASA collaborates with private companies to advance space exploration and reduce costs through innovation.',
      partners: [
        {
          name: 'SpaceX',
          partnership: 'Commercial Crew & Cargo',
          achievements: [
            'First private company to send astronauts to ISS',
            'Regular cargo resupply missions',
            'Crew Dragon spacecraft development',
            'Falcon 9 reusable rocket technology'
          ],
          contracts: '$3.1B Commercial Crew, $1.6B Cargo',
          founded: '2002'
        },
        {
          name: 'Boeing',
          partnership: 'Commercial Crew & SLS',
          achievements: [
            'Starliner crew spacecraft development',
            'Space Launch System core stage',
            'ISS commercial crew transportation',
            'Deep space exploration systems'
          ],
          contracts: '$4.2B Commercial Crew, $8.9B SLS',
          founded: '1916'
        },
        {
          name: 'Blue Origin',
          partnership: 'Human Landing System',
          achievements: [
            'New Shepard suborbital flights',
            'BE-4 engine development',
            'Lunar lander development',
            'Commercial space tourism'
          ],
          contracts: '$3.4B Human Landing System',
          founded: '2000'
        }
      ]
    },
    international: {
      title: 'International Space Agencies',
      description: 'Global cooperation in space exploration through partnerships with space agencies worldwide.',
      partners: [
        {
          name: 'European Space Agency (ESA)',
          partnership: 'ISS, Artemis, Science Missions',
          achievements: [
            'Columbus laboratory module on ISS',
            'Orion service module for Artemis',
            'Joint science missions and research',
            'Astronaut exchange programs'
          ],
          countries: '22 member states',
          established: '1975'
        },
        {
          name: 'Japan Aerospace Exploration Agency (JAXA)',
          partnership: 'ISS, Lunar Gateway, Science',
          achievements: [
            'Kibo laboratory module on ISS',
            'HTV cargo spacecraft',
            'Lunar Gateway contributions',
            'Joint Mars and asteroid missions'
          ],
          countries: 'Japan',
          established: '2003'
        },
        {
          name: 'Canadian Space Agency (CSA)',
          partnership: 'ISS, Artemis, Robotics',
          achievements: [
            'Canadarm2 robotic system',
            'Dextre robotic maintenance system',
            'Lunar Gateway robotics',
            'Advanced space robotics technology'
          ],
          countries: 'Canada',
          established: '1989'
        }
      ]
    },
    academic: {
      title: 'Academic & Research Institutions',
      description: 'Partnerships with universities and research institutions to advance scientific knowledge and train the next generation.',
      partners: [
        {
          name: 'MIT',
          partnership: 'Research & Technology Development',
          achievements: [
            'Advanced propulsion research',
            'Space systems engineering',
            'Astronaut training programs',
            'Mars mission planning'
          ],
          programs: 'AeroAstro, Space Systems Lab',
          collaboration: '60+ years'
        },
        {
          name: 'Stanford University',
          partnership: 'Space Science & Engineering',
          achievements: [
            'Satellite technology development',
            'Space physics research',
            'AI for space exploration',
            'Materials science in space'
          ],
          programs: 'Aeronautics & Astronautics',
          collaboration: '50+ years'
        },
        {
          name: 'Caltech/JPL',
          partnership: 'Planetary Exploration',
          achievements: [
            'Mars rover missions',
            'Deep space communications',
            'Exoplanet discovery missions',
            'Advanced space telescopes'
          ],
          programs: 'Jet Propulsion Laboratory',
          collaboration: '80+ years'
        }
      ]
    }
  };

  const partnershipBenefits = [
    {
      title: 'Cost Reduction',
      description: 'Commercial partnerships have reduced launch costs by over 90%',
      icon: TrendingUp,
      impact: '$90B+ saved through commercial crew program'
    },
    {
      title: 'Innovation Acceleration',
      description: 'Private sector innovation drives rapid technological advancement',
      icon: Rocket,
      impact: 'Reusable rockets, advanced manufacturing, AI integration'
    },
    {
      title: 'Global Collaboration',
      description: 'International partnerships enable larger, more ambitious missions',
      icon: Globe,
      impact: 'ISS, Artemis program, joint science missions'
    },
    {
      title: 'Knowledge Sharing',
      description: 'Academic partnerships advance scientific understanding',
      icon: Users,
      impact: '1000+ research papers, student programs, technology transfer'
    }
  ];

  const upcomingCollaborations = [
    {
      project: 'Artemis Accords',
      partners: '25+ countries',
      goal: 'Peaceful lunar exploration framework',
      timeline: '2020-2030s'
    },
    {
      project: 'Commercial LEO Destinations',
      partners: 'Axiom Space, Blue Origin, Nanoracks',
      goal: 'Replace ISS with commercial space stations',
      timeline: '2025-2030'
    },
    {
      project: 'Mars Sample Return',
      partners: 'ESA, international science community',
      goal: 'Return Mars samples to Earth for analysis',
      timeline: '2028-2033'
    },
    {
      project: 'Lunar Gateway',
      partners: 'ESA, JAXA, CSA',
      goal: 'Deep space outpost orbiting the Moon',
      timeline: '2025-2028'
    }
  ];

  const categories = [
    { id: 'commercial', name: 'Commercial', icon: Building },
    { id: 'international', name: 'International', icon: Globe },
    { id: 'academic', name: 'Academic', icon: Users }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          NASA <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Partnerships</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore NASA's collaborative relationships with commercial companies, international space agencies, and academic institutions.
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
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <IconComponent size={20} />
              {category.name}
            </button>
          );
        })}
      </div>

      {/* Selected Category Content */}
      <div className="bg-gray-800/50 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-4">
          {partnershipCategories[selectedCategory as keyof typeof partnershipCategories].title}
        </h3>
        <p className="text-gray-300 mb-6">
          {partnershipCategories[selectedCategory as keyof typeof partnershipCategories].description}
        </p>

        <div className="space-y-6">
          {partnershipCategories[selectedCategory as keyof typeof partnershipCategories].partners.map((partner, index) => (
            <div key={index} className="bg-gray-700/50 border border-gray-600 rounded-xl p-6 hover:border-green-400 transition-colors duration-300">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-white">{partner.name}</h4>
                <span className="text-green-400 font-semibold">{partner.partnership}</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-green-400 mb-2">Key Achievements:</h5>
                  <ul className="space-y-1">
                    {partner.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-green-400 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  {selectedCategory === 'commercial' && (
                    <>
                      <div className="bg-green-500/20 rounded-lg p-3">
                        <span className="text-green-400 font-semibold text-sm">Contracts: </span>
                        <span className="text-gray-300 text-sm">{(partner as any).contracts}</span>
                      </div>
                      <div className="bg-gray-600/50 rounded-lg p-3">
                        <span className="text-gray-400 font-semibold text-sm">Founded: </span>
                        <span className="text-gray-300 text-sm">{(partner as any).founded}</span>
                      </div>
                    </>
                  )}

                  {selectedCategory === 'international' && (
                    <>
                      <div className="bg-blue-500/20 rounded-lg p-3">
                        <span className="text-blue-400 font-semibold text-sm">Countries: </span>
                        <span className="text-gray-300 text-sm">{(partner as any).countries}</span>
                      </div>
                      <div className="bg-gray-600/50 rounded-lg p-3">
                        <span className="text-gray-400 font-semibold text-sm">Established: </span>
                        <span className="text-gray-300 text-sm">{(partner as any).established}</span>
                      </div>
                    </>
                  )}

                  {selectedCategory === 'academic' && (
                    <>
                      <div className="bg-purple-500/20 rounded-lg p-3">
                        <span className="text-purple-400 font-semibold text-sm">Programs: </span>
                        <span className="text-gray-300 text-sm">{(partner as any).programs}</span>
                      </div>
                      <div className="bg-gray-600/50 rounded-lg p-3">
                        <span className="text-gray-400 font-semibold text-sm">Collaboration: </span>
                        <span className="text-gray-300 text-sm">{(partner as any).collaboration}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partnership Benefits */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white text-center">Partnership Benefits</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnershipBenefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-green-400 transition-colors duration-300">
                <IconComponent size={32} className="text-green-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-gray-300 text-sm mb-3">{benefit.description}</p>
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-2">
                  <p className="text-green-400 text-xs font-semibold">{benefit.impact}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Collaborations */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
          <Handshake className="text-green-400" />
          Upcoming Collaborations
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {upcomingCollaborations.map((collaboration, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-400 transition-colors duration-300">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl font-bold text-white">{collaboration.project}</h4>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  {collaboration.timeline}
                </span>
              </div>
              <p className="text-blue-400 font-semibold mb-2">{collaboration.partners}</p>
              <p className="text-gray-300">{collaboration.goal}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Partnership Statistics */}
      <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-4 text-center">Partnership Impact</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">100+</div>
            <div className="text-sm text-gray-300">Commercial Partners</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">25+</div>
            <div className="text-sm text-gray-300">International Partners</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">500+</div>
            <div className="text-sm text-gray-300">Academic Institutions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">$50B+</div>
            <div className="text-sm text-gray-300">Partnership Value</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;