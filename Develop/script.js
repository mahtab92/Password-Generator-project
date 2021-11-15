
var generateBtn = document.querySelector("#generate");
      var upperCase=["A", "B", "C", "D", "E", "F", 
      "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
      "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    var specialCharacters= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
    "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];

   var lowerCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
   "k", "l", "m", "n", "o", "p", "q", "r", "s",
   "t", "u", "v", "w", "x", "y", "z"];

    var password = "";
    var empty="";
    var userinput= "";

// Add event listener to generate butto

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return ("")
}
generateBtn.addEventListener("click", writePassword);
console.log(writePassword);

function generatePassword(){
  var passwordLength= prompt( "How many characters would you like your password to contain?" );

  if (passwordLength >= 8 && passwordLength > 128) {
    console.log("passwordLength");
    
 }
 
  else {
    alert( "Please use characters between 8-24." );
    var confirmSpecialCharacters = confirm( "Click OK to include special characters." );
    var confirmNumbers = confirm( "Click OK to include numeric characters." );
    var confirmLowerCase = confirm( "Click OK to include lowercase characters." );
    var confirmUpperCase = confirm( "Click OK to include uppercase characters." );

    console.log('confirmSpecialCharacters');
    console.log('confirmNumbers');
    console.log('confirmLowerCase');
    console.log('confirmUpperCase');
   }
    var passwordLength= prompt('please type your passwrod below then press ok to submit.')
    
  if (passwordLength >= 8 && passwordLength > 128) {
    console.log(passwordLength);
    
 }
 
  else {
    alert( "Please use characters between 8-24." );
    return Invalid ;
   };


   generateBtn.addEventListener("click", generatePassword);  
 if (confirmSpecialCharacters=== true){
      specialCharacters= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
   "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
   console.log(confirmSpecialCharacters);
 }
   else {
      specialCharacters= empty;
   }
 
   if (confirmNumbers=== true){
        numbers=[0,1,2,3,4,5,6,7,8,9];
     console.log(confirmNumbers);
   }
 
   else {
       numbers=empty;
   }
    if (confirmLowerCase=== true){
       lowerCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z"];
    console.log(confirmLowerCase);
   }
   else{
       lowerCase=empty;
   }
 
   if (confirmUpperCase=== true){
       upperCase=["A", "B", "C", "D", "E", "F", 
    "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    console.log(confirmUpperCase);
   }
   else {
       upperCase=empty;
   }
  

     for (let i = 0; i < length; i++) {
      password += allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)]
    }
  
    return password;
  
  }
   
   
  
