const productEntity = require('../model/Product').ProductEntity
const dataSource = require('../connect').dataSource

async function findAll() {
    const result = await dataSource
        .getRepository(productEntity)
        .createQueryBuilder()
        .select('product')
        .from(productEntity, 'product')
        .getMany()

    return result
}

async function findOne(id) {
    const result = await dataSource
        .getRepository(productEntity)
        .createQueryBuilder()
        .select('product')
        .from(productEntity, 'product')
        .where('product.id = :productID', {productID: id})
        .getOne()

    return result
}

async function create(data) {
    await dataSource
        .getRepository(productEntity)
        .save(data)
        .then(() => console.log('Product has been saved'))
        .catch((error) => console.log(error))
}

async function update(data) {
    await dataSource
        .getRepository(productEntity)
        .save(data)
        .then(() => console.log('Product has been updated'))
        .catch((error) => console.log(error))    
}

async function deleteProduct(id) {
    await dataSource
        .getRepository(productEntity)
        .delete(id)
        .then(() => console.log('Product has been deleted'))
        .catch((error) => console.log(error))
}

module.exports = { findAll, findOne, create, update, deleteProduct }