import { User } from '@prisma/client';

export const userTestDto = { email: 'namlxuit@gmail.com', password: '123' };
export const userLogin: User = {
  id: 1,
  email: 'namlxuit@gmail.com',
  password: '123',
  status: 'active',
  createdAt: new Date(),
  updatedAt: new Date(),
};
export const userExpectedDto = {
  id: expect.any(Number),
  email: expect.any(String),
  status: 'active',
  createdAt: expect.any(Date),
  updatedAt: expect.any(Date),
};
export const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hbWx4dWl0QGdtYWlsLmNvbSIsInN1YiI6MSwiaWF0IjoxNjU3NTU0MjQyfQ.IkIp10KZ8yshI7dszpSYkBKTAa7BauxyQLuq14gbRJE';
