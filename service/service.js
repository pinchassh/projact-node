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

export  const  addProd = async(req)=>{
    // console.log(req.body);
    await dal.addProd(req);
}
