import React, { useState } from "react";
import { useParams, Link } from "react-router";
import { blogsData } from "../constants/blogsData";

const BlogCategory = () => {
  const { categoryId } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  const category = blogsData.find((b) => b.id === categoryId);

  if (!category) {
    return <div className="text-center py-20 text-2xl">Program not found</div>;
  }

  // Pagination logic
  const totalBlogs = category.blogs.length;
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = category.blogs.slice(
    startIndex,
    startIndex + blogsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
        {category.title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {currentBlogs.map((blog) => (
          <Link
            to={`/category/${categoryId}/blog/${blog.id}`}
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
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
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

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center items-center gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:opacity-50"
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-full ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogCategory;
