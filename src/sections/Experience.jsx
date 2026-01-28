import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="experience" className="relative py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 w-[520px] h-[520px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-24"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-6">
            <Briefcase className="w-4 h-4 text-primary" />
            Career Path
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              speaks volumes
            </span>
          </h2>

          <p className="text-muted-foreground text-lg mt-4">
            A journey through the roles and teams where I crafted real-world
            digital products.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border/60 -translate-x-1/2" />

          {/* Mobile left line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-border/60" />

          <div className="space-y-20">
            {experience.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  {/* Mobile dot */}
                  <div className="md:hidden absolute left-1 top-6 z-10">
                    <TimelineDot current={item.current} />
                  </div>

                  {/* Desktop dot */}
                  <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 z-10">
                    <TimelineDot current={item.current} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 items-start">
                    {/* Desktop left */}
                    {isLeft && (
                      <div className="hidden md:flex md:pr-16 justify-end">
                        <AnimatedCard item={item} direction="left" />
                      </div>
                    )}

                    {/* Mobile card */}
                    <div className="md:hidden pl-12">
                      <AnimatedCard item={item} />
                    </div>

                    {/* Desktop right */}
                    {!isLeft && (
                      <div className="hidden md:flex md:pl-16 justify-start md:col-start-2">
                        <AnimatedCard item={item} direction="right" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineDot = ({ current }) => (
  <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ type: "spring", stiffness: 260, damping: 18 }}
    className={`w-6 h-6 rounded-full flex items-center justify-center ${
      current
        ? "bg-primary ring-4 ring-primary/20 shadow-lg shadow-primary/40"
        : "bg-background border border-border"
    }`}
  >
    <span
      className={`w-2.5 h-2.5 rounded-full ${
        current ? "bg-background" : "bg-muted-foreground"
      }`}
    />
  </motion.div>
);

const AnimatedCard = ({ item, direction }) => (
  <motion.div
    initial={{
      opacity: 0,
      x: direction === "left" ? -60 : direction === "right" ? 60 : 0,
      y: 20,
    }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    whileHover={{ y: -6 }}
    className="glass max-w-lg rounded-2xl p-6 md:p-8 shadow-lg"
  >
    <div className="flex flex-wrap items-center gap-4 mb-4">
      <h3 className="text-lg md:text-xl font-semibold">
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

    <p className="text-muted-foreground mb-6 text-sm md:text-base">
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
  </motion.div>
);

export default Experience;
``