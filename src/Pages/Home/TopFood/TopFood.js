import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TopFoodCard from "./TopFoodCard";
import { useEffect } from "react";
import { useState } from "react";
const TopFood = () => {
  //   const products = [
  //     {
  //       id: 1,
  //       name: "Test 1",
  //       desc: "Bought another 10 chairs to 'top up' on the 50 we bought last autumn.Order went through quickly and easily.Then Beth phoned to provide details of the delivery - which was quicker than I had expected.",
  //       Price: "10",
  //       Image:
  //         "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  //     },
  //     {
  //       id: 2,
  //       name: "Test 2",
  //       desc: "always good service. have had several orders from here good quality and always keep you updated on your order.",
  //       price: "20",
  //       Image:
  //         "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  //     },
  //     {
  //       id: 3,
  //       name: "Test 3",
  //       desc: "Great service, great quality would recommend without hesitation. Thank you Trent Furniture we will use you again in the future",
  //       price: "30",
  //       Image:
  //         "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
  //     },
  //     {
  //       id: 4,
  //       name: "Test 4",
  //       desc: "Great service, great quality would recommend without hesitation. Thank you Trent Furniture we will use you again in the future",
  //       price: "30",
  //       Image:
  //         "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
  //     },
  //     {
  //       id: 5,
  //       name: "Test 5",
  //       desc: "Great service, great quality would recommend without hesitation. Thank you Trent Furniture we will use you again in the future",
  //       price: "30",
  //       Image:
  //         "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
  //     },
  //     {
  //       id: 6,
  //       name: "Test 6",
  //       desc: "Great service, great quality would recommend without hesitation. Thank you Trent Furniture we will use you again in the future",
  //       price: "30",
  //       Image:
  //         "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
  //     },
  //   ];

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`https://food-crunch-server.vercel.app/services?size=6`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data);
        window.scrollTo(0, 0);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="mt-[50px] md:mt-[100px]  md:mb-0 p-3 bg-[#F8FFDB]"
    >
      <div className="text-4xl font-bold mb-5 text-center">
        You Might Also Like
      </div>
      <Carousel responsive={responsive} itemClass="px-[10px]" infinite={true}>
        {services.map((service) => (
          <TopFoodCard key={service._id} serviceItem={service}></TopFoodCard>
        ))}
      </Carousel>
    </div>
  );
};

export default TopFood;
