import data from '../data.json' assert {type: "json"}
// import fs from 'fs';
import jsonfile from 'jsonfile';
export const getAllProd = () => {
    return data;
};
// console.log(data);
export const addProd = (prod)=>{
    const data = getAllProd();
    data.push(prod)
    // console.log(data);
    jsonfile.writeFile('./data.json',data)
    
    // fs.writeFile('../data.json')
}