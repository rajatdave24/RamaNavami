import React, { useState } from "react";
import "./TestimonialSection.css";

const testimonials = [
  {
    text: "We are deeply appreciative of the contribution made by this (Iskcon) great movement. Just imagine within a short span of time... today I am told that Annamrita movement runs more than 600 centers all over the world, every day in India it provides mid-day meals to over one million children, healthy food and the message of love, compassion, which is inherent in Indian civilization.",
    author: "Gautam Adani",
    profession: "Chairman Of Adani Group",
    image: "data:image/jpeg;base64,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",
  },
  {
    text: "The incredible efforts by ISKCON have made a huge difference in the lives of millions. Providing mid-day meals is not just about feeding children but giving them a chance to dream.",
    author: "Ratan Tata",
    profession: "Chairman Emeritus, Tata Group",
    image: "https://www.indianchemicalnews.com/public/thumbs/news/2024/10/23636/Ratan_Tata.jpg",
  },
  {
    text: "Iskcon is a true embodiment of the Indian ethos of compassion and service. The organization has set an example by feeding millions daily.",
    author: "Narendra Modi",
    profession: "Prime Minister of India",
    image: "https://cdn.zeebiz.com/sites/default/files/2024/09/07/317171-modi.jpg",
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
            <span className="" style={{display:'inline-flex',fontSize:'60px',fontWeight:'bolder',width:'10px',height:'5px'}}>“</span> <p style={{margin:'0px'}}>{testimonials[currentIndex].text} </p><span className="" style={{display:'inline-flex',fontSize:'60px',fontWeight:'bolder',width:'10px',height:'5px'}}>”</span>
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
