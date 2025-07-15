
import { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Github, Linkedin, ExternalLink, Code, Briefcase, Rocket, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // --- Enhance Skills Section ---
  const skills = {
    Languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'HTML', 'CSS'],
    Frameworks: ['React.js', 'Node.js', 'Express.js'],
    Tools: ['AI & Prompt Engineering', 'Git', 'GitHub', 'CI/CD Pipelines'],
    Databases: ['MySQL', 'MongoDB'],
    Cloud_DevOps: ['Azure', 'Netlify', 'Vercel'],
    OS: ['Linux', 'Windows', 'Unix'],
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">Emmanuel Nwafor</div>
          <div className="flex items-center gap-6">
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-primary transition-colors">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <div className="bg-background rounded-full px-4 py-2">
              <span className="text-sm font-medium">Available for opportunities</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Emmanuel Nwafor
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Startup Founder & Backend Engineer
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building the future of fintech and AI-powered tools. Passionate about solving real human problems through innovative technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => scrollToSection('projects')} size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              View My Work <Rocket className="ml-2 h-4 w-4" />
            </Button>
            <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg">
              Get In Touch <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Hey there! 👋</h3>
              <p className="text-muted-foreground mb-4">
                I'm Emmanuel, but you can call me <strong>Mr. Doxa</strong>. I'm a backend and fullstack engineer passionate about building scalable, AI-powered solutions that solve real-world problems.
              </p>
              <p className="text-muted-foreground mb-4">
                Currently, I'm the founder of <strong>TwoCents</strong>, an AI-powered expense tracker for couples, and have contributed to fintech and edtech projects like <strong>TradersEdge</strong> and <strong>Learnx LMS</strong>.
              </p>
              <p className="text-muted-foreground mb-6">
                My journey includes intensive training at Genesys Tech Hub and hands-on experience in backend, frontend, and AI engineering. I thrive on collaboration, innovation, and continuous learning.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="font-semibold mb-2">{category.replace('_', ' & ')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-60 h-60 bg-background rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/PHOTO-2025-07-10-09-28-35.jpg"
                    alt="Nwafor Emmanuel profile"
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What I'm Building Now</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-500/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">TwoCents</CardTitle>
                  <a href="https://twocentsnest.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5 group-hover:text-blue-500 transition-colors" />
                  </a>
                </div>
                <CardDescription>AI-Powered Expense Tracker for Couples</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  An AI-powered financial management tool for couples. Integrated bank connections, AI receipt verification, and gamified goal tracking.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">AI/ML</Badge>
                  <Badge variant="outline">Fintech</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://twocentsnest.com" target="_blank" rel="noopener noreferrer">
                    Visit twocentsnest.com <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-500/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">TradersEdge</CardTitle>
                  <Code className="h-5 w-5 group-hover:text-purple-500 transition-colors" />
                </div>
                <CardDescription>Smart Tools for Next-Gen Forex Traders</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Advanced analytics, risk management, and AI-driven insights for forex traders.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Trading</Badge>
                  <Badge variant="outline">Analytics</Badge>
                  <Badge variant="outline">Express.js</Badge>
                  <Badge variant="outline">MySQL</Badge>
                </div>
                <Button variant="outline" className="w-full">
                  Coming Soon <Rocket className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-blue-500" />
                  <div>
                    <CardTitle>Twocents | Founder, Fullstack & AI/Prompt Engineer</CardTitle>
                    <CardDescription>June 2025 – Present</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Built and launched twocentsnest.com, an AI-powered expense tracker for couples.</li>
                  <li>Integrated bank connections via Plaid, AI receipt verification, and gamified goal tracking.</li>
                  <li>Designed a collaborative budgeting experience focused on relationship health.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Rocket className="h-6 w-6 text-green-500" />
                  <div>
                    <CardTitle>Bolt Hackathon | AI & Prompt Engineer</CardTitle>
                    <CardDescription>June 2025</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Participated in the Bolt.New All-Weekend One Prompt Challenge Hackathon.</li>
                  <li>Developed "MeanMania" using prompt engineering and AI technologies.</li>
                  <li>Collaborated with developers and shared the project on X (Twitter).</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-purple-500" />
                  <div>
                    <CardTitle>Learnx LMS | Backend Engineer</CardTitle>
                    <CardDescription>March 2025 – April 2025</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Worked as a backend engineer for the Genesys Academy project.</li>
                  <li>Developed API and backend functionalities with Node.js and Express.</li>
                  <li>Built admin features for course uploads, mentor management, and payment tracking.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-yellow-500" />
                  <div>
                    <CardTitle>Genesys Tech Academy | Software Engineer Intern</CardTitle>
                    <CardDescription>Aug 2024 – Mar 2025</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Participated in backend development and leadership training.</li>
                  <li>Developed APIs and backend functionalities using Node.js and Express.</li>
                  <li>Improved skills in communication, backend development, and research.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-pink-500" />
                  <div>
                    <CardTitle>Upskill by Genesys Tech Hub | Software Engineer Intern</CardTitle>
                    <CardDescription>June 2023 – Feb 2024</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Participated in frontend development training.</li>
                  <li>Gained hands-on experience in web development and responsive design.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* --- Education Section --- */}
      <section id="education" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-blue-500" />
                  <div>
                    <CardTitle>University of Nigeria, Nsukka</CardTitle>
                    <CardDescription>B.Sc. Computer Science | Sept 2021 – Sept 2025</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>GPA: 4.0</li>
                  <li>Relevant Coursework: Data Structures & Algorithms, Software Engineering, Database Management, Operating Systems, Computer Networks, Web Development, System Analysis & Design</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-purple-500" />
                  <div>
                    <CardTitle>Genesys Tech Academy</CardTitle>
                    <CardDescription>Backend Engineering Intern | Aug 2024 – Mar 2025</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Certified as a verified backend engineer.</li>
                  <li>Focused on API, frameworks, and essential backend tools.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* --- Awards/Certifications Section --- */}
      <section id="awards" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Awards & Certifications</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Rocket className="h-6 w-6 text-yellow-500" />
                  <div>
                    <CardTitle>Backend Engineering Certification</CardTitle>
                    <CardDescription>Genesys Tech Academy</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Awarded for successful completion and verification as a backend engineer.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Rocket className="h-6 w-6 text-pink-500" />
                  <div>
                    <CardTitle>Prompt Engineered Project Award</CardTitle>
                    <CardDescription>Lovable.dev by CEO Anton Osika</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Recognized for outstanding prompt engineering in project development.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, collaborations, or just connecting 
            with fellow entrepreneurs and engineers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
              <a href="mailto:edubem80@gmail.com?subject=Let's Work Together&body=Hi Emmanuel, I'd love to discuss...">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/Nuelchi" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://linkedin.com/in/mrnuel-a9935b1b1" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
          <p className="text-muted-foreground">
            Based in Enugu, Nigeria • Open to remote opportunities worldwide
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Emmanuel Nwafor (Mr. Doxa). Building the future, one line of code at a time.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
