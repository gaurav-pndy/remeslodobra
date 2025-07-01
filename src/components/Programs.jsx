import React from 'react';
import { BookOpen, Heart, Leaf, Home } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Education for All",
      description: "Providing quality education and learning opportunities to children and adults in underserved communities.",
      image: "https://images.pexels.com/photos/8613082/pexels-photo-8613082.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      stats: "15,000+ students supported",
      color: "blue"
    },
    {
      icon: Heart,
      title: "Healthcare Access",
      description: "Delivering essential medical services and health education to communities with limited healthcare access.",
      image: "https://images.pexels.com/photos/6647004/pexels-photo-6647004.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      stats: "50,000+ patients treated",
      color: "red"
    },
    {
      icon: Leaf,
      title: "Environmental Protection",
      description: "Implementing sustainable practices and environmental conservation projects to protect our planet.",
      image: "https://images.pexels.com/photos/3964730/pexels-photo-3964730.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      stats: "100+ eco-projects launched",
      color: "green"
    },
    {
      icon: Home,
      title: "Emergency Relief",
      description: "Providing immediate assistance and long-term support to communities affected by disasters and crises.",
      image: "https://images.pexels.com/photos/6995243/pexels-photo-6995243.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      stats: "25,000+ families aided",
      color: "orange"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    red: "bg-red-100 text-red-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600"
  };

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We tackle global challenges through focused programs that create lasting impact 
            in the communities we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div 
                key={index} 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${colorClasses[program.color]}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      {program.stats}
                    </span>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
            View All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;