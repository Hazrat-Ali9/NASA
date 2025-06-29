import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, ExternalLink, Rocket, Target, Users, Zap, Play, Eye, TrendingUp, Flame } from 'lucide-react';

const RocketLaunches: React.FC = () => {
  const [selectedLaunch, setSelectedLaunch] = useState<number | null>(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [launchingRockets, setLaunchingRockets] = useState<Set<number>>(new Set());
  const [landingRockets, setLandingRockets] = useState<Set<number>>(new Set());

  const upcomingLaunches = [
    {
      id: 1,
      mission: 'Artemis II',
      rocket: 'Space Launch System (SLS)',
      date: 'November 2024',
      time: 'TBD',
      location: 'Kennedy Space Center, FL',
      launchPad: 'LC-39B',
      objective: 'Crewed lunar flyby mission - first crewed mission to the Moon since Apollo 17',
      crew: 4,
      duration: '10 days',
      status: 'Scheduled',
      priority: 'High',
      image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg',
      description: 'Historic return of humans to lunar vicinity, testing Orion spacecraft systems and life support for future Moon landing missions.',
      keyFacts: [
        'First crewed lunar mission in over 50 years',
        'Will test life support systems for future Moon landing',
        'Crew will fly around the Moon and return to Earth',
        'Validates deep space exploration capabilities'
      ],
      missionDetails: {
        trajectory: 'Free-return lunar trajectory',
        maxDistance: '384,400 km from Earth',
        crewMembers: ['Reid Wiseman', 'Victor Glover', 'Christina Hammock Koch', 'Jeremy Hansen'],
        primaryObjectives: [
          'Test Orion spacecraft in deep space environment',
          'Validate life support systems for extended missions',
          'Demonstrate crew operations beyond Earth orbit',
          'Prepare for Artemis III lunar landing'
        ]
      },
      boosterLanding: true,
      reusable: false
    },
    {
      id: 2,
      mission: 'Europa Clipper',
      rocket: 'Falcon Heavy',
      date: 'October 14, 2024',
      time: '12:06 PM EDT',
      location: 'Kennedy Space Center, FL',
      launchPad: 'LC-39A',
      objective: 'Study Jupiter\'s moon Europa and its subsurface ocean for signs of habitability',
      duration: '6 years (travel + mission)',
      status: 'Confirmed',
      priority: 'High',
      image: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg',
      description: 'Revolutionary mission to explore Europa\'s icy shell and hidden ocean, searching for conditions that could support life.',
      keyFacts: [
        'Will perform 49 close flybys of Europa',
        'Searching for signs of habitability in subsurface ocean',
        'Largest planetary science mission ever launched by NASA',
        'Advanced ice-penetrating radar and spectrometers'
      ],
      missionDetails: {
        trajectory: 'Jupiter orbit insertion via gravity assists',
        maxDistance: '628 million km from Earth',
        instruments: ['Europa Imaging System', 'Radar for Europa Assessment', 'Europa Thermal Emission Imaging System'],
        primaryObjectives: [
          'Map Europa\'s ice shell thickness and structure',
          'Analyze subsurface ocean composition',
          'Search for active geological processes',
          'Assess habitability potential'
        ]
      },
      boosterLanding: true,
      reusable: true
    },
    {
      id: 3,
      mission: 'PACE Mission',
      rocket: 'Falcon 9',
      date: 'February 8, 2024',
      time: '1:33 AM EST',
      location: 'Cape Canaveral Space Force Station, FL',
      launchPad: 'SLC-40',
      objective: 'Study ocean color, clouds, and aerosols for climate research and environmental monitoring',
      duration: '3+ years',
      status: 'Launched',
      priority: 'Medium',
      image: 'https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg',
      description: 'Advanced Earth observation mission providing unprecedented insights into ocean ecosystems and atmospheric conditions.',
      keyFacts: [
        'Advanced ocean color instrument with hyperspectral capabilities',
        'Will help understand climate change impacts on marine ecosystems',
        'Monitors phytoplankton populations and air quality globally',
        'Provides data for weather prediction and climate models'
      ],
      missionDetails: {
        trajectory: 'Sun-synchronous polar orbit at 676 km altitude',
        maxDistance: '676 km from Earth surface',
        instruments: ['Ocean Color Instrument', 'Cloud-Aerosol Polarimeter', 'Hyperspectral Imager'],
        primaryObjectives: [
          'Monitor ocean health and productivity',
          'Track atmospheric aerosols and clouds',
          'Support climate change research',
          'Improve weather and climate predictions'
        ]
      },
      boosterLanding: true,
      reusable: true
    },
    {
      id: 4,
      mission: 'Dragonfly',
      rocket: 'Falcon Heavy',
      date: 'July 2028',
      time: 'TBD',
      location: 'Kennedy Space Center, FL',
      launchPad: 'LC-39A',
      objective: 'Explore Saturn\'s moon Titan with a nuclear-powered rotorcraft',
      duration: '14 years (travel + mission)',
      status: 'In Development',
      priority: 'High',
      image: 'https://images.pexels.com/photos/73873/mars-mars-rover-space-travel-73873.jpeg',
      description: 'Groundbreaking mission to fly a rotorcraft on Titan, studying prebiotic chemistry and potential for life.',
      keyFacts: [
        'First rotorcraft to explore another world',
        'Will study Titan\'s organic chemistry and geology',
        'Nuclear-powered for extended operations',
        'Can fly to multiple locations across Titan\'s surface'
      ],
      missionDetails: {
        trajectory: 'Direct transfer to Saturn system',
        maxDistance: '1.4 billion km from Earth',
        instruments: ['Mass Spectrometer', 'Gamma-Ray Spectrometer', 'Meteorology Package', 'Cameras'],
        primaryObjectives: [
          'Study prebiotic chemistry on Titan',
          'Investigate methane cycle processes',
          'Analyze surface composition and geology',
          'Search for signs of past or present life'
        ]
      },
      boosterLanding: true,
      reusable: true
    },
    {
      id: 5,
      mission: 'Roman Space Telescope',
      rocket: 'Falcon Heavy',
      date: 'May 2027',
      time: 'TBD',
      location: 'Kennedy Space Center, FL',
      launchPad: 'LC-39A',
      objective: 'Study dark energy, exoplanets, and infrared astrophysics',
      duration: '5+ years',
      status: 'In Development',
      priority: 'High',
      image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg',
      description: 'Next-generation space telescope with wide-field infrared capabilities, advancing our understanding of the universe.',
      keyFacts: [
        'Wide Field Instrument with Hubble-quality resolution',
        'Will survey large areas of sky 100x faster than Hubble',
        'Coronagraph for direct exoplanet imaging',
        'Will help solve dark energy mystery'
      ],
      missionDetails: {
        trajectory: 'L2 Lagrange point (1.5 million km from Earth)',
        maxDistance: '1.5 million km from Earth',
        instruments: ['Wide Field Instrument', 'Coronagraph Instrument', 'Infrared Detectors'],
        primaryObjectives: [
          'Map dark matter distribution in universe',
          'Discover and characterize exoplanets',
          'Study galaxy formation and evolution',
          'Advance infrared astronomy capabilities'
        ]
      },
      boosterLanding: true,
      reusable: true
    },
    {
      id: 6,
      mission: 'Mars Sample Return',
      rocket: 'Falcon Heavy',
      date: 'September 2028',
      time: 'TBD',
      location: 'Kennedy Space Center, FL',
      launchPad: 'LC-39A',
      objective: 'Retrieve samples collected by Perseverance rover and return them to Earth',
      duration: '7 years (round trip)',
      status: 'In Development',
      priority: 'Critical',
      image: 'https://images.pexels.com/photos/73873/mars-mars-rover-space-travel-73873.jpeg',
      description: 'Historic mission to bring Martian samples to Earth for detailed analysis, potentially revealing signs of ancient life.',
      keyFacts: [
        'First samples returned from Mars to Earth',
        'Will analyze rocks collected by Perseverance rover',
        'Joint mission with European Space Agency',
        'Could provide evidence of ancient Martian life'
      ],
      missionDetails: {
        trajectory: 'Direct transfer to Mars, return via Earth flyby',
        maxDistance: '400 million km from Earth',
        components: ['Sample Retrieval Lander', 'Mars Ascent Vehicle', 'Earth Return Orbiter'],
        primaryObjectives: [
          'Retrieve samples from Perseverance rover',
          'Launch samples from Mars surface',
          'Return samples safely to Earth',
          'Enable detailed laboratory analysis'
        ]
      },
      boosterLanding: true,
      reusable: true
    }
  ];

  const launchStatistics = [
    { label: 'Total Launches (2024)', value: '47', icon: Rocket, color: 'text-blue-400' },
    { label: 'Success Rate', value: '98.9%', icon: Target, color: 'text-green-400' },
    { label: 'Crew Missions', value: '8', icon: Users, color: 'text-purple-400' },
    { label: 'Upcoming Missions', value: '12', icon: Calendar, color: 'text-orange-400' }
  ];

  const launchSites = [
    {
      name: 'Kennedy Space Center',
      location: 'Florida, USA',
      pads: ['LC-39A', 'LC-39B'],
      description: 'Primary launch site for NASA\'s most important missions',
      launches: 'Artemis, Commercial Crew, Planetary Missions'
    },
    {
      name: 'Cape Canaveral Space Force Station',
      location: 'Florida, USA',
      pads: ['SLC-40', 'SLC-41'],
      description: 'Military and commercial launch operations',
      launches: 'Atlas V, Falcon 9, Delta IV'
    },
    {
      name: 'Vandenberg Space Force Base',
      location: 'California, USA',
      pads: ['SLC-4E', 'SLC-6'],
      description: 'Polar and sun-synchronous orbit missions',
      launches: 'Earth observation, Military satellites'
    }
  ];

  const viewingGuide = [
    {
      title: 'Best Viewing Locations',
      tips: [
        'Cocoa Beach - 5 miles from KSC with clear eastern view',
        'Titusville - Excellent views across Indian River',
        'New Smyrna Beach - 20 miles north with beach access',
        'Merritt Island - Close proximity to launch pads'
      ]
    },
    {
      title: 'Viewing Tips',
      tips: [
        'Arrive 2-3 hours early for popular launches',
        'Night launches offer more spectacular visuals',
        'Bring folding chairs and sun protection',
        'Download NASA app for real-time updates'
      ]
    },
    {
      title: 'What to Expect',
      tips: [
        'Sonic booms from booster landings',
        'Visible exhaust plume for 2-3 minutes',
        'Stage separations as bright flashes',
        'Possible delays due to weather or technical issues'
      ]
    }
  ];

  const filteredLaunches = filterStatus === 'all' 
    ? upcomingLaunches 
    : upcomingLaunches.filter(launch => launch.status.toLowerCase() === filterStatus);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'launched': return 'bg-green-500';
      case 'confirmed': return 'bg-blue-500';
      case 'scheduled': return 'bg-yellow-500';
      case 'in development': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'critical': return 'text-red-400 bg-red-500/20';
      case 'high': return 'text-orange-400 bg-orange-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const handleLaunchMission = (launchId: number) => {
    setLaunchingRockets(prev => new Set([...prev, launchId]));
    
    // Simulate launch sequence
    setTimeout(() => {
      setLaunchingRockets(prev => {
        const newSet = new Set(prev);
        newSet.delete(launchId);
        return newSet;
      });
      
      // Start landing sequence for reusable rockets
      const launch = upcomingLaunches.find(l => l.id === launchId);
      if (launch?.boosterLanding) {
        setLandingRockets(prev => new Set([...prev, launchId]));
        
        setTimeout(() => {
          setLandingRockets(prev => {
            const newSet = new Set(prev);
            newSet.delete(launchId);
            return newSet;
          });
        }, 3000);
      }
    }, 4000);
  };

  return (
    <div className="space-y-8">
      {/* Floating Rocket Animation */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Animated Background Rockets */}
        <div className="absolute top-20 right-10 animate-float-slow">
          <Rocket size={40} className="text-orange-300 opacity-60 transform rotate-45" />
        </div>
        <div className="absolute bottom-1/4 left-20 animate-float">
          <Rocket size={32} className="text-blue-300 opacity-50 transform rotate-12" />
        </div>
        <div className="absolute top-1/2 right-1/3 animate-bounce">
          <Flame size={24} className="text-red-400 opacity-40" />
        </div>
      </div>

      {/* Header Section */}
      <div className="text-center relative">
        <div className="mb-6">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-white font-bold shadow-lg animate-pulse">
            🚀 LIVE LAUNCH TRACKING
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
          NASA <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Rocket Launches</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Stay updated with NASA's current and upcoming rocket launches, mission objectives, viewing opportunities, and real-time launch tracking.
        </p>
      </div>

      {/* Launch Statistics with Boost Effects */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {launchStatistics.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-orange-400/50 transition-all duration-500 hover:transform hover:scale-105 group relative overflow-hidden"
            >
              {/* Boost Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <IconComponent size={32} className={`mx-auto mb-3 ${stat.color} group-hover:animate-pulse relative z-10`} />
              <div className={`text-3xl font-bold mb-2 ${stat.color} relative z-10`}>{stat.value}</div>
              <div className="text-gray-300 font-medium relative z-10">{stat.label}</div>
              
              {/* Rocket Boost Trail */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-0 bg-gradient-to-t from-orange-500 to-transparent group-hover:h-full transition-all duration-1000 opacity-20"></div>
            </div>
          );
        })}
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {['all', 'launched', 'confirmed', 'scheduled', 'in development'].map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 relative overflow-hidden group ${
              filterStatus === status
                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
            }`}
          >
            {/* Boost Effect for Active Filter */}
            {filterStatus === status && (
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20 animate-pulse"></div>
            )}
            <span className="relative z-10">
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </button>
        ))}
      </div>

      {/* Launch Schedule Grid with Enhanced Animations */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredLaunches.map((launch, index) => (
          <div
            key={launch.id}
            className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 relative ${
              selectedLaunch === launch.id ? 'border-orange-400/50 shadow-lg shadow-orange-400/20' : ''
            }`}
            onClick={() => setSelectedLaunch(selectedLaunch === launch.id ? null : launch.id)}
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
            }}
          >
            {/* Launch Animation Overlay */}
            {launchingRockets.has(launch.id) && (
              <div className="absolute inset-0 z-50 pointer-events-none">
                <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 animate-rocket-launch">
                  <Rocket size={60} className="text-orange-400 transform rotate-45" />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-20 bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent animate-flame opacity-80"></div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-orange-400/30 rounded-full animate-ping"></div>
                </div>
              </div>
            )}

            {/* Landing Animation Overlay */}
            {landingRockets.has(launch.id) && (
              <div className="absolute inset-0 z-50 pointer-events-none">
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <Rocket size={40} className="text-blue-400 transform rotate-180" />
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-4 h-12 bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent animate-pulse opacity-60"></div>
                </div>
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-green-400 font-bold animate-pulse">
                  🎯 LANDING SUCCESS!
                </div>
              </div>
            )}

            {/* Launch Image */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={launch.image} 
                alt={launch.mission}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Status Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white ${getStatusColor(launch.status)}`}>
                {launch.status}
              </div>

              {/* Priority Badge */}
              <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${getPriorityColor(launch.priority)}`}>
                {launch.priority} Priority
              </div>

              {/* Reusable Badge */}
              {launch.reusable && (
                <div className="absolute top-12 left-4 px-2 py-1 bg-green-500/80 rounded-full text-xs font-bold text-white flex items-center gap-1">
                  <TrendingUp size={12} />
                  Reusable
                </div>
              )}

              {/* Mission Title Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-1">{launch.mission}</h3>
                <p className="text-orange-400 font-semibold">{launch.rocket}</p>
              </div>
            </div>

            {/* Launch Details */}
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-orange-400" />
                  <span>{launch.date}</span>
                </div>
                {launch.time !== 'TBD' && (
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-orange-400" />
                    <span>{launch.time}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-orange-400" />
                  <span>{launch.launchPad}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target size={16} className="text-orange-400" />
                  <span>{launch.duration}</span>
                </div>
              </div>

              <p className="text-gray-300 mb-4 line-clamp-2">{launch.description}</p>

              {/* Expand/Collapse Content */}
              {selectedLaunch === launch.id && (
                <div className="space-y-6 pt-4 border-t border-gray-700 animate-fadeInUp">
                  {/* Mission Objective */}
                  <div>
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Target size={18} className="text-orange-400" />
                      Mission Objective
                    </h4>
                    <p className="text-gray-300 text-sm">{launch.objective}</p>
                  </div>

                  {/* Key Facts */}
                  <div>
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                      <Zap size={18} className="text-orange-400" />
                      Key Facts
                    </h4>
                    <ul className="space-y-2">
                      {launch.keyFacts.map((fact, factIndex) => (
                        <li key={factIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="text-orange-400 mt-1">•</span>
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mission Details */}
                  <div>
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                      <Rocket size={18} className="text-orange-400" />
                      Mission Details
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3">
                        <p className="text-orange-400 font-semibold text-sm mb-1">Trajectory:</p>
                        <p className="text-gray-300 text-sm">{launch.missionDetails.trajectory}</p>
                      </div>
                      <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3">
                        <p className="text-orange-400 font-semibold text-sm mb-1">Max Distance:</p>
                        <p className="text-gray-300 text-sm">{launch.missionDetails.maxDistance}</p>
                      </div>
                    </div>
                  </div>

                  {/* Booster Landing Info */}
                  {launch.boosterLanding && (
                    <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-lg p-4">
                      <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
                        🎯 Booster Recovery
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {launch.reusable 
                          ? 'Reusable boosters will attempt autonomous landing on drone ship or landing pad'
                          : 'Booster recovery planned for this mission'
                        }
                      </p>
                    </div>
                  )}

                  {/* Primary Objectives */}
                  <div>
                    <h4 className="font-bold text-white mb-3">Primary Objectives:</h4>
                    <div className="grid gap-2">
                      {launch.missionDetails.primaryObjectives.map((objective, objIndex) => (
                        <div key={objIndex} className="flex items-start gap-2 bg-gray-700/30 rounded-lg p-3">
                          <span className="text-orange-400 font-bold text-sm">{objIndex + 1}.</span>
                          <span className="text-gray-300 text-sm">{objective}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLaunchMission(launch.id);
                      }}
                      disabled={launchingRockets.has(launch.id) || landingRockets.has(launch.id)}
                      className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 disabled:from-gray-600 disabled:to-gray-700 px-4 py-3 rounded-xl text-white font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 relative overflow-hidden group"
                    >
                      {launchingRockets.has(launch.id) ? (
                        <>
                          <Flame size={18} className="animate-bounce" />
                          Launching...
                        </>
                      ) : landingRockets.has(launch.id) ? (
                        <>
                          <TrendingUp size={18} className="animate-pulse" />
                          Landing...
                        </>
                      ) : (
                        <>
                          <Play size={18} />
                          Launch Mission
                        </>
                      )}
                      
                      {/* Boost Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    <button className="flex-1 border border-orange-400 hover:bg-orange-400/10 px-4 py-3 rounded-xl text-orange-400 font-bold transition-all duration-300 flex items-center justify-center gap-2">
                      <ExternalLink size={18} />
                      Mission Details
                    </button>
                  </div>
                </div>
              )}

              {/* Quick Action Button */}
              {selectedLaunch !== launch.id && (
                <button className="w-full bg-gradient-to-r from-orange-600/20 to-red-600/20 hover:from-orange-600 hover:to-red-600 border border-orange-500/30 hover:border-transparent px-6 py-3 rounded-xl text-orange-400 hover:text-white font-bold transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
                  <span className="relative z-10">View Mission Details</span>
                  {/* Hover Boost Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Launch Sites Information */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          NASA Launch <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Sites</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {launchSites.map((site, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-orange-400/50 transition-all duration-500 hover:transform hover:scale-105 group relative overflow-hidden">
              {/* Boost Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">{site.name}</h3>
              <p className="text-orange-400 font-semibold mb-3 flex items-center gap-2 relative z-10">
                <MapPin size={16} />
                {site.location}
              </p>
              <p className="text-gray-300 mb-4 relative z-10">{site.description}</p>
              
              <div className="space-y-3 relative z-10">
                <div>
                  <span className="text-orange-400 font-semibold text-sm">Launch Pads: </span>
                  <span className="text-gray-300 text-sm">{site.pads.join(', ')}</span>
                </div>
                <div>
                  <span className="text-orange-400 font-semibold text-sm">Typical Launches: </span>
                  <span className="text-gray-300 text-sm">{site.launches}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Launch Viewing Guide */}
      <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          🔭 Launch Viewing Guide
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {viewingGuide.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                <Eye size={20} />
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start gap-3 text-gray-300">
                    <span className="text-orange-400 mt-1">•</span>
                    <span className="text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-8 py-4 rounded-xl text-white font-bold transition-all duration-300 transform hover:scale-105 shadow-xl relative overflow-hidden group">
            <span className="relative z-10">📱 Download NASA Launch App</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Next Launch Countdown */}
      <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 animate-pulse"></div>
        
        <h2 className="text-2xl font-bold text-white mb-4 relative z-10">Next Major Launch</h2>
        <div className="text-4xl font-bold text-orange-400 mb-2 relative z-10">Europa Clipper</div>
        <div className="text-xl text-gray-300 mb-6 relative z-10">October 14, 2024 • 12:06 PM EDT</div>
        
        <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-6 relative z-10">
          {['Days', 'Hours', 'Minutes', 'Seconds'].map((unit, index) => (
            <div key={index} className="bg-orange-500/20 rounded-lg p-3 hover:bg-orange-500/30 transition-colors duration-300">
              <div className="text-2xl font-bold text-orange-400">--</div>
              <div className="text-sm text-gray-300">{unit}</div>
            </div>
          ))}
        </div>
        
        <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-6 py-3 rounded-xl text-white font-bold transition-all duration-300 transform hover:scale-105 relative z-10 group overflow-hidden">
          <span className="relative z-10">🔔 Set Launch Reminder</span>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  );
};

export default RocketLaunches;