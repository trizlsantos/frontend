
function Cadastrar() {


    const nomeProprio = document.getElementById("nome-proprio");
    const apelido = document.getElementById ("apelido");
    const nascimento = document.querySelector("#nascimento");
    const genero = document.querySelector("#genero")
    const email = document.getElementById("Senha")
    const senha = document.getElementById("Senha")

    const nomeProprioValue = nomeProprio.value;
    const apelidoValue = apelido.value;
    const nascimentoValue = nascimento.value;
    const generoValue = genero.value;
    const emailValue = email.value;
    const senhaValue = senha.value;

    if(nomeProprioValue === ""){
        nomeProprio.style.borderColor = "red"
        return
    }


}