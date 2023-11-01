import { describe, expect, test } from '@jest/globals'
import UUID from '../../value-objects/uuid.vo'
import { EntityValidationError, InvalidFormatError, InvalidLengthError, InvalidUUIDError } from '..'

describe('Commom Errors', () => {
  test('InvalidUUIDError', () => {
    expect(() => new UUID('1')).toThrowError(new InvalidUUIDError())
  })

  test('InvalidLengthError', () => {
    expect(() => {
      throw new InvalidLengthError()
    }).toThrowError(new InvalidLengthError())
  })

  test('InvalidLengthError with "custom message"', () => {
    expect(() => {
      throw new InvalidLengthError('custom message')
    }).toThrowError(new InvalidLengthError('custom message'))
  })

  test('InvalidLengthError', () => {
    expect(() => {
      throw new InvalidFormatError()
    }).toThrowError(new InvalidFormatError())
  })

  test('InvalidLengthError with "custom message"', () => {
    expect(() => {
      throw new InvalidFormatError('custom message')
    }).toThrowError(new InvalidFormatError('custom message'))
  })

  test('EntityValidationError', () => {
    expect(() => {
      throw new EntityValidationError()
    }).toThrowError(new EntityValidationError())
  })

  test('InvalidLengthError with "custom message"', () => {
    expect(() => {
      throw new EntityValidationError([{ message: 'error' }], 'custom message')
    }).toThrowError(new EntityValidationError([{ message: 'error' }], 'custom message'))
  })
})
