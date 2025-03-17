import express from 'express';
import { ProjectControllers } from './project.controller';

const router = express.Router();

router.get('/:id', ProjectControllers.getProject);

router.post('/', ProjectControllers.addProject);

router.post('/add-bulk', ProjectControllers.addProjects);

router.get('/', ProjectControllers.getProjects);

export const ProjectRoutes = router;
