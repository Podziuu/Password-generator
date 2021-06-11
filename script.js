const amountRange = document.querySelector("#characterAmountRange");
const amountNumber = document.querySelector("#characterAmountNumber");
const form = document.querySelector("#form");
const uppercaseInput = document.querySelector("#uppercase");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const passwordInput = document.querySelector("#password");


const low_characters = makeArray(97, 122);
const upper_characters = makeArray(65, 90);
const numbers = makeArray(48, 57);
const symbols = makeArray(33, 47).concat(makeArray(58, 64)).concat(makeArray(91, 96)).concat(makeArray(123, 126));

amountNumber.addEventListener("input", synchroniseInputs);
amountRange.addEventListener("input", synchroniseInputs);

function synchroniseInputs(e) {
    const value = e.target.value;
    amountNumber.value = value;
    amountRange.value = value;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const charactersAmount = amountRange.value;
    const includeUppercase = uppercaseInput.checked;
    const includeNumbers = numbersInput.checked;
    const includeSymbols = symbolsInput.checked;
    const password = generatePassword(charactersAmount, includeUppercase, includeNumbers, includeSymbols)
    passwordInput.innerHTML = password;
})

function generatePassword(charactersAmount, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = low_characters;
    if(includeUppercase) charCodes =  charCodes.concat(upper_characters);
    if(includeNumbers) charCodes =  charCodes.concat(numbers);
    if(includeSymbols) charCodes =  charCodes.concat(symbols);

    const passwordCharacters = [];
    for(let i = 0; i < charactersAmount; i++) {
        const character = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(character));
    }
    return passwordCharacters.join('');
}

function makeArray(low, high) {
    const arr = [];
    for(let i = low; i <= high; i++) {
        arr.push(i);
    }
    return arr;
}