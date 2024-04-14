const userEntity = require('../model/User').UserEntity
const dataSource = require('../connect').dataSource

async function findAll() {
    const results = await dataSource
        .getRepository(userEntity)
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.products', 'product')
        .getMany()

    return results
}

async function findOne(username) {
    const result = dataSource
        .getRepository(userEntity)
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.products', 'product')
        .where('user.username = :username', {username: username})
        .getOne()

    return result
}

async function create(data) {
    const result = await dataSource
        .getRepository(userEntity)
        .save(data)
        .then(() => console.log('User has been saved'))
        .catch((error) => console.log(error))

    return result
}

async function update(data, oldUsername) {
    const result = await dataSource
        .getRepository(userEntity)
        .update({username: oldUsername}, data)
        .then(() => console.log('User has been updated'))
        .catch((error) => console.log(error))

    return result
}

async function deleteUser(username) {
    const result = await dataSource
        .getRepository(userEntity)
        .delete({username: username})
        .then(() => console.log('User has been deleted'))
        .catch((error) => console.log(error))

    return result;
}

module.exports = { findAll, findOne, create, update, deleteUser }