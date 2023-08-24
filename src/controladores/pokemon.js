const { listarPokemons, detalharPokemon } = require('utils-playground');


const exibirPokemons = async (req, res) => {
    res.json(await listarPokemons());
}

const pesquisarPorPagina = async (req, res) => {
    const pagina = req.params.pagina;
    if (!pagina) {
        pagina = 1
    } else {
        res.json(await listarPokemons(pagina));
    }
}

const buscarPokemon = async (req, res) => {
    const busca = req.params.busca;
    const pokemon = await detalharPokemon(busca)
    res.status(200).json({
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        base_experience: pokemon.base_experience,
        forms: pokemon.forms,
        abilities: pokemon.abilities,
        species: pokemon.species
    });

}

module.exports = {
    exibirPokemons,
    pesquisarPorPagina,
    buscarPokemon
}