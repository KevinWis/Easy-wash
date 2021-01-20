import { addToCart, removeFromCart } from "./actions";
import uuid from "react-uuid";
const cart = {
  products: [],
  total: 0,
};

export const addToCartThunk = (product) => (dispatch, _) => {
  product = { ...product, id: uuid() };
  cart.products = [...cart.products, product];
  cart.total = cart.total + parseFloat(product.price);
  localStorage.setItem("cart", JSON.stringify(cart));
  dispatch(addToCart(cart));
};

export const removeFromCartThunk = (product) => (dispatch, _) => {
  const newCartProducts = cart.products.filter((el) => {
    return el !== product.id;
  });
  const newCartTotal = newCartProducts.map((el) => {
    return parseFloat(el.price);
  });
  cart.products = [...newCartProducts];
  cart.total = newCartTotal.reduce((acc, cur) => acc + cur);
  localStorage.setItem("cart", JSON.stringify(cart));
  dispatch(removeFromCart(cart));
};

export const resetCartThunk = () => (dispatch, _) => {
  localStorage.removeItem("cart");
  cart.products = [];
  cart.total = 0;
  dispatch(addToCart(cart));
};
