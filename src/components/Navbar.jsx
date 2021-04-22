import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [totalCartItems, setTotalCartItems] = useState(0);

  useEffect(() => {
    setTotalCartItems(cart.length);
  }, [cart, totalCartItems]);

  return (
    <div className="navbar ">
      <div className="menus">
        <Link className="Link" to="/">
          <p>Items </p>
        </Link>
        <Link className="Link" to="/checkout">
          <p>
            <img
              src="https://nike-shoe-store.netlify.app/static/media/cart1.7cab8d40.svg"
              alt=""
            />
            <span>{totalCartItems}</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
