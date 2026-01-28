/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dilantha Nayanajith",
    role: "Intern Software Engineer | AI Enthusiast",
    image: "https://i.pravatar.cc/150?img=32",
    message:
      "I've seen Sanjaya Danushka grow as a passionate undergraduate software engineer who stays constantly updated with real-world technologies. He's skilled in Java, Python, and Dart, and actively contributes to open source and educational projects. Sanjaya is hardworking, eager to learn, and a great team player.",
  },
  {
    name: "Ishini Gamage",
    role: "Graduate at SLIIT",
    image: "https://i.pravatar.cc/150?img=47",
    message:
      "I've had the pleasure of collaborating with Sanjaya Danushka on several projects, and I can confidently say his dedication to software engineering and technology research is exceptional. His strong command of languages like Java, Python, and Dart, combined with his enthusiasm for open-source contribution, truly distinguishes him in the tech space.",
  },
  {
    name: "A.K.U.S. Abeysinghe",
    role: "Trainee Engineer at IDET",
    image: "https://i.pravatar.cc/150?img=22",
    message:
      "I've had the pleasure of knowing as well as working with Sanjaya Dhanushka, and I can say with confidence that one of the most passionate and dedicated people I've ever met is him within the field of software engineering. Sanjaya expertly applies a base of technical knowledge and thinks critically with extraordinary innovation.",
  },
  {
    name: "Sandahiru Nethruwan",
    role: "Intern Software Developer | Undergraduate Student",
    image: "https://i.pravatar.cc/150?img=5",
    message:
      "Sanjaya Dhanushka is a dedicated professional in the software field with a clear passion for technology and innovation. His presence reflects a strong commitment to staying current with industry trends and sharing valuable insights. He brings a positive and forward-thinking attitude to the tech community.",
  },
  {
    name: "Thenuja Dulwana",
    role: "Entrepreneur | DevOps Enthusiast | Undergraduate",
    image: "https://i.pravatar.cc/150?img=18",
    message:
      "Sanjaya has a natural talent for networking, he connects people with ease and leaves a lasting positive impression. His genuine warmth, humility, and professionalism make interactions meaningful. A truly good person who strengthens any professional circle he's part of.",
  },
  {
    name: "Dinithi N Perera",
    role: "Content creator | Freelancer | Graphic designer",
    image: "https://i.pravatar.cc/150?img=56",
    message:
      "I've had the opportunity to work with Sanjaya, and I can confidently say he is one of the most intelligent and quick-thinking individuals I've met. His ability to understand complex concepts and find creative solutions is truly impressive.",
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
