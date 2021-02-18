// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialChar = [ "!", "#", "$", "%", "&", ")", "(", "*", "+", "‘", "-", ".", "/", ":", "<", "=", ">", "?", "@", "[", "/","^", "`", "{", "|", "}", "~" ];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

const characterAmountRange = document.getElementById("characterAmountRange")
const characterAmountNumber = document.getElementById("characterAmountNumber")
const includeUppercaseElement = document.getElementById("includeUppercase")
const includeLowercaseElement = document.getElementById("includeLowercase")
const includeSpecialElement = document.getElementById("includeSpecial")
const includeNumberElement = document.getElementById("includeNumbers")

characterAmountRange.addEventListener("input", syncCharacterAmount)
characterAmountNumber.addEventListener("input", syncCharacterAmount)

function syncCharacterAmount (e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}

const form = document.getElementById(passwordGenerator)

// Write password to the #password input
form.addEventListener("submit", e=> {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeLowercase = includeLowercaseElement.checked
  const includeSpecial = includeSpecialElement.checked
  const includeNumber = includeNumberElement.checked
  const password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeSpecial, includeNumber)
})

function generatePassword(characterAmount, includeUppercase, includeLowercase, includeSpecial, includeNumber) {
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


