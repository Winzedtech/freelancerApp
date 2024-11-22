import React, { useState } from 'react';
import { Code, Paintbrush, Camera, LineChart, Megaphone, Globe } from 'lucide-react';
import Header from '../components/Header';
import JobCard from '../components/JobCard';
import CategoryCard from '../components/CategoryCard';
import JobDetailsModal from '../components/JobDetailsModal';

const categories = [
  { icon: Code, title: 'Development', jobCount: 1234 },
  { icon: Paintbrush, title: 'Design', jobCount: 856 },
  { icon: Camera, title: 'Photography', jobCount: 432 },
  { icon: LineChart, title: 'Business', jobCount: 752 },
  { icon: Megaphone, title: 'Marketing', jobCount: 621 },
  { icon: Globe, title: 'Translation', jobCount: 384 },
];

const jobs = [
  {
    title: 'Senior Full Stack Developer',
    description: 'Looking for an experienced developer to build a scalable e-commerce platform using React and Node.js. Must have experience with AWS and microservices architecture.',
    budget: '$80-100/hr',
    timePosted: '2 hours ago',
    location: 'Remote',
    skills: ['React', 'Node.js', 'AWS', 'TypeScript', 'MongoDB'],
    company: 'TechCorp Solutions',
    duration: '6+ months',
    responsibilities: [
      'Design and implement scalable microservices architecture',
      'Develop front-end features using React and TypeScript',
      'Set up and maintain AWS infrastructure',
      'Collaborate with the team on system design and architecture',
      'Implement automated testing and CI/CD pipelines'
    ],
    requirements: [
      '5+ years of experience in full-stack development',
      'Strong knowledge of React, Node.js, and TypeScript',
      'Experience with AWS services and microservices architecture',
      'Excellent problem-solving and communication skills',
      'Experience with agile development methodologies'
    ]
  },
  {
    title: 'UI/UX Designer for Mobile App',
    description: 'Seeking a talented designer to create intuitive and beautiful user interfaces for our fitness tracking mobile application. Experience with Figma and mobile design patterns required.',
    budget: '$70-90/hr',
    timePosted: '4 hours ago',
    location: 'Remote',
    skills: ['UI Design', 'UX Design', 'Figma', 'Mobile Design', 'Prototyping'],
    company: 'FitTech Innovation',
    duration: '3-4 months',
    responsibilities: [
      'Create user-centered designs for mobile applications',
      'Develop wireframes and prototypes',
      'Conduct user research and usability testing',
      'Collaborate with developers on implementation',
      'Maintain design system and documentation'
    ],
    requirements: [
      '3+ years of mobile UI/UX design experience',
      'Strong portfolio demonstrating mobile design work',
      'Proficiency in Figma and prototyping tools',
      'Understanding of iOS and Android design guidelines',
      'Experience with user research and testing'
    ]
  },
  {
    title: 'Content Marketing Specialist',
    description: 'We need a content marketing expert to develop and execute our content strategy. Must be able to create engaging blog posts, social media content, and email campaigns.',
    budget: '$50-70/hr',
    timePosted: '6 hours ago',
    location: 'Remote',
    skills: ['Content Strategy', 'SEO', 'Social Media', 'Copywriting', 'Analytics'],
    company: 'GrowthMasters Digital',
    duration: '4-6 months',
    responsibilities: [
      'Develop and execute content marketing strategy',
      'Create engaging blog posts and articles',
      'Manage social media presence',
      'Design and implement email campaigns',
      'Track and analyze content performance'
    ],
    requirements: [
      '3+ years of content marketing experience',
      'Excellent writing and editing skills',
      'SEO and keyword research expertise',
      'Experience with social media management',
      'Knowledge of analytics tools and reporting'
    ]
  },
];

export default function Home() {
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find the perfect freelance services<br />for your business
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with talented freelancers and get your projects done quickly and efficiently
          </p>
        </div>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                icon={category.icon}
                title={category.title}
                jobCount={category.jobCount}
              />
            ))}
          </div>
        </section>

        {/* Latest Jobs */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Latest Jobs</h2>
            <button className="text-indigo-600 hover:text-indigo-700 font-medium">
              View all jobs →
            </button>
          </div>
          <div className="space-y-6">
            {jobs.map((job) => (
              <div key={job.title} onClick={() => setSelectedJob(job)}>
                <JobCard {...job} />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-500">
            <p>© 2024 freelanceHub. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Job Details Modal */}
      {selectedJob && (
        <JobDetailsModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </div>
  );
}