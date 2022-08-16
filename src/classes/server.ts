import http from 'http'
import express, { Express } from 'express'

// class Server
// using Singleton pattern
export default class Server {
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
