import { describe, expect, test } from '@jest/globals'
import customerValidator from '../customer.validator.js'
import { inValidCustomer, validCustomer, customerWithKey } from '../factories/customer.factory.js'

describe('Customer Validator', () => {
  test('Returns a valid result', () => {
    const result = customerValidator(validCustomer())

    const expected = {
      errors: [],
      result: true
    }

    expect(result).toMatchObject(expected)
  })
  test('Returns a missing params Error', () => {
    const result = customerValidator(inValidCustomer())

    const expected = {
      errors: [
        { email: 'Missing required field' },
        { password: 'Missing required field' },
        { document: 'Missing required field' },
        { documentType: 'Missing required field' },
        { phone: 'Missing required field' },
        { name: 'Missing required field' }
      ],
      result: false
    }

    expect(result).toMatchObject(expected)
  })

  test('return invalid documentType error', () => {
    const result = customerValidator(customerWithKey('documentType', 'cnh'))

    const expected = {
      result: false,
      errors: [{ documentType: 'DocumentType not allowed [cnh]' }]
    }

    expect(result).toMatchObject(expected)
  })

  test('return invalid name lenght error', () => {
    const result = customerValidator(customerWithKey('name', 'a'))

    const expected = {
      result: false,
      errors: [{ message: '[name]: Must be greather than or equal to 2' }]
    }

    expect(result).toMatchObject(expected)
  })

  test('return invalid password lenght error', () => {
    const result = customerValidator(customerWithKey('password', '@Q1w'))

    const expected = {
      result: false,
      errors: [{ message: '[password]: Must be greather than or equal to 8' }]
    }

    expect(result).toMatchObject(expected)
  })

  test('return invalid email format error', () => {
    const result = customerValidator(customerWithKey('email', 'email.invalid'))

    const expected = {
      result: false,
      errors: [{ message: '[email]: Invalid Format' }]
    }

    expect(result).toMatchObject(expected)
  })

  test('return invalid document cpf format error', () => {
    const result = customerValidator(customerWithKey('document', '1232eman'))

    const expected = {
      result: false,
      errors: [{ message: '[document]: Invalid Format' }]
    }

    expect(result).toMatchObject(expected)
  })

  test('return invalid document cnpj format error', () => {
    const customer = { ...customerWithKey('documentType', 'cnpj'), document: 'invalidtype' }
    const result = customerValidator(customer)

    const expected = {
      result: false,
      errors: [{ message: '[document]: Invalid Format' }]
    }

    expect(result).toMatchObject(expected)
  })
  test('return invalid password format error', () => {
    const customer = customerWithKey('password', 'qwazsedcxv')
    const result = customerValidator(customer)

    const expected = {
      result: false,
      errors: [{ message: '[password]: must have at least one Uppercase one Lowercase one Number and one special character' }]
    }

    expect(result).toMatchObject(expected)
  })
})
