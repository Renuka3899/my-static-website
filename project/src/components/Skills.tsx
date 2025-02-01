import { Cloud, Code, Database, Terminal } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Cloud className="text-teal-500" size={32} />,
      title: "Cloud & DevOps",
      skills: [
        "AWS (EC2, S3, RDS, Lambda, ECS, EKS)",
        "Docker & Kubernetes",
        "Jenkins & GitLab",
        "Terraform & CloudFormation",
        "Ansible"
      ]
    },
    {
      icon: <Code className="text-teal-500" size={32} />,
      title: "Programming",
      skills: [
        "Python",
        "Java",
        "Bash Scripting",
        "Infrastructure as Code"
      ]
    },
    {
      icon: <Database className="text-teal-500" size={32} />,
      title: "Databases",
      skills: [
        "SQL/NoSQL",
        "MySQL",
        "Oracle",
        "MongoDB"
      ]
    },
    {
      icon: <Terminal className="text-teal-500" size={32} />,
      title: "Monitoring & Tools",
      skills: [
        "Grafana",
        "ELK Stack",
        "Prometheus",
        "Datadog",
        "AWS CloudWatch"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-700 rounded-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-white ml-3">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center">
                    <span className="text-teal-500 mr-2">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}