const lista = document.getElementById("lista");
const listagem = document.getElementById("listagem");
const card = document.getElementById("cardPokemon");

async function getPokemon(){
    let requisicao = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`);
    let requisicaoJson = await requisicao.json();
    let pokemon = requisicaoJson.results;

    pokemon.forEach( async function(p) {
        let nome = p.name;
        let requisicaoImg = await fetch(p.url); 
        let requisicaoImgJson = await requisicaoImg.json();
        let foto = requisicaoImgJson.sprites.other.home.front_default;
        lista.innerHTML += `
        <ion-item class="pokemon" onclick=getInfos('${nome}')  style="color: black; margin: 0.5rem;">
            <ion-thumbnail slot="start" class="ion-text-center">
                <img class="imgPokemons" src="${foto}" alt="Silhouette of mountains"/>
            </ion-thumbnail>
        <ion-label>${nome}</ion-label>
        </ion-item>`;
    });
}

function voltar(){
    card.style.display = "none";
    listagem.style.display = "block";
}

async function getInfos(id){
    listagem.style.display = "none";
    card.style.display = "block";
    let requisicaoUrl = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`); 
    let requisicaoUrlJson = await requisicaoUrl.json();
    var nomeI = requisicaoUrlJson.name;
    var id  = requisicaoUrlJson.id;
    let absoluts = requisicaoUrlJson.abilities;
    let types = requisicaoUrlJson.types;
    let fotoPrincipal = requisicaoUrlJson.sprites.other.dream_world.front_default;

    var habili = [];
    var type = [];

    types.forEach( async function(value,index) {
        type.push(types[index].type.name);
    });

    if(type.length == 2){
        var tipo = `${type[0]} ${type[1]}`;
    }else if(type.length == 1){
        var tipo = `${type[0]}`;
    }


    absoluts.forEach( async function(value, index) {
        habili.push(absoluts[index].ability.name);
    });

    if(habili.length == 3){
        var hab = `${habili[0]} ${habili[1]} ${habili[2]}`;
    }else if(habili.length == 2){
        var hab = `${habili[0]} ${habili[1]}`;
    }else{
        var hab = `${habili[0]}`;
    }

    let bgcolor = '';

    if(tipo == "water" || tipo == "water poison" || tipo == "water psychic" || tipo == "water ice" || tipo == "water flying" || tipo == "water ghost"){
        bgcolor = '#add8e6';
    }

    else if(tipo == "fire" || tipo == "fire poison" || tipo == "fire psychic" || tipo == "fire ice" || tipo == "fire flying" || tipo == "fire ghost"){
        bgcolor = ' #ff6961';
    }

    else if(tipo == "psychic" || tipo == "psychic poison" || tipo == "psychic ice" || tipo == "psychic flying" || tipo == "psychic ghost"){
        bgcolor = '#ed30cf';
    }

    else if(tipo == "rock" || tipo == "rock poison" || tipo == "rock water" || tipo == "rock psychic" || tipo == "rock ice" || tipo == "rock flying" || tipo == "rock ghost" || tipo == "rock fairy"){
        bgcolor = '#b8860b';
    }

    else if(tipo == "fighting" || tipo == "fighting poison" || tipo == "fighting psychic" || tipo == "fighting ice" || tipo == "fighting flying" || tipo == "fighting ghost"){
        bgcolor = '#f7a156';
    }

    else if(tipo == "bug" || tipo == "bug rock" || tipo == "bug poison" ||tipo == "bug grass" || tipo == "bug psychic" || tipo == "bug ice" || tipo == "bug flying" || tipo == "bug ghost"){
        bgcolor = '#578018';
    }

    else if(tipo == "grass" || tipo == "grass poison" || tipo == "grass psychic" || tipo == "grass ice" || tipo == "grass flying" || tipo == "grass ghost"){
        bgcolor = '#98ff98';
    }

    else if(tipo == "poison" || tipo == "poison grass" || tipo == "poison psychic" || tipo == "poison ice" || tipo == "poison flying" || tipo == "poison ghost" || tipo == "poison ground"){
        bgcolor = '#c8a2c8';
    }

    else if(tipo == "normal" || tipo == "normal grass" || tipo == "normal psychic" || tipo == "normal ice" || tipo == "normal flying" || tipo == "normal ghost" || tipo == "normal ground" || tipo == "normal fairy"){
        bgcolor = '#deb887';
    }

    else if(tipo == "ground" || tipo == "ground grass" || tipo == "ground psychic" || tipo == "ground ice" || tipo == "ground flying" || tipo == "ground ghost" || tipo == "ground normal" || tipo == "ground fairy" || tipo == "ground rock"){
        bgcolor = '#e8d581';
    }

    else if(tipo == "electric" || tipo == "electric grass" || tipo == "electric poison" || tipo == "electric steel" || tipo == "electric psychic" || tipo == "electric ice" || tipo == "electric flying" || tipo == "electric ghost" || tipo == "electric fire" || tipo == "electric normal" || tipo == "electric fairy" || tipo == "electric rock"){
        bgcolor = '#fdfd96';
    }

    else if(tipo == "fairy" || tipo == "fairy grass" || tipo == "fairy poison" || tipo == "fairy steel" || tipo == "fairy psychic" || tipo == "fairy ice" || tipo == "fairy flying" || tipo == "fairy ghost" || tipo == "fairy fire" || tipo == "fairy normal" || tipo == "fairy rock"){
        bgcolor = '#f4d9d0';
    }

    else if(tipo == "ice" || tipo == "ice grass" ||  tipo == "ice poison" || tipo == "ice steel" || tipo == "ice psychic" || tipo == "ice flying" || tipo == "ice ghost" || tipo == "ice fire" || tipo == "ice normal" || tipo == "ice rock"){
        bgcolor = '#4169e1';
    }

    else if(tipo == "dragon" || tipo == "dragon grass" || tipo == "dragon poison" || tipo == "dragon steel" || tipo == "dragon psychic" || tipo == "dragon flying" || tipo == "dragon ghost" || tipo == "dragon fire" || tipo == "dragon normal" || tipo == "dragon rock" || tipo == "dragon ground"){
        bgcolor = '#FA8072';
    }

    else if(tipo == "ghost" || tipo == "ghost grass" || tipo == "ghost poison" || tipo == "ghost steel" || tipo == "ghost psychic" || tipo == "ghost flying" || tipo == "ghost fire" || tipo == "ghost normal" || tipo == "ghost rock"){
        bgcolor = '#5e4d85';
    }

    else if(tipo == "steel" || tipo == "steel grass" || tipo == "steel poison" || tipo == "steel psychic" || tipo == "steel flying" || tipo == "steel fire" || tipo == "steel normal" || tipo == "steel rock"){
        bgcolor = '#lightgray';
    }

    else if(tipo == "dark" || tipo == "dark grass" ||  tipo == "dark poison" || tipo == "dark psychic" || tipo == "dark flying" || tipo == "dark fire" || tipo == "dark normal" || tipo == "dark rock"){
        bgcolor = '#gray';
    }

    else if(tipo == "flying" || tipo == "flying grass" ||  tipo == "flying poison" || tipo == "flying psychic" || tipo == "flying dark" || tipo == "dark fire" || tipo == "flying normal" || tipo == "flying rock" || tipo == "flying dragon" ){
        bgcolor = 'gray';
    }

    else{
        bgcolor = '#deb887';
    }

    card.innerHTML = `<ion-card id="card">
                            <div id="pokeImg">
                                <img alt="Imagem indisponivel no momento" src="${fotoPrincipal}"/>
                            </div>
    
                    <div id="pokeInfos">
                        <ion-card-header style="background-color:${bgcolor}">
                            <ion-label color="dark">${tipo} </ion-label>
                        </ion-card-header>

                        <ion-card-content id="infos">
                            <ion-card-title>${nomeI}</ion-card-title> <br>
                            <ion-card-subtitle color="dark">ID: ${id}</ion-card-subtitle>
                            <ion-label color="dark">Habilidade(s): ${hab}</ion-label>
                        </ion-card-content>
                    </div>

                    <ion-button id="btn" onclick="voltar()">
                        Voltar
                    </ion-button>
        </ion-card>`

    let cor = document.getElementById("pokeImg");

    // parte das cores
   
    if(tipo == "water" || tipo == "water poison" || tipo == "water psychic" || tipo == "water ice" || tipo == "water flying" || tipo == "water ghost"){
        cor.style.backgroundColor = '#add8e6';
    }

    else if(tipo == "fire" || tipo == "fire poison" || tipo == "fire psychic" || tipo == "fire ice" || tipo == "fire flying" || tipo == "fire ghost"){
        cor.style.backgroundColor = '#ff6961';
    }

    else if(tipo == "psychic" || tipo == "psychic poison" || tipo == "psychic ice" || tipo == "psychic flying" || tipo == "psychic ghost"){
        cor.style.backgroundColor = '#ed30cf';
    }

    else if(tipo == "rock" || tipo == "rock poison" || tipo == "rock water" || tipo == "rock psychic" || tipo == "rock ice" || tipo == "rock flying" || tipo == "rock ghost" || tipo == "rock fairy"){
        cor.style.backgroundColor = '#b8860b';
    }

    else if(tipo == "fighting" || tipo == "fighting poison" || tipo == "fighting psychic" || tipo == "fighting ice" || tipo == "fighting flying" || tipo == "fighting ghost"){
        cor.style.backgroundColor = '#f7a156';
    }

    else if(tipo == "bug" || tipo == "bug rock" || tipo == "bug poison" ||tipo == "bug grass" || tipo == "bug psychic" || tipo == "bug ice" || tipo == "bug flying" || tipo == "bug ghost"){
        cor.style.backgroundColor = '#578018';
    }

    else if(tipo == "grass" || tipo == "grass poison" || tipo == "grass psychic" || tipo == "grass ice" || tipo == "grass flying" || tipo == "grass ghost"){
        cor.style.backgroundColor = '#98ff98';
    }

    else if(tipo == "poison" || tipo == "poison grass" || tipo == "poison psychic" || tipo == "poison ice" || tipo == "poison flying" || tipo == "poison ghost" || tipo == "poison ground"){
        cor.style.backgroundColor = '#c8a2c8';
    }

    else if(tipo == "normal" || tipo == "normal grass" || tipo == "normal psychic" || tipo == "normal ice" || tipo == "normal flying" || tipo == "normal ghost" || tipo == "normal ground" || tipo == "normal fairy"){
        cor.style.backgroundColor = '#deb887';
    }

    else if(tipo == "ground" || tipo == "ground grass" || tipo == "ground psychic" || tipo == "ground ice" || tipo == "ground flying" || tipo == "ground ghost" || tipo == "ground normal" || tipo == "ground fairy" || tipo == "ground rock"){
        cor.style.backgroundColor = '#e8d581';    
    }

    else if(tipo == "electric" || tipo == "electric grass" || tipo == "electric poison" || tipo == "electric steel" || tipo == "electric psychic" || tipo == "electric ice" || tipo == "electric flying" || tipo == "electric ghost" || tipo == "electric fire" || tipo == "electric normal" || tipo == "electric fairy" || tipo == "electric rock"){
        cor.style.backgroundColor = '#fdfd96';
    }

    else if(tipo == "fairy" || tipo == "fairy grass" || tipo == "fairy poison" || tipo == "fairy steel" || tipo == "fairy psychic" || tipo == "fairy ice" || tipo == "fairy flying" || tipo == "fairy ghost" || tipo == "fairy fire" || tipo == "fairy normal" || tipo == "fairy rock"){
        cor.style.backgroundColor = '#f4d9d0';
    }

    else if(tipo == "ice" || tipo == "ice grass" ||  tipo == "ice poison" || tipo == "ice steel" || tipo == "ice psychic" || tipo == "ice flying" || tipo == "ice ghost" || tipo == "ice fire" || tipo == "ice normal" || tipo == "ice rock"){
        cor.style.backgroundColor = '#4169e1';
    }

    else if(tipo == "dragon" || tipo == "dragon grass" || tipo == "dragon poison" || tipo == "dragon steel" || tipo == "dragon psychic" || tipo == "dragon flying" || tipo == "dragon ghost" || tipo == "dragon fire" || tipo == "dragon normal" || tipo == "dragon rock" || tipo == "dragon ground"){
        cor.style.backgroundColor = '#FA8072';
    }

    else if(tipo == "ghost" || tipo == "ghost grass" || tipo == "ghost poison" || tipo == "ghost steel" || tipo == "ghost psychic" || tipo == "ghost flying" || tipo == "ghost fire" || tipo == "ghost normal" || tipo == "ghost rock"){
        cor.style.backgroundColor = '#5e4d85';
    }

    else if(tipo == "steel" || tipo == "steel grass" || tipo == "steel poison" || tipo == "steel psychic" || tipo == "steel flying" || tipo == "steel fire" || tipo == "steel normal" || tipo == "steel rock"){
        cor.style.backgroundColor = 'lightgray';
    }

    else if(tipo == "dark" || tipo == "dark grass" ||  tipo == "dark poison" || tipo == "dark psychic" || tipo == "dark flying" || tipo == "dark fire" || tipo == "dark normal" || tipo == "dark rock"){
        cor.style.backgroundColor = 'gray';
    }

    else if(tipo == "flying" || tipo == "flying grass" ||  tipo == "flying poison" || tipo == "flying psychic" || tipo == "flying dark" || tipo == "dark fire" || tipo == "flying normal" || tipo == "flying rock" || tipo == "flying dragon" ){
        cor.style.backgroundColor = 'gray';
    }

    else{
        cor.style.backgroundColor = '#deb887';
    }

}



getPokemon();
