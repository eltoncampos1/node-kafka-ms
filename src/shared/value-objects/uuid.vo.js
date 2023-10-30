import InvalidUUIDError from '../errors/index.js'
import UUIDPRovider from '../providers/id/uuid.js'
import ValueObject from '../value-object.js'

export default class UUID extends ValueObject {
  #provider = new UUIDPRovider()
  /**
     * constructor description
     * @param {UUID | undefined | null} id
  */

  constructor (id) {
    super()
    this.id = id || this.#generate()
    this.#validate()
  }

  #validate () {
    const isValid = this.#provider.validate(this.id)

    if (!isValid) {
      throw new InvalidUUIDError('Invalid uuid')
    }
  }

  #generate () {
    return this.#provider.generate()
  }
}
