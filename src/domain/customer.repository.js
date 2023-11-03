export default class CustomerRepository {
  constructor (repository) {
    this.customerRepository = repository
  }

  insert (customer) {
    return this.customerRepository.insert(customer)
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
