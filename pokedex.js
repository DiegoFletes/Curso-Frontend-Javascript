const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            
            let poketipo = document.getElementById("poketipo");
            poketipo.innerHTML = data.types[0].type.name;

            let pokenombre = document.getElementById("pokenombre");
            pokenombre.innerHTML = data.name;
            
            let pokehabilidad1 = document.getElementById("habilidad1");
            pokehabilidad1.innerHTML = data.abilities[0].ability.name;

            let pokehabilidad2 = document.getElementById("habilidad2");
            pokehabilidad2.innerHTML = data.abilities[1].ability.name;

            /*stats y nombre*/
            let pokestatsname0 = document.getElementById("statsname0");
            pokestatsname0.innerHTML = data.stats[0].base_stat;
            let pokestats0 = document.getElementById("stats0");
            pokestats0.innerHTML = data.stats[0].stat.name;

            let pokestatsname1 = document.getElementById("statsname1");
            pokestatsname1.innerHTML = data.stats[1].base_stat;
            let pokestats1 = document.getElementById("stats1");
            pokestats1.innerHTML = data.stats[1].stat.name;

            let pokestatsname2 = document.getElementById("statsname2");
            pokestatsname2.innerHTML = data.stats[2].base_stat;
            let pokestats2 = document.getElementById("stats2");
            pokestats2.innerHTML = data.stats[2].stat.name;
            
            let pokestatsname3 = document.getElementById("statsname3");
            pokestatsname3.innerHTML = data.stats[3].base_stat;
            let pokestats3 = document.getElementById("stats3");
            pokestats3.innerHTML = data.stats[3].stat.name;

            let pokestatsname4 = document.getElementById("statsname4");
            pokestatsname4.innerHTML = data.stats[4].base_stat;
            let pokestats4 = document.getElementById("stats4");
            pokestats4.innerHTML = data.stats[4].stat.name;

            let pokestatsname5 = document.getElementById("statsname5");
            pokestatsname5.innerHTML = data.stats[5].base_stat;
            let pokestats5 = document.getElementById("stats5");
            pokestats5.innerHTML = data.stats[5].stat.name;



        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
