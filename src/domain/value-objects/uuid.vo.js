import InvalidUUIDError from '../../errors'
import UUIDPRovider from '../../providers/id/uuid'
import ValueObject from '../../value-objects/value-object'

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
