export default class InvalidUUIDError extends Error {
  constructor (message) {
    super(message || 'Invalid uuid')
    this.name = 'InvalidUUIDError'
  }
}
