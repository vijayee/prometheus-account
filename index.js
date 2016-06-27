'use strict'
const KeyPair= require('./src/keypair')
const Account= require('./src/account')

//let key = new KeyPair()
let account= new Account()

console.log(account.creationDate)
console.log(account.ledger)