const expect = require('chai').expect
const KeyPair= require('../src/keypair')
describe('test keypair generation', ()=>{
  let key
  before(()=>{
    key= new KeyPair()
    it('generate key pair',() => {
      expect(key).to.exist
      expect(key.pubKey).to.exist
      expect(key.privKey).to.exist
    })
  })

})