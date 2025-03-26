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

  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "Prisma3",
        content: "I am learning prisma  ",
        authorName: "EMTIAZ AHMED",
      },
      {
        title: "Prisma4",
        content: "Learning how to create many",
        authorName: "EMTIAZ AHMED",
      },
      {
        title: "Prisma5",
        content: "Learning how to find uniqued  ",
        authorName: "EMTIAZ AHMED",
      },
    ],
  });

  console.log(createMany);
};
main();
