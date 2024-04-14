const userService = require('../services/user.services')

exports.findAll = async(req, res) => {
    console.log('Find all users')

    try {
        const result = await userService.findAll()
        res.status(200).json({status: true, data: result})
        console.log("Success in reading all users")
    } catch (err) {
        res.status(400).json({status: false, data: err})
        console.log(`Problem in reading users`)
    }
}

exports.findOne = async(req, res) => {
    console.log("Find a user")
    const username = req.params.username
    try {
        const result = await userService.findOne(username)
        res.status(200).json({data: result})
        console.log('Success in reading user')
    } catch (err) {
        res.status(400).json({data: err})
        console.log(`Problem in reading user, ${err}`)
    }
}

exports.create = async(req, res) => {
    console.log("Insert user")
    const data = req.body

    try {
        await userService.create(data)
        res.status(200).json({data: data})
        console.log("User saved")
    } catch (err) {
        res.status(400).json({data: err})
        console.log("Problem in saving user", err)
    }
}

exports.update = async(req, res) => {
    const oldUsername = req.params.username

    console.log("Update user with username: ", oldUsername)

    let updatedUser = req.body

    try {
        await userService.update(updatedUser, oldUsername)
        updatedUser = await userService.findOne(updatedUser.username)
        res.status(200).json({data: updatedUser})
        console.log("Success in updating user: " + oldUsername)
    } catch (err) {
        res.status(400).json({data: err.toString()})
        console.log("Problem in updating user: " + oldUsername)
    }
}

exports.delete = async(req, res) => {
    const username = req.params.username

    console.log("Delete user:", username)

    try {
        const result = await userService.deleteUser(username)
        res.status(200).json({data: result})
        console.log('Success in deleting user:', username)
    } catch (err) {
        res.status(400).json({data:err})
        console.log('Problem in deleting user')
    }
}