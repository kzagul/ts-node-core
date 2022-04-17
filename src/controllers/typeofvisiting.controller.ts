import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

import {IController} from "./controller";

const db = require('../db/DBConnection.ts')

class TypeOfVisiting implements IController{


    public async getAll(req: Request, res: Response, next: NextFunction){
        try {
            let sql: string = `SELECT * FROM typeofvisiting`
            let result = await db.query(sql)
            let typesOfVisiting: [TypeOfVisiting] = result.rows;
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
}

// getting all Types of visiting
// const getAll = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         let sql: string = `SELECT * FROM typeofvisiting`
//         let result = await db.query(sql)
//         let typesOfVisiting: [ITypeOfVisiting] = result.rows;
//         res.json(typesOfVisiting)
//         // return result.json({
//         //     message: typesOfVisiting
//         // });
//     }
//     catch (error){
//         console.error(error)
//         next(error)
//     }
// };
//API GET locate by id
// const getById = async (req: Request, res: Response, next: NextFunction) => {
//     try{
//         const id = req.params.id
//         let sql: string = `SELECT * FROM locate WHERE id = $1`
//         let result = await db.query(sql, [id])
//         res.json(result.rows)
//     }
//     catch (error){
//         console.error(error)
//         next(error)
//     }
// }
// // getting a single post
// const getPost = async (req: Request, res: Response, next: NextFunction) => {
//     // get the post id from the req
//     let id: string = req.params.id;
//     // get the post
//     let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     let post: Post = result.data;
//     return res.status(200).json({
//         message: post
//     });
// };

// // updating a post
// const updatePost = async (req: Request, res: Response, next: NextFunction) => {
//     // get the post id from the req.params
//     let id: string = req.params.id;
//     // get the data from req.body
//     let title: string = req.body.title ?? null;
//     let body: string = req.body.body ?? null;
//     // update the post
//     let response: AxiosResponse = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         ...(title && { title }),
//         ...(body && { body })
//     });
//     // return response
//     return res.status(200).json({
//         message: response.data
//     });
// };

// // deleting a post
// const deletePost = async (req: Request, res: Response, next: NextFunction) => {
//     // get the post id from req.params
//     let id: string = req.params.id;
//     // delete the post
//     let response: AxiosResponse = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     // return response
//     return res.status(200).json({
//         message: 'post deleted successfully'
//     });
// };

// // adding a post
// const addPost = async (req: Request, res: Response, next: NextFunction) => {
//     // get the data from req.body
//     let title: string = req.body.title;
//     let body: string = req.body.body;
//     // add the post
//     let response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
//         title,
//         body
//     });
//     // return response
//     return res.status(200).json({
//         message: response.data
//     });
// };


let typeOfVisiting = new TypeOfVisiting()
export { typeOfVisiting };

// getPost, updatePost, deletePost, addPost