// import axios from 'axios';
// axios.post('https://fakestoreapi.com/products', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//     })
//     .then(function (response) {
//     console.log(response);
//     })
//     .catch(function (error) {
//     console.log(error);
//     });
import jsonfile from 'jsonfile';

export const getAllProd = () => {
    return jsonfile.readFile('../data.json')
};

// export const addProd = (prod) => {
//     const data = getAllProd();
//     data.push(prod)
//     jsonfile.writeFile('./data.json', data)
// }

export const updateProd = (req) => {
    // console.log(req);
    jsonfile.writeFile('./data.json', req)
}
