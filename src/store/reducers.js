import { combineReducers } from 'redux'
// import members from './members'
// import requests from './requests'
// import roles from './roles'
// import memberDialogAction from './memberDialogAction'
// import openMemberId from './openMemberId'
// import memberEditing from './memberEditing'
import { keyUpdateFormField } from './actions'
import { append, remove } from 'ramda'

const formFields = ( state = [], { type, payload }) => {
  // type: formField
  // payload: fieldId, fieldName, fieldValue
  switch (type) {
    case 'keyUpdateFormField':
      const idx = state.findIndex(f => f.fieldName === payload.fieldName)
      if (idx !== -1) {
        const ns1 = remove(idx, 1, state); //=> [1,2,6,7,8]
        return append(payload, ns1)
      } else {
        return append(payload, state)
      }
    default:
      return state
  }
}

export default combineReducers({
  uiData: combineReducers({
    formData: combineReducers({
      formFields,
    })
  })
})
