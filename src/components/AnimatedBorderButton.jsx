import React from "react";
import { ArrowDownRight } from "lucide-react";
import "./AnimatedBorderButton.css";

const DownloadCv = () => {
  return (
    <a href="/CV_Jane_Doe.pdf" download className="download-cv">
      <span>Download CV</span>
      <ArrowDownRight size={18} />
    </a>
  );
};

export default DownloadCv;
