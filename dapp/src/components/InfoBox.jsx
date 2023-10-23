import React from "react";

const InfoBox = (props) => {
  return (
    <div className="border gap-4 m-4 backdrop-blur rounded-md grid grid-flow-col p-4 text-white border-white">
      <div className="space-y-2">
          <div className="">{props.label}</div>
          <div className="">{props.number}</div>
        </div>
          <div className="place-self-center text-4xl text-white">{props.icon}</div>
    </div>
  );
};

export default InfoBox;
