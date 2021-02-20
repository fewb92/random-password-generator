// declare variables, constants
const characterAmountRange = document.getElementById("characterAmountRange")
const characterAmountNumber = document.getElementById("characterAmountNumber")
const includeUppercaseElement = document.getElementById("includeUppercase")
const includeLowercaseElement = document.getElementById("includeLowercase")
const includeSpecialElement = document.getElementById("includeSpecial")
const includeNumberElement = document.getElementById("includeNumbers")
const passwordDisplay = document.getElementById("passwordDisplay")
const generateBtn = document.getElementById('passwordGenerator')
const number = fromLowToHigh(48,57)
const lowerCaseChar = fromLowToHigh(97,122)
const upperCaseChar = fromLowToHigh(65,90)
const special = fromLowToHigh(33,47)
const numberChar = number
const specialChar = special

console.log(numberChar)
console.log(upperCaseChar)
console.log(lowerCaseChar)
console.log(specialChar)
  
// add code to synchronize range slider and text input box
characterAmountRange.addEventListener("input", syncCharacterAmount)
characterAmountNumber.addEventListener("input", syncCharacterAmount)

// declare function to sync character amount
function syncCharacterAmount (e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}


// Write password to the #password input
generateBtn.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeNumber = includeNumberElement.checked
  const includeLowercase = includeLowercaseElement.checked
  const includeUppercase = includeUppercaseElement.checked
  const includeSpecial = includeSpecialElement.checked
  
  const password = generatePassword(characterAmount, includeNumber, includeLowercase, includeUppercase, includeSpecial)
  passwordDisplay.innerText = password
})

// function to create the password
function generatePassword(characterAmount, includeNumber, includeLowercase, includeUppercase, includeSpecial) {
  let charCodes = lowerCaseChar 
  if (includeNumber) charCodes = charCodes.concat(numberChar)
  if (includeLowercase) charCodes = charCodes
  if (includeUppercase) charCodes = charCodes.concat(upperCaseChar)
  if (includeSpecial) charCodes = charCodes.concat(specialChar)

  const passwordCharacter = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacter.push(String.fromCharCode(characterCode))
  }
  return passwordCharacter.join ('')
}

// fucntion to pull ascii codes from and replace them in respective arrays
function fromLowToHigh(low, high) {
  const array = []
  for(let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}


