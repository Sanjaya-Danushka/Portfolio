/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager · Tech Corp",
    message:
      "Working with this developer was a game-changer. Clean code, great communication, and always delivered beyond expectations.",
  },
  {
    name: "Michael Lee",
    role: "CTO · Startup Inc",
    message:
      "An exceptional frontend engineer with a sharp eye for detail. The UI/UX quality consistently impressed our entire team.",
  },
  {
    name: "Emily Carter",
    role: "Design Lead · Creative Studio",
    message:
      "They have a rare ability to turn complex ideas into elegant, user-friendly interfaces. A true professional.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-28 overflow-hidden">
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
          className="max-w-3xl mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-6">
            <Quote className="w-4 h-4 text-primary" />
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground">
            What people{" "}
            <span className="font-serif italic font-normal text-white">
              say about me
            </span>
          </h2>

          <p className="text-muted-foreground text-lg mt-4">
            Feedback from teammates, leaders, and collaborators I’ve worked
            with.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`
                relative glass rounded-2xl p-6 md:p-8
                border border-border/60
                transition-all duration-300
                hover:border-primary/60
                hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)]
              `}
            >
              {/* Glow overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-r from-primary/10 via-transparent to-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary mb-4 opacity-80" />

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  “{item.message}”
                </p>

                <div>
                  <p className="font-semibold text-secondary-foreground">
                    {item.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
