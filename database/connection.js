const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize("node_sequelize", "root", '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    // operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate()
.then(() => console.log('database connected'))
.catch(err => console.log('Error: ', err));

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.products = require('../models/productModel.js')(sequelize, DataTypes)
// db.reviews = require('../models/reviewModel.js')(sequelize, DataTypes)

sequelize.sync({ force: false })
.then(() => {
    console.log('Yes re-sync done!')
})

module.exports = sequelize;
global.sequelize = sequelize;
// module.exports = db;