import React from "react";
import Face from "../../Asset/Images/face.jpg";
import Ins from "../../Asset/Images/ins.jpg";
import Twice from "../../Asset/Images/twice.jpg";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          background: "#ffffff",
          height: "70px",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "80px",
          paddingRight: "80px",
        }}
      >
        <div className="content-footer">@Copyright2021-AIA</div>
        <div style={{alignItems: "center", display: "flex"}}>
          <div>
            <img src={Face} alt="" />
          </div>
          <div className="ml-2">
            <img src={Ins} alt="" />
          </div>
          <div className="ml-2">
            <img src={Twice} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
