import React, { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Project One",
    description: "Description for project one and more details here.",
    img: "/project1.png",
    tags: ["React", "Node.js", "GraphQL"],
    link: "#",
    github: "#",
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    img: "/project2.png",
    tags: ["React", "Node.js", "GraphQL"],
    link: "#",
    github: "#",
  },
  {
    title: "Project Three",
    description: "Description for project three.",
    img: "/project3.png",
    tags: ["React", "Node.js", "GraphQL"],
    link: "#",
    github: "#",
  },
  {
    title: "Project Four",
    description: "Description for project four.",
    img: "/project4.png",
    tags: ["React", "Node.js", "GraphQL"],
    link: "#",
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
            A selection of projects showcasing my skills in modern web
            development, problem-solving, and clean architecture.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden
                transition-all duration-700
                hover:-translate-y-3 hover:shadow-2xl
                ${isVisible ? "animate-slide-fade-up" : "opacity-0"}
              `}
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
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
              </div>

              {/* Floating Glass Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div
                  className="glass rounded-xl p-6 glow-border
                  transition-all duration-500
                  group-hover:backdrop-blur-lg"
                >
                  <h3 className="text-xl font-semibold text-secondary-foreground mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full
                          bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-4 text-sm">
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
