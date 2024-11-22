import React from 'react';
import { MapPin, Star, Briefcase } from 'lucide-react';

interface FreelancerCardProps {
  name: string;
  title: string;
  rating: number;
  hourlyRate: string;
  location: string;
  skills: string[];
  jobsCompleted: number;
  avatarUrl: string;
}

export default function FreelancerCard({
  name,
  title,
  rating,
  hourlyRate,
  location,
  skills,
  jobsCompleted,
  avatarUrl,
}: FreelancerCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start gap-4">
        <img
          src={avatarUrl}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
              <p className="text-gray-600">{title}</p>
            </div>
            <p className="text-lg font-semibold text-gray-900">{hourlyRate}/hr</p>
          </div>
          
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
              {rating.toFixed(1)}
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </div>
            <div className="flex items-center">
              <Briefcase className="h-4 w-4 mr-1" />
              {jobsCompleted} jobs
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}