import React from "react";
import { useNavigate } from "react-router-dom";

function CardUser({ dataClient }) {
  const { greeting, name, point, qrcode, saldo } = dataClient;
  const navigation = useNavigate();

  const handleClick = () => {
    navigation("/QrCode");
  };

  return (
    <div className="p-5 rounded-xl m-5 bg-white">
      <p className="text-sm">{greeting}</p>
      <h2 className="text-lg font-bold">{name}</h2>
      <div className="flex justify-between mt-3 items-center">
        <div className="flex gap-5 items-start">
          <button
            onClick={handleClick}
            className="rounded-full  flex items-center justify-center bg-white shadow-md "
          >
            <img
              src={qrcode}
              alt="Profile"
              className="h-12 w-12 rounded-full p-1"
            />
          </button>
          <div>
            <p className="text-sm">Saldo</p>
            <p className="text-sm">Points</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-lg font-bold">{saldo}</p>
          <p className="text-green-500">{point}</p>
        </div>
      </div>
    </div>
  );
}

export default CardUser;
