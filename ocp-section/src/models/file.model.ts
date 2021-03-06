import { readFileSync } from "fs";
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

    public readTxtFile(path: string) {
        const data = readFileSync(path, 'utf-8');
        const rows = data.split('\n');
        
        return rows.map(row => {
            const cpf = row.substring(0, 11);
            const name = row.substring(11, row.indexOf('   '));
            const email = row.substring(row.lastIndexOf('   ') + 3, row.length);
            
            const item = { name, cpf, email };
            this.data.push(item);
            return item;   
        })
        
    }

    public getData() {
        return this.data;
    }

}