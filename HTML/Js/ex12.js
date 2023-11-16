function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

   // var hora = 8
    // - Coloque horas manha tarde e noite para testar a aparição correta de imagens
    
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >=0 && hora < 12){
        //Bom dia!
        img.src = '../img/manha.png'
        window.document.body.style.background = '#e2cd9f'
    }
        else if (hora >= 12 && hora <= 18){
        //Boa tarde!
        img.src = '../img/tarde.png'
        window.document.body.style.background = '#b9846f'
    }
    else {
        //Boa noite!
        img.src = '../img/noite.png'
        window.document.body.style.background = '#515154'
    }
}