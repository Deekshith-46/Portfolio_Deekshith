import { ExternalLink, Github, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
export function ProjectsSection() {
  const projects = [
    {
      title: "Financial Tracker",
      type: "MERN Stack",
      typeColor:
        "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      image: Project1,
      description:
        "Developed a financial management application to help users track income, expenses, and monitor financial trends using MongoDB, Express.js, React.js, and Node.js.",
      features: [
        "User registration/login with JWT authentication",
        "Transaction management and visual reports",
        "RESTful APIs for efficient data handling",
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      techColors: [
        "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
        "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
        "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
        "bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200",
      ],
      liveLink: "https://financial-tracker-frontend-five.vercel.app/login",
      repoLink: "https://github.com/Deekshith-46/Financial-Tracker",
    },
    {
      title: "Echo Beats",
      type: "Music Website",
      typeColor:
        "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      image: Project2,
      description:
        "Created a responsive music streaming website with a clean, interactive UI for browsing and listening to music with album cards and hover-based play buttons.",
      features: [
        "Interactive UI with album cards and hover effects",
        "Audio preview using the Audio API",
        "Cross-device performance optimization",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Audio API"],
      techColors: [
        "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
        "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
        "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
        "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
      ],
      liveLink: "https://deekshith-46.github.io/Spotify-Project/main.html",
      repoLink: "https://github.com/Deekshith-46/Spotify-Project",
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Showcasing my latest work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card glass-morphism p-8 rounded-3xl group flex flex-col h-full"
            >
              <div className="mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex flex-col flex-grow space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span
                    className={`px-3 py-1 ${project.typeColor} rounded-full text-sm font-medium`}
                  >
                    {project.type}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 flex-grow">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 ${project.techColors[techIndex]} rounded-full text-sm`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-6 mt-auto">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:scale-105 transition-transform duration-300">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:scale-110 transition-transform duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
