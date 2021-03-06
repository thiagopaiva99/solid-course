import { File } from "./file.model";

export class Reader {

    private directory: string;
    private file: string;

    public set(key: string, value: string) {
        this[key] = value;
    }

    public get(key: string) {
        return this[key];
    }

    public async readFile() {
        const path = `${this.directory}/${this.file}`;
        
        const file = new File();
        const data = await file.readCsvFile(path);

        return data;      
    }

}