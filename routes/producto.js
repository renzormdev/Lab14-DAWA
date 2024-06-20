
const express =  require('express')

const router = express.Router();
const productoController =  require('../controllers/productoController')

router.post('/',productoController.crearProducto)
router.get('/',productoController.obtenerProducto)
router.post('/:id',productoController.actualizarProducto)
router.get('/:id',productoController.obtenerProducto)
router.delete('/:id',productoController.eliminarProducto)

module.exports = router;
