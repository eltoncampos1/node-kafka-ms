import { describe, expect, test } from '@jest/globals'
import CustomerRepository from '../customer.repository.js'
import InMemoryRepository from '../../infra/database/repository/in-memory.repository.js'
import Customer from '../customer.entity.js'
import UUID from '../../value-objects/uuid.vo.js'
import { customerWithKey, validCustomer } from '../factories/customer.factory.js'

describe('CustomerRepository', () => {
  const makeSut = () => {
    const inMemoryRepo = new InMemoryRepository()
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

  test('should delete an customer given a valid id', () => {
    const sut = makeSut()
    const customer = Customer.create(validCustomer())
    sut.create(customer)

    expect(() => sut.create(customer)).toBeDefined()

    expect(sut.findAll().length).toBe(1)

    sut.delete(customer.id)

    expect(sut.findAll().length).toBe(0)
  })

  test('should return all customers', () => {
    const sut = makeSut()

    const arrange = [
      { params: customerWithKey('email', 'bar@foo.com') },
      { params: customerWithKey('email', 'bar@foo.com') },
      { params: customerWithKey('email', 'bar@foo.com') }
    ]
    arrange.forEach((c) => {
      const customer = Customer.create(c.params)
      sut.create(customer)
    })

    expect(sut.findAll().length).toBe(arrange.length)
  })
})
