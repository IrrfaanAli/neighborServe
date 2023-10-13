import React from "react";

const Commnet = () => {
  return (
    <div>
      <div style={{ marginLeft: "3%", marginTop: "2%", display: "flex" }}>
        <img
          src="user_cicrle_light.png"
          alt=""
          style={{ height: "25px", width: "25px" }}
        />
        <p style={{ fontWeight: "bold", marginLeft: "1%" }}>Mr Rahim</p>
        <img
          src="vip.png"
          alt=""
          style={{
            height: "15px",
            width: "15px",
            marginLeft: "1%",
            marginTop: "1.5%",
          }}
        />
        <p
          style={{
            color: "#B6B6B9",
            fontSize: "12px",
            marginLeft: "31%",
            marginTop: "1%",
          }}
        >
          August 23, 2023
        </p>
      </div>
      <p
        style={{
          color: "#766C6C",
          fontSize: "12px",
          marginLeft: "3%",
          fontStyle: "italic",
        }}
      >
        "Exceptional service that exceeded my expectations - a true partner in
        achieving my goals."
      </p>
    </div>
  );
};

export default Commnet;
