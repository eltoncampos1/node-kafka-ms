import { describe, expect, test } from '@jest/globals'
import UUID from '../../value-objects/uuid.vo'
import { InvalidFormatError, InvalidLengthError, InvalidUUIDError } from '..'

describe('Commom Errors', () => {
  test('InvalidUUIDError', () => {
    expect(() => new UUID('1')).toThrowError(new InvalidUUIDError())
  })

  test('InvalidLengthError', () => {
    expect(() => {
      throw new InvalidLengthError()
    }).toThrowError(new InvalidLengthError())
  })

  test('InvalidLengthError', () => {
    expect(() => {
      throw new InvalidFormatError()
    }).toThrowError(new InvalidFormatError())
  })
})
