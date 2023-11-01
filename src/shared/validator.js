import { InvalidFormatError, InvalidLengthError } from '../errors/index.js'

const defaultLengthGreatherThanOrEqualToErrorMessage = (lenght) => `The length must be greather than or equal to ${lenght}`
const defaultLengthLessThanOrEqualToErrorMessage = (lenght) => `The length must be less than or equal to ${lenght}`
const defaultLengthEqualToErrorMessage = (lenght) => `The length must be equal to ${lenght}`

export default class Validator {
  lengthIsEqual (stringOrList, lenght, message = defaultLengthEqualToErrorMessage(lenght)) {
    if (stringOrList.length !== lenght) {
      throw new InvalidLengthError(message)
    }

    return this
  }

  lengthIsGreatherThanOrEqualTo (stringOrList, lenght, message = defaultLengthGreatherThanOrEqualToErrorMessage(lenght)) {
    if (stringOrList.length < lenght) {
      throw new InvalidLengthError(message)
    }
    return this
  }

  lengthIsLessThanOrEqualTo (stringOrList, lenght, message = defaultLengthLessThanOrEqualToErrorMessage(lenght)) {
    if (stringOrList.length > lenght) {
      throw new InvalidLengthError(message)
    }
    return this
  }

  validateFormat (string, regex, message = 'InvalidFormat') {
    if (!regex.test(string)) {
      throw new InvalidFormatError(message)
    }
    return this
  }
}
