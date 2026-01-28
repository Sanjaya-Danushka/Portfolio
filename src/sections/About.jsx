
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const highlight = [
  {
    icon: Code2,
    title: "Full-Cycle Development",
    description: "Building complete end-to-end systems from design to deployment.",
  },
  {
    icon: Rocket,
    title: "DevOps Expertise",
    description: "Automating workflows and managing cloud infrastructure.",
  },
  {
    icon: Users,
    title: "Open Source Leader",
    description: "Contributing to open source and leading community projects.",
  },
  {
    icon: Lightbulb,
    title: "Author & Educator",
    description: "Author of 'The Art of Software Engineering' and tech education advocate.",
  },
];

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // trigger once
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <div className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}>
              <span className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2
              className={`text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground
              ${isVisible ? "animate-fade-in animation-delay-100" : "opacity-0"}
            `}
            >
              Empowering through
              <span className="font-serif italic font-normal text-white">
                {" "}
                open education and innovation.
              </span>
            </h2>

            {/* Paragraphs */}
            <div
              className={`space-y-4 text-muted-foreground
              ${isVisible ? "animate-fade-in animation-delay-200" : "opacity-0"}
            `}
            >
              <p className="text-base leading-relaxed">
                I'm a highly motivated Full-Cycle DevOps & Software Engineer with deep experience in building complete end-to-end systems — from application design and development to automation, deployment, and monitoring. I combine a Software Engineering mindset with DevOps principles to design, code, containerize, and deploy scalable solutions across modern cloud platforms.
              </p>
              <p className="text-base leading-relaxed">
                My passion for open-source collaboration, research, and accessible tech education drives me to keep innovating and sharing knowledge. I'm the author of "The Art of Software Engineering" and "A Guide to Cyber Ethics", focused on bridging gaps in tech literacy and contributing meaningfully to the global tech ecosystem.
              </p>
              <p className="text-base leading-relaxed">
                My mission is empowering underserved communities through open education, innovative development, and accessible learning tools — building not just software, but sustainable systems and opportunities for others.
              </p>
            </div>

            {/* Mission */}
            <div
              className={`glass rounded-2xl p-6 glow-border
              ${isVisible ? "animate-fade-in animation-delay-300" : "opacity-0"}
            `}
            >
              <p className="text-lg font-medium italic text-foreground">
                Empowering underserved communities through open education, innovative development, and accessible learning tools. I'm driven to bridge gaps in tech literacy and contribute meaningfully to the global tech ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* Right column – cards */}
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {highlight.map((item, index) => (
              <div
                key={index}
                className={`glass rounded-xl p-6 glow-border cursor-pointer
                  transition-all duration-500 hover:scale-105 hover:shadow-lg hover:glow-border-active
                  ${isVisible ? "animate-fade-in opacity-100" : "opacity-0"}
                `}
                style={{
                  animationDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms",
                }}
              >
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-secondary-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
