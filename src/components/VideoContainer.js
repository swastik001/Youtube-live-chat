import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard, { AdVideoCard } from "./VideoCards";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos?.[0] && <AdVideoCard info={videos?.[0]} />}
      {videos?.map((each) => {
        return (
          <Link to={"/watch?v=" + each.id} key={each.id}>
            <VideoCard info={each} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
