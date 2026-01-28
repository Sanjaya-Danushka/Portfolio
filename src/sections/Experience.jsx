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
      {/* soft background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="max-w-3xl mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-6">
            <Briefcase className="w-4 h-4 text-primary" />
            Career Path
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A journey through the roles and teams where I crafted real-world
            digital products.
          </p>
        </div>

        {/* timeline */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border/60" />

          <div className="space-y-16">
            {experience.map((item, index) => (
              <div key={index} className="relative pl-16 group">
                {/* dot */}
                <div
                  className={`absolute left-0 top-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    item.current
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "bg-background border border-border"
                  } group-hover:scale-110`}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      item.current ? "bg-background" : "bg-muted-foreground"
                    }`}
                  />
                </div>

                {/* card */}
                <div className="glass rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
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

                  <p className="text-muted-foreground mb-6 max-w-2xl">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full border border-border/60 bg-background/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
