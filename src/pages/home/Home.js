import React, { useEffect, useState } from "react";
import CardUser from "../../components/Card_user";
import bgmotif from "../../assets/motif.png";
import Sliders from "../../components/Slider_image";
import logo from "../../assets/logo technopartner.png";
import style from "./style.module.css";
import { users } from "../../DB_Api/auth";
function Home() {
  const [userClient, setuserClient] = useState({});
  useEffect(() => {
    dataUser();
  }, []);

  const dataUser = async () => {
    const token = localStorage.getItem("TOKEN");
    const respon = await users(token);
    setuserClient(respon);
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <img src={logo} alt="error" style={{ height: "100%" }} />
      </div>
      <div className={style.content_card}>
        <div
          style={{
            position: "absolute",
            width: "100%",
          }}
        >
          <CardUser dataClient={userClient} />
        </div>
        <img
          src={bgmotif}
          alt="error"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <Sliders bennerImg={userClient?.banner} />
    </div>
  );
}

export default Home;
