import React from "react";

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2025 MediScan Pharmaceuticals. All Rights Reserved.</p>
    </footer>
  );
}

const footerStyle = {
  background: "#0044cc",
  color: "#fff",
  textAlign: "center",
  padding: "1rem 0",
  marginTop: "2rem",
};

export default Footer;
