"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Database,
  ChevronDown,
  Menu,
  X,
  Brain,
  Coffee,
  Zap,
  Rocket,
  Heart,
  Star,
  Trophy,
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [coffeeCount, setCoffeeCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { 
      name: "Frontend Magic", 
      icon: Code, 
      color: "text-blue-500",
      description: "Making pixels dance since 2020 ✨"
    },
    { 
      name: "UI/UX Wizardry", 
      icon: Palette, 
      color: "text-purple-500",
      description: "Turning ugly interfaces into eye candy 🍭"
    },
    { 
      name: "Backend Sorcery", 
      icon: Database, 
      color: "text-green-500",
      description: "Making servers do my bidding (nicely) 🎩"
    },
    { 
      name: "AI Learning", 
      icon: Brain, 
      color: "text-pink-500",
      description: "Teaching machines to be smarter than me 🤖"
    },
  ];

  const projects = [
    {
      title: "Bug Tracker Pro",
      description: "A sophisticated app that tracks bugs so well, even the bugs are impressed. Features include automated bug detection and a 'Blame Dave' button.",
      tech: ["React", "Node.js", "MongoDB", "Tears"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      funFact: "🐛 Zero bugs found... yet"
    },
    {
      title: "Coffee Counter API",
      description: "A mission-critical API that tracks my daily coffee consumption. Currently showing alarming but accurate numbers.",
      tech: ["Express.js", "PostgreSQL", "Caffeine", "Hope"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=300&fit=crop",
      funFact: "☕ Powers 73% of my productivity"
    },
    {
      title: "AI Chatbot Therapy",
      description: "An AI that listens to my coding problems and responds with encouraging GIFs. Currently in therapy itself.",
      tech: ["Python", "TensorFlow", "Emotional Support", "Memes"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      funFact: "🤖 97% success rate at making me smile"
    },
    {
      title: "E-Commerce Dashboard",
      description: "A sleek dashboard for managing online stores. Features real-time analytics, inventory management, and a magic button that somehow fixes everything.",
      tech: ["React", "TypeScript", "Chart.js", "Magic"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      funFact: "📊 100% more sales guaranteed*"
    },
    {
      title: "Weather App Extraordinaire",
      description: "Not just any weather app - this one predicts the weather AND your mood based on it. Spoiler: it's always 'need more coffee'.",
      tech: ["Vue.js", "OpenWeather API", "CSS Magic", "Psychic Powers"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      funFact: "🌦️ 87% accuracy (the other 13% blame it on climate change)"
    },
    {
      title: "Task Master 3000",
      description: "A productivity app that's so good at organizing tasks, it organized my entire life. Now it sends me reminders to eat and sleep.",
      tech: ["Next.js", "Prisma", "TailwindCSS", "Life Coaching"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop",
      funFact: "✅ Users report 200% productivity increase"
    },
    {
      title: "Social Media Analytics",
      description: "Track your social media performance across platforms. Includes sentiment analysis and a 'Why am I doing this?' existential crisis detector.",
      tech: ["React", "D3.js", "Python", "Existential Dread"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      funFact: "📱 Predicts viral content with 42% accuracy"
    },
    {
      title: "Crypto Portfolio Tracker",
      description: "Because checking your portfolio 100 times a day wasn't convenient enough. Now includes a 'Hide from spouse' mode and emotional support.",
      tech: ["React Native", "CoinGecko API", "Redux", "Emotional Damage"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
      funFact: "💰 Helps you lose money more efficiently"
    },
    {
      title: "Recipe Randomizer",
      description: "Can't decide what to cook? This app randomly generates recipes based on what's in your fridge. Warning: Results may vary wildly.",
      tech: ["Angular", "Firebase", "Spoonacular API", "Culinary Chaos"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
      funFact: "🍳 Only 23% of recipes are actually edible"
    }
  ];

  const funFacts = [
    "🎯 Debugging is like being a detective in a crime movie where you're also the murderer",
    "☕ I turn coffee into code (and occasionally into more coffee)",
    "🚀 Currently teaching AI to understand my sarcasm... it's not going well",
    "💡 I speak fluent JavaScript, broken Python, and confused SQL",
    "🎨 I make UIs so beautiful, even Internet Explorer would try to render them",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-gray-50 to-yellow-100 dark:from-gray-900 dark:via-yellow-900/20 dark:to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg z-50 border-b border-yellow-200 dark:border-yellow-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">
                Saurav Portfolio
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["home", "about", "skills", "projects", "contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeSection === item
                          ? "text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30 shadow-md transform scale-105"
                          : "text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20"
                      }`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-yellow-200 dark:border-yellow-800">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 w-full text-left rounded-lg hover:bg-yellow-50 dark:hover:bg-yellow-900/20"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-gray-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-black p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-600 to-black bg-clip-text relative overflow-hidden">
                  <div className="relative">
                    S
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-black bg-clip-text animate-pulse">
                      S
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 bg-clip-text text-transparent animate-gradient">
                Saurav
              </span>
            </h1>

            <div className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Full Stack Developer @ TCS
              </span>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              I turn coffee into code and{" "}
              <span className="text-yellow-600 dark:text-yellow-400 font-semibold">bugs into features</span>
              . Currently teaching AI to be funnier than me{" "}
              <span className="text-sm">(it&apos;s winning 🤖)</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => scrollToSection("projects")}
                className="group px-8 py-4 bg-gradient-to-r from-yellow-500 to-black hover:from-yellow-600 hover:to-gray-900 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Rocket className="w-5 h-5 group-hover:animate-bounce" />
                  View My Creations
                </span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Let&apos;s Chat!
              </button>
            </div>

            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="#"
                className="p-3 text-gray-600 dark:text-gray-400 hover:text-yellow-600 transition-all duration-300 hover:scale-110 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-all duration-300 hover:scale-110 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 text-gray-600 dark:text-gray-400 hover:text-red-600 transition-all duration-300 hover:scale-110 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg"
              >
                <Mail className="w-6 h-6" />
              </a>
              <button
                onClick={() => setCoffeeCount(prev => prev + 1)}
                className="p-3 text-gray-600 dark:text-gray-400 hover:text-amber-600 transition-all duration-300 hover:scale-110 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg"
              >
                <Coffee className="w-6 h-6" />
                {coffeeCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {coffeeCount}
                  </span>
                )}
              </button>
            </div>

            {/* Fun Facts Ticker */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 max-w-2xl mx-auto shadow-lg">
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">💡 Random Dev Fact:</h3>
              <p className="text-gray-800 dark:text-gray-200 italic">
                {funFacts[Math.floor(Math.random() * funFacts.length)]}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About This Human 🧑‍💻
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-black mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                The Legend of Saurav² 
                <span className="text-sm text-gray-500">(Yes, that&apos;s my real name! 😄)</span>
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  🏢 Currently working at <span className="font-semibold text-blue-600">TCS</span> where I pretend to know what I&apos;m doing 
                  (spoiler: I mostly Google things like everyone else).
                </p>
                <p>
                  💻 I&apos;m a full-stack developer who enjoys both the front-end magic ✨ and 
                  backend wizardry 🧙‍♂️. I speak fluent React, Node.js, and panic-driven development.
                </p>
                <p>
                  🤖 Currently on a quest to understand AI and machine learning. My goal? To create an AI 
                  that can debug my code better than I can. So far, it just laughs at my variable names.
                </p>
                <p>
                  ☕ Fun fact: I&apos;ve discovered that my code quality is directly proportional to my 
                  caffeine intake. The correlation is frightening yet beautiful.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  "JavaScript (my first love ❤️)",
                  "TypeScript (JavaScript but fancy)",
                  "React (hooks are life)",
                  "Next.js (because SSR is cool)",
                  "Node.js (JavaScript everywhere!)",
                  "Python (for AI adventures)",
                  "TensorFlow (teaching machines)",
                  "Coffee (essential dependency ☕)",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 p-8 shadow-2xl">
                <div className="w-full h-full rounded-xl bg-white dark:bg-gray-800 flex flex-col items-center justify-center p-6">
                  <div className="text-6xl mb-4">🧑‍💻</div>
                  <p className="text-gray-600 dark:text-gray-300 font-medium text-center mb-4">
                    &quot;I don&apos;t always test my code, but when I do, I do it in production&quot;
                  </p>
                  <div className="flex gap-2">
                    <Heart className="w-5 h-5 text-red-500 animate-pulse" />
                    <span className="text-sm text-gray-500">Powered by passion (and Stack Overflow)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Superpowers 🦸‍♂️
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-black mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some skills I&apos;ve collected like Pokémon cards. Still working on the legendary ones! 🃏
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100 dark:border-purple-800 hover:scale-105 hover:rotate-1"
                >
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 mb-4 group-hover:animate-bounce`}
                  >
                    <IconComponent className={`w-8 h-8 ${skill.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {skill.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < 4 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300 dark:text-gray-600'
                        }`} 
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">(Still learning!)</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* AI Learning Journey */}
          <div className="mt-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
            <div className="text-center">
              <Brain className="w-16 h-16 mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl font-bold mb-4">🤖 My AI Learning Adventure</h3>
              <p className="text-lg mb-6 max-w-3xl mx-auto">
                Currently diving deep into the world of Artificial Intelligence! 
                Teaching machines to think while trying not to create Skynet. 
                Progress: 23% smarter, 77% more confused, 100% excited! 🚀
              </p>
              <div className="flex justify-center gap-4 text-sm">
                <span className="bg-white/20 px-3 py-1 rounded-full">🧠 Neural Networks</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">📊 Machine Learning</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">🐍 Python AI Libraries</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">🤯 Existential Questions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Digital Offspring 👶💻
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-black mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These are some projects I&apos;ve birthed into the world. They may not be perfect, but they&apos;re mine! 
              <span className="text-sm">(Please don&apos;t judge the variable names 🙈)</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-purple-100 dark:border-purple-800 hover:scale-105 hover:rotate-1"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 rounded-full px-3 py-1 text-sm font-medium">
                    {project.funFact}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium border border-purple-200 dark:border-purple-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors group/link"
                    >
                      <Github className="w-4 h-4 mr-1 group-hover/link:animate-spin" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors group/link"
                    >
                      <ExternalLink className="w-4 h-4 mr-1 group-hover/link:animate-bounce" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              🚧 More awesome projects coming soon! Currently brewing in my coffee-powered dev environment.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-black text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
              <span className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Stay Tuned for More Magic!
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let&apos;s Create Something Epic! 🚀
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Got a crazy idea? Need someone to turn your &quot;what if&quot; into &quot;wow, it works!&quot;? 
              Let&apos;s chat! I promise to bring my A-game and unlimited dad jokes. 😄
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Amazing Name 🏷️
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border-2 border-purple-200 dark:border-purple-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                    placeholder="What should I call you?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Digital Address 📧
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border-2 border-purple-200 dark:border-purple-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                    placeholder="your.awesome@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  What&apos;s This About? 🤔
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border-2 border-purple-200 dark:border-purple-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                  placeholder="World domination plans? New project idea?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Epic Message 💌
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-purple-200 dark:border-purple-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                  placeholder="Tell me about your brilliant idea! Don't worry, I won't judge your spelling... much 😉"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="group px-8 py-4 bg-gradient-to-r from-yellow-500 to-black hover:from-yellow-600 hover:to-gray-900 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    <Rocket className="w-5 h-5 group-hover:animate-bounce" />
                    Launch This Message!
                  </span>
                </button>
                <p className="text-sm text-gray-500 mt-3">
                  ⚡ Powered by good intentions and caffeine. Response time: usually faster than my code compilation!
                </p>
              </div>
            </form>
          </div>

          {/* Quick Contact Options */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Or find me in these digital realms:
            </h3>
            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="group flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-purple-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">GitHub</span>
              </a>
              <a
                href="#"
                className="group flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">LinkedIn</span>
              </a>
              <a
                href="#"
                className="group flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-red-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-yellow-200 dark:border-yellow-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              © 2024 Saurav Saurav. Built with Next.js, Tailwind CSS, and an unhealthy amount of coffee ☕
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              🚀 Powered by TCS experience, fueled by AI curiosity, debugged with persistence
            </p>
            <div className="mt-4 flex justify-center items-center gap-2">
              <span className="text-sm text-gray-500">Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="text-sm text-gray-500">and lots of</span>
              <Coffee className="w-4 h-4 text-amber-500" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
