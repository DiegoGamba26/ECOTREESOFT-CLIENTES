"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosController_1 = require("../controllers/productosController");
class ProductosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', productosController_1.productosController.listarProductos);
        this.router.get('/:id', productosController_1.productosController.obtenerProducto);
        this.router.post('/', productosController_1.productosController.crearProducto);
        this.router.delete('/:id', productosController_1.productosController.eliminarProducto);
        this.router.put('/:id', productosController_1.productosController.actualizarProducto);
    }
}
const productosRoutes = new ProductosRoutes();
exports.default = productosRoutes.router;
