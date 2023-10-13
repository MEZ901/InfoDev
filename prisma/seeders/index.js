const userSeeder = require("./userSeeder");
const articleSeeder = require("./articleSeeder");
const commentSeeder = require("./commentSeeder");
const likeSeeder = require("./likeSeeder");

(async () => {
  await userSeeder(10);
  await articleSeeder(10);
  await commentSeeder(10);
  await likeSeeder(100);
})();
