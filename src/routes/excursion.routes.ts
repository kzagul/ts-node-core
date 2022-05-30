import express from 'express';
import {excursion} from "../controllers/excursion.controller";

const router = express.Router();

router.get('/excursions', excursion.getAll);
router.get('/excursions/:id', excursion.getAllById);

export = router;