const db = require('../models');
const error = require('../errors/error');
const { Op } = require('sequelize');

const create = async ({ amount, concept, date, categoryId, userId }) => {
  if (typeof amount === 'string') {
    amount = +amount;
  }

  if (typeof categoryId === 'string') {
    categoryId = +categoryId;
  }

  if (categoryId) {
    const category = await db.Category.findOne({ where: { id: categoryId } });

    if (!category) {
      throw new error.NotFound();
    }
  }

  return await db.Operation.create({
    amount,
    concept,
    date,
    categoryId,
    userId,
  });
};

const read = async ({ userId, category, limit, offset }) => {
  let where = { userId };

  if (category) {
    where = { ...where, categoryId: category };
  }

  return await db.Operation.findAll({
    where,
    limit,
    offset,
  });
};

const update = async (newOperation, operationId, userId) => {
  let where = {
    where: { [Op.and]: [{ id: operationId }, { userId }] },
  };

  const operation = await db.Operation.findOne(where);
  if (!operation) {
    throw new error.NotFound();
  }

  if (newOperation.categoryId) {
    const category = await db.Category.findOne({
      where: { id: newOperation.categoryId },
    });

    if (!category) throw new error.NotFound();
  }

  if (newOperation.amount) {
    const { amount } = newOperation;

    if (!+amount) {
      throw new error.AmountIsNotZero();
    }

    const isSameType = +amount > 0 === operation.amount > 0;

    if (!isSameType) {
      newOperation = { ...newOperation, amount: +amount * -1 };
    }
  }

  await db.Operation.update(newOperation, where);
};

const remove = async (operationId, userId) => {
  const isDeleted = await db.Operation.destroy({
    where: { [Op.and]: [{ id: operationId }, { userId }] },
  });

  if (!isDeleted) throw new error.NotFound();
};

const getBalance = async (userId) => {
  return await db.Operation.sum('amount', {
    where: { userId },
  });
};

module.exports = { create, read, update, remove, getBalance };
