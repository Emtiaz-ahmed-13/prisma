import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //==================== get first one ====================
  //   const getALlFromDB = await prisma.post.findMany();
  //   console.log(getALlFromDB);
  //==================== findFirst====================
  //   const findFirst = await prisma.post.findFirst({
  //     where: {
  //       id: 1,
  //     },
  //   });
  //==================== find first and find or throw error====================
  //   const findFirst = await prisma.post.findFirstOrThrow({
  //     where: {
  //       id: 2,
  //     },
  //   });
  //========================findUnique====================
  //   const findUnique = await prisma.post.findUnique({
  //     where: {
  //       id: 1,
  //     },
  //   });
  //   console.log({ findUnique });
};

main();
