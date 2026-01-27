/* eslint-disable no-unused-vars */
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import React from "react";

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
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Building the future,
            <span className="font-serif italic font-normal text-white">
              {" "}
              one line of code at a time.
            </span>
          </h2>
          {/* paragraphs */}
          <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay200">
            <p className="text-base leading-relaxed">
              I'm a passionate software engineer with a knack for creating
              efficient and scalable web applications. With expertise in React,
              Next.js, and modern web technologies, I strive to deliver seamless
              user experiences that make a difference.
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
          {/* mission */}
          <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
            <p className="text-lg font-medium italic text-foreground">
              my mission is to leverage technology to create impactful digital
              solutions that enhance user experiences and drive innovation.
            </p>
          </div>
        </div>
        {/* right column */}
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {highlight.map((item, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 glow-border animate-fade-in animation-delay-400 hover:scale-105 hover:shadow-lg hover:glow-border-active transition-all duration-300 cursor-pointer"
              >
                <item.icon className="w-8 h-8 text-primary mb-3 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-semibold text-secondary-foreground mb-2 transition-colors duration-300 hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground transition-colors duration-300">
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
