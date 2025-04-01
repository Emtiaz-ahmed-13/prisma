import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "emtiaz",
  //     email: "emtiaz2060@gmail.com",
  //     role: UserRole.admin,
  //   },
  // });
  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: " A cute boy",
  //     userId: 1,
  //   },
  // });
  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "software engineering",
  //   },
  // });
  // console.log(createCategory);
  const createPost = await prisma.post.create({
    data: {
      title: "How to create a post",
      content: "This is a post content",
      authorId: 1,
      postCategory: {
        create: {
          category: {
            connect: {
              id: 1,
            },
          },
        },
      },
    },
    include: {
      postCategory: true,
    },
  });
  console.log(createPost);
};
main();
