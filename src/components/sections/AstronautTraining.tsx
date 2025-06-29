import React, { useState } from 'react';
import { Users, Dumbbell, Brain, Wrench, Heart, GraduationCap } from 'lucide-react';

const AstronautTraining: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState('selection');

  const trainingPhases = {
    selection: {
      title: 'Astronaut Selection Process',
      duration: '18 months',
      description: 'Rigorous selection process from thousands of applicants to select the next class of astronaut candidates.',
      requirements: [
        'U.S. citizenship',
        'Master\'s degree in STEM field',
        '3+ years professional experience or 1000+ pilot hours',
        'Pass NASA long-duration spaceflight physical',
        'Height between 62-75 inches'
      ],
      process: [
        'Online application and initial screening',
        'Assessment of qualifications and experience',
        'Interviews and psychological evaluation',
        'Medical and physical examinations',
        'Final selection and announcement'
      ],
      stats: {
        applicants: '12,000+',
        selected: '10-20',
        successRate: '0.1%'
      }
    },
    basic: {
      title: 'Basic Training',
      duration: '2 years',
      description: 'Comprehensive training program covering all aspects of spaceflight and astronaut duties.',
      curriculum: [
        'Spacecraft systems and operations',
        'Spacewalk (EVA) training',
        'Robotics and ISS systems',
        'Russian language training',
        'Survival training (water, wilderness, desert)',
        'T-38 jet aircraft training'
      ],
      facilities: [
        'Neutral Buoyancy Laboratory (underwater EVA training)',
        'Space Vehicle Mock-up Facility',
        'Centrifuge for G-force training',
        'Virtual Reality trainers',
        'Reduced Gravity Aircraft (Vomit Comet)'
      ],
      graduation: 'Astronaut Candidate becomes mission-ready Astronaut'
    },
    mission: {
      title: 'Mission-Specific Training',
      duration: '2-3 years',
      description: 'Intensive preparation for specific space missions, including ISS expeditions or specialized missions.',
      training: [
        'Mission timeline and procedures',
        'Crew coordination and teamwork',
        'Emergency procedures and contingencies',
        'Scientific experiment protocols',
        'International partner training (Russia, Europe, Japan)',
        'Launch and re-entry simulations'
      ],
      locations: [
        'Johnson Space Center (Houston, TX)',
        'Star City (Russia) - Soyuz training',
        'European Astronaut Centre (Germany)',
        'Tsukuba Space Center (Japan)',
        'Various international facilities'
      ],
      readiness: 'Certified for spaceflight assignment'
    }
  };

  const physicalTraining = [
    {
      name: 'Neutral Buoyancy Lab',
      purpose: 'Spacewalk (EVA) training underwater',
      description: 'Astronauts practice spacewalks in a 6.2 million gallon pool with full-scale ISS mockups',
      duration: '6-7 hours per session',
      icon: '🏊‍♂️'
    },
    {
      name: 'Centrifuge Training',
      purpose: 'G-force adaptation',
      description: 'Experience launch and re-entry forces up to 3-4 Gs in spinning centrifuge',
      duration: '2-3 hours per session',
      icon: '🌪️'
    },
    {
      name: 'Reduced Gravity Aircraft',
      purpose: 'Microgravity experience',
      description: 'Experience weightlessness during parabolic flights (Vomit Comet)',
      duration: '2-3 hours flight time',
      icon: '✈️'
    },
    {
      name: 'Survival Training',
      purpose: 'Emergency preparedness',
      description: 'Water, wilderness, and desert survival in case of emergency landing',
      duration: '1-2 weeks per environment',
      icon: '🏕️'
    }
  ];

  const psychologicalTraining = [
    {
      aspect: 'Isolation Training',
      description: 'Extended periods in confined spaces to simulate long-duration missions',
      skills: 'Stress management, conflict resolution, team dynamics'
    },
    {
      aspect: 'Leadership Development',
      description: 'Command and decision-making skills for mission leadership roles',
      skills: 'Crisis management, crew coordination, communication'
    },
    {
      aspect: 'Cultural Adaptation',
      description: 'Working with international partners and diverse crew members',
      skills: 'Cross-cultural communication, language skills, diplomacy'
    },
    {
      aspect: 'Mental Health',
      description: 'Maintaining psychological well-being during long missions',
      skills: 'Mindfulness, stress reduction, emotional regulation'
    }
  ];

  const currentAstronauts = [
    {
      name: 'Active Astronauts',
      count: '48',
      description: 'Currently active NASA astronauts eligible for flight assignment'
    },
    {
      name: 'International Partners',
      count: '15+',
      description: 'Astronauts from ESA, JAXA, CSA, and Roscosmos training with NASA'
    },
    {
      name: 'Commercial Crew',
      count: '12',
      description: 'Astronauts certified for SpaceX Dragon and Boeing Starliner missions'
    },
    {
      name: 'Artemis Generation',
      count: '18',
      description: 'Astronauts selected for lunar missions and deep space exploration'
    }
  ];

  const phases = [
    { id: 'selection', name: 'Selection', icon: Users },
    { id: 'basic', name: 'Basic Training', icon: GraduationCap },
    { id: 'mission', name: 'Mission Prep', icon: Wrench }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Astronaut <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Training</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover the rigorous selection process and comprehensive training program that prepares astronauts for the ultimate frontier.
        </p>
      </div>

      {/* Phase Navigation */}
      <div className="flex justify-center gap-4 mb-8">
        {phases.map((phase) => {
          const IconComponent = phase.icon;
          return (
            <button
              key={phase.id}
              onClick={() => setSelectedPhase(phase.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                selectedPhase === phase.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <IconComponent size={20} />
              {phase.name}
            </button>
          );
        })}
      </div>

      {/* Selected Phase Content */}
      <div className="bg-gray-800/50 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-semibold text-white">
            {trainingPhases[selectedPhase as keyof typeof trainingPhases].title}
          </h3>
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
            {trainingPhases[selectedPhase as keyof typeof trainingPhases].duration}
          </span>
        </div>
        
        <p className="text-gray-300 mb-6">
          {trainingPhases[selectedPhase as keyof typeof trainingPhases].description}
        </p>

        {selectedPhase === 'selection' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Basic Requirements:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {trainingPhases.selection.requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-2 bg-gray-700/30 rounded-lg p-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-gray-300 text-sm">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Selection Process:</h4>
              <div className="space-y-3">
                {trainingPhases.selection.process.map((step, index) => (
                  <div key={index} className="flex items-center gap-4 bg-gray-700/30 rounded-lg p-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-gray-300">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-500/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">{trainingPhases.selection.stats.applicants}</div>
                <div className="text-sm text-gray-300">Applicants</div>
              </div>
              <div className="bg-blue-500/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">{trainingPhases.selection.stats.selected}</div>
                <div className="text-sm text-gray-300">Selected</div>
              </div>
              <div className="bg-blue-500/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">{trainingPhases.selection.stats.successRate}</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>
        )}

        {selectedPhase === 'basic' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Training Curriculum:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {trainingPhases.basic.curriculum.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 bg-gray-700/30 rounded-lg p-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Training Facilities:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {trainingPhases.basic.facilities.map((facility, index) => (
                  <div key={index} className="flex items-start gap-2 bg-gray-700/30 rounded-lg p-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-gray-300 text-sm">{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
              <h5 className="font-semibold text-green-400 mb-2">Graduation:</h5>
              <p className="text-gray-300 text-sm">{trainingPhases.basic.graduation}</p>
            </div>
          </div>
        )}

        {selectedPhase === 'mission' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Mission Training:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {trainingPhases.mission.training.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 bg-gray-700/30 rounded-lg p-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Training Locations:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {trainingPhases.mission.locations.map((location, index) => (
                  <div key={index} className="flex items-start gap-2 bg-gray-700/30 rounded-lg p-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-gray-300 text-sm">{location}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4">
              <h5 className="font-semibold text-purple-400 mb-2">Mission Readiness:</h5>
              <p className="text-gray-300 text-sm">{trainingPhases.mission.readiness}</p>
            </div>
          </div>
        )}
      </div>

      {/* Physical Training */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
          <Dumbbell className="text-blue-400" />
          Physical Training
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {physicalTraining.map((training, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-400 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{training.icon}</span>
                <h4 className="text-xl font-bold text-white">{training.name}</h4>
              </div>
              <p className="text-blue-400 font-semibold mb-2">{training.purpose}</p>
              <p className="text-gray-300 mb-3">{training.description}</p>
              <div className="bg-blue-500/20 rounded-lg p-2">
                <span className="text-blue-400 text-sm font-semibold">Duration: </span>
                <span className="text-gray-300 text-sm">{training.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Psychological Training */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
          <Brain className="text-blue-400" />
          Psychological Preparation
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {psychologicalTraining.map((training, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h4 className="text-xl font-bold text-white mb-3">{training.aspect}</h4>
              <p className="text-gray-300 mb-3">{training.description}</p>
              <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-3">
                <p className="text-purple-400 text-sm font-semibold mb-1">Key Skills:</p>
                <p className="text-gray-300 text-sm">{training.skills}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Astronaut Corps */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">Current Astronaut Corps</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {currentAstronauts.map((group, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">{group.count}</div>
              <h4 className="font-semibold text-white mb-2">{group.name}</h4>
              <p className="text-gray-300 text-sm">{group.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AstronautTraining;