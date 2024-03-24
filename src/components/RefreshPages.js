import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
const PullToRefresh = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e) => {
      const endY = e.changedTouches[0].clientY;
      const deltaY = endY - startY;

      if (deltaY > 100) {
        setIsLoading(true);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    };
    let startY;
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        position: "absolute",
        top: 25,

        zIndex: 9999,
      }}
    >
      {isLoading ? (
        <ReactLoading
          type={"spinningBubbles"}
          color={"gray"}
          height={"10%"}
          width={"10%"}
        />
      ) : null}
    </div>
  );
};

export default PullToRefresh;
