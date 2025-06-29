import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import StarField from './components/StarField';

// Import existing sections for additional pages
import RocketLaunches from './components/sections/RocketLaunches';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div>
            <HeroCarousel />
            
            {/* Mission Statistics Section */}
            <div className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-black py-20">
              <StarField />
              <div className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                    NASA by the <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">Numbers</span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Discover the incredible achievements and ongoing missions that define NASA's legacy of exploration.
                  </p>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                  {[
                    { number: '65+', label: 'Years of Exploration', icon: '🚀' },
                    { number: '350+', label: 'Astronauts Trained', icon: '👨‍🚀' },
                    { number: '12', label: 'Humans on Moon', icon: '🌙' },
                    { number: '1000+', label: 'Missions Launched', icon: '🛰️' }
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105 group"
                    >
                      <div className="text-4xl mb-4 group-hover:animate-bounce">{stat.icon}</div>
                      <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-gray-300 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Current Missions Highlight */}
                <div className="bg-gradient-to-r from-blue-900/30 to-red-900/30 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-10 text-center">
                  <h3 className="text-3xl font-bold text-white mb-6">🌟 Current Active Missions</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      { name: 'Artemis Program', status: 'Preparing for Moon Landing', progress: '85%' },
                      { name: 'Mars Perseverance', status: 'Collecting Samples', progress: '92%' },
                      { name: 'James Webb Telescope', status: 'Deep Space Observations', progress: '100%' }
                    ].map((mission, index) => (
                      <div key={index} className="bg-gray-800/50 rounded-xl p-6">
                        <h4 className="text-xl font-bold text-white mb-3">{mission.name}</h4>
                        <p className="text-gray-300 mb-4">{mission.status}</p>
                        <div className="w-full bg-gray-700 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-1000"
                            style={{ width: mission.progress }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-400 mt-2">{mission.progress} Complete</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'launches':
        return (
          <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black py-24">
            <div className="max-w-7xl mx-auto px-4">
              <RocketLaunches />
            </div>
          </div>
        );

      case 'blog':
        return <BlogSection />;

      case 'gallery':
        return (
          <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black py-24">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                  NASA <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Gallery</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Explore stunning images from space missions, Earth observations, and deep space discoveries.
                </p>
              </div>

              {/* Gallery Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: 'Artemis Launch', image: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg' },
                  { title: 'Mars Surface', image: 'https://images.pexels.com/photos/73873/mars-mars-rover-space-travel-73873.jpeg' },
                  { title: 'Deep Space', image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg' },
                  { title: 'Earth from ISS', image: 'https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg' },
                  { title: 'Nebula', image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg' },
                  { title: 'Rocket Launch', image: 'https://images.pexels.com/photos/73873/mars-mars-rover-space-travel-73873.jpeg' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group relative bg-gray-800/50 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black py-24">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                  Contact <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">NASA</span>
                </h1>
                <p className="text-xl text-gray-300">
                  Get in touch with NASA for inquiries, partnerships, and educational opportunities.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-10">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-8">NASA Headquarters</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-white mb-2">Address</h4>
                        <p className="text-gray-300">300 E Street SW, Suite 5R30<br />Washington, DC 20546</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2">Phone</h4>
                        <p className="text-gray-300">(202) 358-0001</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2">Email</h4>
                        <p className="text-gray-300">public-inquiries@nasa.gov</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-8">Send Message</h3>
                    <form className="space-y-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-6 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-6 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                      />
                      <textarea
                        rows={6}
                        placeholder="Your Message"
                        className="w-full px-6 py-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                      />
                      <button className="w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 px-8 py-4 rounded-xl text-white font-bold transition-all duration-300 transform hover:scale-105">
                        Send Message to NASA
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;