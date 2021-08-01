import { Router } from 'express';
import userController from '../controllers/userController';

const userRouter = new Router();

userRouter.post('/user/create', userController.createUser);
export default userRouter;
