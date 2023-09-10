import * as service from "../service/service.js";


export const getAllProd = (req, res) => {
    service.getAllProd()
        .then(prod => res.json(prod))
        .catch(err => res.send('No data!'))
}

export const getById = (req, res) => {
    service.getById(req)
        .then(prod => {
            res.json(prod.length > 0 ?
                prod : `id ${req.params.id} is underfind!!!`)
        })
        .catch(err => res.send('error: ', err))
}

export const addProd = async (req, res) => {
    console.log(req.body);
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
    // if (!req.body.quantity) sends += 'please enter prodact quantity!\n'
    if (!req.body.rating.rate) sends += 'please enter prodact rating rate!\n'
    if (!req.body.rating.count) sends += 'please enter prodact rating count!\n'
    return sends
}

export const updateProd = async (req, res) => {
    try {
        await service.updateProd(req)
        res.send('The product has been updated!')
        return
    } catch (error) {
        res.status(450).send('There is no such ID')
    }
}

export const deleteProd = (req, res) => {
    try {
        service.deleteProd(req)
        res.send('The product has been delete!')
        return
    } catch (error) {
        res.status(400).send('There is no such ID')
    }
}

export const changeQuantity = async (req, res) => {
    try {
        let action;
        if (req.params.cal === '+') action = true;
        else if (req.params.cal === '-') action = false;
        else {
            res.send('this option no relevent!');
            return
        }
        await service.changeQuantity(req, action)
        res.send('The quantity has been change!')
        return
    } catch (error) {
        res.status(450).send('There is no such ID: ', error)
    }
}