var range = document.getElementById("rangee")
var screen = (document.getElementById("password").value = "");
function generate() {
  // var small = "abcdefghijklmnopqrstuvwxyz";
  // var smallPass = "";
  // for (i = 0; i < small.length; i++) {
  //   var randomValue = Math.floor(Math.random() * small.length);
  //   smallPass += small[randomValue];
  // }
  // // console.log(smallPass)

  // var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // var capPass = "";
  // for (i = 0; i < cap.length; i++) {
  //   var randomValue = Math.floor(Math.random() * cap.length);
  //   capPass += cap[randomValue];
  // }
  // var sym = "_@$!><&*#";
  // var symPass = "";
  // for (i = 0; i < sym.length; i++) {
  //   var randomValue = Math.floor(Math.random() * sym.length);
  //   symPass += sym[randomValue];
  // }
  // // console.log(capPass)
  // var result =
  //   smallPass.slice(0, 4) + capPass.slice(0, 4) + symPass.slice(0, 4);
  // console.log(result);
  // document.getElementById("password").value = result;

  var small = "abcdefghijklmnopqrstuvwxyz";
  var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var sym = "_@$!><&*#";
  var allCharacters = small + cap + sym
  var password = ""
  for(i = 0 ; i < allCharacters.length;i++){
    var randomValue = Math.floor(Math.random() * allCharacters.length)
    password += allCharacters[randomValue]
  }
  document.getElementById("password").value = password.slice(0,range.value)
  
  // return document.getElementById("password").value = password.slice(0,13)
}

function rangeChange(){
  document.getElementById("rValue").innerHTML = `value ${range.value}`
}
// document.getElementById("rValue").innerHTML = `value ${range.value}`
// var saved = generate().toString()
// // console.log(generate())
// console.log(range)
// function range(){
//   // var range = document.getElementById("range").value
//   // console.log(range)
// }
