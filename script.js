//first training session of pure JS

let shoppingList = [
  { name: "milk", price: "20" },
  { name: "bread", price: null },
  { name: "egg",price: 10 },];

//higher-order fn
const greaterThan = (n) => (m) => m > n;

//closure
let greaterThan15 = greaterThan(15);

//using map
let messages = shoppingList.map((item) => {
    // ?. optional chaining
    // ?? nullish
  let rawPrice = item?.price ?? 0;
    //unary operator
  let price = +rawPrice; 

  // a true or false result
  if (greaterThan15(price)) {
    //template litteral
    return `${item.name} is expensive (price: ${price})`;
  } else {
    return price > 0
    // ternary operator
      ? `${item.name} is affordable (price: ${price})`
      : `${item.name} has no valid price`;
  }
});
//using forEach
messages.forEach((msg) => console.log(msg));
