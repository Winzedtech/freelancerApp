import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  jobCount: number;
}

export default function CategoryCard({ icon: Icon, title, jobCount }: CategoryCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all cursor-pointer group">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors">
          <Icon className="h-6 w-6 text-indigo-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{jobCount} jobs available</p>
        </div>
      </div>
    </div>
  );
}