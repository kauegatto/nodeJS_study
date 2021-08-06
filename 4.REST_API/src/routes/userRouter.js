import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const userRouter = new Router();

userRouter.post('/create', userController.create);

userRouter.get('/', userController.findAll);
userRouter.get('/:id', userController.findOne);

userRouter.put('/:id', loginRequired, userController.update);

userRouter.delete('/:id', loginRequired, userController.delete);

export default userRouter;
