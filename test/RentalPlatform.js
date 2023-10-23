const { expectEvent } = require('@openzeppelin/test-helpers');
const CarRentalPlatform = artifacts.require("RentalPlatform");

contract("RentalPlatform", (accounts) => {
  let carRentalPlatform;
  const owner = accounts[0];
  const user1 = accounts[1];
  const user2 = accounts[2];

  beforeEach(async () => {
    // carRentalPlatform = await carRentalPlatform.new();
    carRentalPlatform = await CarRentalPlatform.new();
    console.log(user1);
  });

  describe("Add user and car", () => {
    it('adds a user', async () => {
      const res = await carRentalPlatform.addUser('Alice', 'Smith', { from: user1 });
    
      // Check that UserAdded event was emitted with the correct parameters
      expectEvent(res, 'UserAdded', {
        walletAddress: user1,
        name: 'Alice',
        lastname: 'Smith',
      });
    }, 30000);
  
    // it("adds a car", async () => {
    //   await carRentalPlatform.addCar("Tesla Model S", "https://example.com/img.jpg", 10, 50000, { from: owner });
    //   const car = await carRentalPlatform.getCar(1);
    //   assert.equal(car.name, "Tesla Model S", "Problem with car name");
    //   assert.equal(car.imgUrl, "https://example.com/img.jpg", "Problem with car url");
    //   assert.equal(car.rentFee, 10, "Problem with car rent fee");
    //   assert.equal(car.saleFee, 50000, "Problem with car sale fee");
    // });
  });

  // describe("Check out and check in car", () => {
  //   it("checks out a car", async () => {
  //     await carRentalPlatform.addUser("Alice", "Smith", { from: user1 });
  //     await carRentalPlatform.addCar("Tesla Model S", "https://example.com/img.jpg", 10, 50000, { from: owner });
  //     await carRentalPlatform.checkOut(1, { from: user1 });
  //     const user = await carRentalPlatform.getUser(user1);
  //     assert.equal(user.rentedCarId, 1, "User could not check out the car");
  //   });
  
  //   it("checks in a car", async () => {
  //     await carRentalPlatform.addUser("Alice", "Smith", { from: user1 });
  //     await carRentalPlatform.addCar("Tesla Model S", "https://example.com/img.jpg", 10, 50000, { from: owner });
  //     await carRentalPlatform.checkOut(1, { from: user1 });
  //     await new Promise((resolve) => setTimeout(resolve, 60000)); // Wait 1 minute
  //     await carRentalPlatform.checkIn({ from: user1 });
  //     const user = await carRentalPlatform.getUser(user1);
  //     assert.equal(user.rentedCarId, 0, "User could not check in the car");
  //     assert.equal(user.debt, 10, "User debt has not created");
  //   });
  // });

  // describe("Deposits token and make payment", () => {
  //   it("deposits token", async () => {
  //     await carRentalPlatform.addUser("Alice", "Smith", { from: user1 });
  //     await carRentalPlatform.deposit({ from: user1, value: 100});
  //     const user = await carRentalPlatform.getUser(user1);
  //     assert.equal(user.balance, 100, "User could not deposit token");
  //   });

  //   it("makes a payment", async () => {
  //     await carRentalPlatform.addUser("Alice", "Smith", { from: user1 });
  //     await carRentalPlatform.addCar("Tesla Model S", "https://example.com/img.jpg", 10, 50000, { from: owner });
  //     await carRentalPlatform.checkOut(1, { from: user1 });
  //     await new Promise((resolve) => setTimeout(resolve, 60000)); // Wait 1 minute
  //     await carRentalPlatform.checkIn({ from: user1 });
  //     await carRentalPlatform.deposit({ from: user1, value: 100 });
  //     await carRentalPlatform.makePayment({ from: user1 });
  //     const user = await carRentalPlatform.getUser(user1);
  //     assert.equal(user.debt, 0, "User could not make the payment");
  //   });
  // });

  // describe("Edit car", () => {
  //   it("should edit an existing car's metadata with valid parameters", async () => {
  //     // Create a new car
  //     await carRentalPlatform.addCar("Tesla Model S", "https://example.com/img.jpg", 10, 50000, { from: owner });
  
  //     // Edit the car with new parameters
  //     const newName = 'Updated Car1';
  //     const newImgUrl = 'https://updatedcar1image.com';
  //     const newRentFee = 200;
  //     const newSaleFee = 300;
  //     await carRentalPlatform.editCarMetadata(1, newName, newImgUrl, newRentFee, newSaleFee, { from: owner });
  
  //     // Get the edited car and check if the changes were applied
  //     const car = await carRentalPlatform.getCar(1);
  //     assert.equal(car.name, newName, 'Car name not updated');
  //     assert.equal(car.imgUrl, newImgUrl, 'Car image URL not updated');
  //     assert.equal(car.rentFee, newRentFee, 'Car rent fee not updated');
  //     assert.equal(car.saleFee, newSaleFee, 'Car sale fee not updated');
  //   });

  //   it("should edit an existing car's status", async () => {
  //     await carRentalPlatform.addCar("Tesla Model S", "https://example.com/img.jpg", 10, 50000, { from: owner });
  //     const newStatus = 0;
  //     await carRentalPlatform.editCarStatus(1, newStatus, { from: owner });
  //     const car = await carRentalPlatform.getCar(1);
  //     assert.equal(car.status, newStatus, "Status could not be updated");
  //   });
  // });

  // describe("Withdraw balance", () => {
  //   it("should send the desired amount of tokens to the user", async () => {
  //     await carRentalPlatform.addUser("Alice", "Smith", { from: user1 });
  //     await carRentalPlatform.deposit({ from: user1, value: 100 });
  //     await carRentalPlatform.withdrawBalance(50, { from: user1 });
  //     const user = await carRentalPlatform.getUser(user1);
  //     assert.equal(user.balance, 50, "User could not get his/her token");
  //   });

  //   it("should send the desired amount of tokens to the owner", async () => {
  //     await carRentalPlatform.addUser("Alice", "Smith", { from: user1 });
  //     await carRentalPlatform.addCar("Tesla Model S", "https://example.com/img.jpg", 10, 50000, { from: owner });
  //     await carRentalPlatform.checkOut(1, { from: user1 });
  //     await new Promise((resolve) => setTimeout(resolve, 60000)); // Wait 1 minute
  //     await carRentalPlatform.checkIn({ from: user1 });
  //     await carRentalPlatform.deposit({ from: user1, value: 1000 });
  //     await carRentalPlatform.makePayment({ from: user1 });
  //     const totalPaymentAmount = await carRentalPlatform.getTotalPayments({ from: owner });
  //     const amountToWithdraw = totalPaymentAmount - 10;
  //     await carRentalPlatform.withdrawOwnerBalance(amountToWithdraw, { from: owner });
  //     const totalPayment = await carRentalPlatform.getTotalPayments({ from: owner });
  //     assert.equal(totalPayment, 10, "Owner could not withdraw tokens");
  //   });
  // });
});
