export enum CartStatusEnum {
    OPEN = 'open',
    CLOSED = 'closed'
}

type CartItem = {
    label: string;
    value: number;
}

export class Cart {
    
    /**
     * Attributes
     */
    private items: CartItem[];
    private status: CartStatusEnum;
    private totalValue: number;    

    constructor() {
        this.items = [];
        this.status = CartStatusEnum.OPEN;
        this.totalValue = 0;
    }

    /**
     * Methods
     */

    public showItems() {
        return this.items;
    }

    public addItem(item: CartItem) {
        this.items = [...this.items, { ...item }]
        this.totalValue += item.value;
    }

    public showTotalValue() {
        return this.totalValue;
    }

    public showStatus() {
        return this.status;
    }

    public confirmPurchase() {
        if (!this.isValidCart()) {
            return false;
        }

        this.status = CartStatusEnum.CLOSED;
        this.sendConfirmationMail();

        return true;
    }

    public sendConfirmationMail() {
        console.log('Sending confirmation email!');
    }

    public isValidCart() {
        return this.items.length > 0;
    }

}