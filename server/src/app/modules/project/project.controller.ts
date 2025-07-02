import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProjectServices } from './project.service';

const addProject = catchAsync(async (req, res) => {
  const data = await ProjectServices.addOneIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Project added successfully',
    data: data,
  });
});

const addProjects = catchAsync(async (req, res) => {
  const data = await ProjectServices.addManyIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Projects added successfully',
    data: data,
  });
});

const getProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await ProjectServices.getOneFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Project data retrieved successfully',
    data: data,
  });
});

const getProjects = catchAsync(async (req, res) => {
  const data = await ProjectServices.getManyFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Project data retrieved successfully',
    data: data,
  });
});

const updateProject = catchAsync(async (req, res) => {
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Project data updated successfully',
    data: null,
  });
});

const getFeaturedProjects = catchAsync(async (req, res) => {
  const result = await ProjectServices.getFeaturedProjectsFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Featured projects data updated successfully',
    data: result,
  });
});

export const ProjectControllers = {
  addProject,
  getProject,
  updateProject,
  getProjects,
  addProjects,
  getFeaturedProjects,
};
