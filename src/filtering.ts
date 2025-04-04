import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "title",
          },
          published: true,
        },
      ],
    },
  });
  console.log("And filtering", andFiltering);

  const ORFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });
  console.log("ORFiltering", ORFiltering);

  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "title",
          },
        },
      ],
    },
  });
  console.log("notFiltering", notFiltering);

  const startwith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "u",
      },
    },
  });
  console.log("StartWith", startwith);

  const endWith = await prisma.user.findMany({
    where: {
      email: {
        endsWith: "emtiaz2060@gmail.com",
      },
    },
  });
  console.log("ENDWITH", endWith);

  const userNameArray = ["user1", "user3", "user5"];

  const userNameByArray = await prisma.user.findMany({
    where: {
      username: {
        in: userNameArray,
      },
    },
  });
  console.log(userNameByArray);

  const inDepthData = await prisma.user.findMany({
    where: {
      id: 3,
    },
    include: {
      post: true,
    },
  });
  console.dir(inDepthData, { depth: Infinity });
};

filtering();
