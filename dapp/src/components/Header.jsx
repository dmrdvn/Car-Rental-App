import { React, useEffect, useState } from "react";
import { getUserAddress } from "../Web3Client";

const Header = (props) => {
  const [copied, setCopied] = useState(false);
  const [userAddress, setUserAddress] = useState("..................");

  useEffect(() => {
    const getAddress = async () => {
      let address = await getUserAddress();
      setUserAddress(address);
    };
    getAddress();
  }, []);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(userAddress)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      })
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
      });
  };

  const short_address = () => {
    return userAddress.substring(0, 6) + "..." + userAddress.slice(-3);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    const body = document.querySelector("body");
    if (window.scrollY > 0) {
      body.classList.add("scrolled");
    } else {
      body.classList.remove("scrolled");
    }
  }

  return (
    <header className="sticky top-0 z-40  backdrop-blur p-4 flex justify-between items-center">
      <div className="ml-4 text-white font-bold text-lg">Car Rental Platform</div>
      {props.loggedIn ? (
        <div
          className="text-white hover:text-black hover:cursor-pointer font-bold text-lg tooltip tooltipstered"
          onClick={handleCopy}
        >
          {!copied ? short_address(userAddress) : "Copied to clipboard"}
        </div>
      ) : (
        <div className="text-lrg text-white font-semibold grid-flow-col grid gap-4">
          <h3 className="hover:cursor-pointer">0x000...000</h3>
        </div>
      )}
    </header>
  );
};

export default Header;
