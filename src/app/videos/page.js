export default function VideosPage() {
    // Create an array of placeholder videos (adjust the length as needed)
    const placeholderVideos = Array.from({ length: 3 }).map((_, i) => i);
  
    return (
      <div className="min-h-screen bg-gray-700 p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Videos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderVideos.map((video) => (
            <div
              key={video}
              className="h-48 bg-white rounded-lg shadow-md flex items-center justify-center"
            >
              <span className="text-gray-500">Video Placeholder {video + 1}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  