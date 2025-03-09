import React from "react";
import content from "./content.json"; // Import JSON file
import "./ReusableContainer.css";

// Define props type
interface ReusableContainerProps {
  title: string;
  paragraphs: string[];
  buttonText: string;
  imageSrc: string;
}

// Define JSON data type
interface ContentType {
  title: string;
  paragraphs: string[];
  buttonText: string;
  imageSrc: string;
}

const ReusableContainer: React.FC<ReusableContainerProps> = ({
  title,
  paragraphs,
  buttonText,
  imageSrc,
}) => {
  return (
    <section className="hunger-section">
      <div className="content-wrapper">
        <div className="text-content">
          <h1>{title}</h1>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <a href="#" className="btn">
            {buttonText}
          </a>
        </div>
        <div className="image-content">
          <img src={imageSrc} alt="Content visual" />
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const typedContent = content as ContentType; // Type the JSON content

  return (
    <ReusableContainer
      title={typedContent.title}
      paragraphs={typedContent.paragraphs}
      buttonText={typedContent.buttonText}
      imageSrc={typedContent.imageSrc}
    />
  );
};

export default App;
