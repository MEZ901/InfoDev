const { PrismaClient } = require("@prisma/client");
const { hashPassword } = require("../../src/helpers/functions");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

async function userSeeder(amount = 10) {
  try {
    for (let i = 0; i < amount; i++) {
      await prisma.user.create({
        data: {
          name: faker.person.fullName(),
          bio: faker.lorem.sentence(),
          email: faker.internet.email(),
          password: await hashPassword("password"),
        },
      });
    }

    console.log(`Seeded ${amount} users successfully.`);
  } catch (error) {
    console.error("Error seeding user: ", error);
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = userSeeder;
