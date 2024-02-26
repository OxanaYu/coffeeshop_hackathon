import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS } from "../helpers/const";
import {
  getLocalStorage,
  getProductsCountInCoffeeCart,
  subPriceResult,
  totalPriceResult,
} from "../helpers/function";

const coffeeCartContext = createContext();
export const useCoffeeCart = () => useContext(coffeeCartContext);
const INIT_STATE = {
  coffeeCart: JSON.parse(localStorage.getItem("coffeeCart")),
  coffeeCartLength: getProductsCountInCoffeeCart,
  paymentInfo: null,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_COFFEE_CART:
      return { ...state, coffeeCart: action.payload };
    case ACTIONS.SET_PAYMENT_INFO:
      return { ...state, paymentInfo: action.payload };
    default:
      return state;
  }
};
const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // ! GET_COFFEE_CART
  const getCoffeeCart = () => {
    let coffeeCart = getLocalStorage();
    console.log(coffeeCart);
    if (!coffeeCart) {
      localStorage.setItem(
        "coffeeCart",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
      coffeeCart = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: ACTIONS.GET_COFFEE_CART,
      payload: coffeeCart,
    });
  };

  // ! CREATE COFFEE CART
  const addProductToCoffeeCart = (coffee) => {
    let coffeeCart = getLocalStorage();
    if (!coffeeCart) {
      coffeeCart = {
        products: [],
        totalPrice: 0,
      };
    }
    let NewCoffeeProduct = {
      item: coffee,
      count: 1,
      subPrice: coffee.price,
    };
    let coffeeProductToFind = coffeeCart.products.filter(
      (elem) => elem.item.id === coffee.id
    );
    if (coffeeProductToFind.length === 0) {
      coffeeCart.products.push(NewCoffeeProduct);
    } else {
      coffeeCart.products = coffeeCart.products.filter(
        (elem) => elem.item.id !== coffee.id
      );
    }
    coffeeCart.totalPrice = totalPriceResult(coffeeCart.products);
    localStorage.setItem("coffeeCart", JSON.stringify(coffeeCart));
    dispatch({
      type: ACTIONS.GET_COFFEE_CART,
      payload: coffeeCart,
    });
  };
  const checkProductInCoffeeCart = (id) => {
    let coffeeCart = getLocalStorage();
    if (coffeeCart) {
      let newCoffeeCart = coffeeCart.products.filter(
        (elem) => elem.item.id === id
      );
      return newCoffeeCart.length > 0 ? true : false;
    }
  };
  const changeProductCountInCoffeeCart = (id, count) => {
    let coffeeCart = getLocalStorage();
    coffeeCart.products = coffeeCart.products.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = subPriceResult(elem);
      }
      return elem;
    });
    coffeeCart.totalPrice = totalPriceResult(coffeeCart.products);
    localStorage.setItem("coffeeCart", JSON.stringify(coffeeCart));
    dispatch({
      type: ACTIONS.GET_COFFEE_CART,
      payload: coffeeCart,
    });
  };
  //! DELETE PRODUCT IN  COFFEE CART
  const deleteProductInCoffeeCart = (id) => {
    let coffeeCart = getLocalStorage();
    coffeeCart.products = coffeeCart.products.filter(
      (elem) => elem.item.id !== id
    );
    coffeeCart.totalPrice = totalPriceResult(coffeeCart.products);
    localStorage.setItem("coffeeCart", JSON.stringify(coffeeCart));
    dispatch({
      type: ACTIONS.GET_COFFEE_CART,
      payload: coffeeCart,
    });
  };

  //! PAYMENT INFO
  const setPaymentInfo = (paymentInfo) => {
    dispatch({
      type: ACTIONS.SET_PAYMENT_INFO,
      payload: paymentInfo,
    });
  };
  const values = {
    coffeeCart: state.coffeeCart,
    getCoffeeCart,
    addProductToCoffeeCart,
    checkProductInCoffeeCart,
    changeProductCountInCoffeeCart,
    deleteProductInCoffeeCart,
    getProductsCountInCoffeeCart,
    setPaymentInfo,
    paymentInfo: state.paymentInfo,
  };

  return (
    <coffeeCartContext.Provider value={values}>
      {children}
    </coffeeCartContext.Provider>
  );
};
export default CartContext;
