import React, { useEffect, useRef } from "react";
import "./heroSection.scss";
import Carousel from "react-bootstrap/Carousel";
// import { Slides } from "./constant";
// import { Fade } from "react-reveal";
import "react-phone-number-input/style.css";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { getRequest } from "../../service/apiCalls";
import { BASE_URL_IMAGES } from "../../Utils";
import { Fade } from "react-bootstrap";

const HeroSection = () => {
  const carouselRef = useRef(null);

  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("pk");
  const [data, setData] = useState([]);

  const handlePhoneChange = (phoneNumber, country) => {
    const extractedCountryCode = phoneNumber.split(" ")[0];

    if (country === extractedCountryCode) {
      setCountryCode(country);
    }

    setPhone(phoneNumber);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.next();
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const GetAllTrading = async () => {
    const onSuccess = (res) => {
      setData(res?.data);
    };

    const onError = () => {
      // setLoading(false);
    };

    await getRequest("", "slide/get-all", true, onSuccess, onError);
  };

  useEffect(() => {
    GetAllTrading();
  }, []);

  console.log(data);

  return (
    <>
      <Carousel fade className="slide" ref={carouselRef} indicators={false}>
        {data?.map((item) => (
          <Carousel.Item>
            <img src={`${item?.image}`} alt="" className="img" />
            <Carousel.Caption>
              <Fade top>
                <h3 style={{ opacity: "1" }}>{item.name}</h3>
              </Fade>
              <Fade bottom>
                <p style={{ opacity: "1" }}>{item.description}</p>
              </Fade>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* form  */}

      <div className="form">
        <div className="container content">
          <h2> Leave your contact and find out more information </h2>
          <p> Our team will contact you shortly. </p>
          <form>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <PhoneInput
              country={countryCode}
              value={phone}
              onChange={(phoneNumber, country) =>
                handlePhoneChange(phoneNumber, country)
              }
              style={{ zIndex: 100 }}
              countryCodeEditable={false}
              inputStyle={{ color: "gray", fontWeight: 500 }}
            />
            <button className="send" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
