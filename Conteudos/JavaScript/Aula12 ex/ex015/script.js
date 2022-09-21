function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var hmtano = window.document.querySelector("input#ano")
    var res = window.document.getElementById("res")

    if (hmtano.value.length == 0 || hmtano.value > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }else{
        var htmsex = window.document.getElementsByName('radsexo')
        var idade = ano - Number(hmtano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(htmsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebe m.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem m.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto m.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idoso m.png')
            }
        }else{
            genero = "Mulher"
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebe f.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem f.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto f.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idoso f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}