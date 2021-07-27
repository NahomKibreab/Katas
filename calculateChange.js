const calculateChange = function(total, cash) {
  // Your code here
  let cashReturn = cash - total;
  let results = {};
  while(cashReturn > 0){
    for(let cent of denominations){
        while(cashReturn >= cent.value){
          cashReturn = cashReturn - cent.value;
          results[cent.name] = results[cent.name] !== undefined ? results[cent.name] + 1 : 1;
        }
      
    }
  }
  
  return results;
};


const denominations = [{name: "twentyDollars", value: 2000},{name: "tenDollars", value: 1000},
{name: "fiveDollars", value: 500},{name: "twoDollars", value: 200},
{name: "oneDollar", value: 100},{name: "quarter", value: 25},
{name: "dime", value: 10},{name: "nickel", value: 5},
{name: "penny", value: 1}]



console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
