import React from "react";
import "./AnimatedBorderButton.css";
import {
  ArrowDown,
  ArrowDownLeftIcon,
  ArrowDownSquareIcon,
  Download,
  DownloadCloud,
  DownloadIcon,
} from "lucide-react";

const Downloadcv = () => {
  const link = document.createElement("a");
  link.href = "/CV_Jane_Doe.pdf"; // Replace with the actual path to the CV file
  link.download = "CV_Jane_Doe.pdf"; // Replace with the desired file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const AnimatedBorderButton = () => {
  return (
    <div>
      <button class="button">
        <div class="icon_cont">
          <span class="icon">
            <ArrowDownLeftIcon />
          </span>
        </div>
        <span class="text_button">Download CV</span>
      </button>
    </div>
  );
};

export default AnimatedBorderButton;
