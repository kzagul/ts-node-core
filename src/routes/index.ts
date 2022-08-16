import express, { Express, Router } from 'express';

import typeofexcursion from './typeofexcursion.routes';
import typeofvisiting from './typeofvisiting.routes';
import excursion from './excursion.routes';
import productCard from './productCard.routes';

function initEntryURL(router: express.Express) {
    router.get("/", (req: any, res: any) => {
        res.json({ message: "Kzagul TS/node.js REST API application" });
    })
}

function initErrorMessage(router: express.Express){
    router.use((req: any, res: any, next: any) => {
        const error = new Error('wrong API url address')
        return res.status(404).json({
            message: error.message
        })
    })
}

export {
    // properties
    typeofexcursion, 
    typeofvisiting, 
    excursion,
    productCard,
    
    // functions
    initEntryURL,
    initErrorMessage
}