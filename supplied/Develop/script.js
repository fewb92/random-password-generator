// Assignment Code
var generateBtn = document.querySelector("#generate");

var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var special = [ "!", "#", "$", "%", "&", ")", "(", "*", "+", "‘", "-", ".", "/", ":", "<", "=", ">", "?", "@", "[", "/","^", "`", "{", "|", "}", "~" ]

const characterAmountRange = document.getElementById("characterAmountRange")
const characterAmountNumber = document.getElementById("characterAmountNumber")
const includeUppercaseElement = document.getElementById("includeUppercase")
const includeLowercaseElement = document.getElementById("includeLowercase")
const includeSpecialElement = document.getElementById("includeSpecial")
const includeNumberElement = document.getElementById("includeNumbers")

const upperCaseChar = fromLowToHigh(65,90)
const lowerCaseChar = fromLowToHigh(97,122)
const numberChar = number
const specialChar = special

console.log(numberChar)
console.log(upperCaseChar)
console.log(lowerCaseChar)
console.log(specialChar)
  

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
  let charCodes = lowerCaseChar 
  if (includeUppercase)
}

function fromLowToHigh(low, high) {
  const array = []
  for(let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


