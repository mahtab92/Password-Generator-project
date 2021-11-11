// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers=[0,1,2,3,4,5,6,7,8,9];
var lowerCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
"k", "l", "m", "n", "o", "p", "q", "r", "s",
"t", "u", "v", "w", "x", "y", "z"];
var upperCase=["A", "B", "C", "D", "E", "F", 
"G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
 "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h",
  "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var speicalCharacters= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
 "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
 var empty=[];
 var password= [];
 //code starts//
 var passwordLength= prompt( "How many characters would you like your password to contain?" );

 if (passLength < 8) {
  alert( "Password lenth must be at least 8 characters. Try again." );
}

else if (passLength > 128) {
  alert( "Password length must be less than 129 characters. Try again." );
}

else {
var confirmSpecialCharacters = confirm( "Click OK to include special characters." );
var confirmNumbers = confirm( "Click OK to include numeric characters." );
var confirmLowerCase = confirm( "Click OK to include lowercase characters." );
var confirmUpperCase = confirm( "Click OK to include uppercase characters." );
}
if (confirmSpecialCharacters=== true){
  var speicalCharacters= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
  "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
}
  else {
    var SpecialCharacters= empty;
  }

  if (confirmNumbers=== true){
    var numbers=[0,1,2,3,4,5,6,7,8,9];
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
    var confirmLowerCase=empty;

  }

  if (confirmUpperCase=== true){
    var upperCase=["A", "B", "C", "D", "E", "F", 
"G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
 "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h",
  "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  }
  else {
    var confirmUpperCase=empty;
  }
  if (confirmSpecialCharacters=== false && confirmNumbers=== false && 
    confirmLowerCase=== false && confirmUpperCase=== false ){
      alert ('cannot create the password! please try again.')
    }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
for (let i=0; i<passwordLength; i++){
  console.log(`generatePassword ${generatePassword}.`)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
