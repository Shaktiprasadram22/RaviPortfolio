import React from 'react';
import { Award, Calendar } from 'lucide-react';

interface CertificateProps {
  title: string;
  issuer: string;
  period: string;
}

const CertificateCard: React.FC<CertificateProps> = ({ title, issuer, period }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
          <Award className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{issuer}</p>
        </div>
      </div>
      
      <div className="flex items-center mt-4 text-sm text-gray-600">
        <Calendar className="w-4 h-4 mr-2" />
        <span>{period}</span>
      </div>
    </div>
  );
};

const Certificates: React.FC = () => {
  const certificates = [
    {
      title: "Software Testing",
      issuer: "NPTEL",
      period: "Aug '24 – Nov '24"
    },
    {
      title: "Data Analysis with Tableau",
      issuer: "Coursera",
      period: "Mar '24 – Apr '24"
    },
    {
      title: "Generative AI with Large Language Models",
      issuer: "Coursera",
      period: "Mar '24 – Apr '24"
    }
  ];

  return (
    <section id="certificates" className="py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Certificates</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Professional certifications that validate my skills and knowledge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <CertificateCard 
              key={index}
              title={certificate.title}
              issuer={certificate.issuer}
              period={certificate.period}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;