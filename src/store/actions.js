export const keyUpdateFormField = 'keyUpdateFormField'

export const updateFormField = (fieldName, fieldValue) => {
  return ({
    type: keyUpdateFormField,
    payload: {
      fieldName,
      fieldValue,
    }
  })
}
