const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

async function commentSeeder(amount = 10) {
  try {
    const articles = await prisma.article.findMany();
    const users = await prisma.user.findMany();

    for (let i = 0; i < amount; i++) {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const randomArticle =
        articles[Math.floor(Math.random() * articles.length)];

      await prisma.comment.create({
        data: {
          content: faker.lorem.sentence(),
          articleId: randomArticle.id,
          userId: randomUser.id,
        },
      });
    }

    console.log(`Seeded ${amount} comments successfully.`);
  } catch (error) {
    console.error("Error seeding comments:", error);
  }
}

module.exports = commentSeeder;
