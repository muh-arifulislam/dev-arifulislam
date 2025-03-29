import { z } from 'zod';

const addAdditionalMediaSchema = z.object({
  url: z.string().url({ message: 'Invalid URL format' }),
  title: z.string().min(1, { message: 'Title is required' }),
  description: z.string().optional(),
  thumbnail: z.string().url({ message: 'Invalid thumbnail URL' }).optional(),
  order: z.number().min(0, { message: 'Order must be a non-negative number' }),
});

const updateAdditionalMediaSchema = z.object({
  url: z.string().url({ message: 'Invalid URL format' }).optional(),
  title: z.string().min(1, { message: 'Title is required' }).optional(),
  description: z.string().optional(),
  thumbnail: z.string().url({ message: 'Invalid thumbnail URL' }).optional(),
  order: z
    .number()
    .min(0, { message: 'Order must be a non-negative number' })
    .optional(),
});

const addProjectDurationSchema = z.object({
  from: z
    .string()
    .regex(
      /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4}$/,
      "Date must be in 'MMM YYYY' format (e.g., Mar 2025)",
    ),
  to: z
    .string()
    .regex(
      /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4}$/,
      "Date must be in 'MMM YYYY' format (e.g., Mar 2025)",
    ),
});

const updateProjectDurationSchema = z.object({
  from: z
    .string()
    .regex(
      /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4}$/,
      "Date must be in 'MMM YYYY' format (e.g., Mar 2025)",
    )
    .optional(),
  to: z
    .string()
    .regex(
      /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4}$/,
      "Date must be in 'MMM YYYY' format (e.g., Mar 2025)",
    )
    .optional(),
});

const addOneValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    description: z.string().min(1, { message: 'Description is required' }),
    techStack: z.array(
      z.string().min(1, { message: 'Tech stack item cannot be empty' }),
    ),
    category: z.string().min(1, { message: 'Category is required' }),
    image: z.string().url({ message: 'Invalid image URL' }).optional(),
    additionalMedia: z.array(addAdditionalMediaSchema),
    projectDuration: addProjectDurationSchema,
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
      image: z
        .string()
        .url({ message: 'Invalid image URL' })
        .optional()
        .nullable(),
      additionalMedia: z.array(updateAdditionalMediaSchema).optional(),
      projectDuration: updateProjectDurationSchema,
    })
    .partial(),
});

export const ProjectValidations = {
  addOneValidationSchema,
  updateOneValidationSchema,
};
