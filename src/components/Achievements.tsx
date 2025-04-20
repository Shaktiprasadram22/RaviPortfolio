import React from 'react';
import { Trophy, Code, Users } from 'lucide-react';

interface AchievementProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const AchievementCard: React.FC<AchievementProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "LeetCode Problems",
      description: "Solved 100+ problems on LeetCode (Easy: 55, Medium: 48, Hard: 2)",
      icon: <Code className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Volunteer Work",
      description: "Volunteered for the 8th International Conference on Computing Science in 2023.",
      icon: <Users className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Sports Achievement",
      description: "Represented Jhunjhunu District at the state-level Kho-Kho competition in 2015.",
      icon: <Trophy className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <section id="achievements" className="py-16 md:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Achievements</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Recognitions and accomplishments that showcase my abilities beyond coding.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              title={achievement.title}
              description={achievement.description}
              icon={achievement.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;