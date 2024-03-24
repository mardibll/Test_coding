import React from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function QrCode() {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation("/");
  };
  return (
    <div className="flex flex-col h-screen bg-white p-5 z-50 overflow-hidden">
      <div className="flex justify-end">
        <IoMdClose className="text-gray-600 text-2xl" onClick={handleClick} />
      </div>
      <div className="flex flex-col items-center gap-10 pt-16">
        <p className="text-center">Show the QR Code below to the cashier</p>
        <img
          src="https://socs.binus.ac.id/files/2018/12/aswin-1.jpg"
          alt="QR Code"
          className=""
        />
      </div>
    </div>
  );
}

export default QrCode;
