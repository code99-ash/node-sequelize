// module.exports = async() => {
//     const Tweet = require('../models/Tweet');
//     const User = require('../models/User');

//     User.hasMany(Tweet, { as: "tweets", foreignKey: 'userId' })
//     Tweet.belongsTo(User, { as: 'user', foreignKey: 'userId' })

//     const errHandler = (err) => {
//         console.error("Error: ", err)
//     }

//     // const user = await User.create({ 
//     //     username: 'Smiley',
//     //     passwd: 'password'
//     // }).catch(errHandler)

//     // const tweet = await Tweet.create({
//     //     content: 'Tweet by smiley',
//     //     userId: user.id
//     // }).catch(errHandler)

//     const users = await User.findAll({ 
//         where: { username: 'Smiley' },  
//         include: [ { model: Tweet, as: "tweets" } ]
//     }).catch(errHandler)

//     console.log("My tweets: ", users[0]['tweets'])

// }