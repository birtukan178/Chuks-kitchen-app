import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DeliveryDetails.css";
function DeliveryDetails() {
  return (
    <>
      <div className="Delivery-summary-container">
        <div className="form-group">
          <div className="Delivery-title">Delivery Details</div>
          <hr />
        </div>

        <div className="form-group">
          <textarea
            className="delivery-address"
            type="text"
            placeholder="Home: 123 Main Street, Victoria Island, Lagos Apt 4B, Opposite Mega Plaza"
          ></textarea>
          <span className="change-address">Change address</span>
        </div>
        <div className="form-group">
          <label htmlFor="">Delivery Time</label>

          <input
            className="delivery-time"
            type="text"
            placeholder="ASAP(30-25)"
          />
        </div>
        <div className="form-group">
          {" "}
          <label htmlFor="">Delivery Instructions (Optional)</label>
          <textarea
            className="delivery-style"
            type="text"
            placeholder="E.g leave at the front of the door, knock twice....................."
          />
        </div>
        <div className="form-group">
          {" "}
          <label htmlFor="">Contact Address</label>
          <input
            className="delivery-contact"
            type="text"
            placeholder="+234 801 234 5678"
          />
        </div>
      </div>
    </>
  );
}

export default DeliveryDetails;
