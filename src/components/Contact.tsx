import React from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

interface ContactItemProps {
  icon: JSX.Element;
  label: string;
  value: string;
  link?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, label, value, link }) => {
  return (
    <div className="flex items-start mb-6 group">
      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors duration-300">
        {icon}
      </div>
      <div>
        <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">{label}</h3>
        {link ? (
          <a 
            href={link} 
            className="text-lg text-blue-600 hover:text-blue-800 transition-colors duration-300"
            target="_blank"
            rel="noreferrer"
          >
            {value}
          </a>
        ) : (
          <p className="text-lg text-gray-900">{value}</p>
        )}
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Reach out for any inquiries or collaborations!
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactItem
              icon={<Mail className="w-5 h-5 text-blue-600" />}
              label="Email"
              value="ravirajsingh9316@gmail.com"
              link="mailto:ravirajsingh9316@gmail.com"
            />
            
            <ContactItem
              icon={<Linkedin className="w-5 h-5 text-blue-600" />}
              label="LinkedIn"
              value="Ravi Raj Singh"
              link="https://www.linkedin.com/in/ravirajsingh"
            />
            
            <ContactItem
              icon={<Github className="w-5 h-5 text-blue-600" />}
              label="GitHub"
              value="Ravi Raj Singh GitHub"
              link="https://github.com/ravirajsingh"
            />
            
            <ContactItem
              icon={<Phone className="w-5 h-5 text-blue-600" />}
              label="Phone"
              value="+91-6377640685"
              link="tel:+916377640685"
            />
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-700 mb-4">
              Interested in working together? Feel free to reach out through any of the contacts above.
            </p>
            <a
              href="mailto:ravirajsingh9316@gmail.com"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;