function compatibilidade(){
var jogo = document.getElementById('jogo-nome')
var console = document.getElementById('console-nome')
var resultado = document.querySelector('div#resultado')

var img = document.createElement('img')
img.setAttribute('id', 'foto')

if (jogo.value == "lol") {
    if (console.value == "mac" || console.value == "windows") {
        resultado.innerHTML = 'O jogo é compatível com o seu console!'
        img.setAttribute('src', 'assets/cute-happy.png')
    } else {
        resultado.innerHTML = 'O jogo não é compatível com o seu console!'
        img.setAttribute('src', 'assets/cute-sad.png')
    }
} else if (jogo.value == "zelda") {
    if (console.value == "nintendo") {
        resultado.innerHTML = 'O jogo é compatível com o seu console!'
        img.setAttribute('src', 'assets/cute-happy.png')
    } else {
        resultado.innerHTML = 'O jogo não é compatível com o seu console!'
        img.setAttribute('src', 'assets/cute-sad.png')
    }
} else if (jogo.value == "gta") {
    if (console.value == "windows" || console.value == "ps" || console.value == "xbox") {
        resultado.innerHTML = 'O jogo é compatível com o seu console!'
        img.setAttribute('src', 'assets/cute-happy.png')
    } else {
        resultado.innerHTML = 'O jogo não é compatível com o seu console!'
        img.setAttribute('src', 'assets/cute-sad.png')
    }      
} else if (jogo.value == "tw") {
    if (console.value == "ps" || console.value == "xbox" || console.value == "nintendo" || console.value == "windows") {
        resultado.innerHTML = 'O jogo é compatível com o seu console!'
        img.setAttribute('src', 'assets/cute-happy.png')
    } else {
        resultado.innerHTML = 'O jogo não é compatível com o seu console!'
        img.setAttribute('src', 'assets/cute-sad.png')
    }
} else if (jogo.value == "acnh") {
    if (console.value == "nintendo") {
        resultado.innerHTML = 'O jogo é compatível com o seu console!'
        img.setAttribute('src', 'assets/cute-happy.png')
    } else {
        resultado.innerHTML = 'O jogo não é compatível com o seu console!'
        img.setAttribute('src', 'assets/cute-sad.png')
    }
} else if (jogo.value == "hellokitty") {
    if (console.value == "mobile") {
        resultado.innerHTML = 'O jogo é compatível com o seu aparelho!'
        img.setAttribute('src', 'assets/cute-happy.png')
    } else {
        resultado.innerHTML = 'O jogo não é compatível com o seu console!'
        img.setAttribute('src', 'assets/cute-sad.png')
    }
} else if (jogo.value == "amgus") {
    if (console.value == "mobile" || console.value == "windows" || console.value == "mac" || console.value == "nintendo" || console.value == "xbox" || console.value == "ps") {
        resultado.innerHTML = 'O jogo é compatível com o seu console!'
        img.setAttribute('src', 'assets/cute-happy.png')
    } else {
        resultado.innerHTML = 'O jogo não é compatível com o seu console!'
        img.setAttribute('src', 'assets/cute-sad.png')
    }
}
    resultado.appendChild(img)
}