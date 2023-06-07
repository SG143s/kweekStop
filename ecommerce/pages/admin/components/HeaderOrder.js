import React, { useState } from 'react';
import './styles/Order.css';

export default function HeaderOrder({ setActiveComponent }) {
  const [activeButton, setActiveButton] = useState("recentOrder");

  const handleButtonClick = (component) => {
    setActiveComponent(component);
    setActiveButton(component);
  };

  return (
    <div className='header-container'>
      <div>
        <h2>Order</h2>
      </div>
      <div className="btn-navigation order-page">
        <button
          className={activeButton === "recentOrder" ? "active" : ""}
          onClick={() => handleButtonClick("recentOrder")}
        >
          Recent Order
        </button>
        <button
          className={activeButton === "pengirimanSaya" ? "active" : ""}
          onClick={() => handleButtonClick("pengirimanSaya")}
        >
          Pengiriman Saya
        </button>
      </div>
    </div>
  );
}
