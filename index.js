const addDays = require('date-fns/addDays')

function addDaysToDate(days) {
  let dateAheadtoGivenDate = addDays(new Date('22 Aug 2020'), days)
  return dateAheadtoGivenDate
}

module.exports = addDaysToDate
