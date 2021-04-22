import React from "react";
import { removeItem } from "../features/cartSlice";
import "./Checkout.css";
import { useSelector, useDispatch } from "react-redux";

const Checkout = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  const removeFromBasket = ({ id }) => {
    console.log("cart", cart);
    const updatedCart = cart.filter((item) => item.id !== id);
    dispatch(removeItem(updatedCart));
  };
  return (
    <div className="checkout ">
      {/* left div start here  */}

      <div className="left">
        <button className="btn">Your shopping Basket </button>

        {/* Grid card starts from here  */}

        <div className="cart__grid">
          {/*<div className="grid__image">
            <img
              className="image "
              src="https://m.media-amazon.com/images/I/71caHEigvFL._AC_SR700,525_.jpg"
              alt=""
            />
          </div>

           <div className="grid__items">
            <h1>Micheal Jordan Shoes</h1>
            <h4>
              140 <small>$</small>
            </h4>
            <button className="btn2" onClick={removeFromBasket}>
              Remove from basket{" "}
            </button>
  </div>  */}
          {cart.map((item, index) => {
            const { id, price, title } = item;
            const key = index + id;
            return (
              <>
                <div className="grid__image">
                  <img
                    className="image "
                    src="https://m.media-amazon.com/images/I/71caHEigvFL._AC_SR700,525_.jpg"
                    alt=""
                  />
                </div>
                <div key={key} className="grid__items">
                  <h1>{title}</h1>
                  <h4>
                    {price}
                    <small>$</small>
                  </h4>
                  <button
                    className="btn2"
                    onClick={() => removeFromBasket(item)}
                  >
                    Remove from basket{" "}
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>

      {/* Right div start here  */}
      <div className="right">
        <div className="price_cart">
          <h4 className="total">
            Total Products <small id="small">0</small>{" "}
          </h4>

          <h5 className="price">
            0<small>$</small>
          </h5>

          <button className="btn1">Pay</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
