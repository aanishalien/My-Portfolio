"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Download, Mail, Linkedin, Menu, X, Code, Brain, Smartphone, Zap,Computer } from "lucide-react"
import AIMemoryGame from "./components/ai-memory-game"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const projects = [
    {
      title: "AI Image Classifiers",
      description:
        "Built with FastAPI + React Native. Classifies images and generates text captions using advanced computer vision models.",
      techStack: ["FastAPI", "React Native", "OpenCV", "TensorFlow", "Python","Supabase"],
      github: "https://github.com/aanishalien/AI_ImageClassifier",
      model:"https://github.com/aanishalien/AI_ImageClassifier",
      live: "#",
    },
    {
      title: "AI JobSearch APP ",
      description:
        "AI Based JobSearchApp Platform with Smart resume parser and job matcher using ML and TF-IDF classification to optimize resumes for specific job requirements.",
      techStack: ["Python", "ML", "TF-IDF", "FastAPI", "React-Native","Supabase"],
      github: "https://github.com/R-Tech-Solutions/JobSearch-App",
      live: "#",
    },
    {
      title: "TravelUp – AI City Guide App",
      description:
        "Smart travel assistant with multilingual translator and location-based suggestions powered by AI recommendations.",
      techStack: ["React Native", "AI/ML", "FastAPI", "Google Maps API"],
      github: "#",
      live: "#",
    },
    {
      title: "AI Expense Tracker",
      description:
        "Tracks and categorizes expenses using AI pattern recognition. Built with FastAPI backend and React Native frontend.",
      techStack: ["FastAPI", "React Native", "AI/ML", "Postrgres", "Python","Supabase"],
      github: "https://github.com/aanishalien/AI_ExpenseTracker",
      live: "#",
    },
    {
      title: "POS(Point Of Sales System)-RTech Solutions",
      description:
        "Tracks and categorizes expenses using AI pattern recognition. Built with FastAPI backend and React Native frontend.",
      techStack: ["Django", "ReactJs", "Postrgres", "Python"],
      github: "",
      
    },
  ]

  const upcoming_projects = [
    {
      title: "MLFlowStream",
      description:
        "MLFlowStream: An advanced developer tool designed to streamline the entire lifecycle of machine learning models for Machine Learning Engineers. It utilizes FastAPI, Next.js, and Redis to create a real-time, collaborative platform for model deployment, monitoring, and iterative experimentation. By harnessing the cutting-edge advancements of 2025, MLFlowStream offers AI-driven insights, automated hyperparameter tuning, and enhanced model evaluation workflows to address the contemporary pain points faced by ML Engineers.",
      techStack: ["FastAPI", "Next.js", "TensorFlow", "Python","Redis"],
      
    },
    
  ]

  const skills = [
    "Python",
    "FastAPI",
    "React Native",
    "AI/ML",
    "OpenCV",
    "TensorFlow",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "SQLite",
    "Git",
    "Django"
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-blue-400"
            >
              Aanish Rizmy
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "Projects","Upcoming Projects", "About", "Game", "Resume", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-300 hover:text-blue-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-gray-800"
            >
              {["Home", "Projects", "About", "Game", "Resume", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-green-900/20"></div>
        <motion.div style={{ opacity }} className="text-center z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Aanish Rizmy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              AI Developer | Software Developer | React Native Developer | FastAPI Engineer 
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">I turn ideas into powerful AI-powered apps.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              View Projects
              <Zap className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 text-blue-400/20"
          >
            <Code size={60} />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-1/3 right-1/4 text-green-400/20"
          >
            <Brain size={80} />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/3 left-1/3 text-blue-400/20"
          >
            <Smartphone size={50} />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my expertise in AI development and mobile applications and also software development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-white mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300 text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-blue-900/30 text-blue-300 border-blue-700/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </Button>
                      </a>
                      
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*UpComing Section */}
      <section id="upcoming_projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              UpComing Projects You Can Expect 
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Here are some of my upcoming projects that you cn Expect from me in AI development and mobile applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcoming_projects.map((upcoming_project, index) => (
              <motion.div
                key={upcoming_project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-white mb-2">{upcoming_project.title}</CardTitle>
                    <CardDescription className="text-gray-300 text-base leading-relaxed">
                      {upcoming_project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {upcoming_project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-blue-900/30 text-blue-300 border-blue-700/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>    
      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="w-64 h-64 mx-auto lg:mx-0 mb-8 rounded-full bg-gradient-to-br from-blue-400 to-green-400 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <img
                    src="/AanishRizmy.jpeg"
                    alt="Aanish Rizmy"
                    className="w-56 h-56 rounded-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate AI Developer with expertise in building intelligent applications that solve real-world
                problems. My journey in software development has led me to specialize in artificial intelligence, mobile
                app development, and backend systems.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I love creating innovative solutions that leverage the power of AI to enhance user experiences and
                automate complex processes. When I'm not coding, you'll find me exploring the latest AI research or
                contributing to open-source projects.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-gray-700 text-gray-200 hover:bg-blue-600 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Game Section */}
      <section id="game" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              AI Pattern Memory Game
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Test your memory skills with this AI-themed pattern game! Watch the sequence and repeat it back.
            </p>
          </motion.div>

          <AIMemoryGame />
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Resume
            </h2>
            <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
              Download my resume to learn more about my experience, education, and technical expertise in AI development
              and software engineering.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Software Developer</h3>
                <p className="text-gray-400">2+ years of experience in Software Development</p>
              </div>
              <div >
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Mobile Application Developer</h3>
                <p className="text-gray-400">React Native and cross-platform app development</p>
              </div>
              <div >
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Computer className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Frontend Development</h3>
                <p className="text-gray-400">Next.Js,React.Js and Angular Frontend Development</p>
              </div>
              <div >
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Backend Systems</h3>
                <p className="text-gray-400">Proficient in FastAPI, Python, and scalable backend architecture</p>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <a href="AanishRizmyCV1.pdf">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>
            </div>
            
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Send me a message</CardTitle>
                  <CardDescription className="text-gray-400">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Connect with me</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:aanishrizmy28@gmail.com"
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    <Mail className="mr-3 h-5 w-5" />
                    aanishrizmy28@gmail.com
                  </a>
                  <a
                    href="https://github.com/aanishalien"
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    <Github className="mr-3 h-5 w-5" />
                    github.com/aanishrizmy
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aanish-rizmy-a63309287/"
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    <Linkedin className="mr-3 h-5 w-5" />
                    linkedin.com/in/aanishrizmy
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-700">
                <p className="text-gray-400 text-sm">
                  Based in your location • Available for remote work • Open to new opportunities
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Aanish Rizmy. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
