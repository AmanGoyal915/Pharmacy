import React from "react";

function Products() {
  return (
    <section>
      <h2>Our Products</h2>
      <div style={productListStyle}>
        <div style={productStyle}>
          <h3>Product 1</h3>
          <p>Description of Product 1.</p>
        </div>
        <div style={productStyle}>
          <h3>Product 2</h3>
          <p>Description of Product 2.</p>
        </div>
        <div style={productStyle}>
          <h3>Product 3</h3>
          <p>Description of Product 3.</p>
        </div>
      </div>
    </section>
  );
}

const productListStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  margin: "1rem 0",
};

const productStyle = {
  border: "1px solid #ddd",
  padding: "1rem",
  borderRadius: "5px",
  width: "200px",
  textAlign: "center",
};

export default Products;
