import React from "react";
import "../styles/Payment.css";

function Payment() {
  return (
    <>
      <div className="Payment-container">
        <div className="payment-title">Payment</div>
        <hr />
        <div className="payment-subtitle">
          <h3 className="payment-with">Payment with ...</h3>
        </div>
        <div className="input-radiobutton-wrapper">
          <label>
            <input type="radio" name="payment" value="card" />
            Card
          </label>

          <label>
            <input type="radio" name="payment" value="bank" />
            Bank
          </label>

          <label>
            <input type="radio" name="payment" value="transfer" />
            Transfer
          </label>
        </div>
        <div className="payment-details">
          <label htmlFor="">Card Number</label>
          <input type="text" placeholder="1234 5678 9101 2356" />
        </div>
        <div className="Expired-cvv">
          <div className="payment-input-group">
            <label htmlFor="expiry">Expire Date</label>
            <input id="expiry" type="text" placeholder="MM/YY" />
          </div>

          <div className="payment-input-group">
            <label htmlFor="cvv">CVV</label>
            <input id="cvv" type="text" placeholder="123" />
          </div>
        </div>
        <div className="checkbox-wrapper">
          <input type="checkbox" id="saveCard" />
          <label htmlFor="saveCard">Save card details</label>
        </div>
        <div className="pay-button">
          <button>Pay ₦9,900</button>
        </div>
        <div className="footer-description">
          <p>
            Your personal data will be used to process your order,support your
            experience throughout this website,and for other purposes described in our privacy policy.
          </p>
        </div>
      </div>
    </>
  );
}

export default Payment;
