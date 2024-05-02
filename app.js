var screen = document.getElementById('password').value = ""
function generate(){
var small = "abcdefghijklmnopqrstuvwxyz"
var smallPass = ""
for(i = 0; i < small.length; i++){
    var randomValue = Math.floor(Math.random() * small.length)
    smallPass += small[randomValue]
    
}
// console.log(smallPass)

var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var capPass = ""
for(i = 0; i < cap.length; i++){
    var randomValue = Math.floor(Math.random() * cap.length)
    capPass += cap[randomValue]
    
}
var sym = "_@$!><&*#"
var symPass = ""
for(i = 0; i < sym.length; i++){
    var randomValue = Math.floor(Math.random() * sym.length)
    symPass += sym[randomValue]
    
}
// console.log(capPass)
var result = smallPass.slice(0,4) + capPass.slice(0,4) + symPass.slice(0,4)
console.log(result)
document.getElementById('password').value = result

}