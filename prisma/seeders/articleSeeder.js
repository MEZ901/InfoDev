const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

async function articleSeeder(amount = 10) {
  try {
    const users = await prisma.user.findMany();

    for (let i = 0; i < amount; i++) {
      const randomUser = users[Math.floor(Math.random() * users.length)];

      await prisma.article.create({
        data: {
          title: faker.lorem.words(3),
          content: faker.lorem.paragraph({ min: 5, max: 10 }),
          authorId: randomUser.id,
        },
      });
    }

    console.log(`Seeded ${amount} articles successfully.`);
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = articleSeeder;
