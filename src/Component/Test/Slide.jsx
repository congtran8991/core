import React from "react";
import { ReactComponent as LOGO } from "../../Asset/Images/logo-aia.svg";
import SlideCenter from "../../Asset/Images/slide-center.jpg";
import Circle1 from "../../Asset/Images/circle1.jpg";
import Circle2 from "../../Asset/Images/circle2.jpg";
import Circle3 from "../../Asset/Images/circle3.jpg";
import Subtract from "../../Asset/Images/subtract.jpg";

const Slide = () => {
  return (
    <div className="slide">
      <div
        style={{
          height: "500px",
          width: "100%",
          background: "#ffffff",
          position: "relative",
        }}
      >
        <div
        className="absolute"
          style={{
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: 22,
            }}
          >
            <div>
              <LOGO />
            </div>
            <div><button className="btn">Trải nghiệm ngay</button></div>
          </div>
        </div>
        <div className="circle1">
          <div className="circle1-border"></div>
        </div>
        <div className="circle2">
          <div className="circle2-border"></div>
        </div>
        <div className="circle3">
          <div className="circle3-border" style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "calc(50% - 110px)",
                top: "calc(50% - 70px)",
              }}
            >
              <img width={220} src={SlideCenter} alt="" />
            </div>
          </div>
        </div>
        <div className="circle-img1">
          <img width={120} src={Circle1} alt="" />
        </div>
        <div className="circle-img2">
          <img width={120} src={Circle2} alt="" />
        </div>
        <div className="circle-img3">
          <img width={120} src={Circle3} alt="" />
        </div>
      </div>
      <div>
        <img width={"100%"} height={"80%"} src={Subtract} alt=""/>
      </div>
    </div>
  );
};

export default Slide;
