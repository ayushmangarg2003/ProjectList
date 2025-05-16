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
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <header className="container mx-auto p-4 md:p-6 border-b border-zinc-800">
          <nav className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <a href="/" className="text-xl md:text-2xl font-bold hover:text-zinc-300 transition-colors">
              Ayushman Garg
            </a>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-zinc-400 text-sm md:text-base">
              <a href="/" className="hover:text-white transition-colors">Projects</a>
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
        <footer className="container mx-auto p-4 md:p-6 border-t border-zinc-800">
        </footer>
      </body>
    </html>
  );
}
