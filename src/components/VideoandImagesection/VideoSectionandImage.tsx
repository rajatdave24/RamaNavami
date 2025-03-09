import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./VideoSectionandImage.css";

const NewsSection: React.FC = () => {
  const images = [
    "https://via.placeholder.com/300x200?text=Image+1",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3",
    "https://via.placeholder.com/300x200?text=Image+4",
    "https://via.placeholder.com/300x200?text=Image+5",
    "https://via.placeholder.com/300x200?text=Image+6",
  ];

  const videos = [
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "https://www.youtube.com/watch?v=tgbNymZ7vqY",
    "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
    "https://www.youtube.com/watch?v=9bZkp7q19f0",
    "https://www.youtube.com/watch?v=FJ3N_2r6R-o",
    "https://www.youtube.com/watch?v=1w7OgIMMRc4",
  ];

  const [imageIndex, setImageIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);

  const visibleCards = 4;

  const handleNext = (type: "image" | "video") => {
    if (type === "image") {
      setImageIndex((prevIndex) =>
        prevIndex + visibleCards >= images.length ? 0 : prevIndex + 1
      );
    }
    if (type === "video") {
      setVideoIndex((prevIndex) =>
        prevIndex + visibleCards >= videos.length ? 0 : prevIndex + 1
      );
    }
  };

  const handlePrev = (type: "image" | "video") => {
    if (type === "image") {
      setImageIndex((prevIndex) =>
        prevIndex === 0 ? Math.max(0, images.length - visibleCards) : prevIndex - 1
      );
    }
    if (type === "video") {
      setVideoIndex((prevIndex) =>
        prevIndex === 0 ? Math.max(0, videos.length - visibleCards) : prevIndex - 1
      );
    }
  };

  return (
    <section className="news-section">
      <h2 className="news-title">ISKCON in the News</h2>
      <div className="news-underline"></div>

      {/* Image Section */}
      <div className="slider-section">
     
        <div className="slider-wrapper-container">
          <div className="slider-wrapper">
            {images
              .slice(imageIndex, imageIndex + visibleCards)
              .map((image, index) => (
                <div key={index} className="slider-card">
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="slider-image"
                  />
                </div>
              ))}
          </div>
          <div className="slider-buttons">
            <button
              className="slider-button prev"
              onClick={() => handlePrev("image")}
            >
              &#8249;
            </button>
            <button
              className="slider-button next"
              onClick={() => handleNext("image")}
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="slider-section">
      
        <div className="slider-container">
          <button
            className="slider-button prev"
            onClick={() => handlePrev("video")}
          >
            &#8249;
          </button>
          <div className="slider-wrapper">
            {videos
              .slice(videoIndex, videoIndex + visibleCards)
              .map((video, index) => (
                <div key={index} className="video-card">
                  <div className="circle-background"></div>
                  <ReactPlayer
                    url={video}
                    controls
                    width="100%"
                    height="100%"
                    className="video-player"
                  />
                </div>
              ))}
          </div>
          <button
            className="slider-button next"
            onClick={() => handleNext("video")}
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
