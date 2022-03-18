let card = {
    title: "koton",
    price: 20,
}


let plusBtn = document.querySelector(".plusBtn");
let minusBtn = document.querySelector(".minusBtn");

var valueCount;

plusBtn.addEventListener("click", function () {
  valueCount = document.getElementById("quantity").value;
  valueCount = Number(valueCount) + Number(`${card.price}`);
  document.getElementById("quantity").value = valueCount;
});

