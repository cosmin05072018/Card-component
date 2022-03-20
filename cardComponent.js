//--------------ADD TO CARD

let addToCard = document.getElementsByClassName("btnAddToCart");
//console.log(addToCard);
let addCartSection = document.getElementsByClassName("addCartSection");
//console.log(addCartSection);


for(let i = 0; i < addToCard.length; i++){
    let addBtn = addToCard[i];
    addBtn.addEventListener("click",()=>{
        addCartSection.innerText= 0;
    })
}