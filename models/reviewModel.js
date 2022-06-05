const { DataTypes } = require('sequelize');

const Review = sequelize.define("reviews", {
    rating: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.TEXT
    },
})

sequelize.sync({ force: false })
.then(() => {
    console.log('Yes re-sync done for reviews!')
})

module.exports = Review
