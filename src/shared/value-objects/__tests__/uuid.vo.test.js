import { describe, expect, test } from '@jest/globals'
import UUID from '../uuid.vo.js'
import InvalidUUIDError from '../../errors'
import UUIDPRovider from '../../providers/id/uuid.js'

describe('UUID Value Object', () => {
  test('should return  error if is invalid', () => {
    expect(() => new UUID('invalid')).toThrowError(new InvalidUUIDError())
    expect(() => new UUID(1)).toThrowError(new InvalidUUIDError())
    expect(() => new UUID({})).toThrowError(new InvalidUUIDError())
    expect(() => new UUID(new Date())).toThrowError(new InvalidUUIDError())
    expect(() => new UUID([])).toThrowError(new InvalidUUIDError())
  })

  test('generate a UUID', () => {
    expect(() => new UUID().id).toBeDefined()
    expect(() => new UUID(null).id).toBeDefined()
    expect(() => new UUID(undefined).id).toBeDefined()

    const generateId = new UUID().id
    expect(new UUIDPRovider().validate(generateId)).toBe(true)
  })
})
