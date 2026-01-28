/* eslint-disable no-unused-vars */
import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const experience = [
  {
    period: "Mar 2022 - Present",
    company: "Open Source Developers Community (OSDC)",
    role: "Software Developer",
    description:
      "Collaborating with a team of developers to create open-source solutions. Led a project to implement a new feature that increased system efficiency by 20%. Regularly contributing to code reviews and product documentation.",
    technologies: ["Python", "JavaScript", "DevOps", "Open Source"],
    current: true,
  },
  {
    period: "2023 - 2027",
    company: "Asia e University",
    role: "Bachelor of ICT (Hons) Software Engineering",
    description:
      "Pursuing undergraduate degree in Software Engineering with focus on Full-Stack Development, Cybersecurity & Information Security, and Computer Networking & IT Infrastructure.",
    technologies: ["Software Engineering", "Full-Stack Development", "Cybersecurity", "Java"],
    current: true,
  },
  {
    period: "Nov 2023 - 2027",
    company: "Open Source Society University",
    role: "Computer Science",
    description:
      "Advanced computer science education covering Full-Stack Development, Cybersecurity, Machine Learning, and modern software development practices.",
    technologies: ["Computer Science", "Machine Learning", "Python", "Full-Stack Development"],
    current: true,
  },
  {
    period: "2022 - 2023",
    company: "IMBS Green Campus - Sri Lanka",
    role: "Diploma in Information Technology",
    description:
      "Completed Diploma in Information Technology with Batch Top achievement, focusing on software development fundamentals and IT infrastructure.",
    technologies: ["Software Development", "IT Fundamentals", "Database Management"],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 w-130 h-130 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
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
            My journey through open-source contributions, education, and professional development 
            in software engineering and DevOps.
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
    className={`
      relative glass max-w-lg rounded-2xl p-6 md:p-8
      border border-border/60
      transition-all duration-300
      hover:border-primary/60
      hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)]
      ${item.current ? "border-primary/70 shadow-[0_0_45px_-10px_rgba(99,102,241,0.8)]" : ""}
    `}
  >
    {/* Glow overlay */}
    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-r from-primary/10 via-transparent to-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />

    {/* Content */}
    <div className="relative z-10">
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
            className="text-xs px-3 py-1 rounded-full border border-border/60 bg-background/60 hover:border-primary/50"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default Experience;
