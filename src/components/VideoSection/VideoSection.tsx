import React from "react";
import ReactPlayer from "react-player";
import "./VideoSection.css";

const VideoSection: React.FC = () => {
  return (
    <section className="video-section">
      {/* Quote Section */}
      <div className="quote-container">
      
        <h3 className="quote-text">
          <span className="quotes">""</span><br></br>
          Out of compassion towards our fellow living beings, we are committed   
          to making a difference in their lives. 
        
        </h3>
       
      </div>

      {/* Video Section */}
      <div className="video-container">
        <ReactPlayer
          url="https://youtu.be/uD_GcS-CEFA?si=NjjJ372I7hvxKPT6" // Replace with your YouTube URL
          controls
          width="100%"
          height="400px"
        />
      </div>
    </section>
  );
};

export default VideoSection;
