import { Request, Response, NextFunction } from 'express';

interface IController {
    getAll(req: Request, res: Response, next: NextFunction): Promise<void>
}

export {IController}