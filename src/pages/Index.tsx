
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

  const skills = [
    'Node.js', 'Express.js', 'JavaScript', 'MongoDB', 'MySQL', 
    'REST APIs', 'DevOps', 'Full-Stack Development', 'AI Integration', 'Fintech'
  ];

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
                I'm Emmanuel, but you can call me <strong>Mr. Doxa</strong>. I'm a startup founder and backend engineer 
                who loves building tools that make people's lives easier, especially in the fintech and AI space.
              </p>
              <p className="text-muted-foreground mb-4">
                Currently, I'm the founder of <strong>TwoCents</strong>, an AI-powered expense tracker designed specifically 
                for couples to manage their finances together. I'm also building <strong>TradersEdge</strong>, a platform 
                that provides smart tools for the next generation of forex traders.
              </p>
              <p className="text-muted-foreground mb-6">
                My journey started at Genesys Tech Hub, where I trained in software engineering, DevOps, and full-stack 
                web development. Since then, I've been focused on creating scalable backend solutions and innovative 
                products that solve real problems.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-60 h-60 bg-background rounded-full flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
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
                  <ExternalLink className="h-5 w-5 group-hover:text-blue-500 transition-colors" />
                </div>
                <CardDescription>AI-Powered Expense Tracker for Couples</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A smart financial management tool that helps couples track expenses, set budgets, and make 
                  financial decisions together using AI insights.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">AI/ML</Badge>
                  <Badge variant="outline">Fintech</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                </div>
                <Button variant="outline" className="w-full">
                  Visit twocentsnest.com <ExternalLink className="ml-2 h-4 w-4" />
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
                  A comprehensive platform providing advanced analytics, risk management tools, and 
                  AI-driven insights for modern forex traders.
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience & Background</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-blue-500" />
                  <div>
                    <CardTitle>Founder & Backend Engineer</CardTitle>
                    <CardDescription>TwoCents & TradersEdge • Present</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leading product development and backend architecture for two innovative fintech startups. 
                  Responsible for scalable API design, database optimization, and AI integration.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Code className="h-6 w-6 text-green-500" />
                  <div>
                    <CardTitle>Backend Engineer</CardTitle>
                    <CardDescription>Freelance & Contract Work</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Developed and deployed scalable REST APIs using Node.js and Express.js. Specialized in 
                  database design, performance optimization, and cloud deployment strategies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-purple-500" />
                  <div>
                    <CardTitle>Software Engineering Training</CardTitle>
                    <CardDescription>Genesys Tech Hub</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Intensive training in software engineering, DevOps practices, and full-stack web development. 
                  Gained expertise in modern development workflows and cloud technologies.
                </p>
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
              <a href="mailto:your-email@example.com?subject=Let's Work Together&body=Hi Emmanuel, I'd love to discuss...">
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
            Based in Nigeria • Open to remote opportunities worldwide
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
