import React, { useEffect, useRef, useState } from "react";
import "./video.scss";
import { FaPlay } from "react-icons/fa";
import { AiOutlinePause } from "react-icons/ai";
import { getRequest } from "../../service/apiCalls";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const [data, setData] = useState([]);

  const GetAllVideo = async () => {
    const onSuccess = (res) => {
      setData(res?.data);
    };

    const onError = () => {
      // setLoading(false);
    };

    await getRequest("", "video/get-video", true, onSuccess, onError);
  };

  useEffect(() => {
    GetAllVideo();
  }, []);

  console.log(data, "data");

  const toggleVideo = () => {
    const iframe = videoRef.current;
    if (iframe) {
      const player = iframe.contentWindow;
      if (isPlaying) {
        player.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
        setIsPlaying(false);
      } else {
        player.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          "*"
        );
        setIsPlaying(true);
      }
    }
  };

  // Function to calculate aspect ratio
  const calculateAspectRatio = () => {
    const video = videoRef.current;
    if (video) {
      const aspectRatio = (video.clientHeight / video.clientWidth) * 100;
      return aspectRatio + "%";
    }
    return "56.25%"; // Default aspect ratio for YouTube videos
  };

  useEffect(() => {
    const handlePlayerStateChange = (event) => {
      if (event.data === "paused") {
        setIsPlaying(false);
      } else if (event.data === "playing") {
        setIsPlaying(true);
      }
    };

    window.addEventListener("message", handlePlayerStateChange);

    return () => {
      window.removeEventListener("message", handlePlayerStateChange);
    };
  }, []);

  return (
    <>
      <div className="video-container">
        <div
          className="video-aspect-ratio"
          style={{
            position: "relative",
            paddingBottom: calculateAspectRatio(),
          }}
        >
          <video width="1500" height="250" autoPlay muted loop playsInline>
            <source
              // src="https://textract-console-us-east-1-a6af3b5c-d71d-4e63-962c-a4d97298dc03.s3.amazonaws.com/hotel.mp4"
              src="https://textract-console-us-east-1-a6af3b5c-d71d-4e63-962c-a4d97298dc03.s3.amazonaws.com/3D+Animation.mp4"
              type="video/mp4"
            />
          </video>
          {/* <iframe
            ref={videoRef}
            src="https://textract-console-us-east-1-a6af3b5c-d71d-4e63-962c-a4d97298dc03.s3.amazonaws.com/hotel.mp4"
            frameBorder="0"
            allowFullScreen
          ></iframe> */}
        </div>

        <button
          id="pauseButton"
          className={`centered-button ${isPlaying ? "playing" : "paused"}`}
          onClick={toggleVideo}
        >
          {isPlaying ? (
            <AiOutlinePause className="play-icon" />
          ) : (
            <FaPlay className="play-icon" />
          )}
        </button>
      </div>
    </>
  );
};

export default Video;
