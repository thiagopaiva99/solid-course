import { Reader } from "./models/reader.model";

const run = async () => {
    const reader = new Reader();
    reader.set('directory', `${__dirname}/data`)
    reader.set('file', 'data.csv')

    const data = await reader.readFile();

    console.log(data);    
}

run();