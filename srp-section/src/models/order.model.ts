import { Cart } from "./cart.model";

export enum OrderStatusEnum {
    CLOSED = 'closed',
    OPEN = 'open'
}

export class Order {

    private status: OrderStatusEnum;
    private cart: Cart;
    private totalValue: number

    constructor() {
        this.status = OrderStatusEnum.OPEN;
        this.cart = new Cart();
        this.totalValue = 0;
    }

    public getCart() {
        return this.cart;
    }

    public getStatus() {
        return this.status;
    }

    public setStatus(status: OrderStatusEnum) {
        this.status = status;
    }

    public confirmOrder() {
        if (!this.cart.isCartValid()) {
            return false;
        }

        this.setStatus(OrderStatusEnum.CLOSED);
        return true;
    }

    public getTotalValue() {
        return this.getCart().getItems().reduce((accumulator, currentItem) => {
            accumulator += currentItem.value;
            return accumulator;
        }, 0)
    }

}