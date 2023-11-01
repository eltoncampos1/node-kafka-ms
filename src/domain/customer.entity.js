import { EntityValidationError } from '../errors'
import UUID from '../value-objects/uuid.vo'
import customerValidator from './customer.validator'

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
      throw new EntityValidationError()
    }

    return customer
  }

  #createId () {
    return new UUID()
  }
}
