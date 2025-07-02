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
  const projects = await Project.aggregate([
    {
      $addFields: {
        parsedToDate: {
          $dateFromString: {
            dateString: { $concat: ['01 ', '$projectDuration.to'] },
            format: '%d %b %Y',
          },
        },
      },
    },
    { $sort: { parsedToDate: -1 } }, // -1 for descending order (latest first)
  ]);

  return projects;
};

const addManyIntoDB = async (payloadArr: IProject[]) => {
  const result = await Project.insertMany(payloadArr);

  return result;
};

const getFeaturedProjectsFromDB = async () => {
  const featured = await Project.aggregate([
    {
      $match: { isFeatured: true },
    },
    {
      $addFields: {
        parsedToDate: {
          $dateFromString: {
            dateString: { $concat: ['01 ', '$projectDuration.to'] },
            format: '%d %b %Y',
          },
        },
      },
    },
    { $sort: { parsedToDate: -1 } }, // -1 for descending order (latest first)
  ]);

  return featured;
};

export const ProjectServices = {
  addOneIntoDB,
  deleteOneFromDB,
  getOneFromDB,
  getManyFromDB,
  addManyIntoDB,
  getFeaturedProjectsFromDB,
};
