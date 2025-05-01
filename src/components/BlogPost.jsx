import React from "react";
import { useParams, Link } from "react-router-dom";
import blogs from "../utils/loadBlogs";
import ReactMarkdown from "react-markdown";

export default function BlogPost() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="container py-12">
        <h1 className="text-2xl font-bold mb-4">Blog Not Found</h1>
        <p>The blog post you are looking for does not exist.</p>
        <Link to="/blog" className="text-primary underline">Back to Blogs</Link>
      </div>
    );
  }

  return (
    <div className="container py-12 max-w-3xl mx-auto">
      <Link to="/blog" className="text-primary underline mb-4 inline-block">← Back to Blogs</Link>
      <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
      <div className="flex items-center gap-4 mb-6 text-muted-foreground text-sm">
        <span>{blog.author}</span>
        <span>•</span>
        <span>{blog.date}</span>
        {blog.category && <><span>•</span><span>{blog.category}</span></>}
      </div>
      {blog.image && (
        <img src={blog.image} alt={blog.title} className="w-full rounded-lg mb-6" />
      )}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>
      {blog.tags && (
        <div className="mt-8 flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
}
