// cart.js

let cart = [];
let fetchedData = [];

window.setFetchedProducts = function(data) {
  fetchedData = data;
};

window.addToCart = function(id){
  let item = fetchedData.find(p => p.id === id);
  cart.push(item);
  console.log("Added:", item);
  updateCartUI();
  openCart();
};

window.openCart = function(){
  document.getElementById("cart-sidebar")
          .classList.add("open");
};

window.closeCart = function(){
  document.getElementById("cart-sidebar")
          .classList.remove("open");
};
function Removeitem(id){
  cart = cart.filter(item => item.id !== id);
  updateCartUI(); 
  if(cart.length==0){
    document.getElementById("cart-sidebar")
          .classList.remove("open");
  }
}


function updateCartUI() {
  let box = document.getElementById("cart-items");
  box.innerHTML = "";

  cart.forEach(item => {
    box.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}">
        <p>${item.title}</p>
         <p>$${item.price}</p>
         <button onClick="Removeitem(${item.id})">🗑️ </button>
      </div>
    `;
  });
}
