import React, { useState } from 'react';
import { Cloud, Thermometer, Droplets, Wind, TreePine, Waves } from 'lucide-react';

const EarthScience: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('climate');

  const earthScienceCategories = {
    climate: {
      title: 'Climate Monitoring',
      description: 'NASA satellites continuously monitor Earth\'s climate system and track changes over time.',
      missions: [
        {
          name: 'MODIS (Terra & Aqua)',
          purpose: 'Global climate and environmental monitoring',
          data: 'Land surface temperature, vegetation, ocean color, clouds',
          launched: '1999 & 2002'
        },
        {
          name: 'GRACE-FO',
          purpose: 'Track changes in Earth\'s water and ice',
          data: 'Groundwater depletion, ice sheet mass loss, sea level rise',
          launched: '2018'
        },
        {
          name: 'OCO-2',
          purpose: 'Monitor atmospheric carbon dioxide',
          data: 'CO2 concentrations, carbon cycle, emission sources',
          launched: '2014'
        }
      ],
      keyFindings: [
        'Global average temperature has risen 1.1°C since 1880',
        'Arctic sea ice declining at 13% per decade',
        'Sea levels rising 3.3mm per year',
        'Atmospheric CO2 levels exceed 420 ppm'
      ]
    },
    weather: {
      title: 'Weather Prediction',
      description: 'Advanced satellite systems provide critical data for weather forecasting and severe weather monitoring.',
      missions: [
        {
          name: 'GOES-R Series',
          purpose: 'Geostationary weather monitoring',
          data: 'Real-time weather imagery, lightning detection, solar activity',
          launched: '2016-2022'
        },
        {
          name: 'JPSS',
          purpose: 'Polar-orbiting environmental monitoring',
          data: 'Atmospheric temperature, humidity, ozone profiles',
          launched: '2017-present'
        },
        {
          name: 'GPM',
          purpose: 'Global precipitation measurement',
          data: 'Rainfall, snowfall, storm intensity worldwide',
          launched: '2014'
        }
      ],
      keyFindings: [
        'Hurricane intensity forecasting improved by 70%',
        'Tornado warning lead time increased to 13 minutes',
        'Global precipitation patterns mapped in real-time',
        'Extreme weather events tracked with unprecedented accuracy'
      ]
    },
    disasters: {
      title: 'Natural Disasters',
      description: 'NASA Earth observation satellites help monitor and respond to natural disasters worldwide.',
      missions: [
        {
          name: 'Landsat Program',
          purpose: 'Long-term Earth surface monitoring',
          data: 'Land use changes, deforestation, urban growth, disaster damage',
          launched: '1972-present'
        },
        {
          name: 'SMAP',
          purpose: 'Soil moisture monitoring',
          data: 'Drought conditions, flood risk, agricultural monitoring',
          launched: '2015'
        },
        {
          name: 'ECOSTRESS',
          purpose: 'Plant stress and water use monitoring',
          data: 'Vegetation health, wildfire risk, urban heat islands',
          launched: '2018'
        }
      ],
      keyFindings: [
        'Wildfire detection within minutes of ignition',
        'Flood extent mapping for emergency response',
        'Earthquake damage assessment from space',
        'Volcanic ash tracking for aviation safety'
      ]
    }
  };

  const climateIndicators = [
    {
      name: 'Global Temperature',
      current: '+1.1°C',
      trend: 'Rising',
      icon: Thermometer,
      description: 'Above 1880-1920 average',
      color: 'text-red-400'
    },
    {
      name: 'Sea Level',
      current: '+3.3mm/year',
      trend: 'Rising',
      icon: Waves,
      description: 'Rate of increase',
      color: 'text-blue-400'
    },
    {
      name: 'Arctic Sea Ice',
      current: '-13%/decade',
      trend: 'Declining',
      icon: Cloud,
      description: 'September minimum extent',
      color: 'text-cyan-400'
    },
    {
      name: 'CO2 Levels',
      current: '421 ppm',
      trend: 'Rising',
      icon: Wind,
      description: 'Atmospheric concentration',
      color: 'text-orange-400'
    }
  ];

  const earthObservationTools = [
    {
      name: 'Worldview',
      description: 'Interactive interface for browsing NASA satellite imagery',
      features: ['Real-time imagery', 'Historical data', 'Natural disasters', 'Climate patterns'],
      url: 'worldview.earthdata.nasa.gov'
    },
    {
      name: 'Climate Change Viewer',
      description: 'Visualize climate change impacts over time',
      features: ['Temperature trends', 'Sea ice changes', 'Precipitation patterns', 'Vegetation changes'],
      url: 'climate.nasa.gov/evidence'
    },
    {
      name: 'Fire Information System',
      description: 'Near real-time active fire detection',
      features: ['Fire locations', 'Burn severity', 'Smoke forecasts', 'Fire weather'],
      url: 'firms.modaps.eosdis.nasa.gov'
    }
  ];

  const categories = [
    { id: 'climate', name: 'Climate', icon: Thermometer },
    { id: 'weather', name: 'Weather', icon: Cloud },
    { id: 'disasters', name: 'Disasters', icon: TreePine }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Earth <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Science</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          NASA's Earth observation satellites provide critical data for understanding our planet's climate, weather, and environmental changes.
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
          {earthScienceCategories[selectedCategory as keyof typeof earthScienceCategories].title}
        </h3>
        <p className="text-gray-300 mb-6">
          {earthScienceCategories[selectedCategory as keyof typeof earthScienceCategories].description}
        </p>

        {/* Missions */}
        <div className="space-y-4 mb-6">
          <h4 className="text-lg font-semibold text-green-400">Key Missions:</h4>
          <div className="grid md:grid-cols-3 gap-4">
            {earthScienceCategories[selectedCategory as keyof typeof earthScienceCategories].missions.map((mission, index) => (
              <div key={index} className="bg-gray-700/50 rounded-lg p-4">
                <h5 className="font-bold text-white mb-2">{mission.name}</h5>
                <p className="text-green-400 text-sm mb-2">{mission.purpose}</p>
                <p className="text-gray-300 text-sm mb-2">{mission.data}</p>
                <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">
                  {mission.launched}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Findings */}
        <div>
          <h4 className="text-lg font-semibold text-green-400 mb-3">Key Findings:</h4>
          <div className="grid md:grid-cols-2 gap-3">
            {earthScienceCategories[selectedCategory as keyof typeof earthScienceCategories].keyFindings.map((finding, index) => (
              <div key={index} className="flex items-start gap-2 bg-gray-700/30 rounded-lg p-3">
                <span className="text-green-400 mt-1">•</span>
                <span className="text-gray-300 text-sm">{finding}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Climate Indicators */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white text-center">Current Climate Indicators</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {climateIndicators.map((indicator, index) => {
            const IconComponent = indicator.icon;
            return (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-green-400 transition-colors duration-300">
                <IconComponent size={32} className={`mx-auto mb-3 ${indicator.color}`} />
                <h4 className="font-bold text-white mb-2">{indicator.name}</h4>
                <div className={`text-2xl font-bold mb-1 ${indicator.color}`}>
                  {indicator.current}
                </div>
                <p className="text-gray-300 text-sm mb-2">{indicator.description}</p>
                <span className={`text-xs px-2 py-1 rounded ${
                  indicator.trend === 'Rising' ? 'bg-red-500/20 text-red-300' : 'bg-blue-500/20 text-blue-300'
                }`}>
                  {indicator.trend}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Earth Observation Tools */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white text-center">Interactive Earth Observation Tools</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {earthObservationTools.map((tool, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-400 transition-colors duration-300">
              <h4 className="text-xl font-bold text-white mb-3">{tool.name}</h4>
              <p className="text-gray-300 mb-4">{tool.description}</p>
              <div className="space-y-2 mb-4">
                {tool.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="text-blue-400 text-sm font-mono bg-gray-700/50 rounded px-3 py-2">
                {tool.url}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Environmental Impact */}
      <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-4 text-center">NASA Earth Science Impact</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">50+</div>
            <div className="text-sm text-gray-300">Earth Observation Missions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">40+</div>
            <div className="text-sm text-gray-300">Years of Climate Data</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">1000+</div>
            <div className="text-sm text-gray-300">Research Papers Annually</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">24/7</div>
            <div className="text-sm text-gray-300">Global Monitoring</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarthScience;