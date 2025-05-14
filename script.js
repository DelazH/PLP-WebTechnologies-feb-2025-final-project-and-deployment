let cart = JSON.parse(localStorage.getItem('cart')) || []; 

function addToCart(name, price) { 
  const item = cart.find(product => product.name === name); 
  item ? item.quantity++ : cart.push({ name, price, quantity: 1 }); 
  localStorage.setItem('cart', JSON.stringify(cart)); 
  updateCartCounter(); 
} 
