import { Reader } from "./models/reader.model";

const runFile = async (file: string) => {
    const reader = new Reader();
    reader.set('directory', `${__dirname}/data`)
    reader.set('file', file)

    const data = await reader.readFile();
    
    return data;
}

const run = async () => {
    const csvData = await runFile('data.csv');
    const txtData = await runFile('data.txt');
    
    console.log([...csvData, ...txtData]);
}

run();