import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MyOrder.css";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom"; 
function Order({ cart, setCart }) {
  // initialize navigate
  const navigate = useNavigate();
  // navigate the orderSummary page
  const ViewSummary = () => {
    navigate("/order-summary");
  };
  // Increase quantity
  const increaseQty = (title) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.title === title
          ? {
              ...item,
              quantity: item.quantity + 1,
              total: (item.quantity + 1) * item.price,
            }
          : item,
      ),
    );
  };

  // Decrease quantity
  const decreaseQty = (title) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.title === title && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
              total: (item.quantity - 1) * item.price,
            }
          : item,
      ),
    );
  };

  // Remove item completely
  const removeItem = (title) => {
    setCart((prevCart) => prevCart.filter((item) => item.title !== title));
  };

  // Calculate cart total
  const cartTotal = cart.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="order-container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.title} className="order-row">
              <img src={item.image} alt={item.title} className="order-img" />
              <div className="order-description">
                <div className="order-details">
                  <h4>{item.title}</h4>
                </div>

                <div className="order-quantity">
                  <button onClick={() => decreaseQty(item.title)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.title)}>+</button>
                </div>
                <div className="order-price">
                  <p>item total: ₦{item.total}</p>
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.title)}
                  >
                    x
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <h3>Cart Grand total: ₦{cartTotal}</h3>
            <button onClick={ViewSummary}>view order summary</button>
          </div>
          <div className="add-more">
            <FaPlus className="plus-icon" />
            <Link to="/home">Add more items from Chuks kitchen</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Order;
