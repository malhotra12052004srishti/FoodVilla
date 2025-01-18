/**
 * Header
 *   Logo
 *   Nav Items
 *   Cart
 * Body
 *   Search Bar
 *   Image Carousel using Config Driven UI
 *   Restraunt List
 *   Restraunt Cards
 *     Image
 *     Name
 *     Rating
 *     Cusines
 * Footer
 *   Links
 *   CopyRight
 */

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
