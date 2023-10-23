import Web3 from "web3";
import RenterABI from "./ABI/RentalPlatform.json";

let selectedAccount;
let renterContract;
let isInitialized = false;
let renterContractAddress = "0x1052daf00B08fCc8D49AD7Ed7A033434F3d51D17";

export const init = async () => {
  // Configure contract
  let provider = window.ethereum;

  if (typeof provider !== "undefined") {
    provider
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        selectedAccount = accounts[0];
      })
      .catch((err) => {
        // console.log(err);
        return;
      });
  }

  window.ethereum.on("accountChanged", function (accounts) {
    selectedAccount = accounts[0];
  });

  const web3 = new Web3(provider);

  const networkId = await web3.eth.net.getId();

  renterContract = new web3.eth.Contract(RenterABI.abi, renterContractAddress);

  isInitialized = true;
};

export const getUserAddress = async () => {
  if (!isInitialized) {
    await init();
  }
  return selectedAccount;
};

// Execute Functions

export const setOwner = async (newOwner) => {
  if (!isInitialized) {
    await init();
  }
  try {
    let res = await renterContract.methods
    .setOwner(newOwner.toLowerCase())
    .send({ from: selectedAccount });
    return res;
  } catch(e) {
    console.error(e);
  }
};

export const register = async (name, surname) => {
  if (!isInitialized) {
    await init();
  }
  try {
    let res = await renterContract.methods
    .addUser(name, surname)
    .send({ from: selectedAccount });
    return res;
  } catch(e) {
    console.error(e);
  }
};

export const addCar = async (name, url, rentFee, saleFee) => {
  if (!isInitialized) {
    await init();
  }
  try {
    let res = await renterContract.methods
    .addCar(name, url, rentFee, saleFee)
    .send({ from: selectedAccount });
    return res;
  } catch(e) {
    console.error(e);
  }
};

export const editCarMetadata = async (id, name, imgUrl, rentFee, saleFee) => {
  if (!isInitialized) {
    await init();
  }
  try {
    let res = await renterContract.methods
    .editCarMetadata(id, name, imgUrl, rentFee, saleFee)
    .send({from: selectedAccount});
    return res;
  } catch(e) {
    console.error(e);
  }
}

export const editCarStatus = async (id, status) => {
  if (!isInitialized) {
    await init();
  }
  try {
    let res = await renterContract.methods
    .editCarStatus(id, status)
    .send({from: selectedAccount});
    return res;
  } catch(e) {
    console.error(e);
  }
}

export const checkOut = async (id) => {
  if (!isInitialized) {
    await init();
  }
  try {
    let res = await renterContract.methods
    .checkOut(id)
    .send({ from: selectedAccount });
    return res;
  } catch(e) {
    console.error(e);
  }
};

export const checkIn = async () => {
  if (!isInitialized) {
    await init();
  }
  try {
    let res = await renterContract.methods
    .checkIn()
    .send({ from: selectedAccount });
    return res;
  } catch(e) {
    console.error(e);
  }
};

export const deposit = async (value) => {
  if (!isInitialized) {
    await init();
  }
  let send_value = Web3.utils.toWei(value, "ether");
  try {
    let res = await renterContract.methods
    .deposit()
    .send({ from: selectedAccount, value: send_value });
    return res;
  } catch(e) {
    console.error(e);
  }
};

export const makePayment = async () => {
  if (!isInitialized) {
    await init();
  }
  try {
    let res = await renterContract.methods
    .makePayment()
    .send({ from: selectedAccount });
    return res;
  } catch(e) {
    console.error(e);
  }
};

export const withdrawBalance = async (value) => {
  if (!isInitialized) {
    await init();
  }
  let send_value = Web3.utils.toWei(value, "ether");
  try {
    let res = await renterContract.methods
    .withdrawBalance(send_value)
    .send({ from: selectedAccount });
    return res;
  } catch(e) {
    console.error(e);
  }
};

export const withdrawOwnerBalance = async (value) => {
  if (!isInitialized) {
    await init();
  }
  let send_value = Web3.utils.toWei(value, "ether");
  try {
    let res = await renterContract.methods
    .withdrawOwnerBalance(send_value)
    .send({ from: selectedAccount });
    return res;
  } catch(e) {
    console.error(e);
  }
};

// Query functions

export const getOwner = async () => {
  if (!isInitialized) {
    await init();
  }
  try {
    let res = await renterContract.methods.getOwner().call();
    return res.toString();
  } catch(e) {
    console.error(e);
  }
};

export const login = async () => {
  if (!isInitialized) {
    await init();
  }
  try {
    let res = await renterContract.methods.getUser(selectedAccount).call();
    return res;
  } catch(e) {
    console.error(e);
  }
};

export const getCar = async (id) => {
  if (!isInitialized) {
    await init();
  }
  try {
    let res = await renterContract.methods.getCar(id).call();
    return res;
  } catch(e) {
    console.error(e);
  }
};

export const getCarsByStatus = async (status) => {
  if (!isInitialized) {
    await init();
  }
  try {
    let res = await renterContract.methods.getCarsByStatus(status).call();
    return res;
  } catch(e) {
    console.error(e);
  }
};

export const getCurrentCount = async () => {
  if (!isInitialized) {
    await init();
  }
  try {
    let res = await renterContract.methods.getCurrentCount().call();
    return res;
  } catch(e) {
    console.error(e);
  }
};

export const getContractBalance = async () => {
  if (!isInitialized) {
    await init();
  }
  try {
    let res = await renterContract.methods.getContractBalance().call();
    return res;
  } catch(e) {
    console.error(e);
  }
};

export const getTotalPayments = async () => {
  if (!isInitialized) {
    await init();
  }
  try {
    let res = await renterContract.methods.getTotalPayments().call();
    return res;
  } catch(e) {
    console.error(e);
  }
};
