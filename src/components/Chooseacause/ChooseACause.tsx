import React from "react";
import "./ChooseACause.css";
import FoodForChildImage from "./DonationImages/image-1664a6639328072.jpg";
import VidyaDaanImage from "./DonationImages/image-6164a66393bcc19.jpeg";
import GoSevaImage from "./DonationImages/image-8664a663930201e.jpg";
import HareKrishnaImage from "./DonationImages/lay-_9674d509635806.jpg";
import HelpElderlyImage from "./DonationImages/page-category-_106788ec9670de0.jpg";
import VidyaDaan from "./DonationImages/Vidya-Daan.jpg"
const ChooseACause: React.FC = () => {
  const causes = [
    {
      image: FoodForChildImage,
      title: "Cow Service",
      description:
        "According to the Skanda Purana, even showing respect to cows can help eradicate our sinful acts.",
      linkText: "View More>",
      link: "all-donation/cow-services",
    },
    {
      image: VidyaDaanImage,
      title: "Daily Deity Seva",
      description:
        "Daily deity worship, also known as arcanā or pujā, holds significant importance in spiritual tradition of Vaishnavism.",
      linkText: "View More>",
      link: "all-donation/daily-deti-seeva",
    },
    {
      image: GoSevaImage,
      title: "Anna Daan Seva",
      description:
        "Anna daan is the act of donating food to the needy.",
      linkText: "View More>",
      link: "all-donation/anna-daan-seva",
    },
    {
      image: HareKrishnaImage,
      title: "Bhagavad Gita Distribution",
      description:
        "Anadimat param brahma na sat tan na saducitam ! Gita-sugita kartavya kim anyaih sastra-vistarai !!",
      linkText: "View More>",
      link: "all-donation/bhagwat-geeta-distribution",
    },
    {
      image: HelpElderlyImage,
      title: "Nitya Utsav Seva",
      description:
        "Nitya Utsava Seva contributes to creating a serene and sacred atmosphere in the temple. ",
      linkText: "View More>",
      link: "all-donation/nitya-utsav-daan",
    },
    {
      image: VidyaDaan,
      title: "Vidya Daan ",
      description:
        "Vidya Daan (विद्या दान), often translated as The Gift of Knowledge, holds immense significance in Indian culture. ",
         linkText: "View More>",
      link: "all-donation/vidya-daan",
    },
  ];
  return (
    <div className="choose-cause-container">
      <h1 className="choose-cause-title">Donate</h1>
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
