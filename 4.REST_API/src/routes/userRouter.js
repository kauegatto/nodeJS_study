import { Router } from 'express';
import userController from '../controllers/userController';

const userRouter = new Router();

userRouter.post('/user/create', userController.create);

userRouter.get('/user', userController.findAll);
userRouter.get('/user/:id', userController.findOne);
userRouter.get('/users', userController.findAll);

userRouter.put('/user/:id', userController.update);

userRouter.delete('/user/:id', userController.delete);

export default userRouter;
