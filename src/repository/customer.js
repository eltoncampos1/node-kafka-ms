import UUID from '../value-objects/uuid.vo'

export default class CustomerRepository {
  constructor ({ id, name, email, document, documentType, phone, password }) {
    this.id = id ?? this.#createId()
    this.name = name
    this.email = email
    this.document = document
    this.documentType = documentType
    this.phone = phone
    this.password = password
  }

  #createId () {
    return UUID()
  }
}
