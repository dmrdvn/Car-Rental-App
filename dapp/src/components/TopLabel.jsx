import React from "react";

const TopLabel = ({userName}) => {
  return (
    <div className="flex items-center h-full">
      <h1 className="m-auto text-4xl font-bold text-center p-4 text-white">
        Welcome! {userName}
      </h1>
    </div>
  );
};

export default TopLabel;
