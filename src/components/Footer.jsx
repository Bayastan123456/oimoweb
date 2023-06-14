import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "white",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <section style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "20px" }}>
            <h5 style={{ margin: 0, color: "black" }}>Company</h5>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              About
            </a>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Careers
            </a>
          </div>
          <div style={{ marginRight: "20px" }}>
            <h5 style={{ margin: 0, color: "black" }}>Discover</h5>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Trust & Safety
            </a>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Travel Credit
            </a>
          </div>
          <div>
            <h5 style={{ margin: 0, color: "black" }}>Hosting</h5>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Why Host
            </a>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Hospitality
            </a>
          </div>
        </div>
      </section>
      <div style={{ height: "1px", backgroundColor: "gray" }}></div>
      <p style={{ color: "black", textAlign: "center", marginTop: "10px" }}>
        © 2023 OIMO, Inc. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
