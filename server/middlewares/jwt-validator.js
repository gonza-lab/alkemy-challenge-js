const { response, request } = require('express');
const jwt = require('jsonwebtoken');

module.exports = (req = request, res = response, next) => {
  const token = req.header('x-token');

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'No hay token en la peticion',
    });
  }

  try {
    const { id } = jwt.verify(token, process.env.SECRET);

    req.user = { id };
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'Token no valido',
    });
  }

  next();
};
