import { Briefcase, ChevronRight, Code, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional journey and internships
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-morphism p-8 md:p-12 rounded-3xl hover:scale-105 transition-all duration-300 group">
            <div className="grid md:grid-cols-4 gap-8 items-center">
              <div className="md:col-span-3">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-6 group-hover:animate-pulse">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gradient">
                      Web Developer Intern
                    </h3>
                    <h4 className="text-xl text-muted-foreground mb-2">
                      INNOBYTE SERVICES
                    </h4>
                    <p className="text-primary font-medium">
                      September 2024 – October 2024
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Developed and maintained responsive websites using
                      front-end technologies, ensuring smooth functionality
                      across different screen sizes and devices.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Improved website performance and UI components, enhancing
                      user experience, navigation flow, and visual consistency.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {[
                    "Frontend Development",
                    "Responsive Design",
                    "UI/UX",
                    "Performance Optimization",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:scale-105 transition-transform duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="flex gap-4 mt-6">
                    <a
                      href="https://deekshith-46.github.io/web-dev-intern-project/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105 transition-transform duration-300">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View 
                      </Button>
                    </a>

                    <a
                      href="https://github.com/Deekshith-46/web-dev-intern-project"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:scale-110 transition-transform duration-300"
                      >
                        <Code className="w-5 h-5" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Code className="w-16 h-16 text-white" />
                </div>
                <h4 className="font-bold text-lg">2 Months</h4>
                <p className="text-muted-foreground">Internship</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
