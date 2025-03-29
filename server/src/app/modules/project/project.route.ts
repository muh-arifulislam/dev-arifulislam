import express from 'express';
import { ProjectControllers } from './project.controller';
import { ProjectValidations } from './project.validation';
import validateRequest from '../../middlewares/validateRequest';
import validateAuth from '../../middlewares/validateAuth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.get('/:id', ProjectControllers.getProject);

router.post(
  '/',
  validateAuth(USER_ROLE.admin),
  validateRequest(ProjectValidations.addOneValidationSchema),
  ProjectControllers.addProject,
);

router.post(
  '/add-bulk',
  validateAuth(USER_ROLE.admin),
  ProjectControllers.addProjects,
);

router.get('/', ProjectControllers.getProjects);

export const ProjectRoutes = router;
