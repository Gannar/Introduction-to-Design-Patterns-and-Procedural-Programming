const ShoppingCart = (function () {
  // Private data
  let cart = [];

  function addItem(name, quantity, price) {
    cart.push({ name, quantity, price });
  }

  function removeItem(name) {
    cart = cart.filter(item => item.name !== name);
  }

  function clearCart() {
    cart = [];
  }

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

  // Public API
  return {
    addItem,
    removeItem,
    clearCart,
    viewCart
  };
})();

/* Example Usage
ShoppingCart.addItem("Apple", 2, 1.5);
ShoppingCart.addItem("Orange", 3, 2.0);
ShoppingCart.viewCart();
ShoppingCart.removeItem("Apple");
ShoppingCart.viewCart();
*/
