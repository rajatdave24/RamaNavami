import React from "react";
import "./NewsAndStories.css";
import hunger from "./assets/Global_Hunger_Index.jpg"
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
        <h2 className="section-title">ISKCON Food for Child</h2>
        <div className="section-underline"></div>
        <div className="story-container">
          <img
            src={hunger}
            alt="Icon"
            className="story-icon"
            style={{borderRadius:'5px'}}
          />
          <div className="story-content">
           
            <p className="story-description">
            Hunger is the worst form of violation of Human Rights," said Kofi Annan, former Secretary General of United Nations.
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
