import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteData = async () => {
  // Deleting Records: Single and Multiple Records Deletions and Their Distinctions
  //   const singleDelete = await prisma.post.delete({
  //     where: {
  //       id: 1,
  //     },
  //   });
  //   console.log(singleDelete);
  // deleting multiple records

  const deleteMany = await prisma.post.deleteMany({
    where: {
      published: false,
    },
  });
};

deleteData();
