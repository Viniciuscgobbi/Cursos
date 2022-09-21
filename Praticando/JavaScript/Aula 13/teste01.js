var counter = 0
while(counter <= 100){
    if(counter < 25){
        console.log(`Menos de 1/4 de 100 \n numero atual: ${counter}`)
    }else if(counter < 50){
        console.log(`Menos da metade de 100 \n numero atual: ${counter}`)
    }else if (counter < 75){
        console.log(`Menos de 3/4 de 100 \n numero atual: ${counter}`)
    }else if(counter < 100){
        console.log(`Falta pouco para 100 \n numero atual ${counter}`)
    }else{
        console.log(`Chegamos em 100 finalmente!!`)
    }
    counter++
}