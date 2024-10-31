const nome = document.querySelector("#nome")

function verificaDados(){
    const nome = document.querySelector("#nome");
    const sobrenome = document.querySelector("#sobrenome").value;
    const senha = document.querySelector("#senha").value;
    const resultado = document.querySelector(".resultado")

    if(nome === ""){
        window.alert("O campo não pode está vazio!")
    }

    resultado.innerHTML = `<p>Nome: ${nome} </p>
                           <p>Sobrenome: ${sobrenome} </p>
                           <p>Senha: ${senha} </p`


}