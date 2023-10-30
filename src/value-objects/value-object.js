import isEqual from 'lodash/isEqual'

/**
     * constructor description
     * @param {valueObject} this
  */

export default class ValueObject {
  equals (vo) {
    if (vo === null || vo === undefined) {
      return false
    }
    if (vo.constructor.name !== this.constructor.name) {
      return false
    }

    return isEqual(vo, this)
  }
}
