export class InvalidUUIDError extends Error {
  constructor (message = 'Invalid uuid') {
    super(message)
    this.name = 'InvalidUUIDError'
  }
}

export class InvalidLengthError extends Error {
  constructor (message = 'Invalid length') {
    super(message)
    this.name = 'InvalidLengthError'
  }
}

export class InvalidFormatError extends Error {
  constructor (message = 'Invalid format') {
    super(message)
    this.name = 'InvalidLengthErrorInvalidFormatError'
  }
}

export class EntityValidationError extends Error {
  constructor (errors, message = 'Validation Error') {
    super(message)
    this.name = 'EntityValidationError'
    this.errors = errors
  }
}
