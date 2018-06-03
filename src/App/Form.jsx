import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions'
import * as selectors from '../store/selectors'
import shortid from 'shortid'
import { green } from 'logger'

const greenText = {
  color: 'green',
  backgroundColor: 'orange'
}

class Form extends Component {

  getFormValue = (e) => {
    const { formFields } = this.props
    const formField = e.target.name
    green('App.formFields', formFields)
    const idx = formFields.findIndex(f => {
      return f.fieldName === fieldName
    })
    // green('idx', idx)
    if (idx === -1) {
      green('return blank')
      return ''
    } else {
      green(formField[idx].fieldValue)
      return formFields[idx].fieldValue
    }
  }
  onChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    // const id = e.target.fieldid
    green('TextField.onChange', `${name}:${value}`)
    this.props.updateFormField(name, value)
  }
  render() {
    const { formFields } = this.props
    green('formFields', formFields[0])
    const childrenWithUser = React.Children.map(this.props.children,
      child => {
        // green('child', child)
        return React.cloneElement(child, {

          onChange: (e) => this.onChange(e),
          style: greenText,
          value: (e) => this.getFormValue(e)
        })
      }
    )
    green('childrenWithUser', childrenWithUser)
    return (
      <div>
        {childrenWithUser}
      </div>
    )
  }

}
// const { children, handleSave } = this.props
// const { validateRequired } = this.state

// green('children', childrenWithUser)
// {this.renderChildren(children, this.getFieldValue)}
// {childrenWithUser}
// <button>Cancel</button>
// <button onClick={e => this.handleSave(e)}>Save</button>
const mapStateToProps = (state) => {
  return {
    formFields: selectors.getFormFields(state)
  }
}

export default connect(mapStateToProps, actions)(Form)
