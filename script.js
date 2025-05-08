let btn = document.querySelector("#btn")
let user = document.querySelector("#user")
let welcome = document.querySelector("#welcome")
let exit = document.querySelector("#exit")
/* 1- salvar no localStorage
localStorage.setItem("name" , "vitor")*/

/* 2 - pegar item */
/* localStorage.getItem("name") */

/* 3 - excluir itens no localStorage 
localStorage.removeItem("name")*/

const sair = () => {
   localStorage.removeItem("name")
    welcome.innerHTML = `faça seu login`
}
 exit.addEventListener("click", sair)


function pegarNome(){
    localStorage.setItem("name", user.value)
    let nome = localStorage.getItem("name")

    welcome.innerHTML = `Bem-Vindo ${nome}!`
    user.value = ""
}

function local (){
    let nome = localStorage.getItem("name")
    welcome.innerHTML = `Bem-Vindo ${nome}!`

    if (nome == null){
        welcome.innerHTML = "faça seu login"
    }else{
         welcome.innerHTML = `Bem-Vindo ${nome}!`
    }
}
local()
btn.addEventListener("click", pegarNome)