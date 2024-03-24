import React, { useState } from "react";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import menu1 from "../assets/menu1.png";
import menu2 from "../assets/menu2.png";
import { useNavigate } from "react-router-dom";
function Footer({withstyle}) {
  const navigation = useNavigate();
  const [active, setActive] = useState("Home");

  const handleClick = (title) => {

    if (title === "Menu") {
      navigation("/Menu");
    }
    if (title === "Home") {
      navigation("/");
    }
    setActive(title);
  };
  const menu = [
    { img: home2, title: "Home", imgActive: home1 },
    { img: menu2, title: "Menu", imgActive: menu1 },
  ];
  return (
    <div className={`absolute bottom-0 ${withstyle}`}>
      <div className="h-16 bg-white w-full flex justify-between items-center px-12 shadow-lg">
        {menu.map((item, index) => (
          <button
            key={index}
            className="flex flex-col items-center"
            onClick={() => handleClick(item.title)}
          >
            <img
              src={active === item.title ? item.imgActive : item.img}
              alt="Icon"
              className="h-6 w-6"
            />
            <p
              className={active === item.title ? "text-black" : "text-gray-400"}
            >
              {item.title}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Footer;
