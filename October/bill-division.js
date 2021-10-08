function bonAppetit(bill, k, b) {
  let sumbActual = 0;
  for (let i = 0; i < bill.length; i++) {
    sumbActual += bill[i];
  }
  sumbActual = (sumbActual - bill[k]) / 2;
  if (sumbActual == b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - sumbActual);
  }
}
const print = bonAppetit([3, 10, 2, 9], 1, 12);
// console.log(print);
