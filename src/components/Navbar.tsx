import React, { useState } from 'react';
import { Menu, X, Rocket, Home, FileText, Image, Mail, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'launches', label: 'Launches', icon: Rocket },
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-900 via-blue-800 to-red-700 backdrop-blur-md shadow-2xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* NASA Official Logo */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => onPageChange('home')}>
            <div className="relative">
              {/* NASA Meatball Logo Recreation */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-blue-700 to-red-600 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-red-600"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg">
                    NASA
                  </div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full"></div>
                  <div className="absolute top-3 right-2 w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white tracking-wider">NASA</h1>
              <p className="text-xs text-blue-200 -mt-1 font-medium">National Aeronautics and Space Administration</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`group relative flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    currentPage === item.id
                      ? 'bg-white text-blue-900 shadow-lg'
                      : 'text-white hover:bg-white/20 hover:shadow-lg'
                  }`}
                >
                  <IconComponent size={20} className="group-hover:animate-pulse" />
                  <span>{item.label}</span>
                  {currentPage === item.id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full"></div>
                  )}
                </button>
              );
            })}

            {/* Launch Mission Button */}
            <button className="ml-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-8 py-3 rounded-full text-white font-bold transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl animate-pulse">
              🚀 LAUNCH MISSION
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-white/20">
            <div className="space-y-3">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onPageChange(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                      currentPage === item.id
                        ? 'bg-white text-blue-900'
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    <IconComponent size={20} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              
              <div className="pt-4">
                <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 px-6 py-4 rounded-lg text-white font-bold">
                  🚀 LAUNCH MISSION
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;