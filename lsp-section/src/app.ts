import { Polygon } from "./models/polygon.model";
import { Rectangle } from "./models/polygons/rectangle.model";
import { Square } from "./models/polygons/square.model";

const polygonRectangle = new Polygon();

polygonRectangle.setShape(new Rectangle());
polygonRectangle.getShape().set('width', 5)
polygonRectangle.getShape().set('height', 10)

console.log(polygonRectangle);
console.log('rectangle area: ', polygonRectangle.getShape().getArea());

const polygonSquare = new Polygon();

polygonSquare.setShape(new Square());
polygonSquare.getShape().set(5);

console.log(polygonSquare);
console.log('square area: ', polygonSquare.getShape().getArea());