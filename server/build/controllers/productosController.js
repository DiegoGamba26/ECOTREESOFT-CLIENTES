"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productosController = void 0;
const database_1 = __importDefault(require("../database"));
class ProductosController {
    listarProductos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('SELECT * FROM productos');
            res.json(games);
        });
    }
    obtenerProducto(req, res) {
        database_1.default.query('DESCRIBE productos');
        res.json('Productossss');
    }
    crearProducto(req, res) {
        console.log(req.body);
        //await pool.query('INSERT INTO productos set ?', [req.body])
        res.json({ text: 'Producto guardado' });
    }
    eliminarProducto(req, res) {
        res.json({ text: 'Eliminando un producto' });
    }
    actualizarProducto(req, res) {
        res.json({ text: 'Actualizando un producto' + req.params.id });
    }
}
exports.productosController = new ProductosController();
