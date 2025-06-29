import React, { useState } from 'react';
import { BookOpen, Users, Laptop, Rocket, GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState('students');

  const educationPrograms = {
    students: {
      title: 'Student Programs',
      description: 'Inspiring the next generation of explorers through hands-on STEM education and real NASA experiences.',
      programs: [
        {
          name: 'NASA USRP (Undergraduate Student Research Program)',
          target: 'Undergraduate Students',
          description: 'Research opportunities at NASA centers working alongside NASA scientists and engineers',
          duration: '10-16 weeks',
          benefits: ['Stipend provided', 'Mentorship', 'Real research experience', 'Networking opportunities']
        },
        {
          name: 'NASA Pathways Intern Program',
          target: 'High School to Graduate Students',
          description: 'Structured internship program with potential for full-time employment',
          duration: 'Semester to multi-year',
          benefits: ['Paid internships', 'Career development', 'Potential job offers', 'Professional training']
        },
        {
          name: 'USRA SOFIA Airborne Astronomy',
          target: 'Graduate Students & Postdocs',
          description: 'Research opportunities using the flying observatory SOFIA telescope',
          duration: '1-2 years',
          benefits: ['Flight opportunities', 'Cutting-edge research', 'Publication opportunities', 'Conference presentations']
        }
      ]
    },
    educators: {
      title: 'Educator Resources',
      description: 'Supporting teachers and educators with curriculum, training, and resources to bring space science into the classroom.',
      programs: [
        {
          name: 'NASA Educator Professional Development',
          target: 'K-12 Teachers',
          description: 'Workshops and training sessions on NASA missions and STEM education',
          duration: '1-5 days',
          benefits: ['Curriculum materials', 'Hands-on activities', 'Continuing education credits', 'NASA resources']
        },
        {
          name: 'NASA GLOBE Program',
          target: 'Teachers & Students',
          description: 'International science and education program connecting students with NASA Earth science',
          duration: 'Ongoing',
          benefits: ['Real data collection', 'Scientific protocols', 'Global collaboration', 'Research participation']
        },
        {
          name: 'NASA Educator Astronaut Program',
          target: 'Experienced Educators',
          description: 'Teachers selected to become astronauts and inspire students',
          duration: 'Multi-year commitment',
          benefits: ['Astronaut training', 'Space missions', 'Educational outreach', 'Curriculum development']
        }
      ]
    },
    public: {
      title: 'Public Engagement',
      description: 'Making space science accessible to everyone through digital resources, events, and citizen science opportunities.',
      programs: [
        {
          name: 'NASA at Home',
          target: 'General Public',
          description: 'Virtual tours, activities, and educational content for home learning',
          duration: 'Self-paced',
          benefits: ['Free access', 'Family activities', 'Virtual experiences', 'Educational games']
        },
        {
          name: 'Citizen Science Projects',
          target: 'All Ages',
          description: 'Participate in real NASA research by analyzing data and making discoveries',
          duration: 'Ongoing',
          benefits: ['Contribute to research', 'Make discoveries', 'Learn from scientists', 'Recognition opportunities']
        },
        {
          name: 'NASA Social Media & Outreach',
          target: 'Digital Audiences',
          description: 'Engaging content across social platforms and virtual events',
          duration: 'Continuous',
          benefits: ['Live events', 'Behind-the-scenes content', 'Expert interviews', 'Interactive experiences']
        }
      ]
    }
  };

  const stemInitiatives = [
    {
      name: 'Artemis Student Challenges',
      description: 'Design challenges related to lunar exploration and Mars missions',
      participants: '100,000+ students annually',
      impact: 'Hands-on engineering and problem-solving experience'
    },
    {
      name: 'NASA HUNCH Program',
      description: 'High school students design and build real products for NASA and ISS',
      participants: '15,000+ students in 400+ schools',
      impact: 'Real hardware used in space missions'
    },
    {
      name: 'NASA App Development Challenge',
      description: 'Students create mobile apps using NASA data and APIs',
      participants: '5,000+ students globally',
      impact: 'Technology skills and real-world applications'
    },
    {
      name: 'NASA FIRST Robotics',
      description: 'Partnership with FIRST Robotics to inspire STEM careers',
      participants: '50,000+ students in 3,000+ teams',
      impact: 'Robotics skills and teamwork experience'
    }
  ];

  const digitalResources = [
    {
      platform: 'NASA Education',
      url: 'nasa.gov/audience/foreducators',
      content: 'Lesson plans, activities, multimedia resources',
      audience: 'Educators & Students'
    },
    {
      platform: 'NASA Kids Club',
      url: 'nasa.gov/kidsclub',
      content: 'Games, activities, and fun facts for young learners',
      audience: 'Elementary Students'
    },
    {
      platform: 'NASA STEM Engagement',
      url: 'nasa.gov/stem',
      content: 'Competitions, challenges, and opportunities',
      audience: 'All Ages'
    },
    {
      platform: 'NASA eClips',
      url: 'nasa.gov/audience/foreducators/nasaeclips',
      content: 'Educational video segments for classroom use',
      audience: 'K-12 Students'
    }
  ];

  const successStories = [
    {
      name: 'Katherine Johnson Scholarship Recipients',
      achievement: '500+ scholarships awarded to underrepresented students in STEM',
      impact: 'Increased diversity in aerospace careers'
    },
    {
      name: 'NASA Intern Alumni',
      achievement: '70% of interns receive job offers in STEM fields',
      impact: 'Direct pipeline to aerospace careers'
    },
    {
      name: 'Educator Astronauts',
      achievement: '8 teachers have flown to space as NASA astronauts',
      impact: 'Inspiring millions of students worldwide'
    },
    {
      name: 'Student Experiment Programs',
      achievement: '1,000+ student experiments flown to ISS',
      impact: 'Real scientific research experience'
    }
  ];

  const programs = [
    { id: 'students', name: 'Students', icon: GraduationCap },
    { id: 'educators', name: 'Educators', icon: BookOpen },
    { id: 'public', name: 'Public', icon: Users }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          NASA <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Education</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover NASA's comprehensive educational programs, STEM initiatives, and resources designed to inspire and educate learners of all ages.
        </p>
      </div>

      {/* Program Navigation */}
      <div className="flex justify-center gap-4 mb-8">
        {programs.map((program) => {
          const IconComponent = program.icon;
          return (
            <button
              key={program.id}
              onClick={() => setSelectedProgram(program.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                selectedProgram === program.id
                  ? 'bg-yellow-500 text-black'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <IconComponent size={20} />
              {program.name}
            </button>
          );
        })}
      </div>

      {/* Selected Program Content */}
      <div className="bg-gray-800/50 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-4">
          {educationPrograms[selectedProgram as keyof typeof educationPrograms].title}
        </h3>
        <p className="text-gray-300 mb-6">
          {educationPrograms[selectedProgram as keyof typeof educationPrograms].description}
        </p>

        <div className="space-y-6">
          {educationPrograms[selectedProgram as keyof typeof educationPrograms].programs.map((program, index) => (
            <div key={index} className="bg-gray-700/50 border border-gray-600 rounded-xl p-6 hover:border-yellow-400 transition-colors duration-300">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-white">{program.name}</h4>
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {program.target}
                </span>
              </div>

              <p className="text-gray-300 mb-4">{program.description}</p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-yellow-500/20 rounded-lg p-3">
                  <span className="text-yellow-400 font-semibold text-sm">Duration: </span>
                  <span className="text-gray-300 text-sm">{program.duration}</span>
                </div>

                <div>
                  <h5 className="font-semibold text-yellow-400 mb-2 text-sm">Benefits:</h5>
                  <ul className="space-y-1">
                    {program.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-yellow-400 mt-1">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STEM Initiatives */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
          <Rocket className="text-yellow-400" />
          STEM Initiatives
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {stemInitiatives.map((initiative, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-yellow-400 transition-colors duration-300">
              <h4 className="text-xl font-bold text-white mb-3">{initiative.name}</h4>
              <p className="text-gray-300 mb-3">{initiative.description}</p>
              
              <div className="space-y-2">
                <div className="bg-yellow-500/20 rounded-lg p-2">
                  <span className="text-yellow-400 font-semibold text-sm">Participants: </span>
                  <span className="text-gray-300 text-sm">{initiative.participants}</span>
                </div>
                <div className="bg-orange-500/20 rounded-lg p-2">
                  <span className="text-orange-400 font-semibold text-sm">Impact: </span>
                  <span className="text-gray-300 text-sm">{initiative.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Digital Resources */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
          <Laptop className="text-yellow-400" />
          Digital Learning Resources
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {digitalResources.map((resource, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-400 transition-colors duration-300">
              <h4 className="text-xl font-bold text-white mb-2">{resource.platform}</h4>
              <p className="text-gray-300 mb-3">{resource.content}</p>
              
              <div className="flex items-center justify-between">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                  {resource.audience}
                </span>
                <div className="text-blue-400 text-sm font-mono">
                  {resource.url}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
          <Award className="text-yellow-400" />
          Success Stories
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {successStories.map((story, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-gray-700 rounded-xl p-6">
              <h4 className="text-xl font-bold text-white mb-3">{story.name}</h4>
              <p className="text-gray-300 mb-3">{story.achievement}</p>
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                <p className="text-green-400 text-sm font-semibold mb-1">Impact:</p>
                <p className="text-gray-300 text-sm">{story.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Statistics */}
      <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-4 text-center">Education Impact</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">1M+</div>
            <div className="text-sm text-gray-300">Students Reached Annually</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">50,000+</div>
            <div className="text-sm text-gray-300">Educators Trained</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">10,000+</div>
            <div className="text-sm text-gray-300">Internships Provided</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">500+</div>
            <div className="text-sm text-gray-300">Educational Resources</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;