import React, { useEffect, useState } from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import QrCode from "./pages/home/QrCode";
import Login from "./auth/Login";
import PullToRefresh from "./components/RefreshPages";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
   <div style={{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor: "#f3f3f3",height:"100vh" }}>
     <div
      className="containers overflow-hidden"
      // style={{ backgroundColor: "#f3f3f3" }}
    >
      <PullToRefresh />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/Home" />
              ) : (
                <Login setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />
          <Route path="/Home" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/QrCode" element={<QrCode />} />
        </Routes>
        {isLoggedIn && <Footer withstyle={"footerstyle"}/>}
      </Router>
    </div>
   </div>
  );
};

export default App;
