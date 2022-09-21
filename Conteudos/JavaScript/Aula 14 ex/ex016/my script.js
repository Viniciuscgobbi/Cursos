//criação da função
function counter(){
    //Declaração das variaveis:
    var start = document.querySelector('#start')
    var end = document.getElementById('end')
    var count = document.querySelector('#count')
    var res = document.querySelector('#res')
    count = Number(count.value)   
    res.innerHTML = ''
    //condições
    if(!start.value || !end.value){
        res.innerHTML = "Verifique os valores e tente novamente!!"
    }else if(count == 0){
        start = Number(start.value)
        end = Number(end.value)
        window.alert("Passo invalido usando passo 1")
        count = 1

    }else if(count < 0){
        start = Number(start.value)
        end = Number(end.value)
        for(end; end <= start; start += count){
            res.innerHTML += ` ${start} ➡️`
            console.log(start)
        }
        res.innerHTML += '🚩'
    }else{
        start = Number(start.value)
        end = Number(end.value)  
        for(end; end >= start; start += count){
            res.innerHTML += ` ${start} ➡️`
        }
        res.innerHTML += '🚩'
    }
}
