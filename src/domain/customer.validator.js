/* eslint-disable no-unsafe-finally */
import Validator from '../shared/validator.js'

const INVALID_FORMAT_HUMANIZED_ERROR = 'Invalid Format'
const INVALID_PASSWORD_FORMAT_ERROR = '[password]: must have at least one Uppercase one Lowercase one Number and one special character'
const CUSTOMER_KEYS = ['email', 'password', 'document', 'documentType', 'phone', 'name']
const ALLOWED_DOCS = ['cpf', 'cnpj']
const EMAIL_REGEX = /\S+@\S+\.\S+/
const CPF_CNPJ_REGEX = /^(\d{11}|\d{14})$/
const PHONE_REGEX = /^\+\d{2}\s\(\d{2}\)\s\d{4,5}-\d{4}$/
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/

function invalidFormatErrorMessage (key) {
  return `[${key}]: ${INVALID_FORMAT_HUMANIZED_ERROR}`
}

export default function customerValidator (customerParams) {
  const errors = []
  const result = validateRequired(customerParams, CUSTOMER_KEYS)

  if (result.length) {
    return {
      result: false,
      errors: [...result, ...errors]
    }
  }
  const docType = customerParams.documentType.toLowerCase()
  if (!ALLOWED_DOCS.includes(docType)) {
    errors.push({ documentType: `DocumentType not allowed [${docType}]` })
  }

  const validator = new Validator()

  try {
    validator.lengthIsGreatherThanOrEqualTo(customerParams.name.toLowerCase(), 2, '[name]: Must be greather than or equal to 2')
      .lengthIsGreatherThanOrEqualTo(customerParams.email.toLowerCase(), 6)
      .validateFormat(customerParams.email, EMAIL_REGEX, invalidFormatErrorMessage('email'))
      .validateFormat(customerParams.document.toLowerCase(), CPF_CNPJ_REGEX, invalidFormatErrorMessage('document'))
      .validateFormat(customerParams.phone, PHONE_REGEX, invalidFormatErrorMessage('phone'))
      .lengthIsGreatherThanOrEqualTo(customerParams.password, 8, '[password]: Must be greather than or equal to 8')
      .validateFormat(customerParams.password, PASSWORD_REGEX, INVALID_PASSWORD_FORMAT_ERROR)
  } catch (err) {
    errors.push({ message: err.message })
  }

  return {
    result: errors.length === 0,
    errors
  }
}

function validateRequired (params, required) {
  const errors = []

  for (const key of required) {
    if (!Object.keys(params).includes(key)) {
      errors.push({ [key]: 'Missing required field' })
    }
  }
  return errors
}
