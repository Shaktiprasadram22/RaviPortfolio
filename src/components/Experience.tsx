import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company?: string;
  duration: string;
  description: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  title, 
  company,
  duration, 
  description 
}) => {
  return (
    <div className="relative pl-8 pb-12 group">
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 h-full w-px bg-gray-200 group-last:hidden"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-5 h-5 rounded-full border-4 border-white bg-blue-600 shadow-sm z-10 transform -translate-x-1/2"></div>
      
      <div className="mb-2 flex items-center">
        <Calendar className="w-4 h-4 text-blue-600 mr-2" />
        <span className="text-sm font-medium text-blue-600">{duration}</span>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
      {company && <p className="text-gray-700 font-medium mb-3">{company}</p>}
      
      <ul className="space-y-2">
        {description.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600 mr-3 mt-0.5 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-12">
          <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">Internships</h2>
        </div>
        
        <div className="pl-4">
          <ExperienceItem 
            title="MERN Stack Intern"
            company="Company Name"
            duration="June '24 – Aug '24"
            description={[
              "Developed full-stack applications using MongoDB, Express.js, React.js, and Node.js.",
              "Created dynamic user interfaces ensuring smooth user experiences."
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;