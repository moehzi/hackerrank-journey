function dayOfProgrammer(year) {
  let str = "";
  if (year == 1918) {
    str = `26.09.${year}`;
  } else if (year <= 1917) {
    if (year % 4 == 0) {
      str = `12.09.${year}`;
    } else {
      str = `13.09.${year}`;
    }
  } else {
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
      str = `12.09.${year}`;
    } else {
      str = `13.09.${year}`;
    }
  }
  return str;
}
const hasil = dayOfProgrammer(2016);
console.log(hasil);
