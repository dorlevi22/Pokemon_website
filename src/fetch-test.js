const pokemons_url = []
var i = 1;

while(i<=150){
    pokemons_url.push("https://pokeapi.co/api/v2/pokemon/" + i + "/")
    i++;
}

Promise.all(pokemons_url.map(url => fetch(url).then(pokemon => pokemon.json())))
.then(arr =>{ console.log(arr[0])
        })

