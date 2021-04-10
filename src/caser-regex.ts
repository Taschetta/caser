//RESOURCE: https://regex101.com/
//NOTA: averiguar como funcionan estos regex... 

export const checkCamel = /^[a-z][a-zA-Z0-9]+$/
export const checkKebab = /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/
export const checkPascal = /^[A-Z][a-zA-Z0-9]+$/
export const checkSnake = /^([a-z][a-z0-9]*)(_[a-z0-9]+)*$/

export const matchWord = /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g