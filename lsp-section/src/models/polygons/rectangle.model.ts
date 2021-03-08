export class Rectangle {
    
    protected width: number;
    protected height: number;

    public set(key: string, value: number) {
        this[key] = value;
    }

    public get(key: string) {
        return this[key];
    }

    public getArea(): number {
        return this.height * this.width;
    }

}