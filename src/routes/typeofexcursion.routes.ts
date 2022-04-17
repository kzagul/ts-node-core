import express from 'express';
import {typeOfExcursion} from "../controllers/typeofexcursion.controller";

const router = express.Router();

router.get('/typesOfExcursion', typeOfExcursion.getAll);

export = router;