
var generateBtn = document.querySelector("#generate");
      var upperCase=["A", "B", "C", "D", "E", "F", 
      "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
      "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    var speicalCharacters= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
    "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];

   var lowerCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
   "k", "l", "m", "n", "o", "p", "q", "r", "s",
   "t", "u", "v", "w", "x", "y", "z"];

//password input//
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);



function generatePassword(){
  var passwordLength= prompt( "How many characters would you like your password to contain?" );
 var passwordLength=alert();
  if (passwordLength <= 8) {
   alert( "Password length must be at least 8 characters. Try again." );
  generatePassword();
 }
 
 else if (passwordLength >= 128) {
   alert( "Password length must be less than 129 characters. Try again." );
   generatePassword();
 }
 
 
  else {
    var password= [];
    var confirmSpecialCharacters = confirm( "Click OK to include special characters." );
    var confirmNumbers = confirm( "Click OK to include numeric characters." );
    var confirmLowerCase = confirm( "Click OK to include lowercase characters." );
    var confirmUpperCase = confirm( "Click OK to include uppercase characters." );
   }


 
 if (confirmSpecialCharacters=== true){
   var SpecialCharacters= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
   "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
 }
   else {
     var SpecialCharacters= empty;
   }
 
   if (confirmNumbers=== true){
     var Numbers=[0,1,2,3,4,5,6,7,8,9];
   }
 
   else {
     var numbers=empty;
   }
    if (confirmLowerCase=== true){
     var lowerCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z"];
   }
   else{
     var LowerCase=empty;
 
   }
   var empty=[];
 
   if (confirmUpperCase=== true){
     var upperCase=["A", "B", "C", "D", "E", "F", 
    "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
   }
   else {
     var UpperCase=empty;
   }

    console.log(speicalCharacters);
    console.log(number);
    console.log(lowerCase);
    console.log(upperCase);

   if (confirmSpecialCharacters=== false && confirmNumbers=== false && 
     LowerCase=== false && confirmUpperCase=== false ){
       alert ('cannot create the password! please try again.')

     }
  

for (let i=0; i<password.Length; i++){
  Math.random() * Math.floor(randomPassword.length)
  passwordText.push(randomPassword);
  return password;
};

console.log(writePassword);
console.log(generatePassword);}
