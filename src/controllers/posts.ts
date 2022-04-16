/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Locate {
    id: Number;
    address: String;
    longitude: String;
    latitude: String;
}

// getting all posts
const getAll = async (req: Request, res: Response, next: NextFunction) => {
    // get some posts
    let result: AxiosResponse = await axios.get(`http://localhost:3000/api/locate`);
    let locates: [Locate] = result.data;
    return res.status(200).json({
        message: locates
    });
};

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

export default { getAll };

// getPost, updatePost, deletePost, addPost