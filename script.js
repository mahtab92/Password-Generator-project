var generateBtn = document.querySelector("#generate");
//character list
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "-",
  ".",
  "`",
  "~",
  "|",
  "<",
  ">",
  "=",
  "-",
  "_",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var password = "";
var empty = "";
var userinput = "";
// Add event listener to generate button
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// event listener for genrate button
generateBtn.addEventListener("click", writePassword);
console.log(writePassword);
function generatePassword() {
  var passwordLength = prompt(
    "How many characters would you like your password to contain?"
  );

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please use characters between 8-128.");
    return generatePassword();
  } else {
    var confirmSpecialCharacters = confirm(
      "Click OK to include special characters."
    );
    var confirmNumbers = confirm("Click OK to include numeric characters.");
    var confirmLowerCase = confirm("Click OK to include lowercase characters.");
    var confirmUpperCase = confirm("Click OK to include uppercase characters.");

    console.log(confirmSpecialCharacters);
    console.log(confirmNumbers);
    console.log(confirmLowerCase);
    console.log(confirmUpperCase);
  }

  if (
    confirmLowerCase === false &&
    confirmUpperCase === false &&
    confirmNumbers === false &&
    confirmSpecialCase === false
  ) {
    alert("Please try again write your password.");
    console.log(passwordLength);
  }

  // Create a new variable for an empty array
  var passwordCharacter = [];
  // Merge `specialCharacters` will the new array
  if (confirmSpecialCharacters === true) {
    passwordCharacter = passwordCharacter.concat(specialCharacters);
  }
  if (confirmNumbers === true) {
    passwordCharacter = passwordCharacter.concat(lowerCase);
  }
  if (confirmLowerCase === true) {
    passwordCharacter = passwordCharacter.concat(upperCase);
  }
  if (confirmUpperCase === true) {
    passwordCharacter = passwordCharacter.concat(numbers);
  }
  //for loop to create a Final password
  var passwordFinal = "";
  for (var i = 0; i < passwordLength; i++) {
    passwordFinal =
      passwordFinal +
      passwordCharacter[Math.floor(Math.random() * passwordCharacter.length)];
  }
  return passwordFinal;
}
