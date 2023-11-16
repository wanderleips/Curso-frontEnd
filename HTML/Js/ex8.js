let resposta = window.document.getElementById("resp")
let tempo = new Date()
let hora = tempo.getHours

if (hora < 12){
    resposta.innerHTML = "Bom dia"
}
else if (hora < 18){
    resposta.innerHTML = "Boa tarde"

}
else{
    resposta.innerHTML = "Boa noite"
}