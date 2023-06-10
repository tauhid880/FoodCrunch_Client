import React from "react";
import { useEffect } from "react";
import useTitle from "../../Hook/useTitle";
import ShortService from "../Services/ShortService";
import About from "./About";
import Banner from "./Banner";
import Gallery from "./Gallery";
import TopFood from "./TopFood/TopFood";
import OfferUpdate from "./OfferUpdate/OfferUpdate";
import Count from "./Count";
import FAQ from "../FAQ/FAQ";
import Cta from "./Cta";
import ContactUs from "./ContactUs";

const Home = () => {
  useTitle("Home");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner></Banner>
      <ShortService></ShortService>
      <About></About>
      <Gallery></Gallery>
      <TopFood></TopFood>
      <Count></Count>
      <FAQ></FAQ>
      <OfferUpdate></OfferUpdate>
      <ContactUs></ContactUs>
      <Cta></Cta>
    </div>
  );
};

export default Home;
