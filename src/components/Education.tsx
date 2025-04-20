import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationItemProps {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  degree,
  institution,
  location,
  period,
  score
}) => {
  return (
    <div className="relative pl-8 pb-12 group">
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 h-full w-px bg-gray-200 group-last:hidden"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-5 h-5 rounded-full border-4 border-white bg-blue-600 shadow-sm z-10 transform -translate-x-1/2"></div>
      
      <div className="mb-2 flex items-center">
        <Calendar className="w-4 h-4 text-blue-600 mr-2" />
        <span className="text-sm font-medium text-blue-600">{period}</span>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-1">{degree}</h3>
      <p className="text-lg text-gray-700 mb-1">{institution}</p>
      <p className="text-base text-gray-600 mb-2">{location}</p>
      <p className="text-sm font-medium text-gray-700">{score}</p>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-12">
          <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">Education</h2>
        </div>
        
        <div className="pl-4">
          <EducationItem
            degree="Bachelor of Technology (B.Tech) in Computer Science & Engineering"
            institution="Lovely Professional University"
            location="Punjab, India"
            period="Since Aug 2022"
            score="CGPA: 6.9"
          />
          
          <EducationItem
            degree="Intermediate"
            institution="Bhartiya Public School"
            location="Sikar, Rajasthan"
            period="Apr 2019 - Mar 2020"
            score="Percentage: 76%"
          />
          
          <EducationItem
            degree="Matriculation"
            institution="Vivekananda Public School"
            location="Khetri, Jhunjhunu"
            period="Apr 2015 - Mar 2017"
            score="Percentage: 80%"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;