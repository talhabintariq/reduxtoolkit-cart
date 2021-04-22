import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";

import "./Cards.css";

const Card = (item) => {
  const { title, image, price } = item;
  const dispatch = useDispatch();

  const addToBasket = () => {
    dispatch(addItem(item));
  };

  return (
    <div className="card">
      <div className="hover-grow card1">
        <h2 className="shoename">{title}</h2>
        <h3 className="shoeprice ">${price}</h3>
        <img src={image} alt="" className="shoeimage" />
        <br />
        <button className="button " onClick={() => addToBasket()}>
          <img
            className="cart-image "
            src="https://nike-shoe-store.netlify.app/static/media/cart1.7cab8d40.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};
export default Card;
