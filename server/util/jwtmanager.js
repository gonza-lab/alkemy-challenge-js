const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const durations = {
  unaHora: '1h',
  unDia: '1d',
  medioDia: '12h',
  unaSemana: '7d',
}

const algorithm = 'HS256'
const createOneHourJWT = (data) => {
  return jwt.sign(data, SECRET, { algorithm, expiresIn: durations.unaHora })
}
const verificateJWT = (data) => {
  return jwt.verify(data, SECRET)
}

module.exports = {
  createOneHourJWT,
  verificateJWT,
}
