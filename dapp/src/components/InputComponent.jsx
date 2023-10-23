import { React, useState } from "react";
import { deposit, withdrawBalance } from "../Web3Client";

const InputComponent = (props) => {
  const [balance, setBalance] = useState("");

  const creditAccount = async () => {
    alert(
      "adding " +
        balance +
        " token to your account, this can take couple of seconds..."
    );
    await deposit(balance);
  };

  const withdraw = async () => {
    alert(
      "withdrawing " +
        balance +
        " token from your account, this can take couple of seconds..."
    );
    await withdrawBalance(balance);
  };

  const handleBalanceChange = (event) => {
    setBalance(event.target.value);
  };

  const buttonClicked = () => {
    if(props.type === "credit") {
      creditAccount();
    } else if(props.type === "withdraw") {
      withdraw();
    } else {
      console.warn("Operation is unknown.");
    }
  }

  return (
    <div className="">
      <div className="grid grid-flow-row md:grid-flow-col   items-center gap-4">
        <p className="text-xl font-bold py-2 my-2 text-center text-white">
          {props.label}
        </p>
        <input
          className="border border-black rounded-md py-2 mb-2 my-2 m-auto"
          placeholder={props.holder}
          onChange={handleBalanceChange}
        />
        <button
          onClick={() => {
            buttonClicked();
          }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 py-2 w-40 rounded-lg my-4 m-auto hover:bg-green-500"
        >
          <span className="text-white text-lg font-semibold">Submit</span>
        </button>
      </div>
    </div>
  );
};

export default InputComponent;
