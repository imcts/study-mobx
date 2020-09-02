import React from 'react'
import {action} from 'mobx'
import {observer, inject} from 'mobx-react'

@inject(({store: {id}}) => ({id}))
@observer
export default class Id extends React.PureComponent {
  render () {
    const {id: {value}} = this.props
    return (
        <div>
          <span>id: </span>
          <input value={value} onChange={this.onChange}/>
        </div>
    )
  }
  
  @action.bound
  onChange (e) {
    this.props.id.update(e.target.value)
  }
}
