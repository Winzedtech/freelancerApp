import React from 'react';
import { Clock, DollarSign, MapPin, Building } from 'lucide-react';

interface JobCardProps {
  title: string;
  description: string;
  budget: string;
  timePosted: string;
  location: string;
  skills: string[];
  company?: string;
}

export default function JobCard({ title, description, budget, timePosted, location, skills, company }: JobCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-500">
            {company && (
              <div className="flex items-center">
                <Building className="h-4 w-4 mr-1" />
                {company}
              </div>
            )}
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {timePosted}
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              {budget}
            </div>
          </div>
        </div>
      </div>
      
      <p className="mt-4 text-gray-600 line-clamp-2">{description}</p>
      
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
      
      <div className="mt-6 flex justify-end">
        <button className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full font-medium hover:bg-indigo-100 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}