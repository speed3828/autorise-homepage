import React from 'react';

const BlogPosts = () => {
  const posts = [
    {
      title: 'Blog Post 1',
      excerpt: 'A brief excerpt from the blog post...',
      date: '2024-03-20',
      readTime: '5 min read',
      link: '#',
    },
    // Add more posts as needed
  ];

  return (
    <section id="blog" className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-300 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center text-sm text-gray-400">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <a
              href={post.link}
              className="mt-4 inline-block text-blue-400 hover:text-blue-300 transition-colors"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts; 