import React, { useEffect, useState } from "react";
import "./news.scss";
import { getRequest } from "../../service/apiCalls";
import { BASE_URL_IMAGES } from "../../Utils";
import moment from "moment/moment";
// import { MyNews } from "./constant";
import { BsArrowRightShort } from "react-icons/bs";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const News = () => {
  const [data, setData] = useState([]);

  const GetAllNews = async () => {
    const onSuccess = (res) => {
      console.log(res.data);
      setData(res?.data);
    };

    const onError = () => {
      // setLoading(false);
    };

    await getRequest("", "news/get-all", true, onSuccess, onError);
  };

  useEffect(() => {
    GetAllNews();
  }, []);

  return (
    <>
      <div className="container news">
        <h2 className="news-heading"> News </h2>
        <div className="cards">
          <AliceCarousel
            items={1}
            stagePadding={{ paddingLeft: 50, paddingRight: 50 }}
            responsive={{ 0: { items: 1 }, 768: { items: 3 } }}
            autoPlay
            autoPlayInterval={1000}
            animationDuration={800}
            infinite
            disableDotsControls
            disableButtonsControls
          >
            {data.map((el) => (
              <div className="card">
                <div className="img">
                  <img src={`${el?.image}`} alt="" className="zoom-image" />
                </div>
                <div className="body">
                  <h3> {el.description} </h3>
                  <p> {moment(el.date).format("DD-MM-YYYY")} </p>
                  <a href={el?.url} target="_blank">
                    Read more <BsArrowRightShort className="arrow" />
                  </a>
                </div>
              </div>
            ))}
          </AliceCarousel>
        </div>
      </div>
    </>
  );
};

export default News;
