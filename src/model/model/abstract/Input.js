import {computed, action, observable} from 'mobx'
import Assertion from '../../../util/Assertion'

export default class Input {
  @observable input
  
  constructor (input) {
    this.input = Assertion.assertString(input)
  }
  
  @action.bound
  update (input) {
    if (this.#isNotValidated(input)) {
      return
    }
    this.input = Assertion.assertString(input)
  }
  
  isValidated () {
    return this.#isNotEmpty() && !this._isNotValidated()
  }
  
  #isNotEmpty () {
    return !!this.value
  }
  
  #isNotValidated (input) {
    return this.input === input || this._isNotValidated(input)
  }
  
  _isNotValidated (input) {
    Assertion.assertOverride()
  }
  
  @computed
  get value () {
    return this.input
  }
}
