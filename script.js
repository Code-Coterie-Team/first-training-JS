// لیست خرید
let shoppingList = [
  { name: "milk", price: "20" },
  { name: "bread", price: null },
  { name: "egg", price: 10 },
  { name: "rice", price: "50" }, 
  { name: "apple", price: "" },  
];

// تابع مرتبه بالاتر
const greaterThan = (n) => (m) => m > n;

// تغییر شرط
let greaterThan30 = greaterThan(30);

// پردازش لیست خرید
let messages = shoppingList.map((item) => {
  let rawPrice = item?.price ?? 0;
  let price = +rawPrice; 

  // تخفیف 20% اگه بالای 50 بود
  let finalPrice = price > 50 ? price * 0.8 : price;

  if (greaterThan30(price)) {
    return `${item.name} گرونه (قیمت: ${finalPrice})`;
  } else {
    return price > 0
      ? `${item.name} ارزونه (قیمت: ${finalPrice})`
      : `${item.name} قیمت معتبری نداره`;
  }
});

// چاپ پیام‌ها
messages.forEach((msg) => console.log(msg));

// جمع کل قیمت‌ها
let total = shoppingList
  .map(item => + (item?.price ?? 0))  
  .reduce((sum, current) => sum + current, 0);

console.log("جمع کل خرید: " + total);


