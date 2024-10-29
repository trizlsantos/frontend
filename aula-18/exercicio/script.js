function calculaMedia(valor1, valor2){
    const media = (valor1 + valor2) / 2
    return alert(media)
}

function verificarMaiorIdade(idade){

    if(idade >= 18){
        return alert("Maior de idade")
    }else{ 
        return alert("Menor de idade")
    }
}

function alteraBackground(){

    const body = document.querySelector("body")
    body.style.backgroundColor = "#b2c2e5"
}