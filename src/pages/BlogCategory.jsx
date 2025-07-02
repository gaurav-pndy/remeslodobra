import React from "react";
import { useParams, Link } from "react-router";
import { blogsData } from "../constants/blogsData";

const BlogCategory = () => {
  const { categoryId } = useParams();

  const category = blogsData.find((b) => b.id === categoryId);

  if (!category) {
    return <div className="text-center py-20 text-2xl">Program not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-10">{category.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {category.blogs.map((blog) => (
          <Link
            to={`/blog/${blog.id}`}
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
              <p className="text-gray-500 mb-3 leading-relaxed">{blog.desc}</p>
              <span className="text-sm text-gray-500">{blog.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCategory;
