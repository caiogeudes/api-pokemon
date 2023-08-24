const express = require('express');
const pokemon = require('./controladores/pokemon')
const rota = express();

rota.get('/pokemon', pokemon.exibirPokemons);
rota.get('/pokemon/:pagina', pokemon.pesquisarPorPagina);
rota.get('/pokemon/buscar/:busca', pokemon.buscarPokemon);

module.exports = rota;
