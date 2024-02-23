var generateButton = window.document.getElementById('generate-btn')


generateButton.addEventListener('click', generatePassword)

// generateButton.addEventListener('click', function(){
//     var charactersNumber = charactersNumber.value
//     var includeSymbols = includeSymbols.checked
//     var includeNumbers = includeNumbers.checked
//     var includeLetters = includeLetters.checked

//     generatePassword(charactersNumber, includeSymbols, includeNumbers, includeLetters)
// })



function generatePassword(charactersNumber, includeSymbols, includeNumbers, includeUpperLetters, includeLowerLetters){
   
    var charactersNumber = window.document.getElementById('characters-number').value
    var includeSymbols = window.document.getElementById('include-symbols').checked
    var includeNumbers = window.document.getElementById('include-numbers').checked
    var includeUpperLetters = window.document.getElementById('include-upper-letters').checked
    var includeLowerLetters = window.document.getElementById('include-lower-letters').checked

    var symbolsList = '!@#$%^&*()-+=`~?/><,.[];:'
    var lowerLettersList = 'abcdefghijklmnopqrstuvwxyz'
    var upperLettersList = lowerLettersList.toUpperCase()
    var numbersList = '0123456789'

    var passwordGeneration = window.document.getElementById('result')
    var passwordGenerationMsg = window.document.getElementById('passwd-msg')
    var password = ''

    console.log(`upperLettersList = ${upperLettersList}\n
    lowerLettersList = ${lowerLettersList}`)


    if(charactersNumber > 32){
        alert(`O numero de caracteres nao pode ultrapassar de 32!
        \nQuantidade inserida: ${charactersNumber}`)
        // console.log(`OUTPUT - charactersNumber: ${charactersNumber}`)
    }
    else if(charactersNumber < 6){
        alert(`A senha deve ter no minimo 6 caracteres!
         \nQuantidade inserida: ${charactersNumber}`)
        // console.log(`OUTPUT - charactersNumber: ${charactersNumber}`)   
    }
    else if(includeSymbols == false && includeNumbers == false && includeUpperLetters == false && includeLowerLetters == false){
        alert('Você selecionar ao menos uma opção!')
    }
    else {
        for(var i = 0; i < charactersNumber; i++){
            if(includeSymbols === true){
                password += symbolsList[Math.floor(Math.random() * symbolsList.length)]
            }
            else if(includeSymbols === false){}

            if(includeNumbers === true){
                password += numbersList[Math.floor(Math.random() * numbersList.length)]
            }
            else if(!includeNumbers == false){}

            if(includeUpperLetters === true){
                password += upperLettersList[Math.floor(Math.random() * upperLettersList.length)]
            }
            else if(includeUpperLetters === false){}

            if(includeLowerLetters === true){
                password += lowerLettersList[Math.floor(Math.random() * lowerLettersList.length)]
            }
            else if(includeLowerLetters === false){}

            password = password.substring(0, charactersNumber)
            passwordGeneration.innerHTML = `\n${password}`
            passwordGenerationMsg.innerHTML = `Senha Gerada!`
        }
    }
    // console.log(includeSymbols)
    // console.log(includeNumbers)
    // console.log(includeLowerLetters)
    // console.log(includeUpperLetters)
    console.log(`Include Symbols = ${includeSymbols}`)
    console.log(`Include Numbers = ${includeNumbers}`)
    console.log(`Include Upper Letters = ${includeUpperLetters}`)
    console.log(`Include Lower Letters = ${includeLowerLetters}`)
    console.log(`Password Generated:\n ${password}`)
}