var res = document.querySelector("div#res")
var number = document.querySelector("div#input")

var input = document.createElement('input')
input.setAttribute('type', 'number')
input.setAttribute('name', 'entrada')
input.setAttribute('id', 'entrada')
input.setAttribute('min', '1')
input.setAttribute('max', '10')

number.appendChild(input)

var button = document.createElement('input')
button.setAttribute('type', 'button')
button.setAttribute('value', 'Verificar')
button.setAttribute('id', 'button')

number.appendChild(button)

button.addEventListener('click', verifica)



function verifica(){
    res.innerHTML = ''
    var counter = Number(input.value)
    while(counter <= 10){
        res.innerHTML += `O numero atual é ${counter} <br>`
        counter++
    }
}