import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/OrderSummary.css"
function OrderSummary() {
  // initialize navigate
  const navigate = useNavigate();
  // navigate the Delivery Details page
  const DeliveryDetails = () => {
    navigate("/delivery-details");
  };
  // navigate the payment page
  const Pickup = () => {
    navigate("/pickup");
  };
  return (
    <>
      <div className="order-summary-container">
        <div className="summary-title">Order Summary</div>
        <hr />
        <div>
          <h3 className="promo-code">Add a promo code</h3>
        </div>
        <div className="input-button-wrapper">
          <input type="text" placeholder="Enter Code here" />
          <button>Login</button>
        </div>
        <div className="price-details">
          <h3>
            Subtotal <span>₦9,200</span>
          </h3>
          <h3>
            Delivery Fee<span>₦500</span>
          </h3>
          <h3>
            Service Fee<span>₦200</span>
          </h3>
          <h3>
            Tax<span>₦0</span>
          </h3>
        </div>
        <hr />
        <div className="total-price">
          <h3>
            Total<span>₦9,900</span>
          </h3>
        </div>
        <div className="delivery-pickup">
          <button className="delivery" onClick={DeliveryDetails}>
            Delivery
          </button>
          <button className="pickup" onClick={Pickup}>
            Pick up
          </button>
        </div>
        <div className="special-detail">
          <label>
            <h5>Special instruction for restaurants</h5>
          </label>
          <textarea
            name=""
            id=""
            placeholder="E.g no onion, food is too spicy, food is too hot food is tasty."
          ></textarea>
        </div>
        <div className="checkout">
          <button>Proceed to checkout</button>
        </div>
      </div>
    </>
  );
}

export default OrderSummary;
