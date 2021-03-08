export class Polygon {

    private shape: any;

    public setShape(shape: object) {
        this.shape = shape;
    }

    public getShape() {
        return this.shape;
    }

    public getArea(): number {
        return this.shape.height * this.shape.width;
    }

}