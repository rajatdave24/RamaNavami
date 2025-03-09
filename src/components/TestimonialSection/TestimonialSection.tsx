import React, { useState } from "react";
import "./TestimonialSection.css";

const testimonials = [
  {
    text: "We are deeply appreciative of the contribution made by this (Iskcon) great movement. Just imagine within a short span of time... today I am told that Annamrita movement runs more than 600 centers all over the world, every day in India it provides mid-day meals to over one million children, healthy food and the message of love, compassion, which is inherent in Indian civilization.",
    author: "Gautam Adani",
    profession: "Chairman Of Adani Group",
    image: "https://via.placeholder.com/300x300?text=Image+1",
  },
  {
    text: "The incredible efforts by ISKCON have made a huge difference in the lives of millions. Providing mid-day meals is not just about feeding children but giving them a chance to dream.",
    author: "Ratan Tata",
    profession: "Chairman Emeritus, Tata Group",
    image: "https://via.placeholder.com/300x300?text=Image+2",
  },
  {
    text: "Annamrita is a true embodiment of the Indian ethos of compassion and service. The organization has set an example by feeding millions daily.",
    author: "Narendra Modi",
    profession: "Prime Minister of India",
    image: "https://via.placeholder.com/300x300?text=Image+3",
  },
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        {/* Left Side: Text */}
        <div className="testimonial-text">
          <h2 className="testimonial-title">Words Of Hope</h2>
          <div className="testimonial-underline"></div>
          <div className="testimonial-content">
           
            <p className="testimonial-text-content">
            <span className="" style={{fontSize:'60px',fontWeight:'bolder'}}>“</span> <p>{testimonials[currentIndex].text} </p><span className="" style={{fontSize:'60px',fontWeight:'bolder'}}>”</span>
            </p>
           
          </div>
          <div className="testimonial-author">
            <p className="author-name">{testimonials[currentIndex].author}</p>
            <p className="author-profession">
              {testimonials[currentIndex].profession}
            </p>
          </div>
          <div className="testimonial-buttons">
            <button onClick={handlePrev} className="testimonial-button">
              &#8249;
            </button>
            <button onClick={handleNext} className="testimonial-button">
              &#8250;
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="testimonial-image">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].author}
            className="image-slide"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
