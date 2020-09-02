import React from 'react'
import Store from '../model/Store'
import Form from './component/form/Form'
import {observer, Provider} from 'mobx-react'

@observer
class App extends React.PureComponent {
  render () {
    return (
      <Provider store={Store.new()}>
        <Form/>
      </Provider>
    )
  }
}

export default App

