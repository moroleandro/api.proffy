import express from 'express';
import ConnectionsController from '../controllers/ConnectionsController';

const connectionRouter = express.Router();

const connectionsControllers = new ConnectionsController();

connectionRouter.post('/', connectionsControllers.create);
connectionRouter.get('/', connectionsControllers.index);

export default connectionRouter;