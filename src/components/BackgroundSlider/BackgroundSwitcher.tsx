import React, { useState, useEffect } from "react";
import "./BackgroundSwitcher.css";

// Importing images
import Background1 from  "./kumbhmela-page-banner.jpg"; // Replace with your image path
import Background2 from "./makarsankranti-page-banner.jpg"; // Replace with your image path

const BackgroundSwitcher: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const backgroundImages = [Background1, Background2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [backgroundImages.length]);

  return (
    <section
      className="background-switcher"
      style={{ backgroundImage: `url(${backgroundImages[currentImage]})` }}
    >
      
    </section>
  );
};

export default BackgroundSwitcher;
