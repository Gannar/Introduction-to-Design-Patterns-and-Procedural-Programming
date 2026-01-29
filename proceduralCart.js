// Global cart data
let cart = [];

// Add item to cart
function addItem(name, quantity, price) {
  cart.push({
    name: name,
    quantity: quantity,
    price: price
  });
}

// View cart and total price
function viewCart() {
  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.quantity * item.price;
    total += itemTotal;
    console.log(
      `${item.name} (x${item.quantity}) - ${itemTotal.toFixed(2)} TND`
    );
  });

  console.log(`Total: ${total.toFixed(2)} TND`);
}

// Remove item by name
function removeItem(name) {
  cart = cart.filter(item => item.name !== name);
}

// Clear all items
function clearCart() {
  cart = [];
}

/* Example Usage
addItem("Apple", 2, 1.5);
addItem("Orange", 3, 2.0);
viewCart();
removeItem("Apple");
viewCart();
*/
