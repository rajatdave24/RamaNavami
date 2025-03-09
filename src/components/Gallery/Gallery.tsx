import React, { useState, useEffect } from "react";
import "./Gallery.css";

// Import images from the assets folder
import Image1 from "./assets/image3.jpg";
import Image2 from "./assets/image4.jpg";
import Image3 from "./assets/image5.jpg";
import Image4 from "./assets/image6.jpg";
import Image5 from "./assets/image7.jpg";
import Image6 from "./assets/image8.jpg";
import Image7 from "./assets/image9.jpg";
import Image8 from "./assets/image10.jpg";
import Image9 from "./assets/image11.jpg";
import Image10 from "./assets/image12.jpg";
import Image11 from "./assets/image13.jpg";
import Image12 from "./assets/image14.jpg";
import Image13 from "./assets/image15.jpg";
import Image14 from "./assets/image16.jpg";
import Image15 from "./assets/image17.jpg";

const GallerySlider: React.FC = () => {
  const [images] = useState([
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Seamless loop for automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="gallery-slider-section">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-underline"></div>
      <div className="slider-gallery-container">
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentIndex * 250}px)`,
            width: `${images.length * 250}px`,
          }}
        >
          {images.concat(images).map((image, index) => (
            <div
              key={index}
              className="gallery-card"
              onClick={() => openModal(image)}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dot Pagination */}
      <div className="dot-pagination">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="Selected" className="modal-image" />
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySlider;