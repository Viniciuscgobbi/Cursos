function carregar(){
    var msg = window.document.querySelector("#msg")
    var img = window.document.querySelector("#imagem")
    var date = new Date()
    var hora = date.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        img.src = 'fotomanha.png'
        document.body.style.background = '#9d683c'
        msg.innerHTML += '<p>Bom dia!!</p>'
    }else if (hora >= 12 && hora <= 18){
        img.src = 'fototarde.png'
        document.body.style.background = '#ff9917'
        msg.innerHTML += '<p>Boa tarde!!</p>'
    }else{
        img.src = 'fotonoite.png'
        document.body.style.background = '#101012'
        msg.innerHTML += '<p>Boa noite!!</p>'
    }
}