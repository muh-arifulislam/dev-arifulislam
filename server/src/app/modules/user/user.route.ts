import express from 'express';
import { UserControllers } from './user.controller';
import validateAuth from '../../middlewares/validateAuth';
import { USER_ROLE } from './user.constant';

const router = express.Router();

router.get('/me', validateAuth(USER_ROLE.admin), UserControllers.getUser);

router.put('/:id', validateAuth(USER_ROLE.admin), UserControllers.updateUser);

export const UserRoutes = router;
