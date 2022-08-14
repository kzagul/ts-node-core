//import modules
import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
import Server from './classes/server'

const router: Express = express();

// import routes
import {
    typeofexcursion,
    typeofvisiting,
    excursion,
    initEntryURL,
    initErrorMessage
} from './routes/index';

// routes
router.use('/api', typeofexcursion);
router.use('/api', typeofvisiting);
router.use('/api', excursion);

// cors
import {cors, corsOptions} from './modules/cors'
router.use(cors(corsOptions));

// Server
const server = Server
    .getInstance()
    .StartServer(router)



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


const initNodeServer = () => {
    initEntryURL(router)
    initErrorMessage(router)
}

try {
    initNodeServer()
} catch (e: any) {
    console.error(e.message)
}