import React from "react";
import "./FoodSection.css";


const FoodSection: React.FC = () => {
  return (
    <section className="food-section">
      <div className="food-content">
        <h2 className="food-title">
          Food won't make a difference unless people do.
        </h2>
        <div className="heading-underline"></div>
        <p className="food-description">
          In 2004, Annamrita Foundation started a mission-driven program to feed
          the school-going children of India by becoming a partner in the Govt.
          of India's Mid-Day Meal initiative. Over the past 18 years with the
          help of your support and selfless acts of charity by our donors, we’ve
          helped millions of school-going children stay healthy and focus on
          their education.
        </p>
        <p className="food-description">
          Over the last few years, due to the COVID-19 pandemic, food
          inequalities have become more visible in our society. We undertook the
          responsibility to overcome these gaps by launching several food relief
          programs. Since March 2020, Annamrita Foundation has launched various
          initiatives to provide nourishment to the underprivileged sections of
          our society and has also launched programs that support education,
          provide dry rations, and essentials to those in need.
        </p>
        <div className="food-stats">
          <div className="stat-item">
            <p className="stat-title">Operation Karuna</p>
            <h3 className="stat-value">2,76,46,502</h3>
            <p className="stat-subtitle">Meals</p>
          </div>
          <div className="stat-item">
            <p className="stat-title">Kite of Joy</p>
            <h3 className="stat-value">8 crore +</h3>
            <p className="stat-subtitle">Kits</p>
          </div>
          <div className="stat-item">
            <p className="stat-title">Mid-Day-Meals</p>
            <h3 className="stat-value">12 Lakh +</h3>
            <p className="stat-subtitle">Meal Daily</p>
          </div>
        </div>
        <button className="food-button">Know More</button>
      </div>
      <div className="food-image-container">
       
      </div>
    </section>
  );
};

export default FoodSection;
