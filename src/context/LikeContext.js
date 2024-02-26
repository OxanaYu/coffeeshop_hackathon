import React, { createContext, useContext, useReducer, useEffect } from "react";
import { ACTIONS } from "../helpers/const";

const likeContext = createContext();
export const useLike = () => useContext(likeContext);

const INIT_STATE = {
  likeCoffee: JSON.parse(localStorage.getItem("likeCoffee") || "[]"),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.PLUS_LIKE_COFFEE:
      const newLike = { ...state, likeCoffee: action.payload };
      localStorage.setItem("likeCoffee", JSON.stringify(newLike.likeCoffee));
      return newLike;
    default:
      return state;
  }
};

const LikeContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  console.log(state.likeCoffee);

  useEffect(() => {
    const storedLikeCoffee = JSON.parse(
      localStorage.getItem("likeCoffee") || "[]"
    );
    if (storedLikeCoffee.length > 0) {
      dispatch({ type: ACTIONS.PLUS_LIKE_COFFEE, payload: storedLikeCoffee });
    }
  }, []);

  const values = {
    likeCoffee: state.likeCoffee,
    plusLikeCoffee: (updatedLikeCoffee) =>
      dispatch({ type: ACTIONS.PLUS_LIKE_COFFEE, payload: updatedLikeCoffee }),
  };

  return <likeContext.Provider value={values}>{children}</likeContext.Provider>;
};

export default LikeContext;
