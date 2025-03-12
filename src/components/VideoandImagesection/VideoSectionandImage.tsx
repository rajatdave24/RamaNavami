import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./VideoSectionandImage.css";

const NewsSection: React.FC = () => {
  const images = [
    "https://www.google.com/imgres?q=iskcon%20juhu%20events&imgurl=x-raw-image%3A%2F%2F%2F488506cd1028ebb8e2cb731c0703204daaa5a2ac04b7421661bfa55d9836ca73&imgrefurl=https%3A%2F%2Fwww.iskconmumbai.com%2Ffestival-darshan&docid=aBKj02pCpiQGpM&tbnid=uOsoEM0GhUjZtM&vet=12ahUKEwjB3IetquuKAxUNoWMGHeIoHLEQM3oECGYQAA..i&w=1920&h=1280&hcb=2&ved=2ahUKEwjB3IetquuKAxUNoWMGHeIoHLEQM3oECGYQAA",
    "https://iskconmumbaipull-21250.kxcdn.com/web/image/6145-3c8a8051/WhatsApp%20Image%202024-12-30%20at%2017.45.36.webp",
    "https://iskconmumbaipull-21250.kxcdn.com/web/image/754-b9546ab2/glimplse1.webp?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=501",
    "",
    "",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fiskconkirtanministry.com%2Fiskcon-juhu%2F&psig=AOvVaw3trk4YUNLs81lobOFTfha9&ust=1736604587528000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjywLaq64oDFQAAAAAdAAAAABA5",
  ];

  const videos = [
    "https://youtu.be/kRFsJEs2JJs?si=z-jG_Kjr_7iR9W3",
    "https://youtu.be/qh5AFZP16nY?si=tg52zot4MFTSexaL",
    "hhttps://youtu.be/-oDsjbxfRSM?si=huT_XIFHKi2SToBH",
    "https://youtu.be/S-TrNI70uWE?si=Dgkwi9-EsN-nwpaB",
    "https://youtu.be/AGCPJNPUr2c?si=l_HEV9qMhxspEP8i",
    "https://youtu.be/BC5zzW5FcoM?si=so0yVcKfLVfk2-VQ",
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
      {/* <div className="slider-section">
     
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
              onClick={() => handlePrev("video")}
            >
              &#8249;
            </button>
            <button
              className="slider-button next"
              onClick={() => handleNext("video")}
            >
              &#8250;
            </button>
          </div>
        </div>
      </div> */}

      {/* Video Section */}
      <div className="slider-section">
      
        <div className="slider-container">
         
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
          <div className="slider-buttons" style={{marginTop:'10px'}}>
            <button
              className="slider-button prev"
              onClick={() => handlePrev("video")}
            >
              &#8249;
            </button>
            <button
              className="slider-button next"
              onClick={() => handleNext("video")}
            >
              &#8250;
            </button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
