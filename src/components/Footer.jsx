import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#FF0000",
        bottom: 0,
        left: 0,
        right: 0,
        position: "absolute",
        flexWrap: "wrap",
        height: "100px",
        boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <section style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ display: "flex", fontWeight: "500", fontFamily: "arial" }}
        >
          <div
            style={{
              marginRight: "20px",
              fontFamily: "arial",
            }}
          >
            <h4 style={{ margin: 0, color: "black", fontWeight: "700" }}>
              О компании
            </h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  About
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div style={{ marginRight: "20px" }}>
            <h4 style={{ margin: 0, color: "black" }}>OIMO</h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Trust & Safety
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Travel Credit
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ margin: 0, color: "black" }}>Поддержка</h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Why Host
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Hospitality
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div style={{ height: "1px", backgroundColor: "white" }}></div>
      <p
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "10px",
          fontWeight: "600",
        }}
      >
        © 2023 OIMO, Inc. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
