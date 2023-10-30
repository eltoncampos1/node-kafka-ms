import { describe, expect, test } from '@jest/globals'
import ValueObject from '../value-object.js'

class StringValueObject extends ValueObject {
  constructor (value) {
    super()
  }
}

class ComplexValueObject extends ValueObject {
  constructor (prop1, prop2) {
    super()
  }
}

describe('Value Object', () => {
  test('should be equals', () => {
    const voString1 = new StringValueObject('value-object-string')
    const voString2 = new StringValueObject('value-object-string')

    expect(voString1.equals(voString2)).toBe(true)

    const voComplex1 = new ComplexValueObject('value-1', 0)
    const voComplex2 = new ComplexValueObject('value-1', 0)
    expect(voComplex1.equals(voComplex2)).toBe(true)
    expect(voComplex1.equals(null)).toBe(false)
    expect(voComplex1.equals(undefined)).toBe(false)
    expect(voString1.equals(voComplex1)).toBe(false)
    expect(voString1.equals(new Date())).toBe(false)
  })
})
