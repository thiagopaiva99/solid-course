import { Rectangle } from "./rectangle.model";

export class Square {

    protected width: number;
    protected height: number;

    public set(value: number) {
        this.height = value;
        this.width = value;
    }

    public get(key: string) {
        return this[key];
    }

    public getArea(): number {
        return this.height * this.width;
    }

}