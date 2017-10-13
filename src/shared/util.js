/** @module shared/util */

const _toString = Object.prototype.toString
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * Mix properties into target object.
 */
export function extend (to, _from) {
  for (const key in _from) {
    to[key] = _from[key]
  }
  return to
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
export function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
export function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Perform no operation.
 */
export function noop () {}

/**
 * Always return false.
 */
export const no = () => false

/**
 * Return same value
 */
export const identity = (_) => _


/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
export function makeMap (
  str,
  expectsLowerCase
){
  const map = Object.create(null)
  const list = str.split(',')
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase
    ? val => map[val.toLowerCase()]
    : val => map[val]
}

/**
 * Check whether the object has the property.
 * 属于实例属性
 */
export function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Check if val is a valid array index.
 */
export function isValidArrayIndex (val) {
  const n = parseFloat(String(val))
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}
