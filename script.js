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

// جمع کل قیمت‌ها با forEach
let total = 0;

shoppingList.forEach((item) => {
  let rawPrice = item?.price ?? 0;  // اگه null یا undefined بود، 0 بذاره
  let price = +rawPrice;            // تبدیل به عدد
  total += price;                   // جمع کردن
});

console.log("جمع کل خرید: " + total);
