import { Rectangle } from "./rectangle.model";

export class Square extends Rectangle {


    public set(key: string, value: number) {
        this['height'] = value;
        this['width'] = value;
    }

}