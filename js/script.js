// created by Niko 
// created on: May 30 2024
// product of numbers

"use strict"

// function for user display
function productOfNumbers() {

  // get user input for min
  let userNumberTwo = Number(document.getElementById("userNumberTwo").value);
  // get user input for max
  let userNumberOne = Number(document.getElementById("userNumberOne").value);
  // empty string for displaying numbers
  let sum = 0;

  // while counter is not equal to userMax, update the counter unti it is equal to userMax
  if (userNumberOne > 0 && userNumberTwo > 0) {
    for (let counter = 0; counter < userNumberTwo; counter++) {
      if (counter < userNumberTwo) {
        sum = sum + userNumberOne;
      }
    }
  }
  if (userNumberOne < 0 && userNumberTwo < 0) {
    for (let counter = 0; counter < Math.abs(userNumberTwo); counter++) {
      if (counter < Math.abs(userNumberTwo)) {
        sum = sum - userNumberOne;
      }
    }
  }
  if (userNumberOne < 0 || userNumberTwo < 0) {
    // Find the positive number
    let positiveNumber = Math.max(userNumberOne, userNumberTwo);
    // Find the negative number
    let negativeNumber = Math.min(userNumberOne, userNumberTwo);
    
    // for if the counter is less than the absolute value of the negative number, run the code that adds the absolute value of the negative number to the sum, and then repeat until the counter is not less than the absolute value of the negative number.
    for (let counter = 0; counter < positiveNumber; counter++) {
      sum = sum - Math.abs(negativeNumber)
    }
  }
  // if user input is positive, do this 
  // else do this
  document.getElementById("user-info").innerHTML = "The product of the numbers is " + sum;
}

