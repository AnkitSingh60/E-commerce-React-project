import React from "react";
import Navbar from "./Navbar";
import "./Home.css";

const Home = () => {
  const auth = localStorage.getItem("user");

  return (
    <>
      <Navbar />
      <div className="container">
        {auth ? (
          <h1 className="NavH1">
            Welcome{" "}
            <span className="nameSpan">
              {" "}
              {JSON.parse(auth).name.toUpperCase()}
            </span>{" "}
            to <span className="span1">`` Took - </span>
            <span className="span2"> Took`` </span> store
          </h1>
        ) : (
          <h1 className="NavH1">
            Welcome to <span className="span1">`` Took - </span>
            <span className="span2"> Took`` </span> store
          </h1>
        )}
      </div>
      <img
        className="wlcmLogo"
        src="https://www.seekpng.com/png/full/334-3343418_free-printables-welcome-to-the-shop-png.png"
        alt="logo"
      />
    </>
  );
};

export default Home;
