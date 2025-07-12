import { useState, useEffect } from "react";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "../assets/profile.jpg";

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Frontend Developer", "Backend Developer", "Full Stack Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-slide-up">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl text-primary font-medium">Hi There,</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              I'm <span className="text-gradient">Deekshith</span><br />
              <span className="text-gradient">Thonti</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              I Am Into <span className="text-gradient font-semibold animate-pulse">{roles[currentRole]}</span>
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-lg">
            Full Stack Developer passionate about creating beautiful, user-friendly web applications with modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToAbout}
              size="lg"
              className="group bg-gradient-to-r from-primary to-purple-600 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25"
            >
              <span className="flex items-center gap-2">
                About Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
            
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/deekshiththonti" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:shadow-lg"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/Deekshith-46" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 dark:bg-gray-700 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:shadow-lg"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end animate-fade-in">
          <div className="relative group">
            <div className="w-80 h-80 rounded-full overflow-hidden glass-morphism p-4 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 group-hover:animate-none">
              <img 
                src={profileImage} 
                alt="Deekshith Thonti - Full Stack Developer" 
                className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary to-purple-600 rounded-full animate-pulse-slow opacity-70 group-hover:scale-125 transition-transform duration-300"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-amber-500 to-red-500 rounded-full animate-bounce-slow opacity-70 group-hover:scale-125 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
