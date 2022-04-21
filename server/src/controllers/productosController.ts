import { Request, Response } from "express";
import pool from '../database';
import bodyParser from "body-parser";
class ProductosController {

    public async listarProductos(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM productos');
        res.json(games);
    }
    public obtenerProducto(req: Request, res: Response) {
        pool.query('DESCRIBE productos');
        res.json('Productossss');
    }

    public crearProducto(req: Request, res: Response) {
        console.log(req.body);
        //await pool.query('INSERT INTO productos set ?', [req.body])
        res.json({ text: 'Producto guardado' });
    }
    public eliminarProducto(req: Request, res: Response) {
        res.json({ text: 'Eliminando un producto' });
    }
    public actualizarProducto(req: Request, res: Response) {
        res.json({ text: 'Actualizando un producto' + req.params.id });
    }
}
export const productosController = new ProductosController();