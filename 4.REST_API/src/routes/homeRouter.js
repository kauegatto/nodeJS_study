import { Router } from 'express';
import HomeController from '../controllers/HomeController';

const homeRouter = new Router();

homeRouter.get('/', HomeController.index);
homeRouter.get('/createUser', HomeController.createUser);
export default homeRouter;
