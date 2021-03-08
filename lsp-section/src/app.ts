import { Rectangle } from "./models/rectangle.model";
import { Square } from "./models/square.model";

const rectangle = new Rectangle();

rectangle.set('width', 5);
rectangle.set('height', 10);

console.log('rectangle area: ', rectangle.getArea());

const square = new Square();

square.set('width', 5);
square.set('height', 10);

console.log('square area: ', square.getArea());