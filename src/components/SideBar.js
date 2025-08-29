import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-148 ">
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gamming</li>
        <li>Movie</li>
      </ul>
      <h1 className="font-bold pt-5">watch later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gamming</li>
        <li>Movie</li>
      </ul>
    </div>
  );
};

export default SideBar;
