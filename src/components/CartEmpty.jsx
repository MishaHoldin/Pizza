import React from "react";
import cartEmptyImg from "../assets/img/empty-cart.png";
import { Link } from "react-router-dom";

function CartEmpty() {
  return (
    <div className="cart cart--empty ">
      <div>
      <h2 >
        Кошик порожній <icon>😕</icon>
      </h2>
      <p>
        Швидше за все ви ще нічого не замовили.
        <br />
        Для того, щоб замовити піцу, перейдіть на головну сторінку .
      </p>
      </div>
      <img
        src={cartEmptyImg}
        alt="Empty cart"
      ></img>
      <Link
        to="/"
        className="button button--black"
      >
        <span>Повернутись на головну</span>
      </Link>
    </div>
  );
}

export default CartEmpty;
