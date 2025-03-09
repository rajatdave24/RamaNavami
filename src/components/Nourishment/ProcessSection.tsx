import React from "react";
import "./ProcessSection.css";
import desktopImage from "./process-desktop.png"; // Replace with your horizontal image path
import mobileImage from "./process-mobile.png"; // Replace with your vertical image path

const ProcessSection: React.FC = () => {
  return (
    <section className="process-section">
      <h1 className="process-title">ISKCON FOOD FOR CHILD</h1>
      <div className="title-underline"></div>

      {/* Desktop Image */}
      <div className="process-image-container">
        <img
          src={desktopImage}
          alt="Process Steps Desktop"
          className="process-image desktop-image"
        />
        <img
          src={mobileImage}
          alt="Process Steps Mobile"
          className="process-image mobile-image"
        />
      </div>
    </section>
  );
};

export default ProcessSection;
