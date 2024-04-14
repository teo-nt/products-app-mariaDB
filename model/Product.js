const EntitySchema = require('typeorm').EntitySchema

class Product {
    constructor(id, product, cost, description, quantity) {
        this.id = id
        this.product = product
        this.cost = cost
        this.description = description
        this.quantity = quantity
    }
}

const ProductEntity = new EntitySchema({
    name: "Product",
    target: "Product",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        product: {
            type: "varchar"
        },
        cost: {
            type: "int"
        },
        description: {
            type: "text"
        },
        quantity: {
            type: "int"
        }
    }
})

module.exports = { ProductEntity, Product }