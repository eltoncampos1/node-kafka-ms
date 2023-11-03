import { describe, expect, test } from '@jest/globals'
import InMemoryRepository from '../in-memory.repository'

const makeSut = () => {
  return new InMemoryRepository()
}

const makeSutWithSeeds = (times) => {
  const repo = makeSut()
  for (let i = 0; i < times; i++) {
    repo.create({ id: i, name: 'item ' + i })
  }

  return repo
}

describe('In Memory-repository', () => {
  test('should create an item', () => {
    const item = { id: 1, name: 'item 1' }

    const sut = makeSut()

    expect(sut.findAll()).toHaveLength(0)
    const result = sut.create(item)
    expect(result).toEqual(item)
    expect(sut.findAll()).toHaveLength(1)
  })

  test('should delete an item', () => {
    const sut = makeSutWithSeeds(10)
    const item = { id: 1, name: 'item 1' }

    expect(sut.findAll()).toHaveLength(10)
    sut.delete(item.id)
    expect(sut.findAll()).toHaveLength(9)
  })
})
