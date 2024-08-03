function compatibilidade() {
    var jogo = document.getElementById('jogo-nome').value;
    var console = document.getElementById('console-nome').value;
    var resultado = document.querySelector('div#resultado');
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

let compatibilidade = false;

    switch (jogo) {
            case "lol":
                compatibilidade = ["mac", "windows"].includes(console);
                break;
            case "zelda":
                compatibilidade = ["nintendo"].includes(console);
                break;
            case "tw":
                compatibilidade = ["ps", "xbox", "nintendo", "pc"].includes(console);
                break;
            case "acnh":
                compatibilidade = ["nintendo"].includes(console);
                break;
            case "gta":
                compatibilidade = ["windows", "ps", "xbox"].includes(console);
                break;
            case "amgus":
                compatibilidade = ["mobile", "mac", "windows", "nintendo", "ps", "xbox"].includes(console);
                break;
            case "hello kitty":
                compatibilidade = ["mobile"].includes(console);
                break;
            default:
                compatibilidade = false;
            }

            if (compatibilidade) {
                resultado.innerHTML = 'O jogo é compatível com o seu console!';
                img.setAttribute('src', 'assets/cute-happy.png');
            } else {
                resultado.innerHTML = 'O jogo não é compatível com o seu console!';
                img.setAttribute('src', 'assets/cute-sad.png');
            
    }
    resultado.appendChild(img);
}
