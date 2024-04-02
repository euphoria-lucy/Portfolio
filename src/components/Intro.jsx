import React from "react";
import "../scss/Intro.scss";
import image from "../img/dog.jpg";

const Intro = () => {
  return (
    <>
      <div className="intro">INTRODUCTION</div>
      <nav>
        <div className="left-nav">
          <p>GITHUB</p>
          <p>BLOG</p>
        </div>
      </nav>
      <div className="img">
        <img src={image} width="200px" />
        <p>자기소개 작성</p>
      </div>
    </>
  );
};

export default Intro;
