import useCaser from '../build/caser.js'

const caser = useCaser('Hello World')

console.log({ ...caser })