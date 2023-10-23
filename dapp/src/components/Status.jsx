import React from "react";

const Status = (props) => {
  let state;
  props.status == "Can Rent"
    ? (state = `border backdrop-blur px-12 p-4 rounded-xl shadow-lg border-green-300 m-2 shadow-green-300`)
    : (state =
        "border p-4 rounded-xl shadow-lg border-red-300 m-2 shadow-red-300");
  return (
    <div className={state}>
      <div className="text-xl text-center text-white">
        {props.status ? props.status : "Unavailable"}
      </div>
    </div>
  );
};

export default Status;
