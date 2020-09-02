import React from 'react'
import {observer} from 'mobx-react'
import Id from './component/Id'
import Name from './component/Name'
import Submit from './component/Submit'

@observer
export default class extends React.PureComponent {
  render () {
    return (
      <>
        <h1>회원가입</h1>
        <Id/>
        <Name/>
        <Submit/>
      </>
    )
  }
}
