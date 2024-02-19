// WhatsAppButton.js
import React, { useState } from "react";
import "./whatsapp.scss"; // Include the CSS file for styling (see below)
import { FaWhatsapp } from "react-icons/fa";
import { Profile } from "../assets";
import { IoClose } from "react-icons/io5";

const WhatsAppButton = () => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const handleButtonClick = () => {
    setIsBoxOpen(!isBoxOpen);
  };

  const openWhatsApp = () => {
    // Replace '1234567890' with the phone number you want to contact
    const phoneNumber = "+923351111847";
    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="whatsapp-container">
      {/* {!isBoxOpen && ( */}
      <div className="whatsapp-icon" onClick={handleButtonClick}>
        <FaWhatsapp />
      </div>
      {/* )} */}

      {isBoxOpen && (
        <div className="whatsapp-box">
          {/* Default image */}
          <div className="message-profile">
            <img src={Profile} alt="Default" className="whatsapp-image" />

            {/* Default message */}
            <p className="whatsapp-message">
              Hello! How can we assist you today?
            </p>
            <div className="close">
              <IoClose onClick={handleButtonClick} />
            </div>
          </div>

          <div className="message-body">
            <div className="message">
              <p>Solitaire Hotel</p>
              <p>Welcome to Golden tulip Islamabad.</p>
              <p>
                Are you looking for a lucrative investment opportunity in
                Pakistan?
              </p>
              <p>
                Drop a message and let our team help you with your investment
                decision.
              </p>
            </div>
          </div>

          <div className="buttons">
            <button className="whatsapp-button" onClick={openWhatsApp}>
              Contact Now
            </button>

            {/* <button className="whatsapp-close" onClick={handleButtonClick}>
              Close
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
