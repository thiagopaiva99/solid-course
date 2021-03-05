import { CartItem } from "./models/item.model";
import { Order } from "./models/order.model";
import { EmailService } from "./services/email.service";

/**
 * Creating the order
 */
const order = new Order();

const cartItem1 = new CartItem();
cartItem1.description = 'Description Item 1';
cartItem1.value = 50;

const cartItem2 = new CartItem();
cartItem2.description = 'Description Item 2';
cartItem2.value = 100;

order.getCart().addItem(cartItem1);
order.getCart().addItem(cartItem2);

console.log('order', order)
console.log('cart items', order.getCart().getItems())
console.log('cart total value', order.getTotalValue());
console.log('is cart valid?', order.getCart().isCartValid());
console.log('order status', order.getStatus());
if (order.confirmOrder()) {
    EmailService.sendEmail();
}
console.log('order status', order.getStatus());

