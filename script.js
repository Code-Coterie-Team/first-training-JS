//first training session of pure JS

let shoppingList = [
  { name: "milk", price: "20", stock:"6" },
  { name: "bread", price: null, stock:"0" },
  { name: "egg", stock:"10" },];

  const name = ["ali","mamad","zari","behnaz","soheil" , "yalda"];
  name.splice(2,0,"farshad")
  console.log(name.sort());

  const fun = (place) => {
    // const place="";
    console.log(place); }

  const fname = "dariush";
  if(true){
    console.log("if:",fname);
    const phone="55306";
  }
console.log("out of if:" , fname);
// console.log("inside if :", phone);
fun("perspolis");

const timedate = new Date();
console.log("Date is ",timedate.toLocaleDateString(),"-",timedate.toLocaleTimeString());

//higher-order fn
const greaterThan = (n) => (m) => m > n;

//closure
let greaterThan15 = greaterThan(15);
shoppingList.push({name:"breast" , price:"70"})

//using map
let messages = shoppingList.map((item) => {
    // ?. optional chaining
    // ?? nullish
  let rawPrice = item?.price ?? 0;
    //unary operator
  let price = +rawPrice; 

  // a true or false result
  if(item.stock == 0){
    return `*** ${item.name} is not available ***`;
  }
  else if (greaterThan15(price)) {
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
