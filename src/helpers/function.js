export const getLocalStorage = () => {
  const coffeeCart = JSON.parse(localStorage.getItem("coffeeCart"));
  return coffeeCart;
};

export const totalPriceResult = (products) => {
  const totalPrice = products.reduce((acc, curr) => acc + curr.subPrice, 0);
  return totalPrice;
};

export const getProductsCountInCoffeeCart = () => {
  let coffeeCart = getLocalStorage();
  return coffeeCart ? coffeeCart.products.length : 0;
};
export const getLikeCount = () => {
  let likeCoffee = getLocalStorage();
  return likeCoffee ? likeCoffee.likeCoffee : 0;
};

export const subPriceResult = (elem) => {
  return elem.item.price * elem.count;
};

//функция для подсчета постов в избранном
export const getLocalStorage2 = () => {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  return bookmarks;
};
export const getPostsCountInBookmark = () => {
  let bookmarks = getLocalStorage2();
  return bookmarks ? bookmarks.products.length : 0;
};
