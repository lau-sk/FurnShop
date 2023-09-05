const router = require('express').Router();
const productController = require('../controllers/productsController');

router.get('/', productController.getAllProduct)
router.get('/:id', productController.getProduct)
router.get('/search/:title', productController.searchProduct)
router.post('/', productController.createProduct)

module.exports = router