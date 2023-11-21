import React, { useEffect, useRef, useState } from "react";
// import MyVideo from "../../assets/video/hotel.mp4";
import "./video.scss";
import { FaPlay } from "react-icons/fa";
import { AiOutlinePause } from "react-icons/ai";
import { getRequest } from "../../service/apiCalls";

const Video = () => {



  const [isPlaying, setIsPlaying] = useState(false);
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


  
  const toggleVideo = () => {
    const iframe = videoRef.current;
    if (iframe) {
      const player = iframe.contentWindow;
      if (isPlaying) {
        player.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        setIsPlaying(false);
      } else {
        player.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    const handlePlayerStateChange = (event) => {
      if (event.data === 'paused') {
        setIsPlaying(false);
      } else if (event.data === 'playing') {
        setIsPlaying(true);
      }
    };

    window.addEventListener('message', handlePlayerStateChange);

    return () => {
      window.removeEventListener('message', handlePlayerStateChange);
    };
  }, []);

  return (
    <>
      <div className="video-container">
        <div className="video-aspect-ratio">
        <iframe
        ref={videoRef}
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/WsBDsEuJ_Yw?autoplay=1&mute=1&enablejsapi=1&controls=0&modestbranding=0&showinfo=0}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
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
