import React from 'react';
import { Target, Users, Globe, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About RemesloDobra
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a global nonprofit organization dedicated to creating sustainable positive change 
            in communities worldwide through education, healthcare, and humanitarian aid.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <img 
              src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Our team working in the field"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since our founding in 2015, we have been committed to addressing the world's most pressing 
              challenges through innovative solutions and collaborative partnerships. Our work spans across 
              education, healthcare, environmental sustainability, and emergency relief.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that every person deserves access to basic human needs and opportunities for growth. 
              Through our programs, we empower communities to build sustainable futures for themselves and 
              their children.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Education
              </span>
              <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                Healthcare
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                Environment
              </span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                Emergency Aid
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h4>
            <p className="text-gray-600">
              A world where everyone has equal opportunities to thrive and succeed.
            </p>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-teal-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Community Focus</h4>
            <p className="text-gray-600">
              We work directly with local communities to understand their unique needs.
            </p>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Global Impact</h4>
            <p className="text-gray-600">
              Our programs span across 25 countries on 4 continents.
            </p>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-orange-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Transparency</h4>
            <p className="text-gray-600">
              We maintain full transparency in all our operations and funding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;