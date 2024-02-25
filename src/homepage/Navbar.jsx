import React, { useEffect, useState } from "react";
import logo from "./assets/logo (1).png";
import registration from "./assets/mdi-light_account.png";
import shoping from "./assets/ph_shopping-cart-light.png";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useCoffeeCart } from "../context/CartContext";
import { useProducts } from "../context/ProductContext";
import { Badge, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import "./aidana.scss";
import { useLike } from "../context/LikeContext";
import ModalComponent from "./ModalComponent";
import map from "./assets/map-img/6555118.png";

import micpicture from "../homepage/assets/kisspng-voice-over-google-voice-microphone-sound-change-vo-mic-icon-5b4f9f51337303.1524658615319447852107.jpg";
const { webkitSpeechRecognition } = window;

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const { categories, getCategories, fetchByParams, getProducts } =
    useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const navigate = useNavigate();

  useEffect(() => {
    setSearchParams({
      q: search,
    });
    getProducts();
  }, [search]);

  useEffect(() => {
    getCategories();
  }, []);

  const { addProductToCoffeeCart, getProductsCountInCoffeeCart } =
    useCoffeeCart();
  const [badgeCount, setBadgeCount] = useState(0);

  useEffect(() => {
    setBadgeCount(getProductsCountInCoffeeCart());
  }, [addProductToCoffeeCart]);

  const [isActive, setIsActive] = useState(false);
  const { likeCoffee } = useLike();

  const likeCount = Array.isArray(likeCoffee) ? likeCoffee.length : 0;

  // ! Voice search
  function startDictation() {
    if (window.hasOwnProperty("webkitSpeechRecognition")) {
      let recognition = new webkitSpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";
      recognition.start();

      recognition.onresult = function (e) {
        const transcript = e.results[0][0].transcript;

        document.getElementById("transcript").value = transcript.toLowerCase(); // Отображение текста речи в инпуте
        setSearch(transcript); // Обновление состояния search
        console.log(transcript);
        recognition.stop();
      };

      // recognition.onresult = function (e) {
      //   const transcript = e.results[0][0].transcript;
      //   const inputElement = document.getElementById("transcript");
      //   inputElement.value = transcript.toLowerCase(); // Установка значения инпута
      //   setSearch(transcript); // Обновление состояния search
      //   inputElement.dispatchEvent(new Event("input", { bubbles: true })); // Вызов события input
      //   recognition.stop();
      // };

      recognition.onerror = function (e) {
        recognition.stop();
      };
    }
  }

  const handleMicClick = (e) => {
    // e.preventDefault();
    startDictation();
    console.log("button clicked");
  };

  return (
    // style={{ position: "absolute", zIndex: "1" }}
    <div>
      <nav style={{ marginLeft: "-8%" }} className="nav">
        <img className="nav__logo" src={logo} alt="" />
        <div className="nav-div">
          <div
            style={{ marginLeft: "-200%" }}
            onClick={(e) => setIsActive(!isActive)}
          >
            <SearchIcon
              sx={{
                // paddingLeft: "-600px",
                color: "#f7e5da",
                width: "80",
                marginTop: "3px",
                cursor: "pointer",
              }}
            />
          </div>
          <IconButton
            sx={{ marginTop: "-2%" }}
            size="large"
            color="inherit"
            className="like-icon-button"
          >
            <Badge badgeContent={likeCount}>
              <FavoriteIcon color="error" />
            </Badge>
          </IconButton>
          <NavLink to={"/favorite"}>
            <img
              style={{ width: "35px", height: "35px", marginTop: "-5px" }}
              src="https://cdn.icon-icons.com/icons2/2309/PNG/512/star_favourite_icon_141889.png"
              alt=""
            />
          </NavLink>
          <img className="nav__img" src={registration} alt="" />
          <NavLink>
            <img className="nav__img" src={registration} alt="" />
          </NavLink>
          <div>
            <img
              onClick={openModal}
              style={{ width: "30px", height: "30px" }}
              src={map}
              alt=""
            />

            <ModalComponent isOpen={modalIsOpen} onRequestClose={closeModal} />
          </div>

          <NavLink to={"/cart"}>
            <div className="cart-container">
              <img className="nav__img cart shake" src={shoping} alt="" />
              {badgeCount > 0 && (
                <span className="cart-badge">{badgeCount}</span>
              )}
            </div>
          </NavLink>
        </div>
        <div style={{ marginLeft: "-60%" }} className="nav_menu_">
          <div>
            <Link style={{ textDecorationLine: "none" }} to={"/"}>
              <span>Home</span>
            </Link>
            <Link style={{ textDecorationLine: "none" }} to={"/menu"}>
              <span>Menu</span>
            </Link>
            <Link style={{ textDecorationLine: "none" }} to={"./products"}>
              <span>Product</span>
            </Link>
          </div>
        </div>
      </nav>
      ;
      <div>
        {isActive && (
          <div className="for_search">
            <input
              id="transcript"
              placeholder="Search..."
              type="search"
              onChange={(e) => {
                setSearch(e.target.value);
                console.log(e.target.value);
              }}
            />
            <button onClick={handleMicClick}>
              <img
                style={{
                  width: "26px",
                  height: "26px",
                  backgroundColor: "none",
                  borderRadius: "40px",
                }}
                src={micpicture}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
