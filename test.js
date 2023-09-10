import { MongoClient } from 'mongodb';

async function connect() {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();
    const db = client.db('test');
    const collection = db.collection('users');
    return collection
}

export async function dataBaseAllProd() {
    const collection = await connect()
    const findResult = await collection.find({}).toArray();
    return findResult;
}

export async function dataBasegetById(prodid) {
    const collection = await connect()
    const filteredDocs = await collection.find({ id: prodid }).toArray();
    return filteredDocs;
}

export async function DBToAddProd(prod) {
    const collection = await connect()
    const random = Math.floor(Math.random() * 1000) + 1;
    await collection.insertOne({ ...prod, quantity: random })
}

export async function DBToUppdateProd(prodid, prodBody) {
    const collection = await connect()
    await collection.updateOne(
        { id: prodid },
        { $set: { ...prodBody } }
    )
}

export async function DBToDeleteProd(prodid) {
    const collection = await connect()
    await collection.deleteOne(
        { id: prodid }
    )
}

export async function DBTochangeQuantity(prodid, action) {
    const collection = await connect()
    await collection.updateOne(
        { id: prodid },
        { $inc: { quantity: action ? +1 : -1 } }
    )
}