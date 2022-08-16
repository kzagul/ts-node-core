import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

import {IController} from "./controller";

const db = require('../db/DBConnection.ts')

class ProductCardController implements IController{

    public async getAll(req: Request, res: Response, next: NextFunction){
        try {
            let sql: string = `SELECT * FROM product_card`
            let result = await db.query(sql)
            let typesOfVisiting: [ProductCardController] = result.rows;
            res.json(typesOfVisiting)
            // return result.json({
            //     message: typesOfVisiting
            // });
        }
        catch (error){
            console.error(error)
            next(error)
        }
    };

    // getting excursion by id
    public async getAllById(req: Request, res: Response, next: NextFunction){
        try {
            const id = req.params.id
            let sql: string =   `SELECT * FROM product_card WHERE product_card.id = $1;`
            let result = await db.query(sql,[id])
            let typesOfVisiting: [ProductCardController] = result.rows;
            res.json(typesOfVisiting)
        }
        catch (error){
            console.error(error)
            next(error)
        }
    }
}

const productCard = new ProductCardController()
export { productCard }