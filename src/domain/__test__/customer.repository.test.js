import { describe, expect, test } from '@jest/globals'
import CustomerRepository from '../customer.repository.js'
import ImMemoryRepository from '../../infra/database/repository/in-memory.repository.js'
import { customerWithKey, validCustomer } from './factory.js'
import Customer from '../customer.entity.js'
import UUID from '../../value-objects/uuid.vo.js'

describe('CustomerRepository', () => {
  const makeSut = () => {
    const inMemoryRepo = new ImMemoryRepository()
    const customerRepository = new CustomerRepository(inMemoryRepo)

    return customerRepository
  }
  test('should create a new Customer', () => {
    const sut = makeSut()
    const vCustomer = Customer.create(validCustomer())
    const { _id, ...customer } = sut.create(vCustomer)

    expect(customer).toMatchObject(validCustomer())
  })

  test('should return a created customer by id', () => {
    const sut = makeSut()
    const firstCustomer = Customer.create(validCustomer())
    const secondCustomer = Customer.create(customerWithKey('document', '87493302748'))
    const customer = sut.create(firstCustomer)
    sut.create(secondCustomer)

    const expected = sut.findById(customer.id)

    expect(expected).toMatchObject(firstCustomer)
  })

  test('should return a created customer by email', () => {
    const sut = makeSut()
    const firstCustomer = Customer.create(validCustomer())
    const secondCustomer = Customer.create(customerWithKey('document', '87493302748'))
    const customer = sut.create(firstCustomer)
    sut.create(secondCustomer)

    const expected = sut.findByEmail(customer.email)

    expect(expected).toMatchObject(firstCustomer)
  })

  test('should return null if no customer match the provided id', () => {
    const sut = makeSut()
    const id = new UUID()

    const expected = sut.findById(id)

    expect(expected).toBeUndefined()
  })
  test('should return null if no customer match the provided email', () => {
    const sut = makeSut()

    const expected = sut.findByEmail('foo@baz.com')

    expect(expected).toBeUndefined()
  })
})
