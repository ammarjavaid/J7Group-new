// WhatsAppButton.js
import React, { useState } from 'react';
import './whatsapp.scss'; // Include the CSS file for styling (see below)

const WhatsAppButton = () => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const handleButtonClick = () => {
    setIsBoxOpen(!isBoxOpen);
  };

  return (
    <div className="whatsapp-container">
      {!isBoxOpen && (
        <div className="whatsapp-icon" onClick={handleButtonClick}>
          {/* Add your WhatsApp icon (you can use an image or an icon library) */}
          📱
        </div>
      )}

      {isBoxOpen && (
        <div className="whatsapp-box">
          {/* Default image */}
          <img
            src="https://example.com/default-image.jpg"
            alt="Default"
            className="whatsapp-image"
          />

          {/* Default message */}
          <p className="whatsapp-message">
            Hello! How can we assist you today?
          </p>

          {/* Contact Now button */}
          <button className="whatsapp-button">Contact Now</button>

          {/* Close button */}
          <button className="whatsapp-close" onClick={handleButtonClick}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
