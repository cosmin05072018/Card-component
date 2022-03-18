let card = {
  title: "koton",
  price: 20,
};

/* 
let plusBtn = document.querySelector(".plusBtn");
let minusBtn = document.querySelector(".minusBtn");

var valueCount;

plusBtn.addEventListener("click", function () {
  valueCount = document.getElementById("quantity").value;
  valueCount = Number(valueCount) + Number(`${card.price}`);
  document.getElementById("quantity").value = valueCount;
});


const minusBtn = document.querySelector(".minus");
const numPrice = document.querySelector(".num");
const plusBtn = document.querySelector(".plus");

let a = 20;
plusBtn.addEventListener("click", () => {
  a = Number(a) + Number(`${card.price}`);
  numPrice.innerText = a;
  visible();
});

minusBtn.addEventListener("click", () => {
  a = Number(a) - Number(`${card.price}`);
  numPrice.innerText = a;
  visible();
});

function visible() {
  if (a > 20) {
    document.querySelector(".minus").style.visibility = "visible";
  } 
  else if( a = 20 ) {
    document.querySelector(".minus").style.visibility = "hidden";
  }
}

*/

const minusBtn = document.querySelector(".minusBtn");
const numberQuantity = document.querySelector(".num");
const plusBtn = document.querySelector(".plusBtn");
const priceProduct = document.querySelector(".priceProduct")
let a = 0;


plusBtn.addEventListener("click", () => {
  a++;
  numberQuantity.innerText = a;
  priceProduct.innerText = Number(`${card.price}`) * a;
  visible();
});

minusBtn.addEventListener("click", () => {
  a--;
  numberQuantity.innerText = a;
  priceProduct.innerText = (Number(`${card.price}`) * a) - (Number(`${card.price}`) - (Number(`${card.price}`) /1));
  visible();
});

function visible() {
  if (a > 1) {
    document.querySelector(".minusBtn").style.visibility = "visible";
  } else if (a <= 1) {
    document.querySelector(".minusBtn").style.visibility = "hidden";
  }
}
