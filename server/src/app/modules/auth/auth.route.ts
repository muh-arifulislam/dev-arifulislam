import express from 'express';
import { AuthControllers } from './auth.controller';
import { UserControllers } from '../user/user.controller';
import validateAuth from '../../middlewares/validateAuth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post('/login', AuthControllers.loginUser);

router.post(
  '/register',
  validateAuth(USER_ROLE.admin),
  UserControllers.addUser,
);

export const AuthRoutes = router;
