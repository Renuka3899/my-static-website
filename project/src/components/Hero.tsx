import { Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-slate-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            <span className="text-teal-500">RENUKA DEVI</span> JYOTHULA
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gray-300 mb-8">AWS DevOps Engineer</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Specializing in cloud architecture, automation, and optimization of mission-critical deployments in AWS environments.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://www.linkedin.com/in/renukadevijyothula/" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-teal-500 transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="mailto:renuka7v@gmail.com"
               className="text-gray-400 hover:text-teal-500 transition-colors">
              <Mail size={28} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" 
               className="bg-teal-500 text-white px-8 py-3 rounded-md hover:bg-teal-600 transition-colors">
              Contact Me
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
               className="border border-teal-500 text-teal-500 px-8 py-3 rounded-md hover:bg-teal-500 hover:text-white transition-colors">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}