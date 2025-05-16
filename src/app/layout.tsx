import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayushman Garg | Projects Portfolio",
  description: "A showcase of various web development projects by Ayushman Garg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      </head>
      <body className={`${inter.className} bg-black text-white min-h-screen relative`}>
        {/* Modern gradient background */}
        <div className="fixed inset-0 -z-10">
          {/* Main gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black"></div>
          
          {/* Animated gradient orbs */}
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          {/* Noise texture */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
        </div>

        <header className="container mx-auto p-4 md:p-6 border-b border-zinc-800/50 backdrop-blur-sm animate-fade-in">
          <nav className="flex flex-row sm:flex-col justify-between items-center gap-4 md:gap-0">
            <a href="/" className="text-xl md:text-2xl font-bold hover:text-zinc-300 transition-colors">
              Ayushman Garg
            </a>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-zinc-400 text-sm md:text-base">
              <a href="https://ayushmangarg.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Portfolio
              </a>
              <a href="https://github.com/ayushmangarg2003" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com/in/ayushmangarg" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </nav>
        </header>
        <main className="container mx-auto p-4 md:p-6">
          {children}
        </main>
        <footer className="container mx-auto p-4 md:p-6 border-t border-zinc-800/50 backdrop-blur-sm text-center text-zinc-500 text-sm animate-fade-in">
          <a href="mailto:ayushmangarg929@gmail.com" className="hover:text-white transition-colors">
            ayushmangarg929@gmail.com
          </a>
        </footer>
      </body>
    </html>
  );
}
