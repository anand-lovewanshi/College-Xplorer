import React, { useEffect, useState } from 'react';

const Sidebar = ({ blogs }) => {
  // Extract unique categories
  const categories = [...new Set(blogs.map(blog => blog.category))];
  const recentPosts = blogs.slice(0, 3);

  return (
    <aside className="blog-sidebar">
      <div className="sidebar-widget">
        <h3 className="widget-title">Categories</h3>
        <ul className="widget-list">
          {categories.map((cat, i) => (
            <li key={i}><a href="/">{cat}</a></li>
          ))}
        </ul>
      </div>
      <div className="sidebar-widget">
        <h3 className="widget-title">Recent Posts</h3>
        <ul className="widget-list">
          {recentPosts.map(post => (
            <li key={post._id}>
              <a href={`/blog/${post._id}`}>{post.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar-widget">
        <img
          src="https://placehold.co/300x250/E5E7EB/4B5563?text=Ad+Banner"
          alt="Ad Banner"
        />
      </div>
    </aside>
  );
};

const BlogPostCard = ({ post }) => (
  <article className="blog-post-card">
    <div className="blog-post-content">
      <h2 className="blog-post-title">
        <a href={`/blog/${post._id}`}>{post.title}</a>
      </h2>
      <div className="blog-post-meta">
        <span>By {post.author}</span> |{" "}
        <span>{new Date(post.createdAt).toLocaleDateString()}</span> |{" "}
        <span>
          In <a href="/">{post.category}</a>
        </span>
      </div>
      <p className="blog-post-excerpt">{post.excerpt}</p>
      <a href={`/blog/${post._id}`} className="btn-outline">
        Read More
      </a>
    </div>
  </article>
);

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch blogs from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/blogs');
        if (!response.ok) throw new Error('Failed to fetch blogs');
        const data = await response.json();
        setBlogs(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Unable to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="section">
      <div className="container">
        <div className="page-header">
          <h1>Our Blog</h1>
          <p>Insights and advice for your educational journey.</p>
        </div>

        {loading ? (
          <p>Loading blogs...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : blogs.length === 0 ? (
          <p>No blogs found. Please check back later.</p>
        ) : (
          <div className="blog-layout">
            <main className="blog-main-content">
              {blogs.map(post => (
                <BlogPostCard key={post._id} post={post} />
              ))}
            </main>
            <Sidebar blogs={blogs} />
          </div>
        )}
      </div>
    </div>
  );
}
