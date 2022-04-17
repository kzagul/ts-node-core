import express from 'express';
import {typeOfVisiting} from "../controllers/typeofvisiting.controller";

const router = express.Router();

router.get('/typesOfVisiting', typeOfVisiting.getAll);

export = router;