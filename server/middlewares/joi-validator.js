const joiValidator = (schema, where) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req[where]);
      next();
    } catch (error) {
      res.status(400).json({ ok: false, error: error.toString() });
    }
  };
};

module.exports = joiValidator;
