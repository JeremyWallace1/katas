let change = 0;

const calculateChange = function(total, cash) {
  // Your code here
  let changeReturned = {};
  change = cash - total;
  while (change > 0) { //while there is still change left, check which type of change to give and how much, then repeat until change = 0.
    if (2000 <= change) {
      changeReturned.twentyDollar = changeType(2000);
    } else if (1000 <= change) {
      changeReturned.tenDollar = changeType(1000);
    } else if (500 <= change) {
      changeReturned.fiveDollar = changeType(500);
    } else if (200 <= change) {
      changeReturned.twoDollar = changeType(200);
    } else if (100 <= change) {
      changeReturned.oneDollar = changeType(100);
    } else if (25 <= change) {
      changeReturned.quarter = changeType(25);
    } else if (10 <= change) {
      changeReturned.dime = changeType(10);
    } else if (5 <= change) {
      changeReturned.nickel = changeType(5);
    } else if (1 <= change) {
      changeReturned.penny = changeType(1);
    }
  };
  return (changeReturned);
};

const changeType = function(value) {
  let num = 0;
  for (let i = value; i <= change; i += value) {
    num++;
  }
  change -= value*num;
  return (num);
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
console.log(calculateChange(1, 3842));