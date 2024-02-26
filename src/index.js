import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContext from "./context/ProductContext";
import CartContext from "./context/CartContext";
import AuthContextProvider from "./context/AuthContext";
import FavoriteContext from "./context/FavoriteContext";
import LikeContext from "./context/LikeContext";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductContext>
          <FavoriteContext>
            <CartContext>
              <LikeContext>
                <App />
              </LikeContext>
            </CartContext>
          </FavoriteContext>
        </ProductContext>
      </Suspense>
    </AuthContextProvider>
  </BrowserRouter>
);
