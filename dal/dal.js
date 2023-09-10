import { dataBaseAllProd, DBToAddProd, DBToUppdateProd } from '../test.js';
import { dataBasegetById, DBToDeleteProd, DBTochangeQuantity } from '../test.js';


export const getAllProd = async () => {
    return await dataBaseAllProd()
};

export const addProd = (req) => {
    DBToAddProd(req)
}

export const getById = async (req) => {
    return await dataBasegetById(+req.params.id)
}

export const updateProd = (req) => {
    DBToUppdateProd(+req.params.id, req.body)
}

export const deleteProd = (req) => {
    DBToDeleteProd(+req.params.id)
}

export const changeQuantity = (req, action) => {
    DBTochangeQuantity(+req.params.id, action)
}
