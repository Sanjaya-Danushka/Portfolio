import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center gap-4">

                    {/* small glowing line */}
                    <div className="w-24 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent" />

                    {/* text */}
                    <div className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} <span className="text-white">Sanjaya Danushka</span>. All rights reserved.
                    </div>

                    {/* social */}
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="p-2 rounded-full border border-border/60 bg-background/40 hover:bg-primary/10 hover:border-primary/60 transition"
                            aria-label="GitHub"
                        >
                            <Github className="w-4 h-4" />
                        </a>
                        <a
                            href="#"
                            className="p-2 rounded-full border border-border/60 bg-background/40 hover:bg-primary/10 hover:border-primary/60 transition"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                            href="#"
                            className="p-2 rounded-full border border-border/60 bg-background/40 hover:bg-primary/10 hover:border-primary/60 transition"
                            aria-label="Twitter"
                        >
                            <Twitter className="w-4 h-4" />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
