import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log("Query: " + e.query);
});

const main = async () => {
  const getAllFromDB = await prisma.post.findMany();
  console.log(getAllFromDB);
  await prisma.$disconnect();
};

main();
