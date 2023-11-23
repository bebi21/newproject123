import React from "react";

import Carousel from "./Carosel";
import bg1 from "../../images/bg_1.jpg";
import bg2 from "../../images/bg_2.jpg";
import bg3 from "../../images/bg_3.jpg";

export default function Section() {
  return (
    <Carousel>
      <div>
        <img src={bg1} alt="img1" className="w-[100%] banner" />
        <div className="text-white absolute left-[28%] z-[999] bottom-[200px]">
          <div className=" text-center ">
            <span className="title-home">Welcome</span>
            <h1 className="title-home1">Amazing Taste &amp; Beautiful Place</h1>
            <p className="title-home2">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <p className="mt-[50px]">
              <button
                type="button"
                class="text-white bg-[#c49b63] hover:bg-[#98784b]  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Order Now
              </button>
              <button
                type="button"
                class="text-white bg-[#c49c634a] hover:bg-[#98784b]  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                View Menu
              </button>
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src={bg2} alt="img2" className="w-[100%] banner" />
        <div className="text-white absolute left-[28%] z-[999] bottom-[200px]">
          <div className=" text-center ">
            <span className="title-home">Welcome</span>
            <h1 className="title-home1">The Best Coffee Testing Experience</h1>
            <p className="title-home2">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <p className="mt-[50px]">
              <button
                type="button"
                class="text-white bg-[#c49b63] hover:bg-[#98784b]  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Order Now
              </button>
              <button
                type="button"
                class="text-white bg-[#c49c634a] hover:bg-[#98784b]  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
              >
                View Menu
              </button>
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src={bg3} alt="img3" className="w-[100%] banner" />
        <div className="text-white absolute left-[28%] z-[999] bottom-[200px]">
          <div className=" text-center ">
            <span className="title-home">Welcome</span>
            <h1 className="title-home1">The Best Coffee Testing Experience</h1>
            <p className="title-home2">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <p className="mt-[50px]">
              <button
                type="button"
                class="text-white bg-[#c49b63] hover:bg-[#98784b]  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Order Now
              </button>
              <button
                type="button"
                class="text-white bg-[#c49c634a] hover:bg-[#98784b]  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                View Menu
              </button>
            </p>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
