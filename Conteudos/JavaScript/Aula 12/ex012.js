var date  = new Date()
var hora = date.getHours()
var minutes = date.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${minutes} minutos`)
if (hora < 4) {
    console.log("Boa madrugada!!")
}else if (hora < 12){
    console.log("Bom dia!!")
}else if (hora <= 18){
    console.log("Boa tarde!!")
}else{
    console.log("Boa noite")
}