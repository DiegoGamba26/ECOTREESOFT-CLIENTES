import { Request, Response } from "express";
class ProductosController {

   public productos(req: Request, res:Response) {
        res.send('Productossss');
    }
}
export const productosController = new ProductosController();