import { v4 as uuid, validate as uuiValidate } from 'uuid'

export default class UUIDPRovider {
  generate () {
    return uuid()
  }

  validate (id) {
    return uuiValidate(id)
  }
}
