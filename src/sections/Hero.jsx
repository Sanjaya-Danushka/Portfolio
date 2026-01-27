/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/purity */
import {
  ArrowLeftRight,
  ArrowRight,
  Download,
  Github,
  GithubIcon,
  Linkedin,
  Twitter,
} from "lucide-react";
import Button from "../components/Button";
import React from "react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b  from-background/20 via-background/80 to-background"></div>
      </div>
      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift 50s ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column -text content*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-pretty">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • React Specialist{" "}
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences
                <br />
                <span className="font-serif italic font-normal">precision</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-400">
                I build scalable web applications using React, Next.js, and
                modern technologies and deliver seamless user experiences.
              </p>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-20 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton />
            </div>
            {/* social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-300">
              <span className="text-sm text-muted-foreground">Follow me:</span>

              {[
                { icon: GithubIcon, url: "https://github.com" },
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="ml-2 p-2 rounded-full glass hover:bg-primary/10 transition-all duration-300 hover:text-primary"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          {/* Right column -profile image */}
          <div className=" relative animate-fade-in animation-delay-300">
            {/* profile image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Profile"
                  className="rounded-2xl shadow-lg object-cover w-full aspect-4/5"
                />
                {/* floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* stats badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">4+</div>
                  <div className="text-xs text-muted-foreground">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
