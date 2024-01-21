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