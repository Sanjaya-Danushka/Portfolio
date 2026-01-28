
import React, { useEffect, useRef, useState } from "react";
import ProjectsButton from "../components/projectsbutton.jsx";

const projects = [
  {
    title: "NeoArch - Ultimate Package Manager",
    description: "A unified package manager for Arch Linux supporting Pacman, AUR, Flatpak, npm, Git, and Docker with automated workflows and streamlined Docker integration.",
    img: "/neoarch.png",
    tags: ["Python", "Shell Scripting", "Linux", "DevOps"],
    link: "https://github.com/Sanjaya-Danushka/Aurora",
    github: "https://github.com/Sanjaya-Danushka/Aurora",
  },
  {
    title: "ShopEase E-commerce Platform",
    description: "Enterprise-grade e-commerce solution with AI-powered chatbot, multi-payment methods, advanced analytics, and complete admin panel. Production-ready with 10k+ user capacity.",
    img: "/shopease.png",
    tags: ["React", "Node.js", "AI", "Stripe", "MongoDB"],
    link: "https://github.com/Sanjaya-Danushka/e-commerce-store",
    github: "https://github.com/Sanjaya-Danushka/e-commerce-store",
  },
  {
    title: "WhaleCraft - Arch Linux Automation",
    description: "Universal post-install automation system that adapts to any hardware configuration with intelligent detection, reducing Arch setup time from hours to minutes.",
    img: "/whalecraft.png",
    tags: ["Bash", "Shell Scripting", "Linux", "Automation"],
    link: "https://github.com/Sanjaya-Danushka/whalecraft",
    github: "https://github.com/Sanjaya-Danushka/whalecraft",
  },
  {
    title: "Bloomly – Flower Shop UI Design",
    description: "A soft and elegant eCommerce interface designed for plant and flower lovers. Features clean layouts, warm color palette with rose gold accents, and thoughtful UX details for a calming shopping experience.",
    img: "/bloomly.png",
    tags: ["UI Design", "Figma", "eCommerce", "UX Design"],
    link: "https://www.figma.com/design/UEFW2xeQ9k8soMSf3fsbiv/Untitled",
    github: "#",
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span
            className={`text-muted-foreground text-sm font-medium uppercase tracking-wider
              ${isVisible ? "animate-fade-in" : "opacity-0"}
            `}
          >
            Projects
          </span>

          <h2
            className={`text-4xl md:text-5xl font-bold mt-4 text-secondary-foreground
              ${isVisible ? "animate-fade-in animation-delay-100" : "opacity-0"}
            `}
          >
            Things I’ve Built{" "}
            <span className="font-serif italic font-normal text-white">
              with passion
            </span>
          </h2>

          <p
            className={`mt-4 text-muted-foreground
              ${isVisible ? "animate-fade-in animation-delay-200" : "opacity-0"}
            `}
          >
            A selection of open-source projects showcasing my expertise in DevOps automation, 
            full-stack development, and Linux system engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden
                transition-all duration-700
                hover:-translate-y-4 hover:shadow-2xl
                ${isVisible ? "animate-slide-fade-up" : "opacity-0"}
                hover-lift glass-hover`}
              style={{
                animationDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              {/* Image */}
              <div className="relative h-105 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover
                    transition-transform duration-700
                    group-hover:scale-110"
                />

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/70" />
                
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 animate-shimmer"></div>
                </div>
              </div>

              {/* Floating Glass Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div
                  className="glass rounded-xl p-6 glow-border
                  transition-all duration-500
                  group-hover:backdrop-blur-lg group-hover:scale-105 group-hover:border-primary/40"
                >
                  <h3 className="text-xl font-semibold text-secondary-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-2 group-hover:text-foreground transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full
                          bg-primary/10 text-primary medium border border-primary/20 
                          hover:border-primary/50 hover:bg-primary/20 transition-all duration-300
                          hover:scale-110"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-4 text-sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-105 inline-block"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <ProjectsButton />
        </div>
      </div>
    </section>
  );
};

export default Projects;
