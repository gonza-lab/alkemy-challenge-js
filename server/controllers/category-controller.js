const { request, response } = require('express');
const category_service = require('../services/category-service');

const read = async (req = request, res = response) => {
  let code = 200;
  let resContent = {};

  try {
    const categories = await category_service.read();
    resContent = { ok: true, categories };
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

module.exports = { read };
