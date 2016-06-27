'use strict'
let _password = new WeakMap()
let _file= new WeakMap()
let _storageKey= new WeakMap
module.exports= class credentials{
  constructor(password, file, storageKey){
    if ((arguments.length === 1) && (typeof arguments[0] === 'object')){
        password = arguments[ 0 ].password || null
        file = arguments[ 0 ].file || null
        storageKey = arguments[ 0 ].storageKey || null
    }

    if(password && typeof password === 'string'){
      _password.set(this,password)
    } else {
      throw new Error("Invalid Password")
    }

    if(file && typeof file === 'string'){
      _file.set(this,file)
    } else {
      throw new Error("Invalid File")
    }

    if(storageKey && typeof storageKey === 'string'){
      _storageKey.set(this,file)
    } else {
      throw new Error("Invalid Storage Key")
    }
  }

  get password(){
    let pass = _storageKey.get(this)
    return pass
  }

  get storageKey(){
    let stor = _storageKey.get(this)
    return stor
  }
}