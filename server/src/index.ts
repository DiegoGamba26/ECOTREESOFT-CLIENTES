import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
class Server {
   public app: Application;
    constructor() {
       this.app = express();
       this.config();
       this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
    }
    routes(): void{
        this.app.use(indexRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Server prendido en el:', this.app.get('port'),'papu Bv');
        });
    }
}
const server = new Server();
server.start();