
import "./globals.css"; // Ensure Tailwind is imported
import Navbar from "../components/Navbar";
//import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  //const pathname = usePathname(); // Get current path
  //const isLandingPage = pathname === "/"; // Hide navbar on landing page

  return (
    <html lang="en">
      <head>
        <title>CryptoCoinCoachCollective</title>
      </head>
      <body className="bg-gray-900">
        <Navbar />
        <main className="max-w-7xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
