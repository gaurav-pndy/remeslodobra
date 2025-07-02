import React from "react";
import { BookOpen, Heart, Leaf, Home } from "lucide-react";
import { blogsData } from "../../constants/blogsData";
import { Link } from "react-router";

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We tackle global challenges through focused programs that create
            lasting impact in the communities we serve.
          </p>
        </div> */}

        {blogsData.map((category) => (
          <div key={category.id} className="mb-16">
            <h2 className="text-4xl md:text-5xl text-center font-bold text-gray-900 mb-10">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.blogs.slice(0, 3).map((blog) => (
                <Link
                  to={`/category/${category.id}/blog/${blog.id}`}
                  key={blog.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {blog.title}
                    </h3>
                    <p className="text-gray-500 mb-3 leading-relaxed">
                      {blog.desc}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text- font-semibold text-gray-500 uppercase tracking-wide">
                        {blog.date}
                      </span>
                      <button className="text-blue-600 hover:text-blue-700 text-lg font-semibold transition-colors">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 w-full text-center">
              <Link to={`/category/${category.id}`}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  View All Programs
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
