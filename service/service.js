import * as dal from "../dal/dal.js";
export const getAllProd = () => {
    const prod = dal.getAllProd();
    // console.log(prod);
    return prod
}

export const getById = (req) => {
    const prodac = dal.getAllProd();
    for (const prod of prodac) {
        if (prod.id === +req.params.id) return prod
    }
    return `id ${req.params.id} is underfind!!!`
}

export const addProd = async (req) => {
    // console.log(req.body);
    await dal.addProd(req);
}

export const updateProd = async (req,index) => {
    const data = dal.getAllProd();
    const arr = Object.keys(req);
    // console.log(arr);
    // console.log(data[index]);
    for (const item of arr) {
        console.log(data[index].item);
        console.log(req.item);
        data[index].item = req.item
        
    }

    await dal.updateProd(data);
}