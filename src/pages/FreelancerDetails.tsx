import React from 'react';
import { Star, MapPin, Globe, Calendar, Briefcase, Mail } from 'lucide-react';
import Header from '../components/Header';

interface Portfolio {
  title: string;
  description: string;
  link: string;
}

interface FreelancerDetailsProps {
  id: number;
  name: string;
  title: string;
  rating: number;
  hourlyRate: string;
  location: string;
  skills: string[];
  jobsCompleted: number;
  avatarUrl: string;
  bio: string;
  languages: string[];
  availability: string;
  portfolio: Portfolio[];
}

export default function FreelancerDetails() {
  // In a real app, you'd fetch this data based on the ID from the URL
  const freelancer: FreelancerDetailsProps = {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Senior Full Stack Developer',
    rating: 4.9,
    hourlyRate: '$85',
    location: 'San Francisco, CA',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
    jobsCompleted: 147,
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80',
    bio: 'Full stack developer with 8+ years of experience building scalable web applications. Specialized in React and Node.js.',
    languages: ['English', 'Spanish'],
    availability: 'Full-time',
    portfolio: [
      {
        title: 'E-commerce Platform',
        description: 'Built a full-featured e-commerce platform using React, Node.js, and AWS.',
        link: '#'
      },
      {
        title: 'Social Media Dashboard',
        description: 'Developed a real-time analytics dashboard for social media management.',
        link: '#'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          {/* Header Section */}
          <div className="flex items-start gap-8">
            <img
              src={freelancer.avatarUrl}
              alt={freelancer.name}
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{freelancer.name}</h1>
                  <p className="text-xl text-gray-600 mt-1">{freelancer.title}</p>
                  <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                      {freelancer.rating.toFixed(1)}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {freelancer.location}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {freelancer.jobsCompleted} jobs completed
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">{freelancer.hourlyRate}/hr</p>
                  <button className="btn-primary mt-4">
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="mt-12 grid grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="col-span-2 space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">About Me</h2>
                <p className="text-gray-600">{freelancer.bio}</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Portfolio</h2>
                <div className="grid grid-cols-2 gap-6">
                  {freelancer.portfolio.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                      <a href={item.link} className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                        View Project →
                      </a>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {freelancer.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Globe className="h-5 w-5 mr-3" />
                    <div>
                      <p className="font-medium">Languages</p>
                      <p className="text-sm">{freelancer.languages.join(', ')}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-3" />
                    <div>
                      <p className="font-medium">Availability</p>
                      <p className="text-sm">{freelancer.availability}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
                <button className="w-full btn-primary flex items-center justify-center gap-2">
                  <Mail className="h-5 w-5" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}