// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
 
// Defining variables
var passwordLength = 0
var passwordOptions = {
    number: false,
    upper: false,
    lower: false,
    special: false,
}

var numberOfselectedOptions = 0;
var lowerNumberofCharacters = 0;
var upperNumberofCharacters = 0;
var specNumberofCharacters = 0;
var numNumberofCharacters = 0;

var selectedNum = []
var selectedSpec = []
var selectedUpper = []
var selectedLower = []

function getPasswordOptions() {
  function getPasswordOptions() {
    passwordLength = prompt("how many characters");
    if (passwordLength <8||passwordLength>128) {
      alert("length must be 8-128");
      passwordLength = 0;
    } else if (isNaN(passwordLength)){
      alert("enter a valid number");
      passwordLength = 0;
    } else {
    passwordOptions.number = confirm("do you want numbers");
    passwordOptions.upper = confirm("do you want uppercases");
    passwordOptions.lower = confirm("do you want lowercases");
    passwordOptions.special = confirm("do you want special characters");
      if(passwordOptions.number===false && passwordOptions.upper===false && passwordOptions.lower ===false && passwordOptions.special ===false){
        alert("you must choose at least 1 character type for your password")
        passwordOptions.number = false;
        passwordOptions.upper = false;
        passwordOptions.lower = false;
        passwordOptions.special = false;
      }
    }
  }
}

// Math functions to decide how many characters of each type based on which types of characters were selected. E.g if 20 characters are required, of which there need to be lower and upper case characters, a random number of lower and upper case characters are selected that add up to 20
function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function decideNumberofCharacters() {
numberOfselectedOptions = Object.values(passwordOptions).filter(Boolean).length;
console.log(numberOfselectedOptions);
if (numberOfselectedOptions === 4) {
  lowerNumberofCharacters = randomNum(1,passwordLength-3);
  upperNumberofCharacters = randomNum(1,passwordLength-lowerNumberofCharacters-2);
  specNumberofCharacters = randomNum(1,passwordLength-lowerNumberofCharacters-upperNumberofCharacters-1);
  numNumberofCharacters = passwordLength-(lowerNumberofCharacters+upperNumberofCharacters+specNumberofCharacters)
  return
}
else if (numberOfselectedOptions === 3) {
  if (passwordOptions.lower === true && passwordOptions.upper === true && passwordOptions.special === true) {
    lowerNumberofCharacters = randomNum(1,passwordLength-2);
    upperNumberofCharacters = randomNum(1,passwordLength-lowerNumberofCharacters-1);
    specNumberofCharacters = passwordLength-(lowerNumberofCharacters+upperNumberofCharacters)
    return
  }
  if ( passwordOptions.lower === true && passwordOptions.upper === true && passwordOptions.number === true) {
    lowerNumberofCharacters = randomNum(1,passwordLength-2);
    upperNumberofCharacters = randomNum(1,passwordLength-lowerNumberofCharacters-1);
    numNumberofCharacters = passwordLength-(lowerNumberofCharacters+upperNumberofCharacters)
    return
  }
  if ( passwordOptions.lower === true && passwordOptions.special === true && passwordOptions.number === true) {
    lowerNumberofCharacters = randomNum(1,passwordLength-2);
    specNumberofCharacters = randomNum(1,passwordLength-lowerNumberofCharacters-1);
    numNumberofCharacters = passwordLength-(lowerNumberofCharacters+specNumberofCharacters)
    return
  }
  if ( passwordOptions.number === true && passwordOptions.upper === true && passwordOptions.special === true) {
    upperNumberofCharacters = randomNum(1,passwordLength-2);
    specNumberofCharacters = randomNum(1,passwordLength-upperNumberofCharacters-1);
    numNumberofCharacters = passwordLength-(upperNumberofCharacters+specNumberofCharacters)
    return
  }
}
else if (numberOfselectedOptions === 2) {
  if (passwordOptions.lower === true && passwordOptions.upper === true) {
    lowerNumberofCharacters = randomNum(1,passwordLength-1);
    upperNumberofCharacters = passwordLength-lowerNumberofCharacters
    return
  }
  if (passwordOptions.lower === true && passwordOptions.special === true) {
    lowerNumberofCharacters = randomNum(1,passwordLength-1);
    specNumberofCharacters = passwordLength-lowerNumberofCharacters
    return
  }
  if (passwordOptions.lower === true && passwordOptions.number === true) {
    lowerNumberofCharacters = randomNum(1,passwordLength-1);
    numNumberofCharacters = passwordLength-lowerNumberofCharacters
    return
  }
  if (passwordOptions.special === true && passwordOptions.upper === true) {
    specNumberofCharacters = randomNum(1,passwordLength-1);
    upperNumberofCharacters = passwordLength-specNumberofCharacters
    return
  }
  if (passwordOptions.number === true && passwordOptions.upper === true) {
    numNumberofCharacters = randomNum(1,passwordLength-1);
    upperNumberofCharacters = passwordLength-numNumberofCharacters
    return
  }
  if (passwordOptions.special === true && passwordOptions.number === true) {
    specNumberofCharacters = randomNum(1,passwordLength-1);
    numNumberofCharacters = passwordLength-specNumberofCharacters
    return
  }
}
else if (numberOfselectedOptions === 1) {
  if (passwordOptions.lower === true) {
    lowerNumberofCharacters = randomNum(1,passwordLength);
    return
  }
  else if (passwordOptions.upper === true) {
    upperNumberofCharacters = randomNum(1,passwordLength);
    return
  }
  else if (passwordOptions.special === true) {
    specNumberofCharacters = randomNum(1,passwordLength);
    return
  }
  else if (passwordOptions.number === true) {
    numNumberofCharacters = randomNum(1,passwordLength);
    return
  }
}
}


// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);