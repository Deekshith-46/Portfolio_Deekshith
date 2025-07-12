import { GraduationCap, University, Award } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground">Academic journey and achievements</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* B.Tech */}
          <div className="glass-morphism p-8 md:p-12 rounded-3xl hover:scale-105 transition-all duration-300 group mb-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center mr-4 group-hover:animate-pulse">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gradient">B.Tech Computer Science and Engineering</h3>
                    <p className="text-lg text-muted-foreground">Kshatriya College of Engineering</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/10 dark:bg-black/10 p-4 rounded-xl">
                    <div className="text-sm text-muted-foreground">Duration</div>
                    <div className="font-semibold">2020 - 2024</div>
                  </div>
                  <div className="bg-white/10 dark:bg-black/10 p-4 rounded-xl">
                    <div className="text-sm text-muted-foreground">CGPA</div>
                    <div className="font-semibold text-green-500">7.67</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <University className="w-16 h-16 text-white" />
                </div>
                <h4 className="font-bold text-lg">Computer Science</h4>
                <p className="text-muted-foreground">Engineering</p>
              </div>
            </div>
          </div>

          {/* Intermediate */}
          <div className="glass-morphism p-8 md:p-12 rounded-3xl hover:scale-105 transition-all duration-300 group mb-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4 group-hover:animate-pulse">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gradient">Intermediate (MPC)</h3>
                    <p className="text-lg text-muted-foreground">Kshatriya Junior College</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/10 dark:bg-black/10 p-4 rounded-xl">
                    <div className="text-sm text-muted-foreground">Duration</div>
                    <div className="font-semibold">2018 - 2020</div>
                  </div>
                  <div className="bg-white/10 dark:bg-black/10 p-4 rounded-xl">
                    <div className="text-sm text-muted-foreground">Percentage</div>
                    <div className="font-semibold text-green-500">96%</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <University className="w-16 h-16 text-white" />
                </div>
                <h4 className="font-bold text-lg">Mathematics</h4>
                <p className="text-muted-foreground">Physics, Chemistry</p>
              </div>
            </div>
          </div>

          {/* SSC */}
          <div className="glass-morphism p-8 md:p-12 rounded-3xl hover:scale-105 transition-all duration-300 group mb-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4 group-hover:animate-pulse">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gradient">Secondary School Certificate</h3>
                    <p className="text-lg text-muted-foreground">Telangana State Modal School</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/10 dark:bg-black/10 p-4 rounded-xl">
                    <div className="text-sm text-muted-foreground">Duration</div>
                    <div className="font-semibold">2017 - 2018</div>
                  </div>
                  <div className="bg-white/10 dark:bg-black/10 p-4 rounded-xl">
                    <div className="text-sm text-muted-foreground">Percentage</div>
                    <div className="font-semibold text-green-500">95%</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <University className="w-16 h-16 text-white" />
                </div>
                <h4 className="font-bold text-lg">Secondary</h4>
                <p className="text-muted-foreground">Education</p>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Certifications</h3>
            <div className="glass-morphism p-6 rounded-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold">Full Stack Developer NodeJS</h4>
                    <p className="text-muted-foreground">10000 Coders</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-amber-500">Certified</div>
                  <div className="text-sm text-muted-foreground">2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}