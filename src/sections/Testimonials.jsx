/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager · Tech Corp",
    image: "https://i.pravatar.cc/150?img=32",
    message:
      "Working with this developer was a game-changer. Clean code, great communication, and always delivered beyond expectations.",
  },
  {
    name: "Michael Lee",
    role: "CTO · Startup Inc",
    image: "https://i.pravatar.cc/150?img=12",
    message:
      "An exceptional frontend engineer with a sharp eye for detail. The UI/UX quality consistently impressed our entire team.",
  },
  {
    name: "Emily Carter",
    role: "Design Lead · Creative Studio",
    image: "https://i.pravatar.cc/150?img=47",
    message:
      "They have a rare ability to turn complex ideas into elegant, user-friendly interfaces. A true professional.",
  },
  {
    name: "David Kim",
    role: "Engineering Manager · SaaS Co",
    image: "https://i.pravatar.cc/150?img=22",
    message:
      "Reliable, proactive, and highly skilled. One of the best engineers I’ve had the pleasure of working with.",
  },
  {
    name: "Olivia Brown",
    role: "Founder · Startup Studio",
    image: "https://i.pravatar.cc/150?img=5",
    message:
      "A rare blend of creativity and technical excellence. Every project benefited from their attention to detail.",
  },
  {
    name: "James Wilson",
    role: "Lead Developer · Web Agency",
    image: "https://i.pravatar.cc/150?img=18",
    message:
      "Superb problem solver. Always delivers on time and writes clean, scalable code.",
  },
  {
    name: "Ava Martinez",
    role: "Design Director · Creative Lab",
    image: "https://i.pravatar.cc/150?img=56",
    message:
      "Great sense of design and usability. The interfaces were intuitive and visually stunning.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-28 overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 w-130 h-130 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6">
        {/* header */}
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
            Feedback from people I’ve had the pleasure to work with.
          </p>
        </motion.div>

        {/* Smooth Infinite Slider */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 45, // SLOWER
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <TestimonialCard key={index} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="
        glass min-w-70 sm:min-w-75 md:min-w-85 lg:min-w-90
        rounded-2xl p-6 md:p-8
        border border-border/60
        hover:border-primary/60
        hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)]
        transition-all duration-300
      "
    >
      <Quote className="w-6 h-6 text-primary mb-4 opacity-70" />

      <p className="text-muted-foreground mb-6 leading-relaxed">
        “{item.message}”
      </p>

      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-12 h-12 rounded-full border border-primary/40"
        />
        <div>
          <p className="font-semibold text-secondary-foreground">{item.name}</p>
          <p className="text-sm text-muted-foreground">{item.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
