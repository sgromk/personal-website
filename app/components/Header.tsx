'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-[#0d1117]/95 backdrop-blur-sm z-50 border-b border-zinc-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <Link href="/" className="flex items-center">
            <div className="p-0.5 bg-blue-500/30 rounded-full">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={40} 
                height={40}
                className="rounded-full"
              />
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="#experience" className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm">
              Experience
            </Link>
            <Link href="#education" className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm">
              Education
            </Link>
            <Link href="#projects" className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm">
              Projects
            </Link>
            <Link href="#skills" className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm">
              Skills
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded text-zinc-400 hover:text-zinc-100"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="#experience" onClick={() => setIsMenuOpen(false)} className="block py-2 text-zinc-400 hover:text-zinc-100 text-sm">
              Experience
            </Link>
            <Link href="#education" onClick={() => setIsMenuOpen(false)} className="block py-2 text-zinc-400 hover:text-zinc-100 text-sm">
              Education
            </Link>
            <Link href="#projects" onClick={() => setIsMenuOpen(false)} className="block py-2 text-zinc-400 hover:text-zinc-100 text-sm">
              Projects
            </Link>
            <Link href="#skills" onClick={() => setIsMenuOpen(false)} className="block py-2 text-zinc-400 hover:text-zinc-100 text-sm">
              Skills
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
