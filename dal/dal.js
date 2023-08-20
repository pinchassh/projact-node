import data from '../data.json' assert {type: "json"}
// import fs from 'fs';
import jsonfile from 'jsonfile';
export const getAllProd = () => {
    return data;
};

export const addProd = (prod) => {
    const data = getAllProd();
    data.push(prod)
    jsonfile.writeFile('./data.json', data)
}

export const updateProd = (req) => {
    // const data = getAllProd();
    jsonfile.writeFile('./data.json', req)
}
// data.forEach(iii => {
//     console.log(Object.keys(iii));
// });