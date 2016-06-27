'use strict'
const keypair = require('./keypair')
const ipld = require('ipld')

let _ledger = new WeakMap()
let _creationDate = new WeakMap()
let _profile = new WeakMap()
let _contracts = new WeakMap()
let _cache = new WeakMap()
module.exports = class account {
  constructor (account) {
    if (!account) {
      _creationDate.set(this, new Date())
      _ledger.set(this, new keypair())
      _profile.set(this, new keypair())
      _contracts.set(this, new keypair())
    } else {
      //TODO: Case for intialization from object
    }
  }

  get creationDate () {
    let date = _creationDate.get(this)
    return date
  }

  get ledger () {
    let ledg = _ledger.get(this)
    return ledg
  }

  get profile () {
    let prof = _profile.get(this)
    return prof
  }

  get contracts () {
    let con = _contracts.get(this)
    return prof

  }

  marshal () {
    let account = {
      creationDate: this.creationDate.marshal(),
      ledger: this.ledger.marshal(),
      profile: this.profile.marshal(),
      contracts: this.contracts.marshal()
    }
    let marsh = ipld.marshal(account)
    _cache.set(this, ipld.multihash(marsh))
    return marsh

  }

  multihash () {
    if (_cache.has(this)) {
      return _cache.get(this)
    }
    this.marshal()
    return _cache.get(this)
  }

}
