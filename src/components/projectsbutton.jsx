import { ArrowUpRight } from "lucide-react";

const ProjectsButton = () => {
  return (
    <a
      href="https://github.com/Sanjaya-Danushka"
      target="_blank"
      rel="noopener noreferrer"
      className="
        group mx-auto mt-12 inline-flex items-center gap-2
        rounded-full border border-white/10
        bg-white/5 px-5 py-2
        text-sm font-medium text-white/80
        backdrop-blur-md
        transition-all duration-200
        hover:bg-white/10 hover:-translate-y-0.5
      "
    >
      <span>More projects on GitHub</span>
      <ArrowUpRight
        size={16}
        className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </a>
  );
};

export default ProjectsButton;
