import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransaction = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "emtiaz ahmed",
      email: "emtiaz.ahmed@g.bracu.ac.bd",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 8,
    },
    data: {
      age: 30,
    },
  });

  const [userData, updateData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);

  console.log(userData, updateData);
};

batchTransaction();
