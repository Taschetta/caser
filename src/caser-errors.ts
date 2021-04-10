

export class InvalidValueError extends Error {
  constructor(value: string) {
    super(`'${value}' is not a valid value`)
    this.name = 'InvalidValueError'
    if(Error.captureStackTrace) {
      Error.captureStackTrace(this, InvalidValueError)
    }
  }
}