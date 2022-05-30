//import modules
import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';

const router: Express = express();

// import routes
import typeofexcursion from './routes/typeofexcursion.routes';
import typeofvisiting from './routes/typeofvisiting.routes';
import excursion from './routes/excursion.routes';

/** Routes */
router.use('/api', typeofexcursion);
router.use('/api', typeofvisiting);
router.use('/api', excursion);


const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:6060', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

router.use(cors(corsOptions));

//class Server
//Singleton pattern
class Server {

    static instance: Server

    private constructor(){

    }
    static getInstance(): Server {
        if (!Server.instance){
            Server.instance = new Server()
        }
        return Server.instance
    }

    public StartServer(router: Express){
        const httpServer = http.createServer(router);
        const PORT: any = process.env.PORT ?? 6060;
        httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
    }
}

const server = Server.getInstance()

server.StartServer(router)



router.use(morgan('dev'));
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.use((req, res, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});

router.get("/", (req, res) => {
    res.json({ message: "TS node.js application" });
  });

router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

