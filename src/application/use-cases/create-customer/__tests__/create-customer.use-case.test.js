import { describe, expect, test } from '@jest/globals'
import CustomerRepository from '../../../../domain/customer.repository'

describe('create customer use-case', () => {
  const makeSut = () => {
    const repository = new InMemory()
    const repo = new CustomerRepository()
  }
  test('should throw error', () => {

  })
})
