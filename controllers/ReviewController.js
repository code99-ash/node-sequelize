const Review = require('../models/reviewModel')

const getReview = async(req, res) => {
    res.send('get for review')
}

module.exports = { getReview }