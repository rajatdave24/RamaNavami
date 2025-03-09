import React from "react";
import "./NewsAndStories.css";

const NewsAndStories: React.FC = () => {
  return (
    <section className="news-stories-section">
      <div className="left-column">
        <h2 className="section-title">In The News</h2>
        <div className="section-underline"></div>
        <p className="news-date">Mar 15, 2024</p>
        <p className="news-description">
          Helping Nagpur Stay Nourished In times of Critical Time.
        </p>
        <a href="#" className="read-more">
          Read More {">"}
        </a>
      </div>

      <div className="divider"></div>

      <div className="right-column">
        <h2 className="section-title">ISKCON JUHU STORIES</h2>
        <div className="section-underline"></div>
        <div className="story-container">
          <img
            src="https://via.placeholder.com/100"
            alt="Icon"
            className="story-icon"
          />
          <div className="story-content">
            <h3 className="story-title">Transparent Charity</h3>
            <p className="story-description">
              Transparent Charity: Your donations are solely used to cover the
              preparation, distribution, and management costs. When you support
              us, you will know for a fact that the fund is used to help those
              in need and are accountable to the government for the same.
            </p>
            <a href="#" className="read-more">
              Read More {">"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndStories;
