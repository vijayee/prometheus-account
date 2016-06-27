'use strict'
const p2pCrypto = require('libp2p-crypto')
let _privKey = new WeakMap()
module.exports = class keypair {
  constructor (kp) {
    if (!kp) {
      let key = p2pCrypto.generateKeyPair('rsa', 2048)
      _privKey.set(this, key)
    }
    //TODO: Implent case for assign keys by passing an object
    /*
     if(kp && (typeof kp === 'object')){ //initialize with an object
     if(kp.privKey){
     _privKey.set(this,kp.privKey)
     } else {
     throw new Error('Invalid Private Key')
     }
     if(kp.privKey){
     _pubKey.set(this, kp.pubKey)
     } else {
     throw new Error('Invalid Public Key')
     }
     } else if (!kp){
     let key = p2pCrypto.generateKeyPair('RSA', 256)
     _privKey.set(this,kp.privKey)

     }*/
  }

  get privKey () {
    return _privKey.get(this)
  }

  get pubKey () {
    let privKey = _privKey.get(this)
    return privKey.public
  }

  marshal () {
    return this.privKey.marshal()
  }
}
