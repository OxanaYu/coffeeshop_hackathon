import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import EditPage from "../pages/EditPage";
import ProductPage from "../pages/ProductPage";
import Menu from "../homepage/Menu";

import PaymentForm from "../components/paymentForm/PaymentForm";
import Comments from "../homepage/Comments";
import Homepage from "../pages/Homepage";
import Navbar from "../homepage/Navbar";
import CartPage from "../pages/CartPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <Homepage /> },
    { id: 2, link: "/edit/:id", element: <EditPage /> },
    { id: 3, link: "/admin", element: <AdminPage /> },
    { id: 4, link: "/products", element: <ProductPage /> },
    { id: 5, link: "/menu", element: <Menu /> },
    { id: 6, link: "/cart", element: <CartPage /> },
    { id: 7, link: "/payment", element: <PaymentForm /> },
    { id: 8, link: "/comments", element: <Comments /> },
    // { id: 9, link: "/login", element: <Comments /> },
    // { id: 10, link: "/register", element: <Comments /> },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((elem) => (
        <Route path={elem.link} key={elem.id} element={elem.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
