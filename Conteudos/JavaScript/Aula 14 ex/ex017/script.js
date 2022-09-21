function generator(){
    let number = document.querySelector('#number')
    let res = document.querySelector('#res')
    let tab  = document.querySelector('#seltab')

    if(number.value.length == 0){
        window.alert("Digite um valor válido")
    }else{
        number = Number(number.value)
        res.innerHTML = ''
        for(let c = 0; c <= 10; c++){
            let opt = document.createElement('option')
            opt.text = `${number} x ${c} = ${c * number}`
            tab.appendChild(opt)
        }
    }
}