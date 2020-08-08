import express from 'express';
import ClassesController from '../controllers/ClassesController';

const classesRouter = express.Router();

const classesControllers = new ClassesController();

classesRouter.post('/', classesControllers.create);
classesRouter.get('/', classesControllers.index);

export default classesRouter;