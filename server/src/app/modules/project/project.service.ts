import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { IProject } from './project.interface';
import { Project } from './project.model';

const addOneIntoDB = async (payload: IProject) => {
  const result = await Project.create(payload);

  return result;
};

const deleteOneFromDB = async (id: string) => {
  const result = await Project.findByIdAndDelete(id);

  return result;
};

const getOneFromDB = async (id: string) => {
  const result = await Project.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Project data did not exits');
  }

  return result;
};

const getManyFromDB = async () => {
  const result = await Project.find();

  return result;
};

const addManyIntoDB = async (payloadArr: IProject[]) => {
  const result = await Project.insertMany(payloadArr);

  return result;
};

export const ProjectServices = {
  addOneIntoDB,
  deleteOneFromDB,
  getOneFromDB,
  getManyFromDB,
  addManyIntoDB,
};
