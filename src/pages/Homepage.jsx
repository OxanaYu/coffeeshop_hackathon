import React from "react";
import Navbar from "../homepage/Navbar";
import Header from "../homepage/Header";
import MainContentBlock1 from "../homepage/MainContentBlock1";
import ReserveTable from "../homepage/ReserveTable";
import Recomended from "../homepage/Recomended";
import PapularMenu from "../homepage/PapularMenu";
import OurBlog from "../homepage/OurBlog";
import ReviewSection from "../homepage/ReviewSection";
import Subscribe from "../homepage/Subscribe";
import Footer from "../homepage/Footer";

const Homepage = () => {
  return (
    <div>
      <Header />
      <MainContentBlock1 />
      <ReserveTable />
      <Recomended />
      <PapularMenu />
      <OurBlog />
      <ReviewSection />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Homepage;
