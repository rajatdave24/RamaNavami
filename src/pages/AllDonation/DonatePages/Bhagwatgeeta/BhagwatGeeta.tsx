import React, { useState } from "react";

import qrCode from "../../../AllDonationqrcode.png"; // Replace with your QR code image path
import makarqr from "../../../AllDonation/assest/iskconmakarsankranticode.jpg"
import kumbgh from "../../../AllDonation/assest/Kumbhmelacode.jpg"
import DonateModal from "./DonateModal.tsx";
import AnnaDaan from "../DonationImages/lay-_9674d509635806.jpg"
import "./Annadan.css"



const Alldonation: React.FC = () => {
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

 

  const openModalWithAnyPrice = () => {
    if(selectedPrice)
    setIsModalOpen(true);
  };


  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedPrice(value === '' ? '' : value);
  };

  return (
    <section className="donation-section-anna">
      {/* Header */}

      
      {/* Information Cards */}
      <div className="info-card-annas">
        <div className="info-card-anna">
          <h2 className="info-card-anna-title">Bhagwat Geeta Distribution</h2>
          <p className="info-card-anna-description">
          Anadimat param brahma na sat tan na saducitam !
Gita-sugita kartavya kim anyaih sastra-vistarai !!

(Gita Mahatmya, 4)

Meaning: "The Bhagavad Gita is the supreme scripture, and it is the essence of the Vedas. What is the need to study other scriptures?"
          </p>
          
          <button className="read-more-button-anna">Read More</button>
        </div>
        <div className="info-card-anna-image">
          <img
            src={AnnaDaan} // Replace with the actual image path
            alt="Food distribution"
            height={'350px'}
          />
        </div>
      </div>

      {/* Meal Donation Section */}
      {/* Makarsankranti */}
      <h2 className="meal-donation-title-anna">Gita Daan</h2>
      <div className="meal-options-anna">
        {[
          { label: "Donate 10 BhagwatGeeta", price: "2600" },
          { label: "Donate 100 BhagwatGeeta", price: "5000" },
          { label: "Donate 200 BhagwatGeeta", price: "10000" },
          { label: "Donate 300 BhagwatGeeta", price: "15000" },
          { label: "Donate 500 BhagwatGeeta", price: "25000" },
          { label: "Donate 1,000 BhagwatGeeta", price: "50000" },
          { label: "Donate 2,000 BhagwatGeeta", price: "100000" },
          { label: "Donate 4,000 BhagwatGeeta", price: "200000" },
        ].map((meal, index) => (
          <div key={index} className="meal-option-anna">
            <p className="meal-label-anna">{meal.label}</p>
            <p className="meal-price-anna">₹{meal.price}</p>
            <button className="add-donation-button" onClick={() => openModalWithPrice(meal.price)} >Add Donation</button>
          </div>
        ))}
            

      </div>







      
      <div className="custome-donation" style={{background:'white',borderRadius:'10px',padding:'50px',marginTop:'10px'}}>
  <h3 style={{marginBottom:'10px'}}>Any Donation of Your Choice </h3>
  <input type="number" style={{width:'70%',borderRadius:'5px',marginRight:'10px',border:'1px solid',height:'50px',fontSize:'25px',fontWeight:'500',padding:'5px',marginTop:'10px'}} value={selectedPrice} onChange={handleInputChange} placeholder="Enter the Amount"></input>
  <button style={{backgroundColor: '#faa817',color: '#fff',border: 'none',padding: '10px 15px',borderRadius: '5px',cursor: 'pointer',height:'63px',fontSize:'25px',marginTop:'10px'}}  onClick={() => openModalWithAnyPrice()}>Donate</button>
</div>

<div className="account-details">
        <div className="account-info">
          <h3 className="account-title">Account Details</h3>
          <p>Indian Overseas Bank</p>
          <p>Account Name: ISKCON Makarsankranti Fund  </p>
          <p>IFSC Code:  IOBA0001245 </p>
          <p>Account Number: 124501000012629 </p>
          <p>Swift Code: IOBAINBB</p>
        </div>
        <div className="qr-code">
          <h3 className="qr-title">Donate through UPI :- ISKCONMAKARSANKRANTI@IOB</h3>
          <img src={makarqr} alt="QR Code"  style={{height:'285px',width:'300px'}}/>
        </div>
      </div>

      <DonateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDonate={handleDonate}
        mealPrice={selectedPrice} // Pass price to modal
      />

      
      {/* <h2 className="meal-donation-title-anna">Donate for MahaKumbh Anna Daan</h2>
      <div className="meal-options-anna">
        {[
          { label: "Donate 52 plates", price: "2600" },
          { label: "Donate 100 plates", price: "5000" },
          { label: "Donate 200 plates", price: "10000" },
          { label: "Donate 300 plates", price: "15000" },
          { label: "Donate 500 plates", price: "25000" },
          { label: "Donate 1,000 plates", price: "50001" },
          { label: "Donate 2,000 plates", price: "100001" },
          { label: "Donate 4,000 meals", price: "200001" },
        ].map((meal, index) => (
          <div key={index} className="meal-option">
            <p className="meal-label">{meal.label}</p>
            <p className="meal-price">₹{meal.price}</p>
            <button className="add-donation-button" onClick={() => openModalWithPrice(meal.price)} >Add Donation</button>
          </div>
        ))}

<DonateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDonate={handleDonate}
        mealPrice={selectedPrice} // Pass price to modal
      />





      </div> */}

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
      </div> */}


      {/* Receipt Information */}
      {/* <div className="receipt-info">
        <h3 className="receipt-title">Receipts for your donation</h3>
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
      </div> */}

      {/* Support */}
      {/* <div className="support-section">
        <h3>Support</h3>
        <p>
          For more information please Call <b>+91-6263756519</b> from Monday to
          Saturday between 9:00am to 6:00pm
        </p>
      </div> */}
    </section>
  );
};

export default Alldonation;


