// // GET products

// let availableProducts = products.filter((x) => {
//   return ochtend.stock > 0 || middag.stock > 0 || avond.stock
// })

// let availableDates = []

// availableProducts.forEach(product => {
//   let date = product.date
//   availableDates.push(date)
// });

// // pass availableDates to flatpick

// let selectedProduct = availableProducts.find((product) => [
//   product.date == flatpickrSelected.date
// ])

// let ochtendStock = selectedProduct.tijden.ochtend
// let middagStock = selectedProduct.tijden.avond
// let avondStock = selectedProduct.tijden.avond

// // bind those values to the buttons to add/remove a "disabled" class