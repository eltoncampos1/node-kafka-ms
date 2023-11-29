import { EntityValidationError } from '../errors/index.js'
import UUID from '../value-objects/uuid.vo.js'
import customerValidator from './customer.validator.js'

export default class Customer {
  constructor ({ id, name, email, document, documentType, phone, password }) {
    this.id = id ?? this.#createId()
    this.name = name
    this.email = email
    this.document = document
    this.documentType = documentType
    this.phone = phone
    this.password = password
  }

  static create (props) {
    const customer = new Customer(props)
    const validation = customerValidator(customer)

    if (!validation.result) {
      return new EntityValidationError(validation.errors)
    }

    return customer
  }

  #createId () {
    return new UUID()
  }

  toJSON () {
    return {
      id: this.id.id,
      name: this.name,
      email: this.email,
      document: this.document,
      documentType: this.documentType,
      phone: this.phone,
      password: this.password
    }
  }
}
