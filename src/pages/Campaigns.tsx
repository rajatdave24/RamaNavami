import React from "react";
import "./CampaignStyle.css";
import FoodForChildImage from "./AllDonation/DonationImages/image-1664a6639328072.jpg";
import VidyaDaanImage from "./AllDonation/DonationImages/image-6164a66393bcc19.jpeg";
import GoSevaImage from "./AllDonation/DonationImages/image-8664a663930201e.jpg";
import HareKrishnaImage from "./AllDonation/DonationImages/lay-_9674d509635806.jpg";
import HelpElderlyImage from "./AllDonation/DonationImages/page-category-_106788ec9670de0.jpg";

const ChooseACause: React.FC = () => {
  const causes = [
    {
      image: FoodForChildImage,
      title: "Food for child",
      description:
        "Share few meals with Poor, Hungry and Malnourished Children. Hunger kills 18,000 children everyday. 60% of the children in India go to sleep hungry every night.",
      linkText: "View More>",
      link: "https://example.com/food-for-child",
    },
    {
      image: VidyaDaanImage,
      title: "Vidya Daan",
      description:
        "Bhagavad Gita and Bhagavatam are the crest jewel of all vedic scriptures. We invite you to distribute the king of all knowledge to people who are unable to afford these scriptures.",
      linkText: "View More>",
      link: "https://example.com/vidya-daan",
    },
    {
      image: GoSevaImage,
      title: "Go Seva",
      description:
        "We care for Krishna’s 450 cows daily in our goshala, you can help us serve them better. Govinda means one who gives pleasure to cows. Krishna becomes pleased with those who serve the cows.",
      linkText: "View More>",
      link: "https://example.com/go-seva",
    },
    {
      image: HareKrishnaImage,
      title: "Hare Krishna",
      description:
        "Help us provide warm, nutritious gravy meals for those in need. Together, we can serve comfort and sustenance to communities across the country.",
      linkText: "View More>",
      link: "https://example.com/hare-krishna",
    },
    {
      image: HelpElderlyImage,
      title: "Help Elderly",
      description:
        "Support elderly individuals with meals, medical assistance, and emotional care to ensure their golden years are peaceful and joyful.",
      linkText: "View More>",
      link: "https://example.com/help-elderly",
    },
  ];

  return (
    <div className="choose-cause-container">
      <h1 className="choose-cause-title">Blogs</h1>
      <div className="choose-cause-title-underline"></div>
      <div className="grid-container">
        {causes.map((cause, index) => (
          <a key={index} href={cause.link} target="_blank" rel="noopener noreferrer" className="cause-card">
            <img src={cause.image} alt={cause.title} className="cause-image" />
            <h2 className="cause-title">{cause.title}</h2>
            <p className="cause-description">{cause.description}</p>
            <span className="cause-link">{cause.linkText}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ChooseACause;
