import Face from "./assets/MainContentBlock1/Image-ourstory.png";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Equipment from "./assets/MainContentBlock1/Equipment.png";
import Type from "./assets/MainContentBlock1/Type.png";
import Take from "./assets/MainContentBlock1/TakeAway.png";
import Beans from "./assets/MainContentBlock1/Beans.png";
import Pastry from "./assets/MainContentBlock1/Pastry.png";
import Offer from "./assets/MainContentBlock1/offer.png";
import LittleBean1 from "./assets/MainContentBlock1/littlebean1.png";
import LittleBean2 from "./assets/MainContentBlock1/littlebean2.png";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
const MainContentBlock1 = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleMore = () => {
    setShowMore(!showMore);
  };
  const navigate = useNavigate();
  const [modalIsOpenEquipment, setModalIsOpenEquipment] = useState(false);
  const [modalIsOpenType, setModalIsOpenType] = useState(false);
  const [modalIsOpenTake, setModalIsOpenTake] = useState(false);
  const [modalIsOpenBeansVariant, setModalIsOpenBeansVariant] = useState(false);
  const [modalIsOpenPastry, setModalIsOpenPastry] = useState(false);

  const openModalEquipment = () => {
    setModalIsOpenEquipment(true);
  };
  const openModalType = () => {
    setModalIsOpenType(true);
  };
  const openModalTake = () => {
    setModalIsOpenTake(true);
  };
  const openModalBeansVariant = () => {
    setModalIsOpenBeansVariant(true);
  };
  const openModalPastry = () => {
    setModalIsOpenPastry(true);
  };
  const closeModal = () => {
    setModalIsOpenEquipment(false);
    setModalIsOpenType(false);
    setModalIsOpenTake(false);
    setModalIsOpenBeansVariant(false);
    setModalIsOpenPastry(false);
  };
  const handleModalButtonClick = (path) => {
    navigate(path);
    closeModal();
  };
  return (
    <div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="story__container">
            <img src={LittleBean1} alt="" id="litbean" />
            <div>
              <img src={Face} alt="Face" />
            </div>
            <img src={LittleBean1} alt="" id="litbean2" />
            <img src={LittleBean2} alt="" id="litbean3" />
            <div className="desc__container">
              <h2>Our Story</h2>
              <p>
                Eliza Is An Online Coffee Store That Offers The Widest Selection
                Of Specialty Coffees And Teas From Around The World. From
                Medium-Dark Roast Single Origin To Flavored Espresso Beans, They
                Offer A Variety Of Ethically Sourced Products To Tantalize Any
                Customer’s Palate. For Those Looking For Unique Brewing
                Equipment, Eliza Also Carries A Full Range Of Quality Espresso
                Makers, Grinders, Brewers
                {showMore && (
                  <span>
                    , French Presses And More. On Top Of All That, Their
                    Baristas Are Highly Trained Professionals Who Know Exactly
                    How To Make The Perfect Cup For Each Customer. Whether It's
                    For Home Or Business Use, Eliza Has You Covered - All
                    Conveniently Available At The Click Of A Button!
                  </span>
                )}
              </p>
              <div>
                <p onClick={toggleMore} className="p_more">
                  {showMore ? "Less" : "More"}{" "}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="story__container">
            <img src={LittleBean1} alt="" id="litbean" />
            <div>
              <img src={Face} alt="Face" />
            </div>
            <img src={LittleBean1} alt="" id="litbean2" />
            <img src={LittleBean2} alt="" id="litbean3" />
            <div className="desc__container">
              <h2>Our Story</h2>
              <p>
                Eliza Is An Online Coffee Store That Offers The Widest Selection
                Of Specialty Coffees And Teas From Around The World. From
                Medium-Dark Roast Single Origin To Flavored Espresso Beans, They
                Offer A Variety Of Ethically Sourced Products To Tantalize Any
                Customer’s Palate. For Those Looking For Unique Brewing
                Equipment, Eliza Also Carries A Full Range Of Quality Espresso
                Makers, Grinders, Brewers{" "}
                {showMore && (
                  <span>
                    , French Presses And More. On Top Of All That, Their
                    Baristas Are Highly Trained Professionals Who Know Exactly
                    How To Make The Perfect Cup For Each Customer. Whether It's
                    For Home Or Business Use, Eliza Has You Covered - All
                    Conveniently Available At The Click Of A Button!
                  </span>
                )}
              </p>
              <div>
                <p onClick={toggleMore} className="p_more">
                  {showMore ? "Less" : "More"}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="story__container">
            <img src={LittleBean1} alt="" id="litbean" />
            <div>
              <img src={Face} alt="Face" />
            </div>
            <img src={LittleBean1} alt="" id="litbean2" />
            <img src={LittleBean2} alt="" id="litbean3" />
            <div className="desc__container">
              <h2>Our Story</h2>
              <p>
                Eliza Is An Online Coffee Store That Offers The Widest Selection
                Of Specialty Coffees And Teas From Around The World. From
                Medium-Dark Roast Single Origin To Flavored Espresso Beans, They
                Offer A Variety Of Ethically Sourced Products To Tantalize Any
                Customer’s Palate. For Those Looking For Unique Brewing
                Equipment, Eliza Also Carries A Full Range Of Quality Espresso
                Makers, Grinders, Brewers{" "}
                {showMore && (
                  <span>
                    , French Presses And More. On Top Of All That, Their
                    Baristas Are Highly Trained Professionals Who Know Exactly
                    How To Make The Perfect Cup For Each Customer. Whether It's
                    For Home Or Business Use, Eliza Has You Covered - All
                    Conveniently Available At The Click Of A Button!
                  </span>
                )}
              </p>
              <div>
                <p onClick={toggleMore} className="p_more">
                  {showMore ? "Less" : "More"}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="services__content">
        <h2
          style={{
            fontFamily: "Dancing Script",
            color: "white",
            fontSize: "64px",
            fontWeight: 700,
            textAlign: "center",
            marginTop: "120px",
          }}
        >
          Services
        </h2>
        <div className="service_img">
          <div onClick={openModalEquipment}>
            <img src={Equipment} alt="Equipment" />
          </div>
          <div onClick={openModalType}>
            <img src={Type} alt="Type of Coffee" />
          </div>
          <div onClick={openModalTake}>
            <img src={Take} alt="" />
          </div>
          <div onClick={openModalBeansVariant}>
            <img src={Beans} alt="" />
          </div>
          <div onClick={openModalPastry}>
            <img src={Pastry} alt="" />
          </div>
          <Modal
            isOpen={modalIsOpenEquipment}
            onRequestClose={closeModal}
            contentLabel="Equipment Modal"
            className="Modal"
            overlayClassName="Overlay"
          >
            <div className="ModalContent">
              <h2
                style={{
                  fontFamily: "Dancing Script",
                  textAlign: "center",
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "rgba(248, 228, 190, 1)",
                }}
              >
                Elevate Your Business with Elza Coffee Equipment!
              </h2>
              <p
                style={{
                  fontFamily: "Andika",
                  color: "rgba(248, 228, 190, 1)",
                }}
              >
                Welcome to Elza Coffee, where innovation meets excellence. From
                sleek solutions for small ventures to powerful systems for
                industrial giants, our equipment is designed to elevate your
                operations.
              </p>
              <p
                style={{
                  fontFamily: "Andika",
                  color: "rgba(248, 228, 190, 1)",
                }}
              >
                Click below to explore our full range and step into a realm
                where possibilities are limitless. Your journey to success
                starts here!
              </p>
              <button
                className="ModalButton"
                onClick={() => handleModalButtonClick("/products")}
              >
                EXPLORE OUR STORE
              </button>
            </div>
          </Modal>
          <Modal
            isOpen={modalIsOpenType}
            onRequestClose={closeModal}
            contentLabel="Type Modal"
            className="Modal"
            overlayClassName="Overlay"
          >
            <div className="ModalContent">
              <h2
                style={{
                  fontFamily: "Dancing Script",
                  textAlign: "center",
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "rgba(248, 228, 190, 1)",
                }}
              >
                Discover Exquisite Coffee Varieties!
              </h2>
              <p
                style={{
                  fontFamily: "Andika",
                  color: "rgba(248, 228, 190, 1)",
                }}
              >
                Welcome to a journey through the world of coffee, where each sip
                tells a story of flavor and tradition. At Elza Coffee, we offer
                a curated selection of coffee types sourced from the finest
                regions across the globe.
              </p>
              <p
                style={{
                  fontFamily: "Andika",
                  color: "rgba(248, 228, 190, 1)",
                }}
              >
                From the robust richness of dark roasts to the delicate nuances
                of single-origin blends, our coffee collection is a testament to
                craftsmanship and passion. Whether you seek the bold awakening
                of an espresso or the comforting warmth of a latte, we have
                something to tantalize every palate.
              </p>
              <p
                style={{
                  fontFamily: "Andika",
                  color: "rgba(248, 228, 190, 1)",
                }}
              >
                Click below to explore our full range and embark on a sensory
                adventure. Your perfect cup awaits!
              </p>
              <button
                className="ModalButton"
                onClick={() => handleModalButtonClick("/products")}
              >
                EXPLORE OUR STORE
              </button>
            </div>
          </Modal>
          <Modal
            isOpen={modalIsOpenTake}
            onRequestClose={closeModal}
            contentLabel="Take A Way"
            className="Modal"
            overlayClassName="Overlay"
          >
            <div className="ModalContent">
              <h2
                style={{
                  fontFamily: "Dancing Script",
                  textAlign: "center",
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "rgba(248, 228, 190, 1)",
                }}
              >
                Enjoy Your Coffee Anywhere!
              </h2>
              <p
                style={{
                  fontFamily: "Andika",
                  color: "rgba(248, 228, 190, 1)",
                }}
              >
                Experience the convenience of Elza Coffee's takeaway service,
                where every sip of your favorite brew can accompany you on your
                journey. Whether you're heading to work, meeting friends, or
                simply exploring the world around you, our takeaway option
                ensures that the essence of exceptional coffee is never far
                away.
              </p>
              <p
                style={{
                  fontFamily: "Andika",
                  color: "rgba(248, 228, 190, 1)",
                }}
              >
                With a seamless ordering process and a commitment to quality, we
                make it easy for you to enjoy the perfect cup of coffee wherever
                you go. Simply select your preferred blend, and let us take care
                of the rest.
              </p>
              <p
                style={{
                  fontFamily: "Andika",
                  color: "rgba(248, 228, 190, 1)",
                }}
              >
                Click below to explore our menu and indulge in the luxury of
                great coffee on the move.
              </p>
              <button
                className="ModalButton"
                onClick={() => handleModalButtonClick("/menu")}
              >
                EXPLORE OUR MENU
              </button>
            </div>
          </Modal>
          <Modal
            isOpen={modalIsOpenBeansVariant}
            onRequestClose={closeModal}
            contentLabel="Beans Variant"
            className="Modal"
            overlayClassName="Overlay"
          >
            <div className="ModalContent">
              <h2
                style={{
                  fontFamily: "Dancing Script",
                  textAlign: "center",
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "rgba(248, 228, 190, 1)",
                }}
              >
                Explore Our Bean Varieties!
              </h2>
              <p
                style={{
                  fontFamily: "Andika",
                  color: "rgba(248, 228, 190, 1)",
                }}
              >
                Dive into the world of coffee with Elza Coffee's exquisite bean
                varieties. Each bean is a testament to the richness of flavor
                and the diversity of origins. From the earthy depths of South
                American soils to the lush landscapes of Africa, our beans are
                sourced from the finest plantations around the globe.
              </p>
              <p
                style={{
                  fontFamily: "Andika",
                  color: "rgba(248, 228, 190, 1)",
                }}
              >
                With a dedication to quality and sustainability, we offer a
                range of bean varieties to suit every taste and preference.
                Whether you prefer the bold intensity of dark roasts or the
                nuanced complexity of light blends, our beans promise an
                unparalleled coffee experience.
              </p>
              <p
                style={{
                  fontFamily: "Andika",
                  color: "rgba(248, 228, 190, 1)",
                }}
              >
                Click below to discover the artistry behind our bean selection
                and elevate your coffee journey to new heights.
              </p>
              <button
                className="ModalButton"
                onClick={() => handleModalButtonClick("/products")}
              >
                EXPLORE OUR SELECTION
              </button>
            </div>
          </Modal>
          <Modal
            isOpen={modalIsOpenPastry}
            onRequestClose={closeModal}
            contentLabel="Pastry"
            className="Modal"
            overlayClassName="Overlay"
          >
            <div className="ModalContent">
              <h2
                style={{
                  fontFamily: "Dancing Script",
                  textAlign: "center",
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "rgba(248, 228, 190, 1)",
                }}
              >
                Indulge in Delightful Pastries!
              </h2>
              <p
                style={{
                  fontFamily: "Andika",
                  color: "rgba(248, 228, 190, 1)",
                }}
              >
                Treat yourself to a moment of indulgence with Elza Coffee's
                delectable pastries. Handcrafted with care and precision, each
                pastry is a delightful fusion of flavors and textures that will
                tantalize your taste buds.
              </p>
              <p
                style={{
                  fontFamily: "Andika",
                  color: "rgba(248, 228, 190, 1)",
                }}
              >
                From flaky croissants to decadent chocolate treats, our pastry
                selection is designed to satisfy every craving. Whether you're
                starting your day with a buttery delight or ending it with a
                sweet indulgence, our pastries are the perfect complement to
                your coffee experience.
              </p>
              <p
                style={{
                  fontFamily: "Andika",
                  color: "rgba(248, 228, 190, 1)",
                }}
              >
                Click below to explore our pastry offerings and elevate your
                coffee break to a whole new level of enjoyment.
              </p>
              <button
                className="ModalButton"
                onClick={() => handleModalButtonClick("/menu")}
              >
                EXPLORE OUR PASTRIES
              </button>
            </div>
          </Modal>
        </div>
      </div>
      <div className="offer__container">
        <div className="text__container">
          <h2>Offer</h2>
          <h3>Up To 50% Off</h3>
          <p>
            At Our Cafe, We Take Pride In Providing Our Customers With The Best
            Coffee Around. Our Carefully-Selected Coffees Come From Some Of The
            Most Renowned Coffee Growing Regions In The World, Ensuring That
            Each Cup Is Unrivaled In Flavor And Freshness.
          </p>
          <button className="shop-button__offer">Shop Now</button>
        </div>
        <div className="text__container-right">
          <img src={Offer} alt="Offer" />
        </div>
      </div>
    </div>
  );
};
export default MainContentBlock1;
