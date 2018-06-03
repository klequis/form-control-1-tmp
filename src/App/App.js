import React, { Component, Fragment } from 'react'

import { TextField } from '@material-ui/core'
// import TextField from './TextField'
import { green } from 'logger'
import Form from './Form'


class App extends Component {

  render() {
    const { formFields } = this.props
    return (
      <Fragment>
        <h1>App</h1>
        <Form>
          <p>One</p>
          <TextField
            label='First Name'
            name='firstName'
            required

          />
          <TextField
            label='Last Name'
            name='lastName'
            required
          />
        </Form>
      </Fragment>
    )
  }
}

export default App

/*
<TextField
  label='First Name'
  name='firstName'
  required

/>

*/
