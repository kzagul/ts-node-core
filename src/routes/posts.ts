import express from 'express';
import controller from '../controllers/posts';
const router = express.Router();

router.get('/posts', controller.getAll);

export = router;