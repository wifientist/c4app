import React from 'react';
import Link from 'next/link';

const BlogPage = () => {
  // Sample data for demonstration. Replace with your own data or fetch from an API.
  const posts = [
    {
      id: 1,
      title: 'First Blog Post',
      excerpt: 'This is a short excerpt of the first blog post.',
      date: '2025-02-20',
      slug: 'first-blog-post'
    },
    {
      id: 2,
      title: 'Second Blog Post',
      excerpt: 'This is a short excerpt of the second blog post.',
      date: '2025-02-19',
      slug: 'second-blog-post'
    }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Blog</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: '40px' }}>
          <h2>{post.title}</h2>
          <small>{post.date}</small>
          <p>{post.excerpt}</p>
          {/* Link to a detailed post page (assumes you have dynamic routing set up) */}
          <Link href={`/blog/${post.slug}`}>
            <a>Read more</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
