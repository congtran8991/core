import React from "react";

const listProduct = () => {
  return (
    <div className="list-product">
      <div className="product-title-top">Các gói sản phẩm</div>
      <div className="information-security">
        <div className="flex">
          <div className="flex" style={{ width: "80%" }}>
            <div style={{ width: "30%" }}>
              <div className="product-security">
                <div className="title-security">Trọn vẹn bảo vệ</div>
                <div className="border-bottom-title"></div>
              </div>
            </div>
            <div
              className="description"
              style={{ width: "50%", height: "250px" }}
            >
              <div className="pl-5 pt-3 pb-3">
                <div className="description1">
                  <div className="title-description">
                    An tâm trị bệnh Ung Thư theo từng giai đoạn
                  </div>
                  <ul className="item-description pl-5">
                    <li>Giai đoạn sớm</li>
                    <li>Giai đoạn nghiêm trọng</li>
                    <li>Giai đoạn mở rộng (Tái ung thư)</li>
                  </ul>
                </div>
                <div className="description1 mt-5">
                  <div className="title-description">
                    An tâm trị bệnh Ung Thư theo từng giai đoạn
                  </div>
                  <ul className="item-description pl-5">
                    <li>Giai đoạn sớm</li>
                    <li>Giai đoạn nghiêm trọng</li>
                    <li>Giai đoạn mở rộng (Tái ung thư)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div style={{display: "flex", alignItems: "center"}}><button className="btn">Quyền lợi</button></div>
        </div>
        <div></div>
        <div></div>
      </div>
      {/* //////////////// */}
      <div className="healthy mt-3">
        <div className="flex">
          <div className="flex" style={{ width: "80%" }}>
            <div style={{ width: "30%" }}>
              <div
                className="product-security"
                style={{ border: "3px solid #1F78AD", borderLeft: "0px" }}
              >
                <div
                  className="title-security"
                  style={{ width: "170px", color: "#1F78AD" }}
                >
                  An tâm sống khỏe
                </div>
                <div
                  className="border-bottom-title"
                  style={{ background: "#1F78AD" }}
                ></div>
              </div>
            </div>
            <div
              className="description"
              style={{ width: "50%", height: "250px" }}
            >
              <div
                className="pl-5 pt-3 pb-3"
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div className="description1">
                  <div className="title-description">
                    Hỗ trợ chi phí tới 30% STBH đối với phòng chăm sóc đặc biệt
                    trên 5 ngày
                  </div>
                  <div className="title-description mt-3">
                    Dịch vụ hỗ trợ chi phí tầm soát ung thư lên tới 5 triệu đồng
                    (cho mỗi 5 năm hợp đồng và áp dụng cho HĐ trên 1 tỷ đống)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{display: "flex", alignItems: "center"}}><button className="btn">Quyền lợi</button></div>
        </div>
        <div></div>
        <div></div>
      </div>
      {/* ///////////// */}
      <div className="steady mt-3">
        <div className="flex">
          <div className="flex" style={{ width: "80%" }}>
            <div style={{ width: "30%" }}>
              <div
                className="product-security"
                style={{ border: "3px solid #28A3E1", borderLeft: "0px" }}
              >
                <div
                  className="title-security"
                  style={{ width: "200px", color: "#28A3E1" }}
                >
                  Vững vàng tài chính
                </div>
                <div
                  className="border-bottom-title"
                  style={{ background: "#28A3E1" }}
                ></div>
              </div>
            </div>
            <div
              className="description"
              style={{ width: "50%", height: "250px" }}
            >
              <div
                className="pl-5 pt-3 pb-3"
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div className="description1">
                  <div className="title-description">
                    Hỗ trợ duy trì hợp đồng nhận 200% STBH khi mắc bệnh giai
                    đoạn sớm
                  </div>
                  <div className="title-description mt-3">
                    Hưởng lợi nhuận đầu tư từ quỹ liên kết chung
                  </div>
                  <div className="title-description mt-3">
                    Nhận toàn bộ giá trị tài khoản khi kết thúc hợp đồng
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{display: "flex", alignItems: "center"}}><button className="btn">Quyền lợi</button></div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default listProduct;
