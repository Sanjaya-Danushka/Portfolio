/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
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
          className="max-w-3xl mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-6">
            <Mail className="w-4 h-4 text-primary" />
            Get in Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground">
            Let’s build something{" "}
            <span className="font-serif italic font-normal text-white">
              amazing
            </span>
          </h2>

          <p className="text-muted-foreground text-lg mt-4">
            Want to work together? Drop me a message and I’ll get back to you as
            soon as possible.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-2xl p-6 md:p-10 border border-border/60 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-secondary-foreground">
                    Location
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Your City, Country
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-secondary-foreground">
                    Email
                  </p>
                  <p className="text-muted-foreground text-sm">
                    your.email@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-secondary-foreground">
                    Phone
                  </p>
                  <p className="text-muted-foreground text-sm">
                    +123 456 7890
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 flex-wrap">
                <a
                  href="#"
                  className="text-sm px-4 py-2 rounded-full border border-border/60 bg-background/60 hover:border-primary/60 transition"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-sm px-4 py-2 rounded-full border border-border/60 bg-background/60 hover:border-primary/60 transition"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-sm px-4 py-2 rounded-full border border-border/60 bg-background/60 hover:border-primary/60 transition"
                >
                  Twitter
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="glass rounded-xl p-4 border border-border/60 bg-background/40 focus:outline-none focus:border-primary/60 transition"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="glass rounded-xl p-4 border border-border/60 bg-background/40 focus:outline-none focus:border-primary/60 transition"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="glass rounded-xl p-4 border border-border/60 bg-background/40 focus:outline-none focus:border-primary/60 transition w-full"
              />

              <textarea
                rows="4"
                placeholder="Message"
                className="glass rounded-xl p-4 border border-border/60 bg-background/40 focus:outline-none focus:border-primary/60 transition w-full"
              />

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)] transition"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
