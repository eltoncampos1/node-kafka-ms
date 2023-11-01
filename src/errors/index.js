export class InvalidUUIDError extends Error {
  constructor (message) {
    super(message || 'Invalid uuid')
    this.name = 'InvalidUUIDError'
  }
}

export class InvalidLengthError extends Error {
  constructor (message) {
    super(message || 'Invalid length')
    this.name = 'InvalidLengthError'
  }
}

export class InvalidFormatError extends Error {
  constructor (message) {
    super(message || 'Invalid format')
    this.name = 'InvalidLengthErrorInvalidFormatError'
  }
}
