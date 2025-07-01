import React from "react";
import { TrendingUp, Users, MapPin, Calendar } from "lucide-react";

const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: "50,000+",
      label: "Lives Transformed",
      description: "Direct beneficiaries of our programs",
    },
    {
      icon: MapPin,
      number: "25",
      label: "Countries",
      description: "Where we actively operate programs",
    },
    {
      icon: Calendar,
      number: "9",
      label: "Years",
      description: "Of dedicated service and impact",
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Success Rate",
      description: "Of our completed projects",
    },
  ];

  return (
    <section
      id="impact"
      className="py-20 bg-gradient-to-br from-blue-50 to-teal-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Numbers tell a story, but behind each statistic are real people whose lives 
            have been transformed through our collective efforts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-gray-800 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div> */}

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Creating Lasting Change
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our approach focuses on sustainable development that empowers
                communities to build their own capacity for long-term success.
                We don't just provide temporary solutions – we create lasting
                change.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Community-led development initiatives
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Capacity building and training programs
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Sustainable resource management
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Long-term partnership agreements
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop"
                alt="Community development project"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-orange-500 to-red-500 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Transparency</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
