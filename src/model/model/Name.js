import Input from './abstract/Input'
import Assertion from '../../util/Assertion'

export default class Name extends Input {
  static #PRIVATE = Symbol()
  static #REG_EXP = /^[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z]{0,10}$/
  
  static new () {
    return this.from('')
  }
  
  static from (name) {
    return new Name(this.#PRIVATE, name)
  }
  
  constructor (PRIVATE, name) {
    Assertion.assertPrivate(PRIVATE, Name.#PRIVATE)
    super(name)
  }
  
  _isNotValidated (name) {
    return !Name.#REG_EXP.test(name)
  }
}
