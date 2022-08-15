import express from 'express';
import {productCard} from "../controllers/productCard";

const router = express.Router();

router.get('/productcard', productCard.getAll);
router.get('/productcard/:id', productCard.getAllById);

export = router;