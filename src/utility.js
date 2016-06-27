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
util.encryptPassword = (password, salt) => {
  enc = scrypt(password, salt, 16384, 8, 1, 32)
  return enc
}

util.splitThrice = (buf) => {
  let pad = buf.length % 3
  let step = Math.floor(buf.length / 3)
  let step1 = step
  let step2 = (step * 2)
  let step3 = (step * 3) + pad
  let buf1 = new Buffer(step1)
  let buf2 = new Buffer(step2)
  let buf3 = new Buffer(step3)
  buf.copy(buf1, 0, 0, step)
  buf.copy(buf2, 0, step, step2)
  buf.copy(buf3, 0, step2)
  return { one: buf1, two: buf2, three: buf3 }
}

module.exports = util