import React from "react";
import "./previiousProjects.scss";
import { Emporium, Froebels, Mall, OneMall, PineVilla } from "../../assets";
import { useState } from "react";

const PreviousProjects = () => {
  const [activeTab, setActiveTab] = useState("emporium");

  const handleClick = (type) => {
    setActiveTab(type);
  };

  return (
    <>
      <div className="container previousProjects">
        <div className="head">
          <h2> Previous Projects Of J7 Group </h2>
        </div>
        <div className="tabs">
          <p
            onClick={() => handleClick("emporium")}
            className={activeTab === "emporium" ? "active" : ""}
          >
            J7 Emporium
          </p>
          <p
            onClick={() => handleClick("one-mall")}
            className={activeTab === "one-mall" ? "active" : ""}
          >
            J7 One Mall
          </p>
          <p
            onClick={() => handleClick("mall")}
            className={activeTab === "mall" ? "active" : ""}
          >
            J7 Mall
          </p>
          <p
            onClick={() => handleClick("pine-villas")}
            className={activeTab === "pine-villas" ? "active" : ""}
          >
            Pine Villas
          </p>
          <p
            onClick={() => handleClick("Froebels")}
            className={activeTab === "Froebels" ? "active" : ""}
          >
            Froebels
          </p>
        </div>
        <div className="img">
          {activeTab === "emporium" && <img src={Emporium} alt="" />}
          {activeTab === "one-mall" && <img src={OneMall} alt="" />}
          {activeTab === "mall" && <img src={Mall} alt="" />}
          {activeTab === "pine-villas" && <img src={PineVilla} alt="" />}
          {activeTab === "Froebels" && <img src={Froebels} alt="" />}
        </div>
      </div>
    </>
  );
};

export default PreviousProjects;
