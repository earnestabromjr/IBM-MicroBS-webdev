function temperature() {
  //To convert celcius to farenheit
  //(Cel *9/5) + 32
  var c = document.getElementById("c").value;
  var f = (c * 9 / 5) + 32;
  document.getElementById("f").value = f;
}

function weight() {
  //To convert kilograms to pounds
  //pounds = kilograms * 2.2
  var kilos = document.getElementById("kg").value;
  var pounds = kilos * 2.2;
  document.getElementById("lbs").value = pounds;
}
function distance() {
  //To convert kilometers to miles
  //miles = kms * 0.62137
  var kms = document.getElementById("km").value;
  var miles = kms * 0.62137;
  document.getElementById("m").value = miles;
}
