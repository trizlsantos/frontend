
const botao = document.querySelector(".botao")
const mensagem = document.querySelector(".mensagem")

botao.addEventListener("click", (event) => {

    event.preventDefault();

    const velocidade = Number(document.querySelector(".velocidade").value)

    if(velocidade === ""){
        mensagem.textContent = "Digite um valor válido"
        document.body.style.backgroundColor = "white"
        return
    }
    

    const velocidadeValue = Number(velocidade)


    if(velocidade > 60){
        mensagem.textContent = "Você ultrapassou a velocidade permitida!"
        document.body.style.backgroundColor = "red"
    }else{
        mensagem.textContent = "Você está dentro do limite de velocidade!"
        document.body.style.backgroundColor = "green"
    }
})

