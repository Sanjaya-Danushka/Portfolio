import React from "react";
import { Briefcase, Calendar } from "lucide-react";

const experience = [
  {
    period: "Jan 2020 - Present",
    company: "Tech Corp",
    role: "Software Engineer",
    description:
      "Developing scalable web applications using React and Node.js, focusing on performance and clean architecture.",
    technologies: ["React", "Node.js", "JavaScript", "CSS"],
    current: true,
  },
  {
    period: "Mar 2018 - Dec 2019",
    company: "Startup Inc",
    role: "Frontend Developer",
    description:
      "Built responsive, accessible interfaces and collaborated closely with designers and backend teams.",
    technologies: ["React", "JavaScript", "HTML5", "CSS3"],
    current: false,
  },
  {
    period: "Jun 2017 - Aug 2017",
    company: "Web Solutions",
    role: "Intern",
    description:
      "Assisted in developing client websites and internal tools while learning modern frontend workflows.",
    technologies: ["HTML", "CSS", "JavaScript"],
    current: false,
  },
  {
    period: "Jan 2016 - May 2017",
    company: "Code Labs",
    role: "Junior Developer",
    description:
      "Worked on multiple web projects, gaining strong fundamentals in UI development and teamwork.",
    technologies: ["HTML", "CSS", "JavaScript"],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* background glow */}
      <div className="absolute top-1/2 left-1/2 w-125 h-125 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* header */}
        <div className="max-w-3xl mb-24">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-6">
            <Briefcase className="w-4 h-4 text-primary" />
            Career Path
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              speaks volumes
            </span>
          </h2>

          <p className="text-muted-foreground text-lg mt-4">
            A journey through the roles and teams where I crafted real-world
            digital products.
          </p>
        </div>

        {/* timeline */}
        <div className="relative">
          {/* center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/60 -translate-x-1/2" />

          <div className="space-y-24">
            {experience.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative grid grid-cols-1 md:grid-cols-2 items-start"
                >
                  {/* LEFT CARD */}
                  {isLeft && (
                    <div className="md:pr-16 flex justify-end">
                      <ExperienceCard item={item} />
                    </div>
                  )}

                  {/* CENTER DOT */}
                  <div className="absolute left-1/2 top-8 -translate-x-1/2 z-10">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        item.current
                          ? "bg-primary shadow-lg shadow-primary/40 ring-4 ring-primary/20"
                          : "bg-background border border-border"
                      }`}
                    >
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          item.current ? "bg-background" : "bg-muted-foreground"
                        }`}
                      />
                    </div>

                    {/* connector */}
                    <div
                      className={`hidden md:block absolute top-3 h-px w-16 bg-border ${
                        isLeft ? "-left-16" : "left-6"
                      }`}
                    />
                  </div>

                  {/* RIGHT CARD */}
                  {!isLeft && (
                    <div className="md:pl-16 flex justify-start md:col-start-2">
                      <ExperienceCard item={item} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ item }) => (
  <div className="glass max-w-lg rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
    <div className="flex flex-wrap items-center gap-4 mb-4">
      <h3 className="text-xl font-semibold">
        {item.role} · {item.company}
      </h3>
      {item.current && (
        <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
          Current
        </span>
      )}
    </div>

    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
      <Calendar className="w-4 h-4" />
      {item.period}
    </div>

    <p className="text-muted-foreground mb-6">{item.description}</p>

    <div className="flex flex-wrap gap-2">
      {item.technologies.map((tech, i) => (
        <span
          key={i}
          className="text-xs px-3 py-1 rounded-full border border-border/60 bg-background/60 hover:border-primary/50 transition"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default Experience;
