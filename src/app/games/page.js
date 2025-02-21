export default function GamesPage() {
    // Create an array of placeholder games (adjust the count as needed)
    const placeholderGames = Array.from({ length: 3 }).map((_, i) => i);
  
    return (
      <div className="min-h-screen bg-gray-700 p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Games</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderGames.map((game) => (
            <div
              key={game}
              className="h-48 bg-white rounded-lg shadow-md flex items-center justify-center"
            >
              <span className="text-gray-500">Game Placeholder {game + 1}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  