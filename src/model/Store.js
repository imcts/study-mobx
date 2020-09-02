import Id from './model/Id'
import Name from './model/Name'
import Assertion from '../util/Assertion'
import {action, computed} from 'mobx'

export default class Store {
  #id = Id.new()
  #name = Name.new()
  
  static new () {
    return new Store(Id.new(), Name.new())
  }
  
  constructor (id, name) {
    this.#id = Assertion.assertInstanceOf(id, Id)
    this.#name = Assertion.assertInstanceOf(name, Name)
  }
  
  isValidated () {
    return this.#id.isValidated() && this.#name.isValidated()
  }
  
  @action.bound
  async submit () {
    if (!this.isValidated()) {
      return
    }
    console.log('Do submit!')
    const result = await new Promise((res) => setTimeout(() => res('success'), 1000))
    console.log(result)
  }
  
  @computed
  get id () {
    return this.#id
  }
  
  @computed
  get name () {
    return this.#name
  }
}
