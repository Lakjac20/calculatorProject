addButton.addEventListener('click', function (event){
   const x = Number (xInput.value)
   const y = Number (yInput.value)
   outputElement.innerHTML = calculator(x,y,add)
})
multiplyButton.addEventListener('click', function(event){
    const x = Number (xInput.value)
    const y = Number (yInput.value)
    outputElement.innerHTML = calculator(x,y,multiply)

})
divideButton.addEventListener('click', function(event){
    const x = Number (xInput.value)
    const y = Number (yInput.value)
    outputElement.innerHTML = calculator(x,y,divide)
})