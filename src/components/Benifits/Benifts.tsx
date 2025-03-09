import React, { useState, useEffect } from "react";
import "./Benifts.css";

const testimonials = [
  {
    text: '"Of all charities, charity of food is great"',
    source: "- Shiva Purana",
  },
  {
    text: '"Charity given at the proper time and place, and to a worthy person is considered to be in the mode of goodness"',
    source: "- Bhagavad-gita, 17.20",
  },
  {
    text: "The auspicious occasions of Kumbha Mela and Rama Navami, the holy place of Prayagraj and spiritually oriented pilgrims of Kumbha Mela are the perfect combination for charity.",
    source: "",
  },
  {
    text: "Please use the Twin Opportunity of Kumbha Mela and Rama Navami to make an auspicious beginning this year. Kindly contribute generously for the free food distribution.",
    source: "",
  },
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-carousel" style={{backgroundColor:'White'}}>
      <div className="testimonial-container">
        <p className="testimonial-text">{testimonials[currentIndex].text}</p>
        <p className="testimonial-source">{testimonials[currentIndex].source}</p>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
