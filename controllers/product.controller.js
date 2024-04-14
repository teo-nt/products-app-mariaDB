const productService = require('../services/product.services')

exports.findAll = async(req, res) => {
    console.log('Find all products')

    try {
        const result = await productService.findAll()
        res.status(200).json({status: true, data: result})
        console.log('Success in reading all products')
    } catch (err) {
        res.status(400).json({status: false, data: err})
        console.log(`Problem in reading all products`)
    }
}

exports.findOne = async(req, res) => {
    console.log('Find a product')
    const id = req.params.id
    try {
        const result = await productService.findOne(id)
        res.status(200).json({data: result})
        console.log('Success in finding product: ', result)
    } catch(err) {
        res.status(404).json({data: err})
        console.log(`Problem in reading product with id: ${id}`)
    }
}

exports.create = async(req, res) => {
    console.log('Insert a product')

    const newProduct = req.body
    
    try {
        await productService.create(newProduct)
        res.status(200).json({data: newProduct})
        console.log(`Product: ${newProduct} was inserted`)
    } catch(err) {
        res.status(400).json({data: err})
        console.log('Problem in saving product', err)
    }
}

exports.update = async(req, res) => {
    console.log('Update product with id:', req.params.id)

    const updatedProduct = req.body

    try {
        await productService.update(updatedProduct)
        res.status(200).json({data: updatedProduct})
        console.log('Success in updating product with id: ' + req.params.id)
    } catch(err) {
        res.status(400).json({data: err})
    }
}

exports.delete = async(req, res) => {
    const id = req.params.id

    console.log('Delete product with id:', id)
    try {
        const result = await productService.findOne(id)
        await productService.deleteProduct(id)
        res.status(200).json({data: result})
        console.log('Success in deleting product with id:', id)
    } catch(err) {
        res.status(400).json({data: err})
    }
}