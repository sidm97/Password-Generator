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

var completedPassword = []

passwordText = "";

// Function to get and record user choices on password specifics
function getPasswordOptions() {
    passwordLength = prompt("How many characters do you want your password to be? Choose a number between 8 and 128");
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Your selected password length must be between 8 and 128. Please reload the page and try again");
      passwordLength = 0;
      return;
    } else if (isNaN(passwordLength)) {
      alert("You must enter a valid number between 8 and 128. Please reload the page and try again");
      passwordLength = 0;
      return;
    } else {
      passwordOptions.number = confirm("Do you want you password to include numbers? Hit cancel if No");
      passwordOptions.upper = confirm("Do you want you password to include uppercase characters? Hit cancel if No");
      passwordOptions.lower = confirm("Do you want you password to include lowercase characters? Hit cancel if No");
      passwordOptions.special = confirm("Do you want you password to include special characters? Hit cancel if No");
      if (passwordOptions.number === false && passwordOptions.upper === false && passwordOptions.lower === false && passwordOptions.special === false) {
        alert("Your password must include at least 1 character type. Please reload the page to try again")
        passwordOptions.number = false;
        passwordOptions.upper = false;
        passwordOptions.lower = false;
        passwordOptions.special = false;
        passwordLength = 0;
        return;
      }
    }
  }


// 2 Math functions to decide how many characters of each type based on which types of characters were selected. E.g if 20 characters are required, of which there need to be lower and upper case characters, a random number of lower and upper case characters are selected that add up to 20
function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function decideNumberofCharacters() {
  numberOfselectedOptions = Object.values(passwordOptions).filter(Boolean).length;
  if (numberOfselectedOptions === 4) {
    lowerNumberofCharacters = randomNum(1, passwordLength - 3);
    upperNumberofCharacters = randomNum(1, passwordLength - lowerNumberofCharacters - 2);
    specNumberofCharacters = randomNum(1, passwordLength - lowerNumberofCharacters - upperNumberofCharacters - 1);
    numNumberofCharacters = passwordLength - (lowerNumberofCharacters + upperNumberofCharacters + specNumberofCharacters)
    return
  }
  else if (numberOfselectedOptions === 3) {
    if (passwordOptions.lower === true && passwordOptions.upper === true && passwordOptions.special === true) {
      lowerNumberofCharacters = randomNum(1, passwordLength - 2);
      upperNumberofCharacters = randomNum(1, passwordLength - lowerNumberofCharacters - 1);
      specNumberofCharacters = passwordLength - (lowerNumberofCharacters + upperNumberofCharacters)
      return
    }
    if (passwordOptions.lower === true && passwordOptions.upper === true && passwordOptions.number === true) {
      lowerNumberofCharacters = randomNum(1, passwordLength - 2);
      upperNumberofCharacters = randomNum(1, passwordLength - lowerNumberofCharacters - 1);
      numNumberofCharacters = passwordLength - (lowerNumberofCharacters + upperNumberofCharacters)
      return
    }
    if (passwordOptions.lower === true && passwordOptions.special === true && passwordOptions.number === true) {
      lowerNumberofCharacters = randomNum(1, passwordLength - 2);
      specNumberofCharacters = randomNum(1, passwordLength - lowerNumberofCharacters - 1);
      numNumberofCharacters = passwordLength - (lowerNumberofCharacters + specNumberofCharacters)
      return
    }
    if (passwordOptions.number === true && passwordOptions.upper === true && passwordOptions.special === true) {
      upperNumberofCharacters = randomNum(1, passwordLength - 2);
      specNumberofCharacters = randomNum(1, passwordLength - upperNumberofCharacters - 1);
      numNumberofCharacters = passwordLength - (upperNumberofCharacters + specNumberofCharacters)
      return
    }
  }
  else if (numberOfselectedOptions === 2) {
    if (passwordOptions.lower === true && passwordOptions.upper === true) {
      lowerNumberofCharacters = randomNum(1, passwordLength - 1);
      upperNumberofCharacters = passwordLength - lowerNumberofCharacters
      return
    }
    if (passwordOptions.lower === true && passwordOptions.special === true) {
      lowerNumberofCharacters = randomNum(1, passwordLength - 1);
      specNumberofCharacters = passwordLength - lowerNumberofCharacters
      return
    }
    if (passwordOptions.lower === true && passwordOptions.number === true) {
      lowerNumberofCharacters = randomNum(1, passwordLength - 1);
      numNumberofCharacters = passwordLength - lowerNumberofCharacters
      return
    }
    if (passwordOptions.special === true && passwordOptions.upper === true) {
      specNumberofCharacters = randomNum(1, passwordLength - 1);
      upperNumberofCharacters = passwordLength - specNumberofCharacters
      return
    }
    if (passwordOptions.number === true && passwordOptions.upper === true) {
      numNumberofCharacters = randomNum(1, passwordLength - 1);
      upperNumberofCharacters = passwordLength - numNumberofCharacters
      return
    }
    if (passwordOptions.special === true && passwordOptions.number === true) {
      specNumberofCharacters = randomNum(1, passwordLength - 1);
      numNumberofCharacters = passwordLength - specNumberofCharacters
      return
    }
  }
  else if (numberOfselectedOptions === 1) {
    if (passwordOptions.lower === true) {
      lowerNumberofCharacters = randomNum(1, passwordLength);
      return
    }
    else if (passwordOptions.upper === true) {
      upperNumberofCharacters = randomNum(1, passwordLength);
      return
    }
    else if (passwordOptions.special === true) {
      specNumberofCharacters = randomNum(1, passwordLength);
      return
    }
    else if (passwordOptions.number === true) {
      numNumberofCharacters = randomNum(1, passwordLength);
      return
    }
  }
}

// 2 Functions to actually select the correct number of characters of each type. Here, new arrays are created by randomly selecting the allotted number of characters from the pre-existing arrays. These arrays are added to 1 final array that contains arranged characters that need to be randomised one more time
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function createSelectedarrays() {
  if (passwordOptions.lower) {
    for (let index = 0; index < lowerNumberofCharacters; index++) {
      selectedLower.push(getRandom(lowerCasedCharacters));
    }
    completedPassword = completedPassword.concat(selectedLower)
  }
  if (passwordOptions.upper) {
    for (let index = 0; index < upperNumberofCharacters; index++) {
      selectedUpper.push(getRandom(upperCasedCharacters));
    }
    completedPassword = completedPassword.concat(selectedUpper)
  }
  if (passwordOptions.special) {
    for (let index = 0; index < specNumberofCharacters; index++) {
      selectedSpec.push(getRandom(specialCharacters));
    }
    completedPassword = completedPassword.concat(selectedSpec)
  }
  if (passwordOptions.number) {
    for (let index = 0; index < numNumberofCharacters; index++) {
      selectedNum.push(getRandom(numericCharacters));
    }
    completedPassword = completedPassword.concat(selectedNum)
  }
}

// Function to shuffle the array that contains the final password characters
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

// Function to change the completed password from an array to text format, ready to be displayed in HTML
function convertTotext() {
  for (let i = 0; i < completedPassword.length; i++) {
    passwordText += completedPassword[i]
  }
}

// Final generation algorithm
function generateFinalpassword() {
  getPasswordOptions();
  console.log("Chosen password length is : " + passwordLength);
  console.log(passwordOptions);
  decideNumberofCharacters()
  console.log("Number of chosen character types is : "  + numberOfselectedOptions);
  console.log("Number of lowercase characters in final password will be : " + lowerNumberofCharacters);
  console.log("Number of uppercase characters in final password will be : " + upperNumberofCharacters);
  console.log("Number of special characters in final password will be : " + specNumberofCharacters);
  console.log("Number of numeric characters in final password will be : " + numNumberofCharacters);
  createSelectedarrays()
  console.log("Final password will contain the following characters : " + completedPassword);
  shuffle(completedPassword);
  console.log("Final password is : " + completedPassword);
  convertTotext()
  console.log("Final password in text is : " + passwordText);
  return passwordText;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Write password to the #password input
function writePassword() {
  var password = generateFinalpassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
  document.querySelector('#generate').disabled = true;
}