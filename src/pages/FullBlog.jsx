import { useParams } from "react-router-dom";
import { programsData } from "../constants/programsData";

const FullBlog = () => {
  const { blogId } = useParams();
  const blog = programsData
    .flatMap((p) => p.blogs)
    .find((b) => b.id === blogId);

  if (!blog) return <p className="text-seasalt">Blog not found</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-20 text-seasalt">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 text-xl mb-8">{blog.date}</p>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-full max-h-[35rem] object-contain rounded-lg mb-8"
      />
      <div
        className=" leading-relaxed text-lg whitespace-pre-line"
        dangerouslySetInnerHTML={{ __html: blog.blog }}
      ></div>
    </div>
  );
};

export default FullBlog;
