const userSeeder = require("./userSeeder");
const articleSeeder = require("./articleSeeder");
const commentSeeder = require("./commentSeeder");

(async () => {
  await userSeeder(10);
  await articleSeeder(10);
  await commentSeeder(10);
})();
