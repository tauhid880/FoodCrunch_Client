import React from "react";
import { TypeAnimation } from "react-type-animation";

const Count = () => {
  return (
    <div className="text-center py-20 px-5 bg-[#F8FFDB]">
      <div
        className="stats w-full stats-vertical lg:stats-horizontal shadow-xl py-10 bg-[#FCE9F1]"
        data-aos="zoom-out"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1500"
      >
        <div className="stat">
          <div className="stat-title">
            <TypeAnimation
              speed={{ type: "keyStrokeDelayInMs", value: 250 }}
              cursor={false}
              className="text-black font-bold"
              sequence={["Total Buyer", 500, "", 500]}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            />
          </div>
          <div className="stat-value">3K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title">
            <TypeAnimation
              speed={{ type: "keyStrokeDelayInMs", value: 250 }}
              cursor={false}
              className="text-black font-bold"
              sequence={["Total Seller", 500, "", 500]}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            />
          </div>
          <div className="stat-value">1K</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">
            <TypeAnimation
              speed={{ type: "keyStrokeDelayInMs", value: 250 }}
              cursor={false}
              className="text-black font-bold"
              sequence={["New Registers", 300, "", 500]}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            />
          </div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Count;
