export default class CustomerRepository {
  constructor (repository) {
    this.customerRepository = repository
  }

  create (customer) {
    return this.customerRepository.create(customer)
  }

  delete (id) {
    return this.customerRepository.delete(id)
  }

  findById (id) {
    return this.customerRepository.findById(id)
  }

  findByEmail (email) {
    return this.customerRepository.findByEmail(email)
  }

  findAll () {
    return this.customerRepository.findAll()
  }
}
