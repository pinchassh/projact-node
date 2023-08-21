import * as service from "../service/service.js";
import * as dal from "../dal/dal.js";


export const getAllProd = (req, res) => {
    service.getAllProd()
    .then(prod=>res.json(prod))
    .catch(err=>res.send('No data!'))
    // console.log(prod);
    
}
export const getById = async(req, res) => {
    const prod =await service.getById(req);
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

export const updateProd = async (req, res) => {
    let i = 0;
    const data =await dal.getAllProd()
    for (const prod of data) {
        if (prod.id === +req.params.id) {
            const index = i;
            // console.log(i);
            // const arr = Object.keys(req.body);
            await service.updateProd(req.body, index)
            res.send('The product has been updated!')
            return
        }
        i++
    }
    res.status(450).send('There is no such ID')
}

export const deleteProd = async (req, res) => {
    const data =await dal.getAllProd()
    for (const prod of data) {
        if (prod.id === +req.params.id) {
            // console.log(prod.id);
            // console.log(+req.params.id);
            await service.deleteProd(req)
            res.send('The product has been delete!')
            return
        }
    }
    res.status(450).send('There is no such ID')
}

export const changeQuantity = async (req, res) => {
    let i = 0;
    const data = dal.getAllProd()
    // if (!req.body.quantity) {
    //     res.send('please enter prodact quantity!');
    //     return
    // }
    for (const prod of data) {
        if (prod.id === +req.params.id) {
            const index = i;
            let action;
            if (req.params.cal === '+') action = true;
            else if (req.params.cal === '-') action = false;
            else {
                res.send('this option no relevent!');
                return
            }
            await service.changeQuantity(index,action)
            res.send('The quantity has been change!')
            return
        }
        i++
    }
    res.status(450).send('There is no such ID')
}







