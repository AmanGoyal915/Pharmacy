import React from "react";

function Hero() {
  return (
    <section style={heroStyle}>
      <div style={overlayStyle}>
        <h2 style={heroHeadingStyle}>Welcome to MediScan Pharmaceuticals</h2>
        <p style={heroTextStyle}>Your partner in health and wellness.</p>
      </div>
    </section>
  );
}

const heroStyle = {
  backgroundImage:
    "url('https://img.freepik.com/free-photo/some-pills-spray-pill-bottle-needles-light-cyan-background-top-view-space-text_176474-1747.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  height: "60vh",
  color: "white",
};

const overlayStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
};

const heroHeadingStyle = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "1rem",
};

const heroTextStyle = {
  fontSize: "1.2rem",
  textAlign: "center",
};

export default Hero;
