import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Blog from "./Blog";
import GoogleAd from "../ads/GoogleAd";

export default function Home() {
  return (
    <>
      <Header />
      <Blog />
      <Footer />{" "}
    </>
  );
}
