import React from 'react'
import {action} from 'mobx'
import {inject, observer} from 'mobx-react'

@inject(({store}) => ({store}))
@observer
export default class Submit extends React.PureComponent {
  static #COLOR_OF_RED = 'red'
  static #COLOR_OF_BLUE = 'blue'
  
  static #getColor (store) {
    if (store.isValidated()) {
      return this.#COLOR_OF_BLUE
    }
    return this.#COLOR_OF_RED
  }

  render () {
    const {store} = this.props
    const color = Submit.#getColor(store)
    return <button style={{color}} onClick={this.onClick}>회원가입</button>
  }
  
  @action.bound
  onClick () {
    this.props.store.submit()
  }
}
