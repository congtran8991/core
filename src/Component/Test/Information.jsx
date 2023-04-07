import React from "react";

const Information = () => {
  return (
    <div >
      <div
        className="pt-10 pb-10"
        style={{
            width: "100%",
            background: "#DB1D4B",
            textAlign: "center"
        }}
      >
        <div className="title-information">
          Hãy để AIA thiết lập giải pháp cho bạn
        </div>

        <div className="title-input">Nhập thông tin của bạn</div>
        <div>
          <div className="mt-2">
            <input style={{width: "40%", background: "#DB1D4B", height: "45px"}} className="custom-input" placeholder="Họ và tên" />
          </div>
          <div className="mt-2">
            <input style={{width: "40%",  background: "#DB1D4B", height: "45px"}} className="custom-input" placeholder="Số điện thoại" />
          </div>
          <div className="mt-2">
            <input style={{width: "40%",  background: "#DB1D4B", height: "45px"}} className="custom-input" placeholder="Email" />
          </div>
          <div className="mt-2">
            <input style={{width: "40%",  background: "#DB1D4B", height: "45px"}} className="custom-input" placeholder="Bạn đã mua bảo hiểm chưa" />
          </div>
          <div className="mt-2">
            <input style={{width: "40%",  background: "#DB1D4B", height: "45px"}} className="custom-input" placeholder="Chọn bảo hiểm bạn quan tâm" />
          </div>
          <div className="mt-10"><button className="btn-submit pl-6 pr-6 pt-2 pb-2" style={{background: "#ffffff", borderRadius: "5px", color: "#DB1D4B"}}>Gửi</button></div>
        </div>
      </div>
    </div>
  );
};

export default Information;
