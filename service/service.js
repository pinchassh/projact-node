import * as dal from "../dal/dal.js";

export const axiosData = async () => {
    try {
        const data = await fetch('https://fakestoreapi.com/products')
        for (const prod of data) {
        }
        dal.createFile(data)
    } catch (error) {
        return error
    }
}

export const getAllProd = async () => {
    return await dal.getAllProd()
}

export const getById = async (req) => {
    return await dal.getById(req)
}

export const addProd = async (req) => {
    dal.addProd(req);
}

export const updateProd = async (req) => {
    dal.updateProd(req);
}

export const deleteProd = (req) => {
    dal.deleteProd(req);
}

export const changeQuantity = async (req, action) => {
    dal.changeQuantity(req, action);
}