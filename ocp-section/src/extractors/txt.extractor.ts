import { readFileSync } from "fs";

import { File } from "../models/file.model";

export class TxtExtractor extends File {

    public readFile(path: string) {
        const data = readFileSync(path, 'utf-8');
        const rows = data.split('\n');
        
        return rows.map(row => {
            const cpf = row.substring(0, 11);
            const name = row.substring(11, row.indexOf('   '));
            const email = row.substring(row.lastIndexOf('   ') + 3, row.length);
            
            const item = { name, cpf, email };
            this.setData(item);
            return item;   
        })
        
    }

}