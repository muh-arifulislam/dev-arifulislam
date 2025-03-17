import { z } from 'zod';

const additionalValidationMediumSchema = z.object({
  url: z.string().url({ message: 'Invalid URL format' }).optional(),
  title: z.string().min(1, { message: 'Title is required' }),
  description: z.string().optional(),
  thumbnail: z.string().url({ message: 'Invalid thumbnail URL' }).optional(),
  order: z.number().min(0, { message: 'Order must be a non-negative number' }),
});

const projectDurationValidationSchema = z.object({
  from: z.string().url({ message: 'Project start date is required' }),
  to: z.string().optional(),
});

const addOneValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    description: z.string().min(1, { message: 'Description is required' }),
    techStack: z.array(
      z.string().min(1, { message: 'Tech stack item cannot be empty' }),
    ),
    category: z.string().min(1, { message: 'Category is required' }),
    liveUrl: z.string().url({ message: 'Invalid live URL' }).optional(),
    liveUrlAdditional: z
      .string()
      .url({ message: 'Invalid additional live URL' })
      .optional(),
    image: z.string().url({ message: 'Invalid image URL' }).optional(),
    additionalMedia: z.array(additionalValidationMediumSchema).optional(),
    projectDuration: projectDurationValidationSchema,
  }),
});

const updateOneValidationSchema = z.object({
  body: z
    .object({
      title: z.string().min(1, { message: 'Title is required' }).optional(),
      description: z
        .string()
        .min(1, { message: 'Description is required' })
        .optional(),
      techStack: z
        .array(
          z.string().min(1, { message: 'Tech stack item cannot be empty' }),
        )
        .optional(),
      category: z
        .string()
        .min(1, { message: 'Category is required' })
        .optional(),
      liveUrl: z
        .string()
        .url({ message: 'Invalid live URL' })
        .optional()
        .nullable(),
      liveUrlAdditional: z
        .string()
        .url({ message: 'Invalid additional live URL' })
        .optional()
        .nullable(),
      image: z
        .string()
        .url({ message: 'Invalid image URL' })
        .optional()
        .nullable(),
      additionalMedia: z.array(additionalValidationMediumSchema).optional(),
    })
    .partial(),
});

export const ProjectValidations = {
  addOneValidationSchema,
  updateOneValidationSchema,
};
