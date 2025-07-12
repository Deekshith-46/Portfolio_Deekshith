import { useEffect, useRef } from "react";
import { Code, Server, Database } from "lucide-react";

function SkillBar({ skill, percentage }) {
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && progressRef.current) {
          setTimeout(() => {
            if (progressRef.current) {
              progressRef.current.style.width = `${percentage}%`;
            }
          }, 300);
        }
      });
    });

    if (progressRef.current?.parentElement) {
      observer.observe(progressRef.current.parentElement);
    }

    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span>{skill}</span>
      </div>
      <div className="skill-bar">
        <div 
          ref={progressRef}
          className="skill-progress" 
          style={{ width: '0%' }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      gradient: "from-orange-500 to-red-500",
      skills: [
        { name: "HTML/CSS", percentage: 90 },
        { name: "JavaScript", percentage: 85 },
        { name: "React.js", percentage: 80 },
      ],
    },
    {
      title: "Backend Development", 
      icon: Server,
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", percentage: 75 },
        { name: "Express.js", percentage: 70 },
        { name: "Python", percentage: 60 },
      ],
    },
    {
      title: "Database & Tools",
      icon: Database,
      gradient: "from-blue-500 to-indigo-500", 
      skills: [
        { name: "MongoDB", percentage: 75 },
        { name: "MySQL", percentage: 70 },
        { name: "Git/GitHub", percentage: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass-morphism p-8 rounded-2xl hover-lift card-3d group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                  <category.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar 
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
