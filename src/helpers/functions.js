const bcrypt = require("bcryptjs");
const fs = require("fs");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const getImageBase64 = (imagePath) => {
  const image = fs.readFileSync(imagePath);
  return Buffer.from(image).toString("base64");
};
module.exports = {
  hashPassword,
  getImageBase64,
};
