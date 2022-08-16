import express, { Express, Router } from 'express';

// declare global {
//     namespace Express {
//         interface customExpress{
//             initEntryURL(): void
//         }
//     }
// }

// Express.prototype.initEntryURL = function(this: express.Express): void {
//     this.get("/", (req: any, res: any) => {
//         res.json({ message: "Kzagul TS/node.js REST API application" });
//     })
// }

export default class CustomExpress {
    static instance: CustomExpress

    private constructor(){

    }

    initEntryURL(router: any) {
        router.get("/", (req: any, res: any) => {
            res.json({ message: "Kzagul TS/node.js REST API application" });
        })
    }
    
    initErrorMessage(router: any){
        router.use((req: any, res: any, next: any) => {
            const error = new Error('wrong API url address')
            return res.status(404).json({
                message: error.message
            })
        })
    }

    static getInstance(): CustomExpress {
        if (!CustomExpress.instance){
            CustomExpress.instance = new CustomExpress()
        }
        return CustomExpress.instance
    }

    public StartServer(router: Express){
        const httpServer = http.createServer(router);
        const PORT: any = process.env.PORT ?? 6060;
        httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
    }
}
