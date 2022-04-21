import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import productosRoutes from './routes/productosRoutes';
class Server {
   public app: Application;
    constructor() {
       this.app = express();
       this.config();
       this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
    }
    routes(): void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/',productosRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Server prendido en el:', this.app.get('port'),'papu Bv');
        });
    }
}
const server = new Server();
server.start();