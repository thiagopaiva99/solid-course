import { readFileSync } from "fs";
import csvToJson from 'csvtojson';

export class File {

    private data: any[] = [];

    public setData(item: { name: string, cpf: string, email: string }) {
        this.data.push(item)
    }

    public getData() {
        return this.data;
    }

}