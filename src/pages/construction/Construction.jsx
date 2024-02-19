import React from "react";
import "./construction.scss";
import { One } from "../../assets";

const Construction = () => {
  return (
    <>
      <div className="construction">
        <div className="bg-img">
          <img src={One} alt="" />
        </div>

        <div className="container construction-content">
          <h1 className="heading">
            Watch the Construction of the Complex in Real Time
          </h1>
          <div className="process">
            <div className="process-one">
              <h1 className="sub-heading"> 2022 </h1>
              <div className="circle"></div>
              <p> Ground Breaking </p>
            </div>
            <div className="process-one">
              <h1 className="sub-heading"> 2023 </h1>
              <div className="circle"></div>
              <p> Grey Structure Completion </p>
            </div>
            <div className="process-two">
              <h1 className="sub-heading"> 2024 </h1>
              <div className="circle"></div>
              <p> Grey Structure Completion </p>
            </div>
            <div className="process-three">
              <h1 className="sub-heading"> 2025 </h1>
              <div className="circle"></div>
              <p> Project Delivery</p>
            </div>
            <div className="process-four">
              <h1> </h1>
              <div className="circle"></div>
              <p> </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Construction;
