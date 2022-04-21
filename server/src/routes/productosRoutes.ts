import { Router } from 'express';

import { productosController } from '../controllers/productosController';

class ProductosRoutes {
    public router: Router = Router();


    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/', productosController.listarProductos);
        this.router.get('/:id', productosController.obtenerProducto);
        this.router.post('/', productosController.crearProducto);
        this.router.delete('/:id', productosController.eliminarProducto);
        this.router.put('/:id', productosController.actualizarProducto);
    }
}
const productosRoutes = new ProductosRoutes();
export default productosRoutes.router;