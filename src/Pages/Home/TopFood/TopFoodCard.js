import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight, FaStar } from "react-icons/fa";
const TopFoodCard = ({ serviceItem }) => {
  const { rating, price, service, image, description, _id } = serviceItem;
  const navigate = useNavigate();
  return (
    <div className="overflow-hidden transition-shadow duration-300 h-[500px] max-w-[420px] bg-gradient-to-t from-[#fdbde4] to-[#fafbc8] rounded-lg shadow-xl  text-center mb-7">
      <img
        src={image}
        className="h-60 w-96 m-auto rounded cursor-pointer p-5 object-cover"
        alt=""
      />

      <div className="py-2">
        <Link
          to="/"
          aria-label="Article"
          className="inline-block mb-1 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
          <p className="text-2xl font-bold leading-5 capitalize">{service}</p>
        </Link>
        <p className="text-black px-5 py-2 text-justify">
          {description.length > 100
            ? description.slice(0, 100) + "....."
            : description}
        </p>
        <h3 className="text-xl font-semibold">Price : ${price}</h3>
        <div className="flex items-center justify-center py-2">
          <button
            onClick={() => navigate(`/serviceDetails/${_id}`)}
            className="bg-gradient-to-r from-[#ee3fda] to-[#e99ea9] hover:from-[#d625c2] hover:to-[#f68394] py-3 px-7 font-semibold flex items-center rounded-full  text-[15px] hover:bg-black transition ease-in-out delay-150 duration-500 hover:text-white"
          >
            View Details{" "}
            <FaArrowRight className="ml-2 text-[12px]"></FaArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopFoodCard;
