const productController = require('../controllers/ProductController')
const {addProduct} = require('../controllers/ProductController')

const router = require('express').Router();

router.get('/all-products',productController.getAllProduct)
router.post('/add-product', (...params) => addProduct(...params) )
router.get('/published', (...params) => productController.getPublishedProduct(...params))
router.get('/:id', (...params) => productController.getOneProduct(...params))
router.put('/:id', (...params) => productController.updateProduct(...params))
router.delete('/:id', (...params) => productController.deleteProduct(...params))


module.exports = router;