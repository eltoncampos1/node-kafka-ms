import Customer from '../../../domain/customer.entity'
import { EntityValidationError } from '../../../errors'

export default class CreateCustomerUseCase {
  #customerRepository
  constructor (customerRepository) {
    this.#customerRepository = customerRepository
  }

  async execute (input) {
    try {
      const customer = Customer.create(input)

      if (customer instanceof EntityValidationError) {
        return new EntityValidationError(customer.errors)
      }

      await this.#customerRepository.insert(customer)

      return customer
    } catch (error) {
      console.error(error)
    }
  }
}
