import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import EditPage from "../pages/EditPage";
import ProductPage from "../pages/ProductPage";
import Menu from "../homepage/Menu";
import PaymentForm from "../components/paymentForm/PaymentForm";
import Comments from "../homepage/Comments";
import Homepage from "../pages/Homepage";
import Cart from "../components/cart/Cart";
import CartWithPayment from "../components/paymentForm/CartWithPayment";
import { useAuth } from "../context/AuthContext";
import CartPage from "../pages/CartPage";
import Favorite from "../homepage/Favorite";
import Registration from "../auth/registration/Registration";
import LoginForm from "../auth/login/LoginForm";
import { ADMIN } from "../helpers/const";

const MainRoutes = () => {
  const { user } = useAuth();

  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <Homepage /> },
    { id: 2, link: "/products", element: <ProductPage /> },
    { id: 3, link: "/menu", element: <Menu /> },
    { id: 4, link: "/cart", element: <CartPage /> },
    { id: 5, link: "/pay", element: <CartWithPayment /> },
    { id: 6, link: "/comments", element: <Comments /> },
    { id: 7, link: "/favorite", element: <Favorite /> },
    { id: 8, link: "/register", element: <Registration /> },
    { id: 9, link: "/login", element: <LoginForm /> },
    { id: 10, link: "/", element: <LoginForm /> },
  ];

  const PRIVATE_ROUTES = [
    { id: 10, link: "/admin", element: <AdminPage /> },
    { id: 11, link: "/edit/:id", element: <EditPage /> },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((elem) => (
        <Route path={elem.link} key={elem.id} element={elem.element} />
      ))}
      {user
        ? PRIVATE_ROUTES.map((elem) => (
            <Route
              key={elem.id}
              path={elem.link}
              element={
                user.email === ADMIN ? elem.element : <Navigate to="*" />
              }
            />
          ))
        : null}
    </Routes>
  );
};

export default MainRoutes;
