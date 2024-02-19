import React, { useEffect, useState } from "react";
import "./blogs.scss";
import { BlogsData } from "./constant";
import { getRequest } from "../../service/apiCalls";
import { BASE_URL_IMAGES } from "../../Utils";

const Blogs = () => {
  const [data, setData] = useState([]);

  const GetAllBlogs = async () => {
    const onSuccess = (res) => {
      console.log(res.data);
      setData(res?.data);

      console.log(res?.data);
    };

    const onError = () => {
      // setLoading(false);
    };

    await getRequest("", "blog/get-all", true, onSuccess, onError);
  };

  useEffect(() => {
    GetAllBlogs();
  }, []);

  return (
    <>
      <div className="container">
        <div className="blogs">
          <h2 className="blogs-heading"> Blogs </h2>
          <div className="cards">
            {data.map((el) => (
              <div className="card">
                <div className="img">
                  <img src={`${el?.image}`} alt="" className="zoom-image" />
                </div>
                <div className="body">
                  <h2> {el.title} </h2>
                  <p> {el.description} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
