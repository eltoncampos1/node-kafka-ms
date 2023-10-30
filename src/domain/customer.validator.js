export default class CustomerValidator {
  #errors = []

  constructor (customerParams) {
    this.customerparams = customerParams
    this.#validate()
  }

  isValid () {
    return {
      errors: this.#errors,
      result: this.#errors.length === 0
    }
  }

  #validate () {
    this.#isValidName()
  }

  #isValidName () {
    if (this.name.lenght <= 2) {
      this.#errors.push('Invalid lengh name')
    }

    return this
  }
}
