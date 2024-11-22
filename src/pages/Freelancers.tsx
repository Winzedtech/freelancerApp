import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import FreelancerCard from '../components/FreelancerCard';
import Header from '../components/Header';

const freelancers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Senior Full Stack Developer',
    rating: 4.9,
    hourlyRate: '$85',
    location: 'San Francisco, CA',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
    jobsCompleted: 147,
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&h=128&q=80',
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
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'UI/UX Designer',
    rating: 4.8,
    hourlyRate: '$75',
    location: 'Toronto, Canada',
    skills: ['Figma', 'UI Design', 'User Research', 'Prototyping', 'Adobe XD'],
    jobsCompleted: 93,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&h=128&q=80',
    bio: 'Passionate UI/UX designer creating beautiful and intuitive user experiences.',
    languages: ['English', 'Mandarin'],
    availability: 'Part-time',
    portfolio: [
      {
        title: 'Health & Fitness App',
        description: 'Designed a modern fitness tracking app with focus on user engagement.',
        link: '#'
      }
    ]
  },
  {
    id: 3,
    name: 'Emma Wilson',
    title: 'Digital Marketing Specialist',
    rating: 4.7,
    hourlyRate: '$65',
    location: 'London, UK',
    skills: ['SEO', 'Content Strategy', 'Social Media', 'Google Analytics', 'Email Marketing'],
    jobsCompleted: 78,
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=128&h=128&q=80',
    bio: 'Digital marketing expert specializing in growth strategies and content optimization.',
    languages: ['English', 'French'],
    availability: 'Contract',
    portfolio: [
      {
        title: 'SaaS Marketing Campaign',
        description: 'Led a successful marketing campaign increasing user acquisition by 200%.',
        link: '#'
      }
    ]
  }
];

export default function Freelancers() {
  const [selectedFreelancer, setSelectedFreelancer] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Section */}
        <div className="mb-8">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search freelancers by name, skill, or location..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full hover:bg-gray-50">
              <SlidersHorizontal className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <select className="px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>All Categories</option>
            <option>Development</option>
            <option>Design</option>
            <option>Marketing</option>
          </select>
          <select className="px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Hourly Rate</option>
            <option>$0-50</option>
            <option>$50-100</option>
            <option>$100+</option>
          </select>
          <select className="px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Experience Level</option>
            <option>Entry</option>
            <option>Intermediate</option>
            <option>Expert</option>
          </select>
        </div>

        {/* Freelancers List */}
        <div className="space-y-6">
          {freelancers.map((freelancer) => (
            <div
              key={freelancer.id}
              onClick={() => window.location.href = `/freelancer/${freelancer.id}`}
            >
              <FreelancerCard {...freelancer} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}