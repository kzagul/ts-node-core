import typeofexcursion from './typeofexcursion.routes';
import typeofvisiting from './typeofvisiting.routes';
import excursion from './excursion.routes';

function initEntryURL(router: any) {
    router.get("/", (req: any, res: any) => {
        res.json({ message: "Kzagul TS/node.js REST API application" });
    })
}

function initErrorMessage(router: any){
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
    
    // functions
    initEntryURL,
    initErrorMessage
}