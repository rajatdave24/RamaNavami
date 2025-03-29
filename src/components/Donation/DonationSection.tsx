import React, { useState } from "react";
import "./DonationSection.css";
import qrCode from "./qrcode.png"; // Replace with your QR code image path
import makarqr from "./assest/iskconmakarsankranticode.jpg"
import kumbgh from "./assest/Kumbhmelacode.jpg"

import DonateModal from "./DonateModal";

const DonationSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState<string>(""); // State for meal price

  const handleDonate = (data: { name: string; email: string; mobile: string }) => {
    console.log("Donation Data:", { ...data, amount: selectedPrice });
    alert(`Thank you for your donation of ${selectedPrice}, ${data.name}!`);
  };

  const openModalWithPrice = (price: string) => {
    setSelectedPrice(price); // Set the selected meal price
    setIsModalOpen(true); // Open the modal
  };

  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(true); // Expand on click
  };

 

  const openModalWithAnyPrice = () => {
    if(selectedPrice)
    setIsModalOpen(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedPrice(value === '' ? '' : value);
  };

  return (
    <section className="donation-section">
      {/* Header */}

      <h1 className="donation-title">Blessings of Lord Ram</h1>

      <div className="title-underline"></div>

      {/* Information Cards */}
      {/* <div className="info-cards">
        <div className="info-card">
          <h2 className="info-card-title">Anna Daan Seva</h2>
          <p className="info-card-description">
            Anna daan is the act of donating food to the needy. In Vedic
            culture, it is considered one of the most pious and virtuous acts.
            Anna Daan is considered to be Mahadaan. It is believed that offering
            food to others is equivalent to offering it to God Himself.
          </p>
          <ul className="info-card-list">
            <li>Availability: 365 Days Live Darshan</li>
            <li>Community: Visit Vedic Farm Community</li>
            <li>Availability: Prasad Distribution</li>
          </ul>
          <button className="read-more-button">Read More</button>
        </div>
        <div className="info-card-image">
          <img
            src="https://via.placeholder.com/400x300" // Replace with the actual image path
            alt="Food distribution"
          />
        </div>
      </div> */}

      {/* Meal Donation Section */}
      {/* Makarsankranti */}

      <div className="Para">
      <div className={`blessings-container ${expanded ? "expanded" : ""}`}>
      <h3 className="blessings-title">🙏 Lord Ram's Blessings to Squirrel 🙏</h3>
      
      {/* Short Preview */}
      {!expanded && (
        <p className="blessings-preview">
          Lord Ramchandra, in His determination to regain mother Sita, wanted to cross 
          the ocean to reach Lanka. The ocean-god, Varuna, appeared before Him and said... 
          <span className="read-more-btn" onClick={toggleExpand} onMouseEnter={toggleExpand}>
            Read More ⬎
          </span>
        </p>
      )}

      {/* Full Content (Hidden Initially) */}
      {expanded && (
        <div className="full-content">
          <p className="blessings-text">
            Lord Ramchandra, in His determination to regain mother Sita, wanted to cross 
            the ocean to reach Lanka. The ocean-god, Varuna, appeared before the Lord and 
            said, "I will make a special concession for You to cross the ocean. If You make 
            a bridge, I will make it float." Varuna also introduced Nala, a monkey devotee 
            and the son of Vishwakarma, the celestial engineer and architect. Nala was as 
            talented as Vishwakarma and he agreed to oversee the construction of the bridge.
          </p>
          <p className="blessings-text">
            Under Ram's direction and Nala's supervision, millions of monkeys, led by 
            Hanuman, gathered large rocks, boulders, and trees, dumping them into the ocean. 
            By the special potency of Varuna, the rocks thrown in the water floated. The 
            monkeys tied the floating rocks together with heavy ropes and vines.
          </p>
          <p className="blessings-text">
            As Hanuman carried large boulders to throw into the water, a small squirrel 
            carried tiny pebbles to assist in the construction. Hanuman said to the squirrel, 
            "What will your small pebble accomplish compared to our big boulders? Move out of 
            the way, or you will get hurt." Lord Ram appeared on the scene and rebuked Hanuman, 
            saying, "Both you and the squirrel are doing your best to serve Me. I consider 
            both services equal in value." Lord Ram compassionately picked up the squirrel 
            and ran His fingers across its back. Thus, the three lines were formed on the backs 
            of Indian squirrels.
          </p>

          {/* ISKCON Announcement */}
          <h3 className="blessings-title">🙏 The Divine Offering of Food 🙏</h3>
          <p className="blessings-text">
            Food sustains life, and when it is enriched with the blessings of Lord Ramchandra, 
            it becomes the greatest boon for the recipients.
          </p>
          <p className="blessings-text">
            Sri Ram Navami is the best occasion for offering service to Lord Ramchandra and 
            receiving His unlimited blessings. Among all kinds of offerings, the offering of 
            prasadam to those who visit the temple on Sri Ram Navami is the highest service.
          </p>
          <p className="blessings-text">
            This year, ISKCON will be celebrating Sri Ram Navami on **April 6, 2025**. All 
            visitors to the temple during the **five-day festival from April 2 to April 6, 2025**, 
            will receive the mercy of Lord Ramchandra in the form of prasadam.
          </p>
          <p className="blessings-text">
            The inauguration of Shri Ram Mandir at Shri Ram Janmabhoomi in Ayodhya has inspired 
            people across the world, leading to a massive increase in devotees visiting our temple.
          </p>
          <p className="blessings-text blessings-highlight">
            We are expecting a large number of devotees to gather at ISKCON Juhu on Sri Ram Navami 
            to take darshan of Sri Sri Sita Ram and receive Their divine blessings.
          </p>
          <p className="blessings-text blessings-highlight">
            We invite you to join this **free prasadam service** by generously contributing to this 
            sacred cause. Please fill in the attached donation form and send it along with your donation.
          </p>

          <blockquote className="quote">
            "There never has been, nor will there ever be, any charity equal to the charity of food - 
            Anna Daan."  
            <span className="quote-source">- Mahabharata, Anusasana Parva, 13.63.3-6</span>
          </blockquote>
        </div>
      )}
    </div>
      </div>
      <h2 className="meal-donation-title">Ram Navmi Anna Daan Donation</h2>
    
      <div className="meal-options">
    

    
        {[
          { label: "Donate 52 plates", price: "2600" },
          { label: "Donate 100 plates", price: "5000" },
          { label: "Donate 200 plates", price: "10000" },
          { label: "Donate 300 plates", price: "15000" },
          { label: "Donate 500 plates", price: "25000" },
          { label: "Donate 1,000 plates", price: "50000" },
          { label: "Donate 2,000 plates", price: "100000" },
          { label: "Donate 4,000 meals", price: "200000" },
        ].map((meal, index) => (
          <div key={index} className="meal-option">
            <p className="meal-label">{meal.label}</p>
            <p className="meal-price">₹{meal.price}</p>
            <button className="add-donation-button" onClick={() => openModalWithPrice(meal.price)} >Add Donation</button>
          </div>
        ))}
            

      </div>

      <div className="custome-donation" style={{background:'white',borderRadius:'10px',padding:'50px',marginTop:'10px'}}>
  <h3 style={{marginBottom:'10px'}}>Any other donation</h3>
  <input type="number" className='amountField' style={{width:'70%',borderRadius:'5px',marginRight:'10px',border:'1px solid',height:'50px',fontSize:'25px',fontWeight:'500',padding:'5px',marginTop:'10px'}} value={selectedPrice} onChange={handleInputChange} placeholder="Enter the Amount"></input>
  <button style={{backgroundColor: '#faa817',color: '#fff',border: 'none',padding: '10px 15px',borderRadius: '5px',cursor: 'pointer',height:'63px',fontSize:'25px',marginTop:'10px'}}  onClick={() => openModalWithAnyPrice()}>Donate</button>
</div>


<div className="account-details">
        <div className="account-info">
          <h3 className="account-title">Account Details</h3>
          <p>Indian Overseas Bank</p>
          <p>Account Name: ISKCON Ramnavami Fund  </p>
          <p>IFSC Code:  IOBA0001245 </p>
          <p>Account Number: 124501000019182  </p>
          <p>Swift Code: IOBAINBB</p>
        </div>
        <div className="qr-code">
          <h3 className="qr-title">Donate through UPI :-  iskconramanavamifund@IOB </h3>
          <img src={makarqr} alt="QR Code"  style={{height:'285px',width:'300px'}}/>
        </div>
      </div>

  
   
      <h2 className="meal-donation-title">Ram Navami Kalash Abhishek Donation</h2>
      
      <div className="meal-options">
      
        {[
          { label: "", price: "41000" },
          
        ].map((meal, index) => (
          <div key={index} className="meal-option">
            <p></p>
            <p className="meal-label">{meal.label}</p>
            <p><div className={`blessings-container ${expanded ? "expanded" : ""}`}>
            {/* <h3 className="blessings-title">🙏 Maha-Abhishek  🙏</h3> */}
      
      {/* Short Preview */}
      {!expanded && (
        <p className="blessings-preview">
           <p className="blessings-text">
          The pinnacle of Sri Ram Navami is the maha-abhishek of Sri Sri Sita Ram starting at 6 p.m. on Sunday, April 6, 2025. Milk, curd, ghee, honey and other substances will be used for the Maha-abhishek.

          </p>
          
          {/* <span className="read-more-btn" onClick={toggleExpand} onMouseEnter={toggleExpand}>
            Read More ⬎
          </span> */}
        </p>
      )}

      {/* Full Content (Hidden Initially) */}
      {!expanded && (
        <div className="full-content">
       

          {/* ISKCON Announcement */}
         
         
          <p className="blessings-text">
          By bathing the Deity of Sri Sri Sita Ram on Sri Ram Navami day, one can cleanse all bad influence due to the age of Kali.

          </p>
          <p className="blessings-text">
          Donors can offer Kalash Maha Abhishek seva for Sri Sri Sita Ram. The Kalash to be used in the Maha Abhishek seva will be made of ornamentally engraved solid silver.

          </p>
          <p className="blessings-text">
          For those donors unable to personally attend the abhishek ceremony, we will perform the abhishek on their behalf.

The donation to perform Kalash Maha Abhishek Seva is Rs 41,000/-. There is only limited number of Maha Abhishek Sevas. So you may either rush your filled-in donation form along with the donation, or book your Maha Abhishek Seva by phoning Pranav on 6263756519, or by sending an e-mail to bhisma@iskcontrust.org.
          </p>
          <p className="meal-price" style={{color:'blue'}}>₹{meal.price}</p>
            <button className="add-donation-button" onClick={() => openModalWithPrice(meal.price)} >
              
Add Donation</button>
        </div>
      )}
    </div></p>
         
          </div>
        ))}


</div>
      {/* Your Own Donatio Section */}
{/* <div className="custome-donation" style={{background:'white',borderRadius:'10px',padding:'50px',marginTop:'10px'}}>
  <h3 style={{marginBottom:'10px'}}>Any Donation of Your Choice for Kumbhmela Anna Daan</h3>
  <input type="number" style={{width:'70%',borderRadius:'5px',marginRight:'10px',border:'1px solid',height:'50px',fontSize:'25px',fontWeight:'500',padding:'5px',marginTop:'10px'}} value={selectedPrice} onChange={handleInputChange} placeholder="Enter the Amount"></input>
  <button style={{backgroundColor: '#faa817',color: '#fff',border: 'none',padding: '10px 15px',borderRadius: '5px',cursor: 'pointer',height:'63px',fontSize:'25px',marginTop:'10px'}}  onClick={() => openModalWithAnyPrice()}>Donate</button>
</div> */}

{/* <div className="account-details">
        <div className="account-info">
          <h3 className="account-title">Account Details</h3>
          <p>Indian Overseas Bank</p>
          <p>Account Name: ISKCON Kumbhmela Fund  </p>
          <p>IFSC Code:  IOBA0001245 </p>
          <p>Account Number: 124501000014097</p>
         
        </div>
        <div className="qr-code">
          <h3 className="qr-title">Donate through UPI :- ISKCONKUMBHMELA@IOB</h3>
          <img src={kumbgh} alt="QR Code"  style={{height:'285px',width:'300px'}}/>
        </div>
      </div>  */}

      


      {/* Receipt Information */}
      <div className="receipt-info">
        <h3 className="receipt-title">Receipt for your donation</h3>
        <p>
          80G available as per Income Tax Act 1961 and rules made thereunder.
          Tax Exemption Certificate Ref. No.: AAATI0017PF20219
        </p>
        <p>
          To get the receipt of donation made through NEFT, RTGS, IMPS PayTm,
          UPI as mentioned above, please share your legal name, postal address
          with pincode (and PAN if you need 80G receipt) along with transaction
          details on pranav@iskcontrust.org
        </p>
      </div>

      {/* Support */}
      <div className="support-section">
        <h3>Support</h3>
        <p>
          For more information please Call <b>+91-6263756519</b> from Monday to
          Saturday between 9:00am to 6:00pm
        </p>
      </div>

      <DonateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDonate={handleDonate}
        mealPrice={selectedPrice} // Pass price to modal
      />





     
    </section>
  );
};

export default DonationSection;


