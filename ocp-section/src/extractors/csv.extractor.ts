import csvToJson from 'csvtojson';

import { File } from "../models/file.model";

export class CsvExtractor extends File {
    
    public async readFile(path: string) {
        const data = await csvToJson({
            delimiter: ';',
            noheader: true
        }).fromFile(path);

        return data.map(row => {
            const { field1: name, field2: cpf, field3: email } = row;
            const item = { name, cpf, email };
            this.setData(item);
            return item;
        })    
    }

}