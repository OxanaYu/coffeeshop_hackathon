import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./homepage/Navbar";
import Recomended from "./homepage/Recomended";
import MapComponent from "./homepage/MapComponent";

import AuthPage from "./pages/AuthPage";
import LoginForm from "./auth/login/LoginForm";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
