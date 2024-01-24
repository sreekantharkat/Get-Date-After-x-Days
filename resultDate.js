let addDaysToDate = require('./index')

let result = addDaysToDate((days = 10))

console.log(`${result.getDate()}-${result.getMonth()}-${result.getFullYear()}`)
