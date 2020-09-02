const ERROR = {
  OVERRIDE: 'It must be overridden.',
  NOT_EXIST: 'It must be existed.',
  TYPE_MISS_MATCH: 'The type is mismatched.',
  DO_NOT_MAKE_INSTANCE: 'The constructor of the class is private method.',
  IS_NOT_CHILD_INSTANCE: 'The child is not a instance of the parent.',
  DO_NOT_USE_CONSTRUCTOR: 'The constructor is private.'
}

const Assertion = class {
  static #TYPE_OF_OBJECT = 'object'
  static #TYPE_OF_STRING = 'string'
  static #TYPE_OF_BOOLEAN = 'boolean'
  static #TYPE_OF_NUMBER = 'number'
  static #TYPE_OF_SYMBOL = 'symbol'
  static #TYPE_OF_FUNCTION = 'function'
  
  static assertInstanceOf (child, parent) {
    if (child instanceof parent) {
      return child
    }
    throw new TypeError(ERROR.IS_NOT_CHILD_INSTANCE)
  }
  
  static assertArray (target) {
    if (Array.isArray(target)) {
      return target
    }
    throw new TypeError(ERROR.TYPE_MISS_MATCH)
  }
  
  static assertExisting (target) {
    if (target) {
      return target
    }
    throw new TypeError(ERROR.NOT_EXIST)
  }
  
  static assertIterable (target) {
    this.assertFunction(this.assertObject(target)[Symbol.iterator])
    return target
  }
  
  static assertObject (target) {
    return Assertion.#assertType(target, Assertion.#TYPE_OF_OBJECT)
  }
  
  static assertString (target) {
    return Assertion.#assertType(target, Assertion.#TYPE_OF_STRING)
  }
  
  static assertFunction (target) {
    return Assertion.#assertType(target, Assertion.#TYPE_OF_FUNCTION)
  }
  
  static assertBoolean (target) {
    return Assertion.#assertType(target, Assertion.#TYPE_OF_BOOLEAN)
  }
  
  static assertNumber (target) {
    return Assertion.#assertType(target, Assertion.#TYPE_OF_NUMBER)
  }
  
  static assertSymbol (target) {
    return Assertion.#assertType(target, Assertion.#TYPE_OF_SYMBOL)
  }
  
  static assertNumberOrNull (target) {
    if (target === null) {
      return target
    }
    return Assertion.#assertType(target, Assertion.#TYPE_OF_NUMBER)
  }
  
  static #assertType (target, type) {
    if (typeof target === type) {
      return target
    }
    throw new TypeError(ERROR.TYPE_MISS_MATCH)
  }
  
  static assertPrivate (target, source) {
    if (target === source) {
      return target
    }
    throw new TypeError(ERROR.DO_NOT_USE_CONSTRUCTOR)
  }
  
  static assertOverride () {
    throw new Error(ERROR.OVERRIDE)
  }
}

export default Assertion
