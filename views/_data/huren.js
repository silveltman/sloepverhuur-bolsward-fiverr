function getDatesInRange () {
  const startDate = new Date('2022-03-01')
  const endDate = new Date('2022-05-31')

  let dateRange = []

  let date = startDate

  while (date <= endDate) {
    const formattedDate = `${ date.getDate() }-${ date.getMonth() + 1 }-${ date.getFullYear() }`
    dateRange.push(formattedDate)
    
    date.setDate(date.getDate() + 1)
  }

  return dateRange;
}

module.exports = {

  dateRange: getDatesInRange()
  
};