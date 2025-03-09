import React, { useState, useEffect, useRef } from "react";
import "./ChooseACause.css";

const ChooseACause: React.FC = () => {
  const causes = [
    {
      image: "https://via.placeholder.com/300x200?text=Food+for+Child",
      title: "Food for child",
      description:
        "Share few meals with Poor, Hungry and Malnourished Children. Hunger kills 18,000 children everyday. 60% of the children in India go to sleep hungry every night.",
      linkText: "Donate Now >",
    },
    {
      image: "https://via.placeholder.com/300x200?text=Vidya+Daan",
      title: "Vidya Daan",
      description:
        "Bhagavad Gita and Bhagavatam are the crest jewel of all vedic scriptures. We invite you to distribute the king of all knowledge to people who are unable to afford these scriptures.",
      linkText: "Donate Now >",
    },
    {
      image: "https://via.placeholder.com/300x200?text=Go+Seva",
      title: "Go Seva",
      description:
        "We care for Krishna’s 450 cows daily in our goshala, you can help us serve them better. Govinda means one who gives pleasure to cows. Krishna becomes pleased with those who serve the cows.",
      linkText: "Donate Now >",
    },
    {
      image: "https://via.placeholder.com/300x200?text=Make+Gravy",
      title: "Make Gravy",
      description:
        "Help us provide warm, nutritious gravy meals for those in need. Together, we can serve comfort and sustenance to communities across the country.",
      linkText: "Donate Now >",
    },
    {
      image: "https://via.placeholder.com/300x200?text=Help+Elderly",
      title: "Help Elderly",
      description:
        "Support elderly individuals with meals, medical assistance, and emotional care to ensure their golden years are peaceful and joyful.",
      linkText: "Donate Now >",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const sliderInterval = useRef<number | null>(null);

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex === causes.length - 3 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? causes.length - 3 : prevIndex - 1
    );
  };

  useEffect(() => {
    sliderInterval.current = window.setInterval(() => {
      if (direction === "right") {
        handleNext();
      } else {
        handlePrev();
      }
    }, 3000);

    return () => {
      if (sliderInterval.current !== null) {
        window.clearInterval(sliderInterval.current);
      }
    };
  }, [direction]);

  return (
    <div className="choose-cause-container">
      <h1 className="choose-cause-title">Choose A Cause</h1>
      <div className="choose-cause-title-underline"></div>
      <div className="slider-container">
        <div className="slider-wrapper">
          <div
            className="slider"
            style={{
              transform: `translateX(-${currentIndex * 33.33}%)`,
            }}
          >
            {causes.map((cause, index) => (
              <div key={index} className="cause-card">
                <img
                  src={cause.image}
                  alt={cause.title}
                  className="cause-image"
                />
                <h2 className="cause-title">{cause.title}</h2>
                <p className="cause-description">{cause.description}</p>
                <a href="#" className="cause-link">
                  {cause.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="carousel-line"></div>
      <div className="slider-buttons">
        <button className="slider-button prev" onClick={handlePrev}>
          &#8249;
        </button>
        <button className="slider-button next" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default ChooseACause;
