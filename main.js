(function () {
    console.log(pokemons);
    console.log(pokemons.length);
    var pokemon = [];

    var pokemon = pokemons;   
    var row = document.querySelector('.row');
    const searchBar = document.getElementById('searchBar');

    

    searchBar.addEventListener('keyup', (e) => {
        row.innerHTML=''
        const searchString = e.target.value.toLowerCase();
        console.log(searchString);
        const filteredPokemons = pokemon.filter((poke) => {
            return (
                poke.name.english.toLowerCase().includes(searchString) ||
                poke.id.toString().includes(searchString)
            );
        });
        console.log(filteredPokemons);
        displayPokemons(filteredPokemons);
    });

    function displayPokemons(displayedPokemons){
        for (var i = 0; i < displayedPokemons.length; i++) {
            //Creación de div contenedor de tarjeta
            var col = document.createElement('div');
            col.setAttribute('class', "col-md-4 mt-5")
            row.appendChild(col);
            //Creación de tarjeta con clases de bootstrap
            var card = document.createElement('div');
            card.setAttribute('class', "card pxl-border no-border")
            col.appendChild(card);
            //Creación de imagen para tarjeta de bootstrap
            var bCardImg = document.createElement('img');
            bCardImg.setAttribute('class', "card-img-top");
            bCardImg.setAttribute('onError', "this.onerror=null;this.src='./Assets/who.jpg';")
            bCardImg.setAttribute('src', "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + [displayedPokemons[i].id] + ".png")
            card.appendChild(bCardImg)
            //Creación de Cuerpo de tarjeta
            var cuerpo = document.createElement('div');
            cuerpo.setAttribute('class', "card-body");
            card.appendChild(cuerpo);
            //Creación de Párrafo para número
            var numero = document.createElement('p');
            numero.setAttribute('class', "card-text");
            numero.innerHTML = displayedPokemons[i].id;
            cuerpo.appendChild(numero);
            //Creación de Párrafo para nombre
            var nombre = document.createElement('p');
            nombre.setAttribute('class', "card-text");
            nombre.innerHTML = displayedPokemons[i].name.english;
            cuerpo.appendChild(nombre);
            //Creación de Párrafo para tipo
            var tipo = document.createElement('p');
            tipo.setAttribute('class', "card-text");
            tipo.setAttribute('class', "type-font");
            tipo.innerHTML = "Type: <br/>" + displayedPokemons[i].type;
            cuerpo.appendChild(tipo);
            //Creación de Párrafo para HP
            var tipo = document.createElement('p');
            tipo.setAttribute('class', "card-text");
            tipo.innerHTML = "HP: " + displayedPokemons[i].base.HP;
            cuerpo.appendChild(tipo);
        }
    }
    
    displayPokemons(pokemon);
})()



