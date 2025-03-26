import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //==================== Create a post ====================
  const result = await prisma.post.create({
    data: {
      title: "Prisma2",
      content: "Prisma is a great tool for database management",
      authorName: "EMTIAZ AHMED",
    },
  });
  console.log(result);
  //==================== get all post ====================
  // const getALlFromDB = await prisma.post.findMany();
  // console.log(getALlFromDB);
};

main();
