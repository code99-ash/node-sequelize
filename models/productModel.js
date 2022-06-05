const { DataTypes } = require('sequelize');

const Product = sequelize.define("products", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.TEXT
    },
    published: {
        type: DataTypes.BOOLEAN
    }
})

sequelize.sync({ force: false })
.then(() => {
    console.log('Yes re-sync done for products!')
})

module.exports = Product