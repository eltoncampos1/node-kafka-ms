import UUID from './value-objects/uuid.vo'

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

  get name () {
    return this.name
  }

  #createId () {
    return new UUID()
  }
}
