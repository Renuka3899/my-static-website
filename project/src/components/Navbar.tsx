import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-slate-900/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-teal-500 font-bold text-xl">RJ</a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-teal-500 transition-colors">About</a>
              <a href="#experience" className="text-gray-300 hover:text-teal-500 transition-colors">Experience</a>
              <a href="#skills" className="text-gray-300 hover:text-teal-500 transition-colors">Skills</a>
              <a href="#contact" className="text-gray-300 hover:text-teal-500 transition-colors">Contact</a>
              <a 
                href="/resume.pdf" 
                className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block text-gray-300 hover:text-teal-500 py-2">About</a>
              <a href="#experience" className="block text-gray-300 hover:text-teal-500 py-2">Experience</a>
              <a href="#skills" className="block text-gray-300 hover:text-teal-500 py-2">Skills</a>
              <a href="#contact" className="block text-gray-300 hover:text-teal-500 py-2">Contact</a>
              <a 
                href="/resume.pdf" 
                className="block bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}