import { Prisma } from '@prisma/client';

export const GetMovieSelect: Prisma.MovieSelect = {
  id: true,
  url: true,
  createdAt: true,
  updatedAt: true,
  author: {
    select: {
      id: true,
      email: true,
    },
  },
};
