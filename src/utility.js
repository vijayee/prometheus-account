const crypto = require('crypto')
const scrypt = require('node-scrypt-js')
const _defaultSecretKeySize = 16
const _defaultSaltSize = 16
const _defaultAESCipher = 'aes192'
var util = {}

util.defaultSecretKeySize = _defaultSecretKeySize
util.defaultSaltSize = _defaultSaltSize
util.defaultAESCipher = _defaultAESCipher

util.encryptAES = (text, key)=> {
  const cipher = crypto.createCipher(_defaultAESCipher, key)
  let enc = cipher.update(text)
  enc += cipher.final()
  return enc
}
util.decryptAES = (enc, key)=> {
  const decipher = crypto.createDecipher(_defaultAESCipher, key);
  let dec = decipher.update(enc)
  dec += decipher.final()
  return dec
}
util.encryptPassword= (password, salt)=> {
  enc = scrypt(password, salt, 16384, 8, 1, 32)
  return enc
}

module.exports = util