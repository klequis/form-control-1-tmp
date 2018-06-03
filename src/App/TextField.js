import React, { Component, Fragment } from 'react'
import { TextField as MuiTextField } from '@material-ui/core'
import shortid from 'shortid'
import { green } from 'logger'


class TextField extends Component {
  // state = {
  //   label: 'First Name',
  //   name: 'firstName',
  //   required: false,
  //   error: false,
  //   validator: '',
  // }
  state = {
    id: shortid.generate()
  }
  onChange = (e) => {
    green('props', this.props)
    const name = e.target.name
    const value = e.target.value
    const id = this.state.id
    // green('TextField.onChange', `${id},${name}:${value}`)
    // this.props.handleChange(id, name, value)
  }
  isError = () => {
    // green('this.props.value', this.props.value)
    if (!this.props.value) {
      return true
    } else {
      return false
    }
  }
  // isError = () => !this.props.value ? true : false

  render() {
    const { label, name, required, error, validateRequired, value } = this.props
    // green('required', required)
    // green('validateRequired', validateRequired)
    const showError = validateRequired && this.isError()
    // green('showError', showError)
    green('value', value)
    return (
      <Fragment>
        <MuiTextField

          label={label}
          name={name}
          required={required}
          error={showError}
          type='text'
          value={value}
        />
      </Fragment>
    )
  }
}
// onChange={e => this.onChange(e)}

export default TextField
