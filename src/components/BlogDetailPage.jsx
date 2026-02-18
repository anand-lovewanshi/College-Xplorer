import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function BlogDetailPage() {
  const { id } = useParams(); // blog ID from the route
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/blogs/${id}`);
        if (!response.ok) throw new Error('Failed to fetch blog');
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError('Unable to load this blog post.');
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) return <p>Loading blog...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!blog) return <p>Blog not found.</p>;

  return (
    <div className="section">
      <div className="container blog-detail-page">
        <Link to="/blogs" className="btn-outline back-btn">← Back to Blogs</Link>

        <article className="blog-detail">
          <h1 className="blog-detail-title">{blog.title}</h1>
          <div className="blog-detail-meta">
            <span>By {blog.author}</span> |{' '}
            <span>{new Date(blog.createdAt).toLocaleDateString()}</span> |{' '}
            <span>In <b>{blog.category}</b></span>
          </div>
          <p className="blog-detail-excerpt">{blog.excerpt}</p>
          <div className="blog-detail-content">
            <p>{blog.content}</p>
          </div>
        </article>
      </div>
    </div>
  );
}
