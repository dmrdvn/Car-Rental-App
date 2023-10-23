import { React } from "react";
import { makePayment } from "../Web3Client";

const DueComponent = (props) => {
  const paymentClicked = async () => {
    await makePayment();
  };

  return (
    <div className=" p-2">
      <div className="grid md:grid-flow- items-center px-8 py-4">
        <p className="text-xl font-bold py-2 my-2 m-auto text-center text-white">
          {props.label}
        </p>
        <button
          onClick={() => {
            paymentClicked();
          }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 py-2 w-40 rounded-lg my-4 m-auto hover:bg-green-500"
        >
          <span className="text-white text-lg font-semibold">Submit</span>
        </button>
      </div>
    </div>
  );
};

export default DueComponent;
