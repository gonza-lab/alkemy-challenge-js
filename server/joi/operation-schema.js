const joi = require('joi');

const create = joi.object({
  amount: joi.number().required(),
  categoryId: joi.number(),
  concept: joi.string().required(),
  date: joi.date().required(),
});

const update = joi.object({
  amount: joi.number(),
  categoryId: joi.string().allow(''),
  concept: joi.string(),
  date: joi.date(),
});

module.exports = { create, update };
