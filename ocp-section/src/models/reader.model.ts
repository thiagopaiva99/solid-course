import { File } from "./file.model";

import * as Extractors from '../extractors/index';

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
        const [, extension] = path.split('.');

        const extractorName = extension[0].toUpperCase() + extension.substr(1).toLowerCase()

        const extractorClass = new (Extractors)[`${extractorName}Extractor`](null);

        const data = await extractorClass.readFile(path);

        return data;      
    }

}