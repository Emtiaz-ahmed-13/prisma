import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//implementing pagination and sorting
const paginationSorting = async () => {
  //offset pagination

  //   const offsetData = await prisma.post.findMany({
  //     skip: 5,
  //     take: 2,
  //   });
  //   console.log(offsetData);
  //cursor pagination
  //   const cursorData = await prisma.post.findMany({
  //     skip: 5,
  //     take: 2,
  //     cursor: {
  //       id: 15,
  //     },
  //   });
  //   console.log(cursorData);
  const sortedData = await prisma.post.findMany({
    orderBy: {
      title: "asc",
    },
  });
  console.log(sortedData);
};

paginationSorting();
