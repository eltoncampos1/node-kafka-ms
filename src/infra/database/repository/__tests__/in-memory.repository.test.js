import { describe, expect, test } from '@jest/globals'
import InMemoryRepository from '../in-memory.repository'

describe('In Memory-repository', () => {
  const makeSut = () => {
    return new InMemoryRepository()
  }
  test('should create an item', () => {
    const item = { id: 1, name: 'item 1' }

    const sut = makeSut()

    expect(sut.findAll()).toHaveLength(0)
    const result = sut.create(item)
    expect(result).toEqual(item)
    expect(sut.findAll()).toHaveLength(1)
  })
})
