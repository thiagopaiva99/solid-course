import { CartItem } from "./item.model";
export class Cart {

    /**
     * Attributes
     */
    private items: CartItem[];

    constructor() {
        this.items = [];
    }

     /**
      * Methods
    */

    public getItems() {
        return this.items;
    }

    public addItem(item: CartItem) {
      this.items = [...this.items, item];
    }

    public isCartValid() {
      return this.items.length > 0;
    }

}