import { describe, expect, test } from '@jest/globals'
import Customer from '../customer.entity.js'
import { validCustomer, customerWithKey, inValidCustomer, validCustomerWithId } from '../factories/customer.factory.js'
import UUID from '../../value-objects/uuid.vo.js'

describe('Customer Entity', () => {
  test('should return an customer', () => {
    const id = new UUID()
    const result = Customer.create(customerWithKey('id', id))
    const expected = {
      id,
      name: 'Jhon doe',
      email: 'foo@bar.com',
      document: '90847739281',
      documentType: 'cpf',
      phone: '+55 (11) 96648-8392',
      password: '@QAZwsx112345'
    }

    expect(result).toMatchObject(expected)
  })

  test('should create an Id for customer if not provided', () => {
    const result = Customer.create(validCustomer())

    expect(result.id).toBeDefined()
  })

  test('should be throw InvalidEntity Error', () => {
    const tests = [
      ['name', 'a'],
      ['email', 'invalid.com'],
      ['phone', '1231412'],
      ['document', '12343'],
      ['documentType', 'cnh'],
      ['password', '12345678'],
      ['password', '@Qa1']
    ]

    tests.forEach(([key, value]) => {
      expect(() => Customer.create(customerWithKey(key, value))).toThrow()
    })

    expect(() => Customer.create(inValidCustomer())).toThrow()
  })

  test('should return a JSON from customer', () => {
    const customer = validCustomerWithId()
    const result = Customer.create(customer).toJSON()

    const expected = {
      id: customer.id.id,
      name: 'Jhon doe',
      email: 'foo@bar.com',
      document: '90847739281',
      documentType: 'cpf',
      phone: '+55 (11) 96648-8392',
      password: '@QAZwsx112345'
    }

    expect(result).toStrictEqual(expected)
  })
})
