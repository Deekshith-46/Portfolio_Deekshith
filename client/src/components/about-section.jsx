export function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground">Get to know more about my journey</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-morphism p-8 rounded-2xl hover-lift card-3d">
              <h3 className="text-2xl font-bold mb-4 text-gradient text-shimmer">Career Objective</h3>
              <p className="text-muted-foreground leading-relaxed">
                As a recent B.Tech CSE graduate, I have hands-on experience in front-end development using HTML, CSS, JavaScript, and React.js. I've worked on real-time projects and internships involving responsive UI design, API integration, and performance optimization. Familiar with backend technologies like Node.js, Express.js, and databases including MongoDB and MySQL. Passionate about building user-friendly web apps and pursuing a career in web development.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-morphism p-6 rounded-xl text-center hover-lift card-3d group">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:animate-bounce">2+</div>
                <div className="text-muted-foreground">Years Learning</div>
              </div>
              <div className="glass-morphism p-6 rounded-xl text-center hover-lift card-3d group">
                <div className="text-3xl font-bold text-purple-500 mb-2 group-hover:animate-bounce">10+</div>
                <div className="text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-morphism p-8 rounded-2xl hover-lift card-3d">
              <h3 className="text-xl font-bold mb-4">Personal Info</h3>
              <div className="space-y-3">
                <div className="flex justify-between hover:bg-primary/5 p-2 rounded transition-colors">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-medium">Hyderabad, Telangana</span>
                </div>
                <div className="flex justify-between hover:bg-primary/5 p-2 rounded transition-colors">
                  <span className="text-muted-foreground">Email:</span>
                  <span className="font-medium">tdeekshith46@gmail.com</span>
                </div>
                <div className="flex justify-between hover:bg-primary/5 p-2 rounded transition-colors">
                  <span className="text-muted-foreground">Phone:</span>
                  <span className="font-medium">9963735220</span>
                </div>
                <div className="flex justify-between hover:bg-primary/5 p-2 rounded transition-colors">
                  <span className="text-muted-foreground">Degree:</span>
                  <span className="font-medium">B.Tech CSE</span>
                </div>
              </div>
            </div>

            <div className="glass-morphism p-8 rounded-2xl hover-lift card-3d">
              <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Problem-solving',
                  'Quick Learner',
                  'Teamwork',
                  'Creativity',
                  'Analytical',
                  'Patience',
                  'Logical Thinking'
                ].map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:scale-105 hover:bg-primary/20 transition-all duration-200 cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
