import React, { useState, useEffect } from "react";
import { useProducts } from "../../context/ProductContext";
import { NavLink, useNavigate } from "react-router-dom";
import "./product.scss";
import { useCoffeeCart } from "../../context/CartContext";
import { useBM } from "../../context/FavoriteContext";
import Like from "./img/another like.svg";
import { useLike } from "../../context/LikeContext";
import Details from "./Details";
import shoping from "./img/ph_shopping-cart-light.png";
import { useAuth } from "../../context/AuthContext";
import { ADMIN } from "../../helpers/const";

const ProductCard = ({ elem }) => {
  const { addPostToBookmarks, checkPostInBm, checkProductInCoffeeCart } =
    useBM();
  const { deleteProduct } = useProducts();
  const [isCoffeeLike, setIsCoffeeLike] = useState(false);
  const { likeCoffee, plusLikeCoffee } = useLike();

  const { addProductToCoffeeCart, deleteProductInCoffeeCart } = useCoffeeCart();
  const navigate = useNavigate();
  const { user } = useAuth();

  // Проверяем, есть ли данный элемент в списке лайков при монтировании компонента
  useEffect(() => {
    // Преобразуем значение likeCoffee в массив, если оно не является массивом
    setIsCoffeeLike(Array.isArray(likeCoffee) && likeCoffee.includes(elem.id));
  }, [likeCoffee, elem.id]);

  const handleClick = (e) => {
    deleteProduct(elem.id);
    deleteProductInCoffeeCart(elem.id);
    e.preventDefault();
  };

  const handleAddToBookmarks = (e) => {
    e.preventDefault();
    const postInBm = checkPostInBm(elem.id);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    addProductToCoffeeCart(elem);
  };

  const handleLikeClick = () => {
    const updatedLikeCoffee = isCoffeeLike
      ? likeCoffee.filter((id) => id !== elem.id)
      : [...(Array.isArray(likeCoffee) ? likeCoffee : []), elem.id];
    setIsCoffeeLike(!isCoffeeLike);
    plusLikeCoffee(updatedLikeCoffee);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };
  return (
    <form className="form_card">
      <div className="card_content">
        <div onClick={handleOpen}>
          <img src={elem.img} alt="" />
          <p>{elem.title}</p>
          <p>{elem.description}</p>
          <p>{elem.category}</p>
          <p>{elem.price}$</p>
        </div>
        {user.email === ADMIN ? (
          <div>
            <button onClick={handleClick}>Delete</button>
            <button onClick={() => navigate(`/edit/${elem.id}`)}>Edit</button>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <div>
              <NavLink to={"/comments"}>
                <img
                  style={{
                    width: "50px",
                    height: "30px",
                    cursor: "pointer",
                    marginBottom: "-10%",
                  }}
                  src="https://svgsilh.com/svg/29435-ff9800.svg"
                  alt=""
                />
              </NavLink>
            </div>
            <div>
              <img
                onClick={handleAddToCart}
                style={{
                  width: "40px",
                  height: "40px",
                  cursor: "pointer",
                }}
                src="https://cdn.icon-icons.com/icons2/1055/PNG/128/17-cart-cat_icon-icons.com_76693.png"
                alt=""
              />
            </div>
            <div>
              <img
                onClick={(e) => {
                  // Вызываем функцию для добавления в закладки
                  handleAddToBookmarks(e);

                  // Получаем текущий массив из локального хранилища (если он существует)
                  const existingBookmarks =
                    JSON.parse(localStorage.getItem("bm")) || [];

                  // Добавляем текущий элемент (elem) к массиву
                  existingBookmarks.push(elem);

                  // Сохраняем обновленный массив в локальное хранилище
                  localStorage.setItem("bm", JSON.stringify(existingBookmarks));
                }}
                style={{
                  width: "50px",
                  height: "50px",
                  cursor: "pointer",
                }}
                src="https://cdn.icon-icons.com/icons2/2309/PNG/512/star_favourite_icon_141889.png"
                alt=""
              />
            </div>
            <img
              style={{
                width: "15%",
                height: "15%",
                cursor: "pointer",
              }}
              src={
                isCoffeeLike
                  ? Like
                  : "https://svgsilh.com/svg/2438744-ff9800.svg"
              }
              alt=""
              onClick={handleLikeClick}
            />
          </div>
        )}
      </div>
      <Details open={open} handleClose={handleClose} elem={elem} />
    </form>
  );
};

export default ProductCard;
