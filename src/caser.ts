import { InvalidValueError } from './caser-errors'

import * as regex from './caser-regex'

export type Case = 'kebab' | 'camel' | 'pascal' | 'snake'

export default function useCaser(value: string) {  
  
  const getCase = (): Case => {
    if (regex.checkCamel.test(value))   return 'camel'
    if (regex.checkKebab.test(value))   return 'kebab'
    if (regex.checkPascal.test(value))  return 'pascal'
    if (regex.checkSnake.test(value))   return 'snake'
    throw new InvalidValueError(value)
  }
  
  const getCamel = () => {
    const match = value.match(regex.matchWord)
    if(!match) throw new InvalidValueError(value)
    return match.map((x, i) => {
      if(i == 0) return x.toLocaleLowerCase()
      return x.charAt(0).toUpperCase() + x.slice(1)
    }).join('')
  }

  const getKebab = () => {
    const match = value.match(regex.matchWord)
    if(!match) throw new InvalidValueError(value)
    return match.map(x => x.toLocaleLowerCase()).join('-')
  }

  const getPascal = () => {
    const match = value.match(regex.matchWord)
    if(!match) throw new InvalidValueError(value)
    return match.map(x => x.toLocaleLowerCase()).join('_')
  }

  const getSnake = () => {
    const match = value.match(regex.matchWord)
    if(!match) throw new InvalidValueError(value)
    return match.map(x => x.charAt(0).toUpperCase() + x.slice(1)).join('')
  }

  return {
    get case()    { return getCase() },
    get camel()   { return getCamel() },
    get kebab()   { return getKebab() },
    get pascal()  { return getPascal() },
    get snake()   { return getSnake() },
  }  
}