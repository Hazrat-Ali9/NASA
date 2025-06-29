import React, { useState } from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

interface MissionCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  status: 'completed' | 'ongoing' | 'planned';
}

const MissionCard: React.FC<MissionCardProps> = ({ 
  title, 
  description, 
  date, 
  location, 
  image, 
  status 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const statusColors = {
    completed: 'from-green-500 to-emerald-500',
    ongoing: 'from-blue-500 to-cyan-500',
    planned: 'from-purple-500 to-pink-500'
  };

  const statusText = {
    completed: 'Mission Complete',
    ongoing: 'Active Mission',
    planned: 'Planned Mission'
  };

  return (
    <div 
      className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${statusColors[status]}`}>
          {statusText[status]}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-300 mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
        </div>
        
        <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group">
          <span>Learn More</span>
          <ExternalLink 
            size={16} 
            className={`transition-transform duration-300 ${isHovered ? 'transform translate-x-1 -translate-y-1' : ''}`} 
          />
        </button>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default MissionCard;