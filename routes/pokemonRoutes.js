const express = require("express");
const { test,catchPokemonByPokemonId, createPokemonStatus, getPokemonStates, getPokemonByPokemonId } = require("../controllers/pokemonControllers")
const router = express.Router();

router.get("/test", test)
router.get("/", getPokemonStates)
router.get("/pokemonid/:pokemon_id",getPokemonByPokemonId)
router.post("/", createPokemonStatus)
router.put("/catch/:pokemon_id",catchPokemonByPokemonId)
module.exports = router