const bcrypt = require('bcrypt')

const encrypt = async (data) => {
  return await bcrypt.hash(data, 10)
}
const validate = async (data, hash) => {
  return await bcrypt.compare(data, hash)
}

module.exports = {
  encrypt,
  validate
}