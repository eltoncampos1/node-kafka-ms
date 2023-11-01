import { describe, expect, test } from '@jest/globals'
import Validator from '../validator.js'
import { InvalidFormatError, InvalidLengthError } from '../../errors/index.js'

describe('Validator', () => {
  const sut = new Validator()

  test('error lengthIsEqual', () => {
    expect(() => sut.lengthIsEqual('adsda', 2)).toThrowError(new InvalidLengthError('The length must be equal to 2'))
  })

  test('lengthIsEqual pass', () => {
    expect(() => sut.lengthIsEqual('as', 2)).not.toThrowError(new InvalidLengthError('The length must be equal to 2'))
  })

  test('lengthIsGreatherThanOrEqualTo error', () => {
    expect(() => sut.lengthIsGreatherThanOrEqualTo('less', 5)).toThrowError(new InvalidLengthError('The length must be greather than or equal to 5'))
  })

  test('lengthIsGreatherThanOrEqualTo pass', () => {
    expect(() => sut.lengthIsGreatherThanOrEqualTo('greather', 5)).not.toThrowError(new InvalidLengthError('The length must be greather than or equal to 5'))
    expect(() => sut.lengthIsGreatherThanOrEqualTo('equal', 5)).not.toThrowError(new InvalidLengthError('The length must be greather than or equal to 5'))
  })

  test('lengthIsLessThanOrEqualTo error', () => {
    expect(() => sut.lengthIsLessThanOrEqualTo('foobarr', 5)).toThrowError(new InvalidLengthError('The length must be less than or equal to 5'))
  })

  test('lengthIsLessThanOrEqualTo pass', () => {
    expect(() => sut.lengthIsLessThanOrEqualTo('less', 5)).not.toThrowError(new InvalidLengthError('The length must be less than or equal to 5'))
    expect(() => sut.lengthIsLessThanOrEqualTo('equal', 5)).not.toThrowError(new InvalidLengthError('The length must be less than or equal to 5'))
  })

  test('validateFormat error', () => {
    const regexNumeros = /^\d+$/
    expect(() => sut.validateFormat('letters', regexNumeros, 'Invalid format')).toThrowError(new InvalidFormatError())
  })

  test('validateFormat pass', () => {
    const regexNumeros = /^\d+$/
    expect(() => sut.validateFormat('12323', regexNumeros, 'Invalid format')).not.toThrowError(new InvalidFormatError())
  })
})
