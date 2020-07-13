// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphaLowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChars = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "?", "~", "-"];

// Return password of user defined length and characterset
function generatePassword() {
  var userArr = [];
  var pwordLength = prompt("How many characters would you like to include? (min. 8 max. 128)");
  pwordLength = parseInt(pwordLength);
  // User must enter 8 - 128 or message will diplay to try again
  if(pwordLength > 7 && pwordLength < 129) {
    var lowerCaseTrue = confirm("Would you like to include lower case characters?");
    if(lowerCaseTrue === true) {
      userArr = userArr.concat(alphaLowerChars);
    }
    var upperCaseTrue = confirm("Would you like to include upper case characters?");
    if(upperCaseTrue === true) {
      userArr = userArr.concat(alphaUpperChars);
    }
    var numTrue = confirm("Would you like to include numbers?");
    if(numTrue === true) {
      userArr = userArr.concat(numChars);
    }
    var specCharTrue = confirm("Would you like to include special characters?");
    if (specCharTrue === true) {
      userArr = userArr.concat(specChars);
    }
    var pword = "";  
    for(var i = pwordLength; i > 0; i--) {
      pword += userArr[Math.floor(Math.random() * userArr.length)];
    }
    return pword;
    
  } else {
      return "Try Again! You must enter a number between 8 and 128."
    }
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
