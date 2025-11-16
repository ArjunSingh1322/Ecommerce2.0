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
function Removeitem(index){
  cart.splice(index,1)
  updateCartUI(); 
  if(cart.length==0){
    document.getElementById("cart-sidebar")
          .classList.remove("open");
  }
}

function updateCartUI() {
  let cartTotal = document.getElementsByClassName("Total")[0];
  let sum = 0;
  for (let t of cart) {
    sum += Number(t.price);
  }
  cartTotal.innerText = `Total Cart Price: ₹${sum}`;


  let box = document.getElementById("cart-items");
  box.innerHTML = "";

  cart.forEach((item, index) => {
    box.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}">
        <p>${item.title}</p>
        <p>$${item.price}</p>
        <button onClick="Removeitem(${index})">🗑️</button>
      </div>
    `;
  });


  if (cart.length === 0) {
    document.getElementById("cart-sidebar").classList.remove("open");
    cartTotal.innerText = "Total Cart Price: $0"; 
  }
}
