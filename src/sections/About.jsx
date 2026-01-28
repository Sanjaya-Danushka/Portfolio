
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const highlight = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and efficient code.",
  },
  {
    icon: Rocket,
    title: "Problem Solving",
    description: "Adept at tackling complex challenges.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Working effectively within diverse teams.",
  },
  {
    icon: Lightbulb,
    title: "Open Source Contributor",
    description: "Contributing to open source projects.",
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
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one line of code at a time.
              </span>
            </h2>

            {/* Paragraphs */}
            <div
              className={`space-y-4 text-muted-foreground
              ${isVisible ? "animate-fade-in animation-delay-200" : "opacity-0"}
            `}
            >
              <p className="text-base leading-relaxed">
                I'm a passionate software engineer with a knack for creating
                efficient and scalable web applications. With expertise in
                React, Next.js, and modern web technologies, I strive to deliver
                seamless user experiences that make a difference.
              </p>
              <p className="text-base leading-relaxed">
                Beyond coding, I enjoy collaborating with diverse teams,
                contributing to open source projects, and continuously learning
                new technologies to stay ahead in this ever-evolving field.
              </p>
              <p className="text-base leading-relaxed">
                Let's build something amazing together!
              </p>
            </div>

            {/* Mission */}
            <div
              className={`glass rounded-2xl p-6 glow-border
              ${isVisible ? "animate-fade-in animation-delay-300" : "opacity-0"}
            `}
            >
              <p className="text-lg font-medium italic text-foreground">
                My mission is to leverage technology to create impactful digital
                solutions that enhance user experiences and drive innovation.
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
