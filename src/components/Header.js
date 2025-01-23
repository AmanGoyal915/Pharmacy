import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>MediScan Pharmaceuticals</h1>
        <nav style={navStyle}>
          <ul style={navListStyle}>
            <li>
              <Link to="/" style={linkStyle}>
                About
              </Link>
            </li>
            <li>
              <Link to="/products" style={linkStyle}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" style={linkStyle}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

const headerStyle = {
  backgroundColor: "#4d8994", // Green background for trust and professionalism
  color: "white",
  padding: "1rem 2rem",
  position: "sticky",
  top: "0",
  zIndex: "1000",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const titleStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  margin: "0",
};

const navStyle = {
  margin: "0",
};

const navListStyle = {
  display: "flex",
  listStyle: "none",
  gap: "1.5rem",
  margin: "0",
  padding: "0",
};

const linkStyle = {
  textDecoration: "none",
  color: "white",
  fontSize: "1rem",
  fontWeight: "500",
  transition: "color 0.3s",
};

const linkHoverStyle = {
  color: "#d5f5d2", // Light green hover color
};

export default Header;
