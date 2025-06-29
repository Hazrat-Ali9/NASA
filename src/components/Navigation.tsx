import React, { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: 'launches', title: 'Rocket Launches', icon: '🚀' },
    { id: 'mars', title: 'Mars Exploration', icon: '🔴' },
    { id: 'technology', title: 'Space Technology', icon: '🛰️' },
    { id: 'iss', title: 'Space Station', icon: '🏗️' },
    { id: 'deepspace', title: 'Deep Space', icon: '🌌' },
    { id: 'earth', title: 'Earth Science', icon: '🌍' },
    { id: 'astronauts', title: 'Astronaut Training', icon: '👨‍🚀' },
    { id: 'partnerships', title: 'Partnerships', icon: '🤝' },
    { id: 'education', title: 'Education', icon: '📚' },
    { id: 'history', title: 'History', icon: '📜' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Rocket className="text-blue-400" size={28} />
            <h1 className="text-xl font-bold text-white">NASA Educational Hub</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <span className="mr-1">{section.icon}</span>
                {section.title}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700">
            <div className="grid grid-cols-2 gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    onSectionChange(section.id);
                    setIsMenuOpen(false);
                  }}
                  className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <div className="text-lg mb-1">{section.icon}</div>
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;