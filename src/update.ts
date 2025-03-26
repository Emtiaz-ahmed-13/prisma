import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Updating Records: Single and Multiple Records Updates and Their Distinctions
const updates = async () => {
  //   const singleValueUpdate = await prisma.post.update({
  //     where: {
  //       id: 6,
  //     },
  //     data: {
  //       content: "updated content",
  //     },
  //   });
  //   console.log(singleValueUpdate);

  // update many

  //   const updataMany = await prisma.post.updateMany({
  //     where: {
  //       title: "title 2",
  //     },
  //     data: {
  //       published: true,
  //     },
  //   });
  //   console.log(updataMany);

  const upsertData = await prisma.post.upsert({
    where: {
      id: 1,
    },
    update: {
      title: "updated title",
    },
    create: {
      title: "title 1",
      content: "content 1",
      authorName: "EMTIAZ AHMED",
      published: true,
    },
  });
  console.log(upsertData);
};

updates();
