// week 4, day 2, challange 2 Objects
// Calculate the Profit

function profit(costPrice, sellPrice, inventory) {
  let totalSales = inventory * sellPrice;
  let totalCost = inventory * costPrice;
  let profit = totalSales - totalCost;
  print("Your estimated Profit/Loss is " + profit)

  // to show the result on your console use
  // console.log("Your Profit/Loss is " + profit)
};
profit(
  prompt("How much is a unit cost you?"),
  prompt("What is the selling price of a unit?"),
  prompt("How many units are you predicting to sell?")
);