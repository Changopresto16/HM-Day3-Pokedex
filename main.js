
const form1 = document.getElementById('poke_dex')

form1.addEventListener('submit', (event) => {
    event.preventDefault();
    const pkName = event.path[0][0].value
    renderData(pkName)

})

const findPokemon = async (pkName) => {
    const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${pkName}`)
    const data = await res.json()
    console.log(data)
    return data
}

const renderData = async (pkName) => {
    const data = await findPokemon(pkName)
    console.log(data)
    const pokemon = [data]
    pokemon.map(catchPokemon)
}

const catchPokemon = (pokemon) => {
    const box = document.createElement('p')
    box.innerHTML = ` <div class="card" style="width: 18rem;">
    <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${pokemon.name}</p>
      <p class="card-text">${pokemon.abilities[0].ability.name}</p>
      <p class="card-text">${pokemon.abilities[1].ability.name}</p>
    </div>
  </div>`
    document.body.append(box)

}
