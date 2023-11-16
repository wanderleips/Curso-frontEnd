let resp = window.document.getElementById("resposta") 
let img = window.document.getElementById("imagem")
let opc = window.prompt("Escolha uma opção de 1 a 7 para ver o prato do dia")

switch (opc){
    case "1":
        img.src = "../img/macarronada.png"
        resp.innerHTML = "<br> A opção escolhida é Domingo, o prato do dia é Macarronada"

    break
    case "2":
        img.src = "../img/virado.jpg"
        resp.innerHTML = "A opção escolhida é Segunda-feira, o prato do dia é Virado Paulista"
    break
    case "3":
        img.src = "../img/bisteca.png"
        resp.innerHTML = "A opção escolhida é Terça-feira, o prato do dia é Bisteca"
    break
    case "4":
        resp.innerHTML = "A opção escolhida é Quarta-feira, o prato do dia é Feijoada"
    break
    case "5":
        resp.innerHTML = "A opção escolhida é Quinta-feira, o prato do dia é Filé de Peixe"
    break
    case "6":
        resp.innerHTML = "A opção escolhida é Sexta-feira, o prato do dia é Bife Acebolado"
    break
    case "7":
        resp.innerHTML = "A opção escolhida é Sabado, o prato do dia é Feijoada"
    break
    default:
        resposta.innerHTML = "Opção invalida!"    
}