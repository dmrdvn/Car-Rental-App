import React from "react";
import GradientButton from "./reusables/GradientButton";

const CarDetailsModal = ({ carName, carPic, closeModal }) => {
  return (
    <div className="w-[50vw] rounded-xl p-4 h-[50vh] bg-white absolute top-[30vh] left-[25vw]">
      <span onClick={() => closeModal()} className="hover:cursor-pointer">
        X
      </span>
      <div className="grid place-items-center gap-4">
        <h1 className="text-xl font-semibold">{carName}</h1>
        <img src={carPic} alt="car image" className="w-80 h-60" />
        <GradientButton title="Activate Car" />
      </div>
    </div>
  );
};

export default CarDetailsModal;
