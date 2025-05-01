import React from 'react';
import blogs from '../utils/loadBlogs';
import { Link } from "react-router-dom";

export default function BlogsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="mb-8 text-3xl font-bold text-center">All Blogs</h1>
      <div className="blog-grid grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map(blog => (
          <Link to={`/blog/${blog.slug}`} key={blog.slug} className="post-card group" aria-label={`Read more: ${blog.title}`}>
            <div className="overflow-hidden">
              <picture>
                <source srcSet={(blog.image || "https://images.unsplash.com/photo-1504983875-d3b163aba9e6").replace(/\.(png|jpg|jpeg)$/i, '.webp')} type="image/webp" />
                <img
                  alt={`Blog post about ${blog.title}`}
                  className="post-image transition-transform duration-300 group-hover:scale-105"
                  src={blog.image || "https://images.unsplash.com/photo-1504983875-d3b163aba9e6"}
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="post-content">
              <div className="mb-2 flex flex-wrap gap-2">
                {blog.tags && blog.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <h2 className="mb-2 text-xl font-semibold">{blog.title}</h2>
              <p className="mb-4 text-muted-foreground">{blog.summary}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-primary">{blog.category}</span>
                <span className="text-muted-foreground">{blog.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
