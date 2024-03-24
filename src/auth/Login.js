import React, { useState } from "react";
// import Inputs from "../components/Inputs";
import style from "./style.module.css";
import { login } from "../DB_Api/auth";
// import { useNavigate } from "react-router-dom";
function Login() {
  // const navigation = useNavigate();
  const [isFocused, setIsFocused] = useState(false);
  const [loginUser, setloginUser] = useState({
    username: "support@technopartner.id",
    password: "1234567",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const respon = await login(loginUser);
      alert(respon);
      window.location.reload();
      // navigation("/Home");
    } catch (error) {
      alert("Login Gagal");
    }
  };


 const handleReload = () => {
    window.location.reload();
  }
  return (
    <div className={style.container}>

      <div className={style.container_input}>
        <label style={{}}>Email</label>
        <input
          className={style.input}
          value={loginUser.username}
          onChange={handleChange}
          name={"username"}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
      <div className={style.container_input}>
        <label>Password</label>
        <input
          className={`${style.input} ${isFocused ? style.inputFocus : ""}`}
          value={loginUser.password}
          onChange={handleChange}
          name={"password"}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
      <button className={style.btn} onClick={handleSubmit}>
        Login
      </button>
      {/* <button class="btn" onClick={handleReload}>Reload</button> */}
    </div>
  );
}

export default Login;


