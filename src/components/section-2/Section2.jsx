import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdMyLocation } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";

import "./Section2.css";
export default function Section2() {
  return (
    <>
      <section className="h-[300px] flex">
        <div className="w-full bg-black flex">
          <div className="w-1/3  text-white">
            <div className="flex justify-center items-center mt-[50px] relative p-[10px]">
              <FaPhone className="text-[#c49b63] text-[60px] mt-[-60px] ml-[20px]  mr-[20px]" />
              <div className="text-left s2-title ">
                <h3>000 (123) 456 7890</h3>
                <p className="s2-title1">
                  A small river named Duden flows by their place and supplies.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3 text-center  text-white">
            <div className="flex justify-center items-center mt-[50px] relative p-[10px]">
              <MdMyLocation className="text-[#c49b63] text-[60px] mt-[-60px] ml-[20px]  mr-[20px]" />
              <div className="text-left s2-title ">
                <h3>198 West 21th Street</h3>
                <p className="s2-title1">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3 text-center  text-white">
            {" "}
            <div className="flex justify-center items-center mt-[50px] relative p-[10px]">
              <FaRegClock className="text-[#c49b63] text-[60px] mt-[-60px] ml-[20px]  mr-[20px]" />
              <div className="text-left s2-title ">
                <h3>000 (123) 456 7890</h3>
                <p className="s2-title1">
                  A small river named Duden flows by their place and supplies.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-1/4 bg-[#c49b63]"> </div> */}
      </section>
    </>
  );
}
/* line-height: 1.4;
    
    font-weight: 400;
    font-family: "Josefin Sans", Arial, sans-serif; */
