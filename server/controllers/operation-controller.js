const { request, response } = require('express');
const operation_service = require('../services/operation-service');

const create = async (req = request, res = response) => {
  let code = 201;
  let resContent = {};
  const { body } = req;
  const { id } = req.user;

  try {
    resContent = await operation_service.create({ ...body, userId: id });
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

const read = async (req = request, res = response) => {
  let code = 200;
  let resContent = {};
  const { id } = req.user;
  const { query } = req;

  try {
    resContent = await operation_service.read({ userId: id, ...query });
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

const update = async (req = request, res = response) => {
  let code = 200;
  let resContent = { ok: true };
  const { id: userId } = req.user;
  const { id: operationId } = req.params;
  const { body } = req;

  try {
    const newOperation = await operation_service.update(
      body,
      operationId,
      userId
    );
    resContent = { ...resContent, ...newOperation };
  } catch (error) {
    console.log(error)
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

const remove = async (req = request, res = response) => {
  let code = 200;
  let resContent = { ok: true };
  const { id } = req.user;
  const { id: opertaionId } = req.params;

  try {
    await operation_service.remove(opertaionId, id);
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

const balance = async (req = request, res = response) => {
  let code = 200;
  let resContent = { ok: true };
  const { id } = req.user;

  try {
    const balance = await operation_service.getBalance(id);
    resContent = { ...resContent, balance };
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

module.exports = { create, read, update, remove, balance };
