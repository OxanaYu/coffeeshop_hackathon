import { createContext, useReducer, useContext, useEffect } from "react";
import { ACTIONS } from "../helpers/const";

const bmContext = createContext();

export const useBM = () => useContext(bmContext);

const INIT_STATE = {
  bookmarks: JSON.parse(localStorage.getItem("bm")) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_MB:
      const newState = { ...state, bookmarks: action.payload };
      localStorage.setItem("bm", JSON.stringify(newState.bookmarks));
      return newState;
    default:
      return state;
  }
};

const FavoriteContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  console.log(state.bookmarks);

  const checkPostInBm = (id) => {
    return state.bookmarks.find((elem) => elem.id === id) || null;
  };

  useEffect(() => {
    localStorage.setItem("bm", JSON.stringify(state.bookmarks));
  }, [state.bookmarks]);

  //   //! DELETE FROM CART
  const deletePostFromBM = (id) => {
    const updatedBookmarks = state.bookmarks.filter((elem) => elem.id !== id);

    localStorage.setItem("bm", JSON.stringify(updatedBookmarks));
    dispatch({
      type: ACTIONS.GET_MB,
      payload: updatedBookmarks,
    });
  };

  const values = {
    checkPostInBm,
    deletePostFromBM,
    bookmarks: state.bookmarks,
  };
  return <bmContext.Provider value={values}>{children}</bmContext.Provider>;
};

export default FavoriteContext;
