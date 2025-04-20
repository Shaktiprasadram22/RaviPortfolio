import React from 'react';
import { Code, Cpu, Users } from 'lucide-react';

interface SkillItemProps {
  name: string;
  proficiency: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, proficiency }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700">{name}</span>
        <span className="text-sm font-medium text-blue-600">{proficiency}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
          style={{ width: `${proficiency}%` }}
        ></div>
      </div>
    </div>
  );
};

interface SkillCategoryProps {
  title: string;
  icon: JSX.Element;
  skills: Array<{ name: string; proficiency: number }>;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillItem key={index} name={skill.name} proficiency={skill.proficiency} />
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const programmingSkills = [
    { name: 'C/C++', proficiency: 85 },
    { name: 'Java', proficiency: 80 },
    { name: 'JavaScript', proficiency: 90 },
  ];

  const frameworkSkills = [
    { name: 'HTML & CSS', proficiency: 90 },
    { name: 'React', proficiency: 85 },
    { name: 'Node.js', proficiency: 80 },
    { name: 'MongoDB', proficiency: 75 },
  ];

  const softSkills = [
    { name: 'Problem-Solving', proficiency: 90 },
    { name: 'Team Player', proficiency: 85 },
    { name: 'Adaptability', proficiency: 88 },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            My technical expertise and abilities that enable me to deliver high-quality solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory 
            title="Programming Languages" 
            icon={<Code className="w-6 h-6 text-blue-600" />} 
            skills={programmingSkills} 
          />
          
          <SkillCategory 
            title="Frameworks & Tools" 
            icon={<Cpu className="w-6 h-6 text-blue-600" />} 
            skills={frameworkSkills} 
          />
          
          <SkillCategory 
            title="Soft Skills" 
            icon={<Users className="w-6 h-6 text-blue-600" />} 
            skills={softSkills} 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;