//////////////////////////////////// REQUIRE DEPENDENCIES ////////////////////////////////////
const express = require('express');
const pokemons = require('./models/pokemon.js');
// const methodOverride = require("method-override");


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

// app.use(express.urlencoded({ extended: false }));
// app.use(methodOverride("_method"))

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
// app.get("/fruits/:indexOfFruitsArray/edit", (req, res) =>{
//   res.render(
//     "edit.ejs",
//     {
//       fruit: fruits[req.params.indexOfFruitsArray],
//       index: req.params.indexOfFruitsArray
//     }
//   )
// });



// WE NEED THIS TO MAKE SURE THE EDIT IS EDITING NOT ADDING  //
// app.put("/fruits/:indexOfFruitsArray", (req, res) => {
//   //:indexOfFruitsArray is the index of our fruits array that we want to change
//   if (req.body.readyToEat === "on") {
//     //if checked, req.body.readyToEat is set to 'on'
//     req.body.readyToEat = true
//   } else {
//     //if not checked, req.body.readyToEat is undefined
//     req.body.readyToEat = false
//   }
//   fruits[req.params.indexOfFruitsArray] = req.body //in our fruits array, find the index that is specified in the url (:indexOfFruitsArray).  Set that element to the value of req.body (the input data)
//   res.redirect("/fruits") //redirect to the index page
// })


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
      res.render("pokemon_show.ejs", {
        pokemon: pokemons[req.params.indexOfPokemonArray]
    })
});

// TELL OUR APP TO LISTEN ON PORT...
app.listen(port, ()=>{
    console.log(`listening on port `, port)
});