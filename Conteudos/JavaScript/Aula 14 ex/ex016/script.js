//criação da função
function counter(){
    //Declaração das variaveis:
    var start = document.querySelector('#start')
    var end = document.getElementById('end')
    var count = document.querySelector('#count')
    var res = document.querySelector('#res')
    //condições
    if(start.value.lenght == 0 || end.value.lenght == 0 || count.value.lenght == 0){ //Verifica se os espaços não estão vazio
        window.alert("Revise os dados e tente novamente!!")
        res.innerHTML = 'Imposivel contar'
    }else{
        res.innerHTML = 'Contando:'
        start = Number(start.value)
        end = Number(end.value)
        count = Number(count.value)
        if(count <= 0){
            window.alert("Passo invalido! Considerando PASSO 1")
            count = 1
        }
        if(start < end){
            console.log("Até Aqui ok")
            for(let c = start; c <= end; c += count){
                res.innerHTML += ` ${c} \u{1F449}`
                console.log(`${c}`)
            }
        }else{
            for(let c = start; c >= end; c -= count){
                res.innerHTML += ` ${c} \u{1F449}`
                console.log(`${c}`)
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}
