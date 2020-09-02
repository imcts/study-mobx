import React from 'react'
import {action} from 'mobx'
import {observer, inject} from 'mobx-react'

@inject(({store: {name}}) => ({name}))
@observer
export default class Name extends React.PureComponent {
  render () {
    const {name: {value}} = this.props
    return (
      <div>
        <span>name: </span>
        <input value={value} onChange={this.onChange}/>
      </div>
    )
  }
  
  @action.bound
  onChange (e) {
    this.props.name.update(e.target.value)
  }
}
