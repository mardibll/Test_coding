import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight } from "react-icons/fa6";

function Sliders({ bennerImg, heightImg }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  const dotStyle = (index) => ({
    backgroundColor: index === activeSlide ? "black" : "gray",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    display: "inline-block",
    margin: "0 5px",
    cursor: "pointer",
  });

  const goToSlide = (index) => {
    slider.slickGoTo(index);
  };

  let slider;

  return (
    <div className="bg-white shadow-sm">
      <Slider ref={(s) => (slider = s)} {...settings}>
        {bennerImg?.map((item, index) => (
          <div key={index}>
            <img
              src={item}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: heightImg ? heightImg : 200,
              }}
            />
          </div>
        ))}
      </Slider>
      <div className="flex justify-between p-2 mt-[-10px]">
        <div>
          {bennerImg?.map((item, index) => (
            <span
              key={index}
              style={dotStyle(index)}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
        <button className=" text-green-500 flex items-center gap-1">
          View All <FaChevronRight style={{ color: "black", fontSize: 14 }} />
        </button>
      </div>
    </div>
  );
}

export default Sliders;
