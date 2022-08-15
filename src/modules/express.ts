import express, { Express, Router } from 'express';

declare global {
    namespace Express {
        interface customExpress {
            initEntryURL(): void
        }
    }
}

Express.prototype.initEntryURL() = function(this: express.Express): void {
    this.get("/", (req: any, res: any) => {
        res.json({ message: "Kzagul TS/node.js REST API application" });
    })
}