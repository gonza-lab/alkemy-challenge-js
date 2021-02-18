const { request, response } = require('express');
const user_service = require('../services/user-service');

const register = async (req = request, res = response) => {
  let code = 201;
  let resContent = {};
  const { body } = req;

  try {
    const user = await user_service.register(body);

    resContent = { ok: true, ...user };
  } catch (error) {
    code = error.statusCode || 500;
    resContent = {
      ok: false,
      error:
        error.errorMessage ||
        'Ha ocurrido un error. Hable con el administrador',
    };
  }

  res.status(code).json(resContent);
};

const log = async (req = request, res = response) => {
  let code = 200;
  let resContent = {};
  const { body } = req;

  try {
    const user = await user_service.log(body);
    resContent = { ok: true, ...user };
  } catch (error) {
    code = error.statusCode || 500;
    resContent = {
      ok: false,
      error:
        error.errorMessage ||
        'Ha ocurrido un error. Hable con el administrador',
    };
  }

  res.status(code).json(resContent);
};

module.exports = { register, log };
