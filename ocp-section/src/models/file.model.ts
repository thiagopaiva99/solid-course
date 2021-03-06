import { readFileSync, createReadStream } from "fs";
import { parse } from '@fast-csv/parse';
import csvToJson from 'csvtojson';

export class File {

    private data: any[] = [];
    
    public async readCsvFile(path: string) {
        const data = await csvToJson({
            delimiter: ';',
            noheader: true
        }).fromFile(path);

        return data.map(row => {
            const { field1: name, field2: cpf, field3: email } = row;
            const item = { name, cpf, email };
            this.data.push(item);
            return item;
        })    
    }

    public getData() {
        return this.data;
    }

}