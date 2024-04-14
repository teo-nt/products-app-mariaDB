const EntitySchema = require('typeorm').EntitySchema

const UserEntity = new EntitySchema({
    name: "User",
    target: "User",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        username: {
            type: "varchar"
        },
        password: {
            type: "varchar"
        },
        name: {
            type: "varchar"
        },
        surname: {
            type: "varchar"
        },
        email: {
            type: "varchar"
        },
        address_area: {
            type: "varchar"
        },
        address_road: {
            type: "varchar"
        },
        phone: {
            type: "int"
        }
    }, 
    relations:{
        products: {
            target: "Product",
            type: "many-to-many",
            joinTable: true,
            cascade: true
        }
    }
})

module.exports = { UserEntity }