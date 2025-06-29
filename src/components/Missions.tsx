import React from 'react';
import MissionCard from './MissionCard';

const Missions: React.FC = () => {
  const missions = [
    {
      title: 'Artemis Moon Landing',
      description: 'Revolutionary mission to return humans to the Moon and establish a sustainable lunar presence for future Mars exploration.',
      date: '2025',
      location: 'Moon Surface',
      image: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg',
      status: 'planned' as const
    },
    {
      title: 'Mars Perseverance Rover',
      description: 'Advanced robotic explorer searching for signs of ancient microbial life and collecting rock samples for future return to Earth.',
      date: '2021 - Present',
      location: 'Mars',
      image: 'https://images.pexels.com/photos/73873/mars-mars-rover-space-travel-73873.jpeg',
      status: 'ongoing' as const
    },
    {
      title: 'James Webb Space Telescope',
      description: 'The most powerful space telescope ever built, revealing the mysteries of the early universe and distant galaxies.',
      date: '2021 - Present',
      location: 'L2 Lagrange Point',
      image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg',
      status: 'ongoing' as const
    },
    {
      title: 'Apollo 11 Moon Landing',
      description: 'Historic first human landing on the Moon, marking humanitys greatest achievement in space exploration.',
      date: '1969',
      location: 'Sea of Tranquility',
      image: 'https://images.pexels.com/photos/39644/moon-landing-apollo-11-nasa-buzz-aldrin-39644.jpeg',
      status: 'completed' as const
    },
    {
      title: 'International Space Station',
      description: 'Orbiting laboratory fostering international cooperation and advancing scientific research in microgravity.',
      date: '1998 - Present',
      location: 'Low Earth Orbit',
      image: 'https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg',
      status: 'ongoing' as const
    },
    {
      title: 'Europa Clipper Mission',
      description: 'Upcoming mission to explore Jupiters moon Europa and investigate its potential for harboring life.',
      date: '2024',
      location: 'Jupiter System',
      image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg',
      status: 'planned' as const
    }
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Historic <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Missions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Journey through the most groundbreaking space missions that have shaped our understanding of the cosmos
            and pushed the boundaries of human exploration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <div 
              key={mission.title}
              className="opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <MissionCard {...mission} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Missions;