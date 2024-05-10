var range = document.getElementById("rangee");
var screen = (document.getElementById("password").value = "");
var upper = document.getElementById("checkbox1");
var lower = document.getElementById("checkbox2");
var checkbox3 = document.getElementById("checkbox3");
var checkbox4 = document.getElementById("checkbox4");
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
  var allCharacters = small + cap + sym;
  var password = "";
  for (i = 0; i < allCharacters.length; i++) {
    var randomValue = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomValue];
  }
  // document.getElementById("password").value = password.slice(0,range.value)

  // return document.getElementById("password").value = password.slice(0,13)
  if (
    upper.checked &&
    lower.checked &&
    checkbox3.checked &&
    checkbox4.checked
  ) {
    var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var small = "abcdefghijklmnopqrstuvwxyz";
    var symbols = "@$%^!*(#^*#(";
    var num1 = "123456789123456789";
    var allCharacters = cap + small + symbols + num1;
    var allPassword = "";

    for (i = 0; i < allCharacters.length; i++) {
      var randomValue = Math.floor(Math.random() * allCharacters.length);
      allPassword += allCharacters[randomValue];
    }

    document.getElementById("password").value = allPassword.slice(
      0,
      range.value
    );
  } else if (lower.checked) {
    var small = "abcdefghijklmnopqrstuvwxyz";
    var sallPass = "";
    for (i = 0; i < small.length; i++) {
      var randomValue = Math.floor(Math.random() * small.length);
      sallPass += small[randomValue];
    }
    document.getElementById("password").value = sallPass.slice(0, range.value);
  } else if (upper.checked) {
    var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var capPass = "";
    for (i = 0; i < small.length; i++) {
      var randomValue = Math.floor(Math.random() * small.length);
      capPass += cap[randomValue];
    }
    document.getElementById("password").value = capPass.slice(0, range.value);
  } else if (checkbox3.checked) {
    var num11 = "12345368796";
    var numPass = "";
    for (i = 0; i < num11.length; i++) {
      var randomValue = Math.floor(Math.random() * num11.length);
      numPass += num11[randomValue];
    }
    document.getElementById("password").value = numPass.slice(0, range.value);
  } else if (checkbox4.checked) {
    var symb = "@$^&*^(";
    var symbPass = "";
    for (i = 0; i < symb.length; i++) {
      var randomValue = Math.floor(Math.random() * symb.length);
      symbPass += symb[randomValue];
    }
    document.getElementById("password").value = symbPass.slice(0, range.value);
  } else {
    document.getElementById("password").value = "Atleast Mark One CheckBox";
  }
}
//   document.getElementById("password").value = smallPass.slice(0,range.value)
//   // console.log(smallPass)
// }

document.getElementById("rValue").innerHTML = `Length ${range.value}`;
// document.getElementById('.upperCase').value
function rangeChange() {
  document.getElementById("rValue").innerHTML = `Length ${range.value}`;
}
// document.getElementById("rValue").innerHTML = `value ${range.value}`
// var saved = generate().toString()
// // console.log(generate())
// console.log(range)
// function range(){
//   // var range = document.getElementById("range").value
//   // console.log(range)
// }
