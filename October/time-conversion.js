function timeConversion(s) {
  let amPM = s.charAt(8);
  let militaryHour = "";
  if (amPM == "A") {
    if (s.substring(0, 2) == "12") {
      militaryHour = "00";
    } else {
      militaryHour = s.substring(0, 2);
    }
  } else {
    if (s.substring(0, 2) == "12") {
      militaryHour = s.substring(0, 2); //kondisi 12 PM
    } else {
      //kondisi 1 PM - 11 PM
      militaryHour = parseInt(s.substring(0, 2)) + 12;
    }
  }
  return militaryHour + s.substring(2, 8);
}
const result = timeConversion("07:05:45PM");
console.log(result);
