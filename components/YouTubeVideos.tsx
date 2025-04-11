import React from 'react';

const YouTubeVideos = () => {
  const videos = [
    {
      title: 'Video Title 1',
      description: 'A brief description of the video content',
      thumbnail: 'https://via.placeholder.com/320x180',
      link: '#',
    },
    // Add more videos as needed
  ];

  return (
    <section id="videos" className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">YouTube Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
          >
            <div className="relative pb-[56.25%]">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
              <p className="text-gray-300 mb-4">{video.description}</p>
              <a
                href={video.link}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Watch video →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YouTubeVideos; 