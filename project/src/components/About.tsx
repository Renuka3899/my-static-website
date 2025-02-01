import { Award, BookOpen, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              AWS and DevOps Specialist with 3.5 years of extensive experience in architecting, automating, and optimizing mission-critical deployments in AWS Cloud environments.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Proficient in designing and managing cloud infrastructure using AWS services such as S3, EC2, RDS, Lambda, ECS, EKS, CloudFormation, Code Pipeline, and Amplify for scalable, secure, and high-availability systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-700 p-6 rounded-lg">
              <Briefcase className="text-teal-500 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-2">Experience</h3>
              <p className="text-gray-300">3.5+ years in AWS and DevOps</p>
            </div>
            
            <div className="bg-slate-700 p-6 rounded-lg">
              <Award className="text-teal-500 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
              <p className="text-gray-300">M.Eng. Computer Engineering</p>
            </div>

            <div className="bg-slate-700 p-6 rounded-lg col-span-full">
              <BookOpen className="text-teal-500 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-2">Certifications</h3>
              <ul className="text-gray-300 list-disc list-inside">
                <li>AWS Solution Architect Associate</li>
                <li>Microsoft Azure Fundamentals</li>
                <li>DevOps Course (CCIT)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}