import * as dal from "../dal/dal.js";

export const getAllProd =async () => {
    return await dal.getAllProd()
}

export const getById =async (req) => {
    const prodac =await dal.getAllProd();
    for (const prod of prodac) {
        console.log(prod.id);
        console.log(+req.params.id);
        if (prod.id === +req.params.id) return prod
    }
    return `id ${req.params.id} is underfind!!!`
}

export const addProd = async (req) => {
    const prod =await dal.getAllProd();
    console.log(prod);
    prod.push(req)
    await dal.updateProd(prod);
}

export const updateProd = async (req, index) => {
    const data =await dal.getAllProd();
    const arr = Object.keys(req);
    for (const item of arr) {
        data[index][item] = req[item]
    }
    await dal.updateProd(data);
}

export const deleteProd = async (req) => {
    const data =await dal.getAllProd();
    console.log(data);
    const newData = data.filter(prod => prod.id !== +req.params.id);
    await dal.updateProd(newData);
}

export const changeQuantity = async (index, action) => {
    const data =await dal.getAllProd();
    console.log(action);
    console.log(data[index].quantity);
    action ? data[index].quantity ++ : data[index].quantity--;
    console.log(data[index].quantity);
    await dal.updateProd(data);
}