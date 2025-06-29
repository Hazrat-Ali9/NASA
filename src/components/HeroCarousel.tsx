import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, ExternalLink, Rocket } from 'lucide-react';

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const slides = [
    {
      id: 1,
      title: 'Artemis III: Return to the Moon',
      subtitle: 'First Woman and Next Man on Lunar Surface',
      description: 'NASA\'s Artemis III mission will make history by landing the first woman and the next man on the Moon\'s south pole, establishing a sustainable lunar presence for future Mars exploration.',
      image: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg',
      cta: 'Explore Artemis',
      stats: { 
        launch: '2026', 
        crew: '4 Astronauts', 
        duration: '6.5 Days',
        location: 'Lunar South Pole'
      },
      color: 'from-blue-600 to-purple-600'
    },
    {
      id: 2,
      title: 'SpaceX Falcon Heavy Launch',
      subtitle: 'Most Powerful Operational Rocket',
      description: 'Experience the thunderous power of SpaceX\'s Falcon Heavy as it carries critical NASA payloads to deep space, featuring synchronized booster landings and cutting-edge technology.',
      image: 'https://images.pexels.com/photos/73873/mars-mars-rover-space-travel-73873.jpeg',
      cta: 'Watch Launch',
      stats: { 
        thrust: '5.1M lbf', 
        payload: '64 tons to LEO', 
        boosters: '3 Falcon 9',
        success: '100% Mission Success'
      },
      color: 'from-orange-600 to-red-600'
    },
    {
      id: 3,
      title: 'James Webb Space Telescope',
      subtitle: 'Unveiling the Mysteries of the Universe',
      description: 'Journey through time and space with the most powerful space telescope ever built, capturing unprecedented images of distant galaxies and revealing the secrets of cosmic evolution.',
      image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg',
      cta: 'View Discoveries',
      stats: { 
        distance: '1.5M km from Earth', 
        mirror: '6.5m Primary Mirror', 
        wavelength: 'Infrared',
        discoveries: '1000+ Galaxies'
      },
      color: 'from-purple-600 to-pink-600'
    }
  ];

  useEffect(() => {
    // Simulate loading
    const loadTimer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || isLoading) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isLoading, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (isLoading) {
    return (
      <div className="h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-24 h-24 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
            <Rocket className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Preparing Launch Sequence</h2>
          <p className="text-blue-300">Loading NASA Mission Data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          
          {/* Rocket Launch Animation */}
          <div className="absolute inset-0 z-20">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
            
            {/* Animated Rocket Trail */}
            <div className="absolute bottom-10 right-10 animate-bounce">
              <div className="relative">
                <Rocket size={40} className="text-orange-400 transform rotate-45" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-orange-500/30 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 z-30 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-4xl">
            <div className="mb-6">
              <span className={`inline-block px-6 py-3 bg-gradient-to-r ${slides[currentSlide].color} rounded-full text-white font-bold shadow-lg animate-pulse`}>
                🚀 LIVE MISSION UPDATE
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fadeInUp leading-tight">
              {slides[currentSlide].title}
            </h1>
            
            <h2 className="text-2xl md:text-4xl text-blue-300 mb-8 animate-fadeInUp font-semibold" style={{ animationDelay: '0.2s' }}>
              {slides[currentSlide].subtitle}
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl animate-fadeInUp leading-relaxed" style={{ animationDelay: '0.4s' }}>
              {slides[currentSlide].description}
            </p>

            {/* Mission Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              {Object.entries(slides[currentSlide].stats).map(([key, value], index) => (
                <div key={key} className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{value}</div>
                  <div className="text-sm text-blue-300 capitalize font-medium">{key.replace(/([A-Z])/g, ' $1')}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
              <button className={`group bg-gradient-to-r ${slides[currentSlide].color} hover:shadow-2xl px-10 py-5 rounded-full text-white text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl`}>
                <span className="flex items-center justify-center gap-3">
                  <Play size={24} className="group-hover:animate-pulse" />
                  {slides[currentSlide].cta}
                </span>
              </button>
              
              <button className="group border-3 border-white/50 hover:border-white hover:bg-white/10 px-10 py-5 rounded-full text-white text-xl font-bold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                <span className="flex items-center justify-center gap-3">
                  <ExternalLink size={24} className="group-hover:animate-pulse" />
                  Mission Details
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex items-center gap-6 bg-black/40 backdrop-blur-md rounded-full px-8 py-4 border border-white/20">
          <button
            onClick={prevSlide}
            className="p-3 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full text-white transition-all duration-300 hover:scale-110 group"
          >
            <ChevronLeft size={24} className="group-hover:animate-pulse" />
          </button>

          {/* Slide Indicators */}
          <div className="flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full text-white transition-all duration-300 hover:scale-110 group"
          >
            <ChevronRight size={24} className="group-hover:animate-pulse" />
          </button>
        </div>
      </div>

      {/* Auto-play Toggle */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-32 right-8 z-40 p-4 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full text-white transition-all duration-300 border border-white/20"
      >
        {isAutoPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>

      {/* Mission Counter */}
      <div className="absolute top-32 left-8 z-40 bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/20">
        <div className="text-white text-center">
          <div className="text-2xl font-bold">{String(currentSlide + 1).padStart(2, '0')}</div>
          <div className="text-sm text-blue-300">of {String(slides.length).padStart(2, '0')}</div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;