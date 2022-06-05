const Product = require('../models/productModel')

// 1. Create Product
const addProduct = async(req, res) => {
    try {
        const { title, price, description } = req.body
        const published = req.body.published? req.body.published : false;

        const info = {title, price, description, published};
        const product = await Product.create(info);

        res.status(200).json(product);

    }catch(err) {
        console.log(err.stack)
        res.status(401).send(`Bad Request: ${err}`)
    }
}

// 2. get all product
const getAllProduct = async(req, res) => {
    // let products = await Product.findAll({
    //     attributes: ['title', 'price']
    // })
    let products = await Product.findAll()
    res.status(200).json(products);
}

// 3. Get one product
const getOneProduct = async(req, res) => {
    let id = req.params.id;
    let product = await Product.findOne({ where: { id } })
    res.status(200).json(product)
}

// 4. Update Product
const updateProduct = async(req, res) => {
    let id = req.params.id;
    const product = await Product.update(req.body, { where: { id } })
    res.status(200).json(product)
}

// 5. Delete Product
const deleteProduct = async(req, res) => {
    let id = req.params.id;
    await Product.destroy({ where: { id } })
    res.status(200).json('Product has deleted')
}

// 6. Published Product
const getPublishedProduct = async(req, res) => {
    const products = await Product.findAll({ where: { published: true } })
    res.status(200).json(products)
}

module.exports = { 
    addProduct, getAllProduct, 
    getOneProduct, updateProduct, 
    deleteProduct, getPublishedProduct
}