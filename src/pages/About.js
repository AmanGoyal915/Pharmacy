import React from "react";

function About() {
  return (
    <section style={aboutSectionStyle}>
      <h2 style={headingStyle}>About us</h2>
      <p style={descriptionStyle}>
        At MediScan Pharmaceuticals, we believe that everyone deserves access to
        quality healthcare. As a responsible Pharmaceutical Company, we are
        dedicated to developing and delivering innovative medicines that make a
        positive impact on people's lives.
      </p>
      <div style={infoContainerStyle}>
        <div style={infoItemStyle}>
          <span style={iconStyle}>ℹ️</span>
          <span>Page · Medical & health · Pharmaceutical company</span>
        </div>
        <div style={infoItemStyle}>
          <span style={iconStyle}>📍</span>
          <span>
            Plot No. 315, Industrial Area Phase-2, Panchkula, India, Haryana
          </span>
        </div>
        <div style={infoItemStyle}>
          <span style={iconStyle}>📞</span>
          <span>089689 83355</span>
        </div>
        <div style={infoItemStyle}>
          <span style={iconStyle}>✉️</span>
          <span>Mediscanpharma@gmail.com</span>
        </div>
      </div>
    </section>
  );
}

const aboutSectionStyle = {
  padding: "2rem",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
  margin: "2rem auto",
  fontFamily: "Arial, sans-serif",
  backgroundImage:
    "url('https://img.freepik.com/free-photo/some-pills-spray-pill-bottle-needles-light-cyan-background-top-view-space-text_176474-1747.jpg')",
  backgroundSize: "cover",
};

const headingStyle = {
  fontSize: "1.8rem",
  color: "#2e7d32", // Dark green
  textAlign: "center",
  marginBottom: "1rem",
};

const descriptionStyle = {
  fontSize: "1rem",
  color: "#333",
  lineHeight: "1.6",
  marginBottom: "2rem",
  textAlign: "justify",
};

const infoContainerStyle = {
  marginTop: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const infoItemStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "1rem",
  color: "#555",
};

const iconStyle = {
  fontSize: "1.2rem",
  color: "#4caf50", // Green for icons
};

export default About;
