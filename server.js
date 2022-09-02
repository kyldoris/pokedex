//////////////////////////////////// REQUIRE DEPENDENCIES ////////////////////////////////////
const express = require('express');
const pokemons = require('./models/pokemon.js');
const methodOverride = require("method-override");


//////////////////////////////////// INITIALIZE EXPRESS APP ////////////////////////////////////
const app = express();
const port = 3000;

// MIDDLEWARE
// Processes that run in between requests and responses
// app.use((req, res, next) => {
//   console.log("I run for all routes")
//   next()
// })

// This adds data to req.body so we can access it in the CREATE action 

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"))

//////////////////////////////////// DEFINE OUR ROUTES  ////////////////////////////////////
// INDUCES (FOLLOW THE FORMAT) //

//////////////////////////////////// INDEX ////////////////////////////////////
app.get("/pokemons/", (req, res)=>{
    res.render("pokemon_index.ejs", {
      allPokemons: pokemons
    })
});


//////////////////////////////////// NEW ////////////////////////////////////
app.get("/pokemons/new", (req, res)=>{
  res.render("pokemon_new.ejs")
});

//////////////////////////////////// DELETE ////////////////////////////////////
// app.delete("/fruits/:indexOfFruitsArray", (req, res) =>{
//   fruits.splice(req.params.indexOfFruitsArray, 1)
//   res.redirect("/fruits")
// });

//////////////////////////////////// UPDATE ////////////////////////////////////
// JUST THIS WILL ONLY ADD THE EDIT ITEM TO THE LIST //
app.get("/pokemons/:indexOfPokemonArray/edit", (req, res) =>{
    res.render(
      "pokemon_edit.ejs",
      {
        pokemon: pokemons[req.params.indexOfPokemonArray],
        index: req.params.indexOfPokemonArray
      }
    )
  });
  
  app.put("/pokemons/:indexOfPokemonArray", (req, res) => {
    //:indexOfFruitsArray is the index of our fruits array that we want to change
    pokemons[req.params.indexOfPokemonArray] = req.body //in our fruits array, find the index that is specified in the url (:indexOfFruitsArray).  Set that element to the value of req.body (the input data)
    res.redirect("/pokemons/") //redirect to the index page
  })


//////////////////////////////////// CREATE ////////////////////////////////////
// app.post("/fruits", (req, res)=>{
//   console.log(req.body);
//   if (req.body.readyToEat === "on") {
//     //if checked, req.body.readyToEat is set to 'on'
//     req.body.readyToEat = true //do some data correction
//   } else {
//     //if not checked, req.body.readyToEat is undefined
//     req.body.readyToEat = false //do some data correction
//   }
//   fruits.push(req.body)
//   res.redirect("/fruits")
// });

//////////////////////////////////// TESTING ROUTE ////////////////////////////////////
// app.post("/pokemons", (req, res) => {
//   console.log("Create route accessed!")
//   console.log("Req.body is: ", req.body)
//   res.send(req.body)
// })

// E

//////////////////////////////////// SHOW ////////////////////////////////////
app.get("/pokemons/:indexOfPokemonArray", (req, res)=>{  
        const pokemon = pokemons[req.params.indexOfPokemonArray]
        
        if (pokemon.type.length === 1) {
            res.send(`<button><a href="/pokemons">Return to Pokedex</a></button>
            <button><a href="/pokemons/:indexOfPokemonArray/edit">Edit Pokemon Information</a></button>
            <div class="pokemonData1"><img src="${pokemon.img}" width="200" height="200">
            <h2>id# ${pokemon.id}</h2>
            <h1>${pokemon.name}</h1>
            <ul>
            <li>${pokemon.type[0]}</li>
            </ul>
            </div>
            <div class="pokemonStates">
            <h2>Stats</h2>
            <ul>
            <li>HP: ${pokemon.stats.hp}</li>
            <li>Attack: ${pokemon.stats.attack}</li>
            <li>Defense: ${pokemon.stats.defense}</li>
            <li>Spattack: ${pokemon.stats.spattack}</li>
            <li>Spdefense: ${pokemon.stats.spdefense}</li>
            <li>Speed: ${pokemon.stats.speed}</li>
            </ul>
            </div>
            <<div class="pokemonDemages">
            <h2>Damages</h2>
            <ul>
            <li>Normal: ${pokemon.damages.normal}</li>
            <li>Fire: ${pokemon.damages.fire}</li>
            <li>Water: ${pokemon.damages.water}</li>
            <li>Electric: ${pokemon.damages.electric}</li>
            <li>Grass: ${pokemon.damages.grass}</li>
            <li>Ice: ${pokemon.damages.ice}</li>
            <li>Fight: ${pokemon.damages.fight}</li>
            <li>Poison: ${pokemon.damages.poison}</li>
            <li>Ground: ${pokemon.damages.ground}</li>
            <li>Flying: ${pokemon.damages.flying}</li>
            <li>psychic: ${pokemon.damages.psychic}</li>
            <li>Bug: ${pokemon.damages.bug}</li>
            <li>Rock: ${pokemon.damages.rock}</li>
            <li>Ghost: ${pokemon.damages.ghost}</li>
            <li>Dragon: ${pokemon.damages.dragon}</li>
            <li>Dark: ${pokemon.damages.dark}</li>
            <li>Steel: ${pokemon.damages.steel}</li>
            </ul>
            </div>
            <button><a href="/pokemons">Return to Pokedex</a></button>`)
        } else if (pokemon.type.length === 2) {
            res.send(`<button><a href="/pokemons">Return to Pokedex</a></button>
            <button><a href="/pokemons/:indexOfPokemonArray/edit">Edit Pokemon Information</a></button>
            <div class="pokemonData1"><img src = "${pokemon.img}" width="200" height="200">
            <h2>id# ${pokemon.id}</h2>
            <h1>${pokemon.name}</h1>
            <ul>
            <li>${pokemon.type[0]}</li>
            <li>${pokemon.type[1]}</li>
            </ul>
            </div>
            <div class="pokemonStates">
            <h2>Stats</h2>
            <ul>
            <li>HP: ${pokemon.stats.hp}</li>
            <li>Attack: ${pokemon.stats.attack}</li>
            <li>Defense: ${pokemon.stats.defense}</li>
            <li>Spattack: ${pokemon.stats.spattack}</li>
            <li>Spdefense: ${pokemon.stats.spdefense}</li>
            <li>Speed: ${pokemon.stats.speed}</li>
            </ul>
            </div>
            <<div class="pokemonDemages">
            <h2>Damages</h2>
            <ul>
            <li>Normal: ${pokemon.damages.normal}</li>
            <li>Fire: ${pokemon.damages.fire}</li>
            <li>Water: ${pokemon.damages.water}</li>
            <li>Electric: ${pokemon.damages.electric}</li>
            <li>Grass: ${pokemon.damages.grass}</li>
            <li>Ice: ${pokemon.damages.ice}</li>
            <li>Fight: ${pokemon.damages.fight}</li>
            <li>Poison: ${pokemon.damages.poison}</li>
            <li>Ground: ${pokemon.damages.ground}</li>
            <li>Flying: ${pokemon.damages.flying}</li>
            <li>psychic: ${pokemon.damages.psychic}</li>
            <li>Bug: ${pokemon.damages.bug}</li>
            <li>Rock: ${pokemon.damages.rock}</li>
            <li>Ghost: ${pokemon.damages.ghost}</li>
            <li>Dragon: ${pokemon.damages.dragon}</li>
            <li>Dark: ${pokemon.damages.dark}</li>
            <li>Steel: ${pokemon.damages.steel}</li>
            </ul>
            </div>
            <button><a href="/pokemons">Return to Pokedex</a></button>`)
        } else if (pokemon.type.length === 2) {
            res.send(`<button><a href="/pokemons">Return to Pokedex</a></button>
            <button><a href="/pokemons/:indexOfPokemonArray/edit">Edit Pokemon Information</a></button>
            <div class="pokemonData1"><img src = "${pokemon.img}" width="200" height="200">
            <h2>id# ${pokemon.id}</h2>
            <h1>${pokemon.name}</h1>
            <ul>
            <li>${pokemon.type[0]}</li>
            <li>${pokemon.type[1]}</li>
            <li>${pokemon.type[2]}</li>
            </ul>
            </div>
            <div class="pokemonStates">
            <h2>Stats</h2>
            <ul>
            <li>HP: ${pokemon.stats.hp}</li>
            <li>Attack: ${pokemon.stats.attack}</li>
            <li>Defense: ${pokemon.stats.defense}</li>
            <li>Spattack: ${pokemon.stats.spattack}</li>
            <li>Spdefense: ${pokemon.stats.spdefense}</li>
            <li>Speed: ${pokemon.stats.speed}</li>
            </ul>
            </div>
            <<div class="pokemonDemages">
            <h2>Damages</h2>
            <ul>
            <li>Normal: ${pokemon.damages.normal}</li>
            <li>Fire: ${pokemon.damages.fire}</li>
            <li>Water: ${pokemon.damages.water}</li>
            <li>Electric: ${pokemon.damages.electric}</li>
            <li>Grass: ${pokemon.damages.grass}</li>
            <li>Ice: ${pokemon.damages.ice}</li>
            <li>Fight: ${pokemon.damages.fight}</li>
            <li>Poison: ${pokemon.damages.poison}</li>
            <li>Ground: ${pokemon.damages.ground}</li>
            <li>Flying: ${pokemon.damages.flying}</li>
            <li>psychic: ${pokemon.damages.psychic}</li>
            <li>Bug: ${pokemon.damages.bug}</li>
            <li>Rock: ${pokemon.damages.rock}</li>
            <li>Ghost: ${pokemon.damages.ghost}</li>
            <li>Dragon: ${pokemon.damages.dragon}</li>
            <li>Dark: ${pokemon.damages.dark}</li>
            <li>Steel: ${pokemon.damages.steel}</li>
            </ul>
            </div>
            <button><a href="/pokemons">Return to Pokedex</a></button>`)
    };

});


// TELL OUR APP TO LISTEN ON PORT...
app.listen(port, ()=>{
    console.log(`listening on port `, port)
});