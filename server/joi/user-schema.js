const joi = require('joi');

const register = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});

const log = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});

module.exports = { register, log };
