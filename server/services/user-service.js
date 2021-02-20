const jwt = require('../util/jwtmanager');
const crypt = require('../util/crypt');
const db = require('../models');
const error = require('../errors/error');

const register = async ({ email, password }) => {
  const user = await db.User.findOne({ where: { email } });

  if (user) {
    throw new error.ExistingEmail();
  }

  const hashedpassword = await crypt.encrypt(password);
  const newUser = {
    email,
    password: hashedpassword,
  };

  const { dataValues } = await db.User.create(newUser);

  const jwtPayload = {
    id: dataValues.id,
  };

  return { id: dataValues.id, jwt: jwt.createOneHourJWT(jwtPayload) };
};

const log = async ({ email, password }) => {
  const user = await db.User.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    throw new error.NotFound();
  }

  const isValidate = await crypt.validate(password, user.password);
  if (!isValidate) {
    throw new error.InvalidCredentials();
  }

  const jwtPayload = {
    id: user.id,
  };

  return { jwt: jwt.createOneHourJWT(jwtPayload), id: user.id };
};

const renew = (id) => {
  return { jwt: jwt.createOneHourJWT({ id }), id };
};

module.exports = {
  register,
  log,
  renew,
};
