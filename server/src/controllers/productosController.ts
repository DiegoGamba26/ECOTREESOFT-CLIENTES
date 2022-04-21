import { Request, Response } from "express";
import pool from '../database';
import bodyParser from "body-parser";
class ProductosController {

    public async listarProductos(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM productos');
        res.json(games);
    }
    public async obtenerProducto(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM productos WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "El producto no existe mi so" });
    }

    public async crearProducto(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO productos set ?', [req.body]);
        res.json({ message: 'Producto Guardado MI SOOOO' });
    }
    public async eliminarProducto(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM productos WHERE id = ?', [id]);
        res.json("ELIMINADOOOO PAPAAAAAAAAAAA");
    }
    public async actualizarProducto(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const anterior = req.body;
        await pool.query('UPDATE productos set ? WHERE id = ?', [anterior, id]);
        res.json("ACTUALIZADO PAPAAAAAAAAAAA");
    }
}
export const productosController = new ProductosController();