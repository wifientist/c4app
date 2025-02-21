import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700">
      <h1 className="text-5xl font-bold text-center mb-12">
        CryptoCoinCoachCollective
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <Link href="/blog" className="block">
          <div className="w-80 h-48 bg-gray-600 rounded-lg shadow-md flex flex-col justify-center items-center transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-semibold">Blog</h2>
            <p className="mt-2 text-gray-400">Read our latest posts</p>
          </div>
        </Link>
        <Link href="/videos" className="block">
          <div className="w-80 h-48 bg-gray-600 rounded-lg shadow-md flex flex-col justify-center items-center transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-semibold">Videos</h2>
            <p className="mt-2 text-gray-400">Watch our video content</p>
          </div>
        </Link>
        <Link href="/games" className="block">
          <div className="w-80 h-48 bg-gray-600 rounded-lg shadow-md flex flex-col justify-center items-center transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-semibold">Games</h2>
            <p className="mt-2 text-gray-400">Play our fun games</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
