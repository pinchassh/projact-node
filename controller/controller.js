import * as service from "../service/service.js";
import * as dal from "../dal/dal.js";


export const getAllProd = (req, res) => {
    const prod = service.getAllProd();
    // console.log(prod);
    res.json(prod)
}
export const getById = (req, res) => {
    const prod = service.getById(req);
    // console.log(prod);
    res.json(prod)
}

export const addProd = async (req, res) => {
    // console.log(req.body);
    if (checkNewProd(req)) res.send(checkNewProd(req))
    else {
        await service.addProd(req.body);
        res.json('prodact added.')
    }
}
function checkNewProd(req) {
    let sends = '';
    if (!req.body.id) sends += 'please enter prodact id!\n'
    if (!req.body.title) sends += 'please enter prodact title!\n'
    if (!req.body.description) sends += 'please enter prodact description!\n'
    if (!req.body.price) sends += 'please enter prodact price!\n'
    if (!req.body.category) sends += 'please enter prodact category!\n'
    if (!req.body.image) sends += 'please enter prodact image!\n'
    if (!req.body.quantity) sends += 'please enter prodact quantity!\n'
    if (!req.body.rating.rate) sends += 'please enter prodact rating rate!\n'
    if (!req.body.rating.count) sends += 'please enter prodact rating count!\n'
    return sends
}

export const updateProd = async (req,res) =>{
    let i = 0;
    const data = dal.getAllProd()
    for (const prod of data) {
        // console.log(prod);
        if (prod.id === +req.params.id) {
            const index = i;
            // const arr = Object.keys(req.body);
            await service.updateProd(req.body,index)
            res.send('The product has been updated!')
        }
        i++
    }
}







