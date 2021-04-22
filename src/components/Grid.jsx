import React from "react";
import Card from "./Card.jsx";
import "./Grid.css";

const Grid = () => {
  return (
    <div className="grid">
      <div className="home__row">
        <Card
          id="1"
          title="TIGER VIVO"
          image="https://m.media-amazon.com/images/I/71caHEigvFL._AC_SR700,525_.jpg"
          price={180}
        />
        <Card
          id="2"
          title="LION VIVO"
          image="https://m.media-amazon.com/images/I/71caHEigvFL._AC_SR700,525_.jpg"
          price={180}
        />
        <Card
          id="3"
          title="TIGER VIVO"
          image="https://m.media-amazon.com/images/I/71caHEigvFL._AC_SR700,525_.jpg"
          price={180}
        />
      </div>

      <div className="home__row">
        <Card
          id="4"
          title="TIGER VIVO"
          image="https://m.media-amazon.com/images/I/71caHEigvFL._AC_SR700,525_.jpg"
          price={180}
        />
        <Card
          id="5"
          title="LION VIVO"
          image="https://m.media-amazon.com/images/I/71caHEigvFL._AC_SR700,525_.jpg"
          price={180}
        />
        <Card
          id="6"
          title="TIGER VIVO"
          image="https://m.media-amazon.com/images/I/71caHEigvFL._AC_SR700,525_.jpg"
          price={180}
        />
      </div>

      <div className="home__row">
        <Card
          id="7"
          title="TIGER VIVO"
          image="https://m.media-amazon.com/images/I/71caHEigvFL._AC_SR700,525_.jpg"
          price={180}
        />

        <Card
          id="8"
          title="TIGER VIVO"
          image="https://m.media-amazon.com/images/I/71caHEigvFL._AC_SR700,525_.jpg"
          price={180}
        />

        <Card
          id="9"
          title="TIGER VIVO"
          image="https://m.media-amazon.com/images/I/71caHEigvFL._AC_SR700,525_.jpg"
          price={180}
        />
      </div>

      <div className="home__row">
        <Card
          id="10"
          title="TIGER VIVO"
          image="https://m.media-amazon.com/images/I/71caHEigvFL._AC_SR700,525_.jpg"
          price={180}
        />

        <Card
          id="11"
          title="TIGER VIVO"
          image="https://m.media-amazon.com/images/I/71caHEigvFL._AC_SR700,525_.jpg"
          price={180}
        />
        <Card
          id="12"
          title="TIGER VIVO"
          image="https://m.media-amazon.com/images/I/71caHEigvFL._AC_SR700,525_.jpg"
          price={180}
        />
      </div>
    </div>
  );
};

export default Grid;
