const db = require('../models');

const read = async () => {
  return await db.Category.findAll();
};

module.exports = { read };
