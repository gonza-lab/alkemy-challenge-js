const joi = require('joi');

const create = joi.object({
  amount: joi.string().required(),
  categoryId: joi.string(),
  concept: joi.string().required(),
  date: joi.date().required(),
});

const update = joi.object({
  amount: joi.string(),
  categoryId: joi.string(),
  concept: joi.string(),
  date: joi.date(),
});

module.exports = { create, update };
