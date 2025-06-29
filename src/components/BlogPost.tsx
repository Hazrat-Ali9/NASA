import React, { useState } from 'react';
import { ArrowLeft, Calendar, User, Clock, Share2, Heart, Eye, Bookmark, ExternalLink, Rocket, AlertTriangle, Target, Zap } from 'lucide-react';

interface BlogPostProps {
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ onBack }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [views] = useState(15847);
  const [likes, setLikes] = useState(1247);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black py-24">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Blog
        </button>

        {/* Article Header */}
        <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-96 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/73873/mars-mars-rover-space-travel-73873.jpeg"
              alt="Mars surface with rocket launch preparation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-2 bg-red-600/80 backdrop-blur-sm rounded-full text-white font-bold">
                  🚀 MARS MISSION
                </span>
                <span className="px-4 py-2 bg-orange-600/80 backdrop-blur-sm rounded-full text-white font-bold">
                  BREAKTHROUGH TECHNOLOGY
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Revolutionary Mars Rocket Launch: Engineering the Future of Interplanetary Travel
              </h1>
            </div>
          </div>

          {/* Article Meta */}
          <div className="p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-700">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    DM
                  </div>
                  <div>
                    <div className="text-white font-bold">Dr. Maria Santos</div>
                    <div className="text-gray-400 text-sm">Mars Mission Engineer</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>January 20, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>12 min read</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-1">
                    <Eye size={16} />
                    <span>{views.toLocaleString()}</span>
                  </div>
                  <button
                    onClick={handleLike}
                    className={`flex items-center gap-1 transition-colors duration-300 ${
                      isLiked ? 'text-red-400' : 'hover:text-red-400'
                    }`}
                  >
                    <Heart size={16} className={isLiked ? 'fill-current' : ''} />
                    <span>{likes}</span>
                  </button>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`p-2 rounded-lg transition-colors duration-300 ${
                      isBookmarked ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-400 hover:text-white'
                    }`}
                  >
                    <Bookmark size={16} className={isBookmarked ? 'fill-current' : ''} />
                  </button>
                  <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-400 hover:text-white transition-colors duration-300">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg prose-invert max-w-none">
              {/* Introduction */}
              <div className="text-xl text-gray-300 leading-relaxed mb-8 p-6 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl border border-red-500/30">
                <p className="mb-0">
                  In a groundbreaking achievement that marks a new era in space exploration, NASA engineers have successfully designed and tested the first rocket capable of launching from the Martian surface. This revolutionary technology represents decades of research, innovation, and engineering excellence, bringing humanity one step closer to establishing a permanent presence on the Red Planet.
                </p>
              </div>

              {/* Technical Challenges Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <AlertTriangle className="text-orange-400" size={32} />
                  Overcoming Unprecedented Technical Challenges
                </h2>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Launching a rocket from Mars presents unique challenges that dwarf those faced during Earth-based launches. The Martian environment, with its thin atmosphere, extreme temperature variations, and reduced gravity, requires completely reimagined propulsion systems and launch protocols.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Zap className="text-yellow-400" size={24} />
                      Atmospheric Challenges
                    </h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Mars atmosphere is 100x thinner than Earth's</li>
                      <li>• 95% carbon dioxide composition</li>
                      <li>• Extreme temperature fluctuations (-80°C to 20°C)</li>
                      <li>• Frequent dust storms affecting visibility</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Target className="text-blue-400" size={24} />
                      Gravitational Factors
                    </h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• 38% of Earth's gravitational pull</li>
                      <li>• Reduced escape velocity requirements</li>
                      <li>• Modified trajectory calculations needed</li>
                      <li>• Different fuel consumption patterns</li>
                    </ul>
                  </div>
                </div>

                <div className="relative mb-8">
                  <img
                    src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg"
                    alt="Comparison between Earth and Mars atmospheric conditions"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold">
                      <strong>Image Credit:</strong> NASA/JPL-Caltech - Atmospheric comparison between Earth and Mars showing density variations
                    </p>
                  </div>
                </div>
              </section>

              {/* Mission Objectives Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <Target className="text-green-400" size={32} />
                  Mission Objectives and Strategic Goals
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  The Mars Ascent Vehicle (MAV) represents more than just a technological achievement—it's the cornerstone of humanity's long-term presence on Mars. The primary objectives of this groundbreaking mission extend far beyond the initial launch.
                </p>

                <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-xl p-8 border border-green-500/30 mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Primary Mission Goals</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-bold text-green-400 mb-3">Immediate Objectives</h4>
                      <ul className="text-gray-300 space-y-2">
                        <li>• Successful sample return to Earth</li>
                        <li>• Validation of Mars-based propulsion systems</li>
                        <li>• Testing of autonomous launch protocols</li>
                        <li>• Demonstration of in-situ resource utilization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-blue-400 mb-3">Long-term Vision</h4>
                      <ul className="text-gray-300 space-y-2">
                        <li>• Establishing Mars-Earth transportation corridor</li>
                        <li>• Supporting human Mars missions</li>
                        <li>• Enabling Mars surface exploration expansion</li>
                        <li>• Creating sustainable Mars infrastructure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="relative mb-8">
                  <img
                    src="https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg"
                    alt="Mars Ascent Vehicle concept design and mission trajectory"
                    className="w-full h-80 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold">
                      <strong>Image Credit:</strong> NASA/JPL-Caltech - Artist's concept of the Mars Ascent Vehicle during launch sequence
                    </p>
                  </div>
                </div>
              </section>

              {/* Significance Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <Rocket className="text-purple-400" size={32} />
                  Historical Significance and Future Implications
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  This achievement represents a pivotal moment in human space exploration, comparable to the first powered flight or the first Moon landing. The successful development of Mars launch capabilities fundamentally changes our relationship with the Red Planet, transforming it from a destination to a potential second home.
                </p>

                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-8 border border-purple-500/30 mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Revolutionary Impact</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-purple-400 mb-3">Scientific Advancement</h4>
                      <p className="text-gray-300">
                        The ability to launch from Mars enables unprecedented scientific research opportunities, including the return of larger and more diverse samples, deployment of advanced research equipment, and establishment of permanent research stations.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-pink-400 mb-3">Human Exploration</h4>
                      <p className="text-gray-300">
                        This technology is essential for human Mars missions, providing the critical capability for astronauts to return to Earth safely. It also enables the establishment of sustainable human settlements on Mars.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-blue-400 mb-3">Technological Innovation</h4>
                      <p className="text-gray-300">
                        The engineering solutions developed for Mars launches have applications beyond space exploration, including advanced materials science, autonomous systems, and sustainable energy technologies.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative mb-8">
                  <img
                    src="https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg"
                    alt="Future Mars colony with multiple launch vehicles"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold">
                      <strong>Image Credit:</strong> NASA/JPL-Caltech - Conceptual view of future Mars settlement with launch infrastructure
                    </p>
                  </div>
                </div>
              </section>

              {/* Technical Specifications */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Technical Specifications and Innovation</h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">11.2 km/s</div>
                    <div className="text-gray-300">Mars Escape Velocity</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">500 kg</div>
                    <div className="text-gray-300">Payload Capacity</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                    <div className="text-gray-300">Fuel Efficiency</div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  The Mars Ascent Vehicle utilizes cutting-edge propulsion technology, including methane-oxygen engines that can be fueled using resources extracted directly from the Martian atmosphere. This in-situ resource utilization (ISRU) capability is crucial for sustainable Mars operations.
                </p>
              </section>

              {/* Future Outlook */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Looking Toward the Future</h2>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  As we stand on the threshold of this new era in space exploration, the successful development of Mars launch capabilities opens infinite possibilities. The next decade will see the first human missions to Mars, the establishment of permanent research stations, and perhaps the beginning of true interplanetary civilization.
                </p>

                <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-blue-500/30">
                  <h3 className="text-2xl font-bold text-white mb-4">What's Next?</h3>
                  <ul className="text-gray-300 space-y-3">
                    <li>• <strong>2026:</strong> First automated sample return mission</li>
                    <li>• <strong>2028:</strong> Human Mars mission with return capability</li>
                    <li>• <strong>2030:</strong> Establishment of permanent Mars research station</li>
                    <li>• <strong>2035:</strong> Regular cargo and crew transportation between Earth and Mars</li>
                  </ul>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-8">
                <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl p-8 border border-red-500/30">
                  <p className="text-xl text-gray-300 leading-relaxed mb-0">
                    The successful development of Mars rocket launch capabilities represents humanity's greatest technological achievement since the Moon landing. As we prepare for the first launches from the Martian surface, we're not just advancing our scientific understanding—we're taking the first steps toward becoming a truly interplanetary species.
                  </p>
                </div>
              </section>
            </div>

            {/* Article Footer */}
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-gray-400">Share this article:</span>
                  <div className="flex gap-2">
                    {['Twitter', 'Facebook', 'LinkedIn', 'Reddit'].map((platform) => (
                      <button
                        key={platform}
                        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {platform}
                      </button>
                    ))}
                  </div>
                </div>
                
                <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  <ExternalLink size={16} />
                  View Original NASA Report
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Mars Sample Return Mission Update',
                image: 'https://images.pexels.com/photos/73873/mars-mars-rover-space-travel-73873.jpeg',
                category: 'Missions'
              },
              {
                title: 'Breakthrough in Martian Fuel Production',
                image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg',
                category: 'Technology'
              },
              {
                title: 'Future of Human Mars Exploration',
                image: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg',
                category: 'Exploration'
              }
            ].map((article, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400 transition-colors duration-300 cursor-pointer group"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <span className="text-xs text-blue-400 font-semibold">{article.category}</span>
                  <h4 className="text-white font-bold mt-1 group-hover:text-blue-400 transition-colors duration-300">
                    {article.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;