function carregar() {
var msg = window.document.getElementById ('mensagem')
var img = window.document.getElementById ('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 18
msg.innerHTML = `Agora são ${hora} horas`

if (hora >= 0 && hora < 12) { //Bom dia
    img.src = 'manha.png'
    document.body.style.background = '#a9dbfc'
}

else if (hora >= 12 && hora <18) { //Boa tarde
    img.src = 'Tarde.png'
    document.body.style.background = '#664057'
}

else { //Boa noite
    img.src = 'noite.png'
    document.body.style.background = '#120f10'
}

}