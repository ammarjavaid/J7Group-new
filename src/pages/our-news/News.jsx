import React, { useEffect, useState } from "react";
import "./news.scss";
import { getRequest } from "../../service/apiCalls";
import { BASE_URL_IMAGES } from "../../Utils";
import moment from "moment/moment";
// import { MyNews } from "./constant";
import { BsArrowRightShort } from "react-icons/bs";




const News = () => {

  const [data, setData] = useState([]);


  const GetAllNews = async () => {
    const onSuccess = (res) => {
      console.log(res.data)
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
          {data.map((el) => (
            <div className="card">
              <div className="img">
                <img src={`${BASE_URL_IMAGES}/${el?.image}`} alt="" className="zoom-image" />
              </div>
              <div className="body">
                <h3> {el.description} </h3>
                <p> {moment(el.date).format("DD-MM-YYYY")} </p>
                <a href={el?.url} target="_blank" >
                  Read more <BsArrowRightShort className="arrow" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
