import { Router } from 'express';
import userController from '../controllers/UserController';

const userRouter = new Router();

userRouter.post('/create', userController.create);

userRouter.get('/', userController.findAll);
userRouter.get('/:id', userController.findOne);

userRouter.put('/:id', userController.update);

userRouter.delete('/:id', userController.delete);

export default userRouter;
