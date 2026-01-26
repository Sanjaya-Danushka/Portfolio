/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/purity */
import { ArrowLeftRight, ArrowRight, Download } from "lucide-react";
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
            <Button size="lg">
              Contact me <ArrowRight className="w-5 h-5" />
            </Button>
            <AnimatedBorderButton />
          </div>
          {/* Right column -profile image */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
