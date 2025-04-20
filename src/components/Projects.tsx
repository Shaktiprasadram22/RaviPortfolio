import React, { useState } from 'react';
import { Code, CreditCard, Mic } from 'lucide-react';

interface ProjectProps {
  title: string;
  period: string;
  description: string[];
  icon: JSX.Element;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  period, 
  description, 
  icon,
  technologies 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-blue-600">{period}</p>
          </div>
        </div>
        
        <div className={`space-y-2 ${!isExpanded && 'line-clamp-2'}`}>
          {description.map((item, index) => (
            <p key={index} className="text-gray-700">{item}</p>
          ))}
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200 focus:outline-none"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      title: "Hospital Management System",
      period: "Aug '24 – Sep '24",
      description: [
        "Built a role-based access hospital management system using ReactJS and JWT for secure authentication.",
        "Enhanced admin dashboard for managing records and improving user efficiency."
      ],
      icon: <Code className="w-6 h-6 text-blue-600" />,
      technologies: ["React", "JWT", "Node.js", "Express", "MongoDB"]
    },
    {
      title: "Stripe Payment Gateway Integration",
      period: "Jun '24 – Jul '24",
      description: [
        "Developed and integrated a Stripe payment gateway for secure transactions in an e-commerce app.",
        "Implemented both frontend UI and backend server-side processing."
      ],
      icon: <CreditCard className="w-6 h-6 text-blue-600" />,
      technologies: ["Stripe API", "React", "Node.js", "Express"]
    },
    {
      title: "Voice Assistant Integrated with Arduino",
      period: "Aug '22 – Nov '22",
      description: [
        "Created a voice-controlled assistant for device control using Python, Arduino, and speech recognition technologies."
      ],
      icon: <Mic className="w-6 h-6 text-blue-600" />,
      technologies: ["Python", "Arduino", "Speech Recognition"]
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A selection of my recent work and technical projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;