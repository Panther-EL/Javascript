//Shopping Cart System
let cart = [];

const addItem = (name,price,quantity) => {
  let item = {
    name:name,
    price:price,
    quantity:quantity
  };

  //Check if the item already exists in the cart
let status = false;
for(let i = 0; i<cart.length; i++){
  if(cart[i].name === name){
    cart[i].quantity += quantity; // update quantity
    status = true;
    break;
  }
}

if(!status){
  cart.push(item)
}
}

//Deleting an item
const removeItem = (name) => {
cart = cart.filter(item => item.name !=name)
}

//Getting the total
const getTotal = () => {
  let total = 0;

  for(let i = 0; i<cart.length; i++){
     total += cart[i].price * cart[i].quantity;
  
  }
  console.log(`Total:${total}`)
}

// Test case
addItem('meat',2.5,2)
addItem('meat',2.5,5)
addItem('book', 5, 3)
addItem('book', 5, 2)
console.log(cart)

getTotal()
