import React from 'react';
import { Rocket, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ExternalLink, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    'About NASA',
    'Missions & Launches',
    'News & Events',
    'Multimedia Gallery',
    'NASA Centers',
    'Careers at NASA'
  ];

  const missions = [
    'Artemis Program',
    'Mars Exploration',
    'ISS Operations',
    'James Webb Telescope',
    'Earth Science',
    'Deep Space Network'
  ];

  const resources = [
    'NASA Education',
    'STEM Engagement',
    'For Educators',
    'For Students',
    'NASA Apps',
    'Open Data Portal'
  ];

  return (
    <footer className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-black border-t-4 border-gradient-to-r from-blue-500 to-red-500">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* NASA Official Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="relative">
                {/* Official NASA Meatball Logo */}
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 via-blue-700 to-red-600 rounded-full flex items-center justify-center border-4 border-white shadow-2xl">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-red-600"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm">
                      NASA
                    </div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full"></div>
                    <div className="absolute top-3 right-2 w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full animate-pulse" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white tracking-wider">NASA</h3>
                <p className="text-sm text-blue-300 font-medium">National Aeronautics and Space Administration</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              Leading humanity's exploration of space and advancing our understanding of Earth, 
              the solar system, and the universe beyond through cutting-edge science and technology.
            </p>

            {/* Official Social Media */}
            <div>
              <h4 className="text-white font-bold mb-4">Follow NASA</h4>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, label: 'Facebook', followers: '18M' },
                  { icon: Twitter, label: 'Twitter', followers: '47M' },
                  { icon: Instagram, label: 'Instagram', followers: '71M' },
                  { icon: Youtube, label: 'YouTube', followers: '13M' }
                ].map(({ icon: Icon, label, followers }) => (
                  <div key={label} className="group">
                    <button className="w-14 h-14 bg-gradient-to-br from-gray-800/50 to-gray-900/50 hover:from-blue-600 hover:to-purple-600 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-transparent shadow-lg">
                      <Icon size={24} />
                    </button>
                    <div className="text-xs text-gray-400 text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {followers}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <Globe size={24} className="text-blue-400" />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center gap-3 group text-lg">
                    <span className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span>{link}</span>
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Current Missions */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <Rocket size={24} className="text-red-400" />
              Active Missions
            </h4>
            <ul className="space-y-4">
              {missions.map((mission) => (
                <li key={mission}>
                  <button className="text-gray-300 hover:text-red-400 transition-all duration-300 flex items-center gap-3 group text-lg">
                    <span className="w-2 h-2 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span>{mission}</span>
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-8">Resources & Contact</h4>
            <ul className="space-y-4 mb-8">
              {resources.map((resource) => (
                <li key={resource}>
                  <button className="text-gray-300 hover:text-purple-400 transition-all duration-300 flex items-center gap-3 group text-lg">
                    <span className="w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span>{resource}</span>
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </li>
              ))}
            </ul>

            {/* Official Contact Info */}
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <h5 className="font-bold text-white mb-4">NASA Headquarters</h5>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-blue-400" />
                  <span>300 E Street SW<br />Washington, DC 20546</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-green-400" />
                  <span>(202) 358-0001</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-purple-400" />
                  <span>public-inquiries@nasa.gov</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-900/40 to-red-900/40 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-10 mb-16">
          <div className="text-center mb-8">
            <h4 className="text-3xl font-bold text-white mb-4">🚀 Stay Connected with NASA</h4>
            <p className="text-xl text-gray-300">Get the latest updates on missions, discoveries, and space exploration delivered to your inbox.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300 text-lg"
            />
            <button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 px-10 py-4 rounded-xl text-white font-bold transition-all duration-300 transform hover:scale-105 shadow-xl text-lg">
              Subscribe to NASA News
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <p className="text-gray-300 text-lg mb-2">
                © {currentYear} National Aeronautics and Space Administration
              </p>
              <p className="text-gray-400">
                Official U.S. Government Website | Website developed by{' '}
                <span className="text-blue-400 font-bold">Hazrat Ali</span>
              </p>
            </div>
            
            <div className="flex flex-wrap gap-8 text-gray-400">
              <button className="hover:text-blue-400 transition-colors duration-300 font-medium">Privacy Policy</button>
              <button className="hover:text-blue-400 transition-colors duration-300 font-medium">Terms of Use</button>
              <button className="hover:text-blue-400 transition-colors duration-300 font-medium">Accessibility</button>
              <button className="hover:text-blue-400 transition-colors duration-300 font-medium">FOIA</button>
              <button className="hover:text-blue-400 transition-colors duration-300 font-medium">No FEAR Act</button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Mission Control Animation */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl">
            <Rocket className="text-white" size={32} />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;