import Input from './abstract/Input'
import Assertion from '../../util/Assertion'

export default class Id extends Input {
  static #PRIVATE = Symbol()
  static #REG_EXP = /^[0-9a-zA-Z]{0,15}$/
  
  static new () {
    return this.from('')
  }
  
  static from (id) {
    return new Id(this.#PRIVATE, id)
  }
  
  constructor (PRIVATE, id) {
    Assertion.assertPrivate(PRIVATE, Id.#PRIVATE)
    super(id)
  }
  
  _isNotValidated (id) {
    return !Id.#REG_EXP.test(id)
  }
}
