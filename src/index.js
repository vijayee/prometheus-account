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
    if(!QAPairs || !Array.isArray(QApairs) || QApairs.length < 3){
      throw new Error("Invalid Question/Answer Pairs")
    }

    let account= new Account()
    let cryptographicKey= crypto.randomBytes(util.defaultSecretKeySize)
    let salt = crypto.randomBytes(util.defaultSaltSize)
    let derivedKey = util.encryptPassword(password, salt)
    let qSalts = util.splitThrice(derivedKey)
    let qKey1 = util.encryptPassword(QApairs[0].answer, qSalts.one)
    let qKey2 = util.encryptPassword(QApairs[1].answer, qSalts.two)
    let qKey3 = util.encryptPassword(QApairs[2].answer, qSalts.three)

  }
}