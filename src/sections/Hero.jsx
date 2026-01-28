/* eslint-disable react-hooks/purity */


import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Button from "../components/Button";
import React from "react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "CSS",
  "HTML",
  "GraphQL",
  "REST APIs",
  "Git",
  "Docker",
  "Jest",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background to-background/90" />
        <div className="absolute inset-0">
          <img
            src="/hero-bg.jpg"
            alt="Hero background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      </div>

      {/* Soft particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `drift 45s ${Math.random() * 10}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Software Engineer • React Specialist
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Crafting{" "}
                <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl">
                I build scalable web applications using React, Next.js, and modern
                technologies — delivering fast, clean, and delightful user experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                Contact me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton />
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow me:</span>

              {[Github, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 rounded-full glass hover:bg-primary/10 transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl opacity-70" />

              <div className="relative glass rounded-3xl p-2 border border-border/60 shadow-xl">
                <img
                  src="/profile-photo.jpg"
                  alt="Profile"
                  className="rounded-2xl object-cover w-full aspect-4/5"
                />

                {/* badges */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 shadow-lg">
                  <div className="text-2xl font-bold text-primary">4+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Marquee */}
        <div className="mt-20">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with:
          </p>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div className="shrink-0 px-8 py-4" key={index}>
                  <span className="text-xl font-semibold text-muted-foreground/70">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
        <span className="text-xs uppercase tracking-wider">Scroll</span>
      </a>
    </section>
  );
};

export default Hero;
