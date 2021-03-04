import { Cart } from "./models/cart.model";

const cart = new Cart();

console.log('empty cart', cart.showItems());
console.log('total value', cart.showTotalValue());

cart.addItem({ label: 'Bike', value: 750 })
cart.addItem({ label: 'Notebook', value: 1500 })
cart.addItem({ label: 'Macbook', value: 50000 })

console.log();

console.log('filled cart', cart.showItems());
console.log('total value:', cart.showTotalValue());
console.log('cart status:', cart.showStatus());

if (cart.confirmPurchase()) {
    console.log('Purchase confirmed!')
} else {
    console.log('Cart is invalid!')
}

console.log('cart status:', cart.showStatus());