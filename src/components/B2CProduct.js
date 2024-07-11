import React from 'react';
import './B2CProduct.css';

const B2CProduct = () => {
  return (
    <section className="b2c-product">
      <h2>B2C Product</h2>
      <div className="b2c-grid">
        <div className="b2c-item">Consumer Controlled</div>
        <div className="b2c-item">Trained Behavior Recommendations</div>
        <div className="b2c-item">Product Scanning</div>
        <div className="b2c-item">Price Tracking</div>
      </div>
    </section>
  );
};

export default B2CProduct;
