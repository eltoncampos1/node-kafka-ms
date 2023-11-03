import Customer from '../../../domain/customer.entity'

export default class CreateCustomerUseCase {
  #customerRepository
  constructor (customerRepository) {
    this.#customerRepository = customerRepository
  }

  async execute (input) {
    try {
      const customer = Customer.create(input)
      await this.#customerRepository.insert(customer)

      return customer
    } catch (error) {
      console.error(error)
    }
  }
}
