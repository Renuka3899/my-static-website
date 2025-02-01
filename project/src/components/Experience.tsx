import { Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: "Kgate Technologies, Inc.",
      position: "DevOps Intern",
      period: "Nov 2023 - Present",
      responsibilities: [
        "Implemented CI/CD pipelines using Jenkins, GitLab, and AWS CodePipelines",
        "Deployed containerized applications using Docker and Kubernetes",
        "Automated infrastructure provisioning with Terraform and AWS CloudFormation",
        "Built monitoring systems using Grafana, AWS CloudWatch, and RDS"
      ]
    },
    {
      company: "American Group of Insurance / Accenture",
      position: "AWS-DevOps Engineer",
      period: "Nov 2021 - July 2023",
      responsibilities: [
        "Designed and implemented CI/CD pipelines reducing deployment time by 40%",
        "Developed scalable AWS ECS and Kubernetes clusters with Terraform",
        "Configured monitoring solutions using AWS CloudWatch, Grafana, and Prometheus",
        "Engineered API integrations using AWS Amplify and Java"
      ]
    },
    {
      company: "Cripton Technosoft pvt.ltd",
      position: "Infrastructure/Cloud Engineer",
      period: "Jan 2020 - Aug 2021",
      responsibilities: [
        "Led cloud migration services for enterprise clients",
        "Automated DevOps pipelines reducing deployment time by 40%",
        "Managed end-to-end cloud infrastructure in AWS and Azure",
        "Implemented robust cloud security measures and compliance standards"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Professional Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-slate-800 rounded-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                <div className="flex items-center text-teal-500">
                  <Calendar size={16} className="mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <h4 className="text-lg text-teal-500 mb-4">{exp.position}</h4>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    {resp}
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