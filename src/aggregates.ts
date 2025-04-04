import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregates = async () => {
  //find avg age of all users
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  const sumAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });

  //find countAge of all users
  const countAge = await prisma.user.aggregate({
    _count: {
      age: true,
    },
  });

  //find max age of all users
  const maxAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });

  //find min age of all users

  const minAge = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });
  console.log("min Age:", minAge);
};
aggregates();
