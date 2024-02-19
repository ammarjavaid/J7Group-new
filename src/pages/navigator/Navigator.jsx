import React from "react";
import Footer from "../footer/Footer";

const Navigator = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <iframe
          style={{ height: "99vh" }}
          width="100%"
          src="https://j7-navigator.netlify.app"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Navigator;
