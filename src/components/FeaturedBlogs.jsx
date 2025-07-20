import React from 'react';
import blogs from '../utils/loadBlogs';
import { Link } from "react-router-dom";

export default function FeaturedBlogs() {
  const latest = blogs.slice(0, 4);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-12 text-center">Latest Posts</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {latest.map((blog, index) => (
          <article
            key={blog.slug}
            className="post-card group"
          >
            <Link to={`/blog/${blog.slug}`} className="absolute inset-0 z-10" aria-label={`Read more: ${blog.title}`}></Link>
            <div className="overflow-hidden">
              <picture>
                <source srcSet={blog.image.replace(/\.(png|jpg|jpeg)$/i, '.webp')} type="image/webp" />
                <img
                  alt={`Post about ${blog.title}`}
                  className="post-image transition-transform duration-300 group-hover:scale-105"
                  src={blog.image || "https://images.unsplash.com/photo-1504983875-d3b163aba9e6"}
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="post-content">
              <h3 className="mb-2 text-xl font-semibold">{blog.title}</h3>
              <p className="mb-4 text-muted-foreground">{blog.summary}</p>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-primary">{blog.category}</span>
                <span className="text-muted-foreground">{blog.date}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {blog.tags && blog.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
