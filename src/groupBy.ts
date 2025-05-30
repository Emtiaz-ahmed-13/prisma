import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const groupBy = async () => {
  const groupPost = await prisma.post.groupBy({
    by: ["published", "authorId"],
    _count: {
      title: true,
    },
    having: {
      published: true,
    },
  });
  console.log("groupBy:", groupPost);
};

groupBy();
