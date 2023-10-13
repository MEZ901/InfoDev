const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

async function likeSeeder(amount = 10) {
  try {
    const articles = await prisma.article.findMany();
    const users = await prisma.user.findMany();

    for (let i = 0; i < amount; i++) {
      const randomArticle =
        articles[Math.floor(Math.random() * articles.length)];
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const like = Math.random() < 0.5;

      await prisma.like.create({
        data: {
          articleId: randomArticle.id,
          userId: randomUser.id,
          like: like,
          dislike: !like,
        },
      });
    }

    console.log(`Seeded ${amount} likes successfully.`);
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = likeSeeder;
