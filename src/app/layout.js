// app/layout.js
import './globals.css'; // Ensure your Tailwind CSS is imported
import CryptoBackground from '../components/CryptoBackground';


function Navbar() {
  return (
    <nav className="bg-gray-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <a href="/">CryptoCoinCoachCollective</a>
        </div>
        <div className="flex space-x-6">
          <a href="/blog" className="text-gray-400 hover:text-blue-500">
            Blog
          </a>
          <a href="/videos" className="text-gray-400 hover:text-blue-500">
            Videos
          </a>
          <a href="/games" className="text-gray-400 hover:text-blue-500">
            Games
          </a>
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>CryptoCoinCoachCollective</title>
      </head>
      <body className="bg-gray-700">
          <Navbar />
          <main className="max-w-7xl mx-auto p-4 pt-12">{children}</main>
      </body>
    </html>
  );
}