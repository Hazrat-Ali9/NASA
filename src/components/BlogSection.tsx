import React, { useState } from 'react';
import { Calendar, User, Eye, Heart, Share2, ArrowRight, Clock, Tag } from 'lucide-react';
import BlogPost from './BlogPost';

const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showBlogPost, setShowBlogPost] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const postsPerPage = 6;

  const blogPosts = [
    {
      id: 1,
      title: 'Revolutionary Mars Rocket Launch: Engineering the Future of Interplanetary Travel',
      excerpt: 'NASA engineers have successfully designed and tested the first rocket capable of launching from the Martian surface, marking a new era in space exploration and bringing humanity closer to establishing a permanent presence on Mars.',
      content: 'The successful development of Mars rocket launch capabilities represents humanity\'s greatest technological achievement since the Moon landing...',
      author: 'Dr. Maria Santos',
      authorRole: 'Mars Mission Engineer',
      date: '2024-01-20',
      category: 'missions',
      image: 'https://images.pexels.com/photos/73873/mars-mars-rover-space-travel-73873.jpeg',
      views: 15847,
      likes: 1247,
      readTime: '12 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Artemis II Crew Prepares for Historic Lunar Journey',
      excerpt: 'Meet the four astronauts who will fly around the Moon in the first crewed mission since Apollo 17, marking humanity\'s return to lunar exploration.',
      content: 'The Artemis II mission represents a pivotal moment in space exploration, as NASA prepares to send humans back to the Moon for the first time in over 50 years...',
      author: 'Dr. Sarah Johnson',
      authorRole: 'Mission Specialist',
      date: '2024-01-15',
      category: 'missions',
      image: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg',
      views: 15420,
      likes: 892,
      readTime: '5 min read',
      featured: true
    },
    {
      id: 3,
      title: 'Mars Perseverance Discovers Organic Molecules in Ancient Rock',
      excerpt: 'Latest findings suggest Mars may have harbored conditions suitable for life billions of years ago, revolutionizing our understanding of the Red Planet.',
      content: 'In a groundbreaking discovery, NASA\'s Perseverance rover has identified complex organic molecules in ancient Martian rocks...',
      author: 'Dr. Michael Chen',
      authorRole: 'Planetary Scientist',
      date: '2024-01-12',
      category: 'discoveries',
      image: 'https://images.pexels.com/photos/73873/mars-mars-rover-space-travel-73873.jpeg',
      views: 23150,
      likes: 1247,
      readTime: '7 min read',
      featured: true
    },
    {
      id: 4,
      title: 'James Webb Telescope Captures Most Distant Galaxy Ever Seen',
      excerpt: 'JADES-GS-z13-0 formed just 325 million years after the Big Bang, offering unprecedented insights into the early universe and galaxy formation.',
      content: 'The James Webb Space Telescope has shattered records once again, capturing images of the most distant galaxy ever observed...',
      author: 'Dr. Emily Rodriguez',
      authorRole: 'Astrophysicist',
      date: '2024-01-10',
      category: 'discoveries',
      image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg',
      views: 31200,
      likes: 1856,
      readTime: '6 min read',
      featured: false
    },
    {
      id: 5,
      title: 'SpaceX Dragon Successfully Docks with International Space Station',
      excerpt: 'Crew-8 mission brings fresh supplies and new experiments to the orbiting laboratory, continuing the legacy of international cooperation in space.',
      content: 'Another successful mission to the International Space Station demonstrates the reliability of commercial crew transportation...',
      author: 'Captain Lisa Park',
      authorRole: 'Flight Director',
      date: '2024-01-08',
      category: 'missions',
      image: 'https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg',
      views: 18750,
      likes: 743,
      readTime: '4 min read',
      featured: false
    },
    {
      id: 6,
      title: 'NASA Develops Revolutionary Ion Propulsion System',
      excerpt: 'New technology could reduce travel time to Mars from 9 months to just 3 months, opening new possibilities for deep space exploration.',
      content: 'NASA engineers have achieved a breakthrough in propulsion technology that could revolutionize interplanetary travel...',
      author: 'Dr. Robert Kim',
      authorRole: 'Propulsion Engineer',
      date: '2024-01-05',
      category: 'technology',
      image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg',
      views: 27300,
      likes: 1432,
      readTime: '8 min read',
      featured: false
    },
    {
      id: 7,
      title: 'Climate Change Monitoring from Space Reveals Alarming Trends',
      excerpt: 'Satellite data shows accelerating ice loss in Antarctica and Greenland, providing crucial insights for climate science and policy.',
      content: 'NASA\'s Earth observation satellites continue to provide crucial data about our changing planet...',
      author: 'Dr. Amanda Foster',
      authorRole: 'Earth Scientist',
      date: '2024-01-03',
      category: 'earth-science',
      image: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg',
      views: 19850,
      likes: 967,
      readTime: '6 min read',
      featured: false
    },
    {
      id: 8,
      title: 'Breakthrough in Space-Based Solar Power Technology',
      excerpt: 'NASA successfully demonstrates wireless power transmission from space, paving the way for unlimited clean energy solutions.',
      content: 'A revolutionary test of space-based solar power technology has achieved unprecedented efficiency rates...',
      author: 'Dr. James Wilson',
      authorRole: 'Energy Systems Engineer',
      date: '2024-01-01',
      category: 'technology',
      image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg',
      views: 22100,
      likes: 1156,
      readTime: '5 min read',
      featured: false
    },
    {
      id: 9,
      title: 'Asteroid Mining Mission Approved for 2026 Launch',
      excerpt: 'NASA partners with private companies to extract rare metals from near-Earth asteroids, marking the beginning of space resource utilization.',
      content: 'The first commercial asteroid mining mission has received final approval from NASA...',
      author: 'Dr. Maria Santos',
      authorRole: 'Resource Utilization Specialist',
      date: '2023-12-28',
      category: 'missions',
      image: 'https://images.pexels.com/photos/73873/mars-mars-rover-space-travel-73873.jpeg',
      views: 16750,
      likes: 834,
      readTime: '7 min read',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length, color: 'from-blue-600 to-purple-600' },
    { id: 'missions', name: 'Missions', count: blogPosts.filter(p => p.category === 'missions').length, color: 'from-orange-600 to-red-600' },
    { id: 'discoveries', name: 'Discoveries', count: blogPosts.filter(p => p.category === 'discoveries').length, color: 'from-green-600 to-blue-600' },
    { id: 'technology', name: 'Technology', count: blogPosts.filter(p => p.category === 'technology').length, color: 'from-purple-600 to-pink-600' },
    { id: 'earth-science', name: 'Earth Science', count: blogPosts.filter(p => p.category === 'earth-science').length, color: 'from-cyan-600 to-blue-600' }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const toggleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const handleReadMore = (postId: number) => {
    setSelectedPostId(postId);
    setShowBlogPost(true);
  };

  if (showBlogPost) {
    return <BlogPost onBack={() => setShowBlogPost(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-bold shadow-lg">
              📰 NASA BLOG
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Latest <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Discoveries</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay updated with groundbreaking discoveries, mission updates, and technological breakthroughs from NASA's exploration of space and Earth.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentPage(1);
              }}
              className={`group px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-2xl`
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600 hover:border-gray-500'
              }`}
            >
              <span className="flex items-center gap-2">
                <Tag size={18} className="group-hover:animate-pulse" />
                {category.name} ({category.count})
              </span>
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        {selectedCategory === 'all' && (
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
              Featured Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).slice(0, 2).map((post, index) => (
                <article
                  key={post.id}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer"
                  onClick={() => handleReadMore(post.id)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 rounded-full text-white text-sm font-bold">
                        🔥 FEATURED
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentPosts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600/80 backdrop-blur-sm rounded-full text-white text-sm font-semibold capitalize">
                    {post.category.replace('-', ' ')}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{post.author}</div>
                    <div className="text-gray-400 text-xs">{post.authorRole}</div>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span>{post.views.toLocaleString()}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(post.id);
                      }}
                      className={`flex items-center gap-1 transition-colors duration-300 ${
                        likedPosts.includes(post.id) ? 'text-red-400' : 'hover:text-red-400'
                      }`}
                    >
                      <Heart size={14} className={likedPosts.includes(post.id) ? 'fill-current' : ''} />
                      <span>{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                    </button>
                  </div>
                  
                  <button 
                    onClick={(e) => e.stopPropagation()}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 hover:bg-blue-400/10 rounded-full"
                  >
                    <Share2 size={16} />
                  </button>
                </div>

                {/* Read More Button */}
                <button 
                  onClick={() => handleReadMore(post.id)}
                  className="group/btn w-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600 hover:to-purple-600 border border-blue-500/30 hover:border-transparent px-6 py-4 rounded-xl text-blue-400 hover:text-white font-bold transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    Read Full Article
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mb-12">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all duration-300"
            >
              Previous
            </button>
            
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-12 h-12 rounded-lg font-bold transition-all duration-300 ${
                    currentPage === index + 1
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-gray-800/50 hover:bg-gray-700/50 text-gray-300'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all duration-300"
            >
              Next
            </button>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Stay Updated with NASA</h3>
          <p className="text-gray-300 mb-6">Get the latest space news and discoveries delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl text-white font-bold transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;