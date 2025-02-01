import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
            <div className="flex items-center space-x-4">
              <Mail className="text-teal-500" size={24} />
              <a href="mailto:renuka7v@gmail.com" className="text-gray-300 hover:text-teal-500 transition-colors">
                renuka7v@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-teal-500" size={24} />
              <a href="tel:+15133488046" className="text-gray-300 hover:text-teal-500 transition-colors">
                +1 513-348-8046
              </a>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-slate-800 border-gray-600 text-gray-300 focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-slate-800 border-gray-600 text-gray-300 focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-slate-800 border-gray-600 text-gray-300 focus:border-teal-500 focus:ring-teal-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}