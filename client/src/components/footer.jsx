import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/deekshiththonti",
      bgColor: "bg-blue-600"
    },
    {
      icon: Github,
      href: "https://github.com/Deekshith-46",
      bgColor: "bg-gray-700"
    },
    {
      icon: Mail,
      href: "mailto:tdeekshith46@gmail.com",
      bgColor: "bg-red-600"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gradient">Deekshith Thonti</span>
            </h3>
            <p className="text-gray-300">Full Stack Developer passionate about creating amazing web experiences.</p>
          </div>

          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 ${link.bgColor} rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300`}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2024 Deekshith Thonti. All rights reserved. Built with ❤️ using React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}