const Account= require('./account')
const util = require('./utility')

module.exports ={
  register: (userid, password, QApairs)=>{
    if(!userid || typeof userid !== 'string'){
      throw new Error("Invalid User ID")
    }
    if(!password || typeof password !== 'string'){
      throw new Error("Invalid Password")
    }
    let account= new Account()
    let cryptographicKey= crypto.randomBytes(util.defaultSecretKeySize)
    let salt = crypto.randomBytes(util.defaultSaltSize)
    let derivedKey = util.encryptPassword(password, salt)


  }
}